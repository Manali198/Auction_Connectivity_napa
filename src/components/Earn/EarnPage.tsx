import Container from '../../Layout/Container/Container';
import Footer from '../Footer/Footer';
import styles from './Earn.module.scss';
import Image from 'next/image';
import { ErrorIcon, NapaIcon } from '../assets';
// import SearchIconV2 from '../assets';
import Button from '../../components/Button/Button';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import Link from 'next/link';
// you will need the css that comes with bootstrap@3. if you are using
// a tool like webpack, you can do the following:
import 'bootstrap/dist/css/bootstrap.css';
// you will also need the css that comes with bootstrap-daterangepicker
import 'bootstrap-daterangepicker/daterangepicker.css';

import { originalNapaStakingContract, originalNapaTokenContract } from '@/connectivity/contractObjects/contractObject1';
import { balanceOf, approve } from '@/connectivity/callHelpers/napaTokenCallHandlers';
import { UnstakeTokens, checkReward, UserPlanDetails, pendingRewards, stakeTokens } from '@/connectivity/callHelpers/napaStakeCallHandlers';
import { originalNapaStakingAddress } from '@/connectivity/addressHelpers/addressHelper';
import useWebThree from '@/hooks/useWebThree';
import { toast } from 'react-toastify';
import { CustomToastWithLink } from '../CustomToast/CustomToast';
import { createNewStaking, getStakingTransactions } from '@/services/Staking';
import useProfile from '@/hooks/useProfile';
import { StakingResponse } from '@/types/staking';
import { STAKING_WEBSOCKET_URL } from '../../constants/url';
import { FadeLoader } from 'react-spinners';
import { createNewClaimTransaction } from '@/services/ClaimTransactionsApi';

export default function EarnPage() {
  // const [_ethFee, setEthFee] = useState<string>("0")
  // const [ethBal, setEthBal] = useState<any>();
  const [stakePlan, setStakePlan] = useState<any>('');
  const [stakeAmt, setStakeAmt] = useState<any>('');
  const [loading, setLoading] = useState(false)
  const [stakings, setStakings] = useState<StakingResponse[] | null>()
  const { profileDetails } = useProfile()  
  const stakingSocket = new WebSocket(STAKING_WEBSOCKET_URL);
  const [unstakeLoading, setUnstakeLoading] = useState(false)
  const [currentIndex, setCurrentIndex] = useState<number>(-1)
  const [getTxnLoading, setGetTxnLoading] = useState(false)  

  const { address, chainId, signer } = useWebThree();
  console.log(address, chainId, "acc details")
  const decimals = 10 ** 18;

  // const onAmountChange = (e: any) => {
  //   const amount = e.target.value;

  //   if (!amount || amount.match(/^\d{1,}(\.\d{0,4})?$/)) {
  //     setLock(amount);
  //   }
  // };


  //staking/unstaking connectivity start
  const amtHandler = (e: any) => {
    if (/^\d{0,9}(?:\.\d{0,8})?$/.test(e.target.value)){
      setStakeAmt(e.target.value);
    }
    if (stakeAmt > 0) {
      // setStakeBtnStyle("btn btn-outline-success");
    }
    else {
      // setStakeBtnStyle("btn btn-outline-success disabled");
    }
  }

  const changePlan = (plan: number) => {
    setStakePlan(plan);
    if (stakeAmt > 0) {
      // setStakeBtnStyle("btn btn-outline-success");
    }
    else {
      // setStakeBtnStyle("btn btn-outline-success disabled");
    }
  }

  // @ts-ignore
  const handleStake = async () => {
    const stakedPlans = stakings?.length ? stakings.map((stake)=>stake.lockDuration) : []    
    const planToStake = stakePlan == 1 ? "30" : stakePlan == 2 ? "60" : stakePlan == 3 ? "90" : "120"
    if(stakedPlans.includes(planToStake))
    {
      return (
        toast.error(
          CustomToastWithLink({
            icon: ErrorIcon,
            title: 'Error',
            description: 'This account has already staked for this plan',
            time: 'Now',
          })
        )
      )
    }
    const oriNapaTokenCtr = await originalNapaTokenContract(signer);
    const oriNapaStakeCtr = await originalNapaStakingContract(signer);

    const amount = Number(stakeAmt);

    let plan = 0;
    if (stakePlan == 1) {
      plan = 30;
    } else if (stakePlan == 2) {
      plan = 60;
    } else if (stakePlan == 3) {
      plan = 90;
    } else if (stakePlan == 4) {
      plan = 120;
    } else {
      toast.error(
        CustomToastWithLink({
          icon: ErrorIcon,
          title: 'Error',
          description: 'Invalid Plan',
          time: 'Now',
        })
      );
      throw (() => {
        console.log("Invalid Plan");
      })
    }

    const userDeposit = await UserPlanDetails(oriNapaStakeCtr, address, plan);
    const userStakedAmt = userDeposit[1].toString();
    if (userStakedAmt > 0) {       
      toast.error(
        CustomToastWithLink({
          icon: ErrorIcon,
          title: 'Staking Error',
          description: 'This account has already staked for this plan',
          time: 'Now',
        })
      );
    }
    // console.log((await checkReward(oriNapaStakeCtr, 30)).toString(), "Your Rewards");

    const amtInWei = amount * decimals;
    //1. check if user have enough balance or not
    const userBal: Promise<number> = await balanceOf(oriNapaTokenCtr, address);
    console.log(stakeAmt, "stakeAmt")


    if ((await userBal / decimals) > amount && await userBal > 0 && userStakedAmt <= 0 && Number(stakeAmt) > 0) {
      setLoading(true)
      //2. user gives allowance to staking 
      await approve(oriNapaTokenCtr, originalNapaStakingAddress, amtInWei.toString()).then(async (res) => {
        console.log("Hang on Transaction is in progress...");
        await res.wait();
        console.log(await res.wait(), "stake approval response");
        //3. after approval to stake contract actual staking will happen down here
        if (stakePlan == 1) {
          await stakeTokens(oriNapaStakeCtr, amtInWei.toString(), 30).then(async (res) => {
            console.log("Hang on Transaction is in progress...");
            const response = await res.wait();
            console.log(response, "success response from staking");
            handleNewStaking(response.transactionHash)
          }).catch((e) => {
            setLoading(false)
            toast.error(
              CustomToastWithLink({
                icon: ErrorIcon,
                title: 'Error',
                description: 'user rejected transaction',
                time: 'Now',
              })
            );
            console.log(e, "error in stake token 30 days")
          })
        } else if (stakePlan == 2) {
          await stakeTokens(oriNapaStakeCtr, amtInWei.toString(), 60).then(async (res) => {
            console.log("Hang on Transaction is in progress...");
            const response = await res.wait();
            console.log(response, "success response from staking");
            handleNewStaking(response.transactionHash)
          }).catch((e) => {
            setLoading(false)
            toast.error(
              CustomToastWithLink({
                icon: ErrorIcon,
                title: 'Error',
                description: 'user rejected transaction',
                time: 'Now',
              })
            );
            console.log(e, "error in stake token 60 days")
          })
        } else if (stakePlan == 3) {
          await stakeTokens(oriNapaStakeCtr, amtInWei.toString(), 90).then(async (res) => {
            console.log("Hang on Transaction is in progress...");
            const response = await res.wait();
            console.log(response, "success response from staking");
            handleNewStaking(response.transactionHash)
            console.log(await res.wait(), "success response from staking");
          }).catch((e) => {
            setLoading(false)
            toast.error(
              CustomToastWithLink({
                icon: ErrorIcon,
                title: 'Error',
                description: 'user rejected transaction',
                time: 'Now',
              })
            );
            console.log(e, "error in stake token 90 days")
          })
        } else if (stakePlan == 4) {
          await stakeTokens(oriNapaStakeCtr, amtInWei.toString(), 120).then(async (res) => {
            const response = await res.wait();
            console.log(response, "success response from staking");
            handleNewStaking(response.transactionHash)
            console.log(await res.wait(), "success response from staking");
          }).catch((e) => {
            setLoading(false)
            console.log(e, "error in stake token 120 days")
          })
        } else {
          setLoading(false)
          console.log("selected wrong plan");
        }
      }).catch((e) => {
        setLoading(false)
        toast.error(
          CustomToastWithLink({
            icon: ErrorIcon,
            title: 'Error',
            description: 'user rejected transaction',
            time: 'Now',
          })
        );
        console.log(e, "error in approval of stake contract");
      })
    } else {
      if (Number(stakeAmt) <= 0) {
        toast.error(
          CustomToastWithLink({
            icon: ErrorIcon,
            title: 'Error',
            description: 'please enter some amount',
            time: 'Now',
          })
        );
        console.log(`please enter some amount`);
        return
      }
      if (userStakedAmt > 0) {
        console.log(`you already have ${userStakedAmt / decimals} token stake`);
      }
      if ((await userBal / decimals) < amount && await userBal <= 0) {
        console.log("you do not have enough tokens to stake", (await userBal).toString());
      }
    }
  }

  const handleUnStake = async (transaction: StakingResponse, index: number) => {
    setCurrentIndex(index)
    setUnstakeLoading(true)
    // if(!isTimerExpired(timestamp))
    // {
    //   return
    // }
    const oriNapaStakeCtr = await originalNapaStakingContract(signer);

    let plan = 0;
    if (transaction?.lockDuration == "30") {
      plan = 30;
    } else if (transaction?.lockDuration == "60") {
      plan = 60;
    } else if (transaction?.lockDuration == "90") {
      plan = 90;
    } else if (transaction?.lockDuration == "120") {
      plan = 120;
    } else {
      setCurrentIndex(-1)
      setUnstakeLoading(false)
      toast.error(
        CustomToastWithLink({
          icon: ErrorIcon,
          title: 'Error',
          description: 'Invalid Plan',
          time: 'Now',
        })
      );
      throw (() => {
        console.log("Invalid Plan");
      })
    }

    const _userDeposit = await UserPlanDetails(oriNapaStakeCtr, address, plan);
    const userStakedAmt = _userDeposit[1].toString();
    console.log(_userDeposit[0].toString(), "userStakedAmt plan");
    console.log(_userDeposit[1].toString(), "userStakedAmt amount");
    console.log(_userDeposit[2].toString(), "userStakedAmt startime");
    console.log(_userDeposit[3].toString(), "userStakedAmt endtime");
    console.log(_userDeposit[4].toString(), "userStakedAmt last claimtime");
    console.log((await checkReward(oriNapaStakeCtr, plan)).toString(), "Your Rewards");

    const rewardsEarned = (Number((await checkReward(oriNapaStakeCtr, plan)).toString())/decimals).toFixed(8)
    console.log("rewardsearned===>",rewardsEarned);
    

    const date = new Date(Number((_userDeposit[3].toString()) * 1000));
    var currentUnix = Math.round(+new Date() / 1000);

    if (Number(userStakedAmt.toString()) <= 0) {
      setCurrentIndex(-1)
      setUnstakeLoading(false)
      toast.error(
        CustomToastWithLink({
          icon: ErrorIcon,
          title: 'Error',
          description: "you don't have any tokens staked yet for this plan",
          time: 'Now',
        })
      );
      console.log("you don't have any tokens staked yet");
      return;
    } else if (Number(_userDeposit[3].toString()) > currentUnix) {
      setCurrentIndex(-1)
      setUnstakeLoading(false)
      toast.error(
        CustomToastWithLink({
          icon: ErrorIcon,
          title: 'Error',
          description: `Tokens are locked, you can't unstake now, wait till ${date}`,
          time: 'Now',
        })
      );
      console.log("Tokens are locked, you can't unstake now");
      return;
    } else if (Number(_userDeposit[3].toString()) < Number(currentUnix)) {
      const treasuryToStakeCtrAllowance = await pendingRewards(oriNapaStakeCtr);
      if (treasuryToStakeCtrAllowance > 0) {
        await UnstakeTokens(oriNapaStakeCtr, plan).then(async (res: any) => {
          console.log("transaction for Unstake is in progress have patience...");
          const response = await res.wait();
          console.log(response, "Unstaked");
          handleClaimTransaction(transaction,response.transactionHash, rewardsEarned)
        }).catch((e: any) => {
          setCurrentIndex(-1)
          setUnstakeLoading(false)
          toast.error(
            CustomToastWithLink({
              icon: ErrorIcon,
              title: 'Error',
              description: 'Error While Unstaking',
              time: 'Now',
            })
          );
          console.log(e, "Error While Unstaking");
        });
      } else {
        setCurrentIndex(-1)
        setUnstakeLoading(false)
        toast.error(
          CustomToastWithLink({
            icon: ErrorIcon,
            title: 'Error',
            description: `Not Enough Pending Rewards: admin hasn't added reawrds yet`,
            time: 'Now',
          })
        );
        console.log("Not Enough Pending Rewards: admin hasn't added reawrds yet");
      }
    }
  }  

  const handleNewStaking = async (txId: string) => {
    const data = {
    profileId: profileDetails.profileId,
    accountNumber: profileDetails.metamaskAccountNumber || "",
    profileName: profileDetails.profileName,
    stakingPeriod: moment(new Date()).add(1,'day').format("YYYY-MM-DDTHH:mm:ssZ"),
    lockDuration: stakePlan == 1 ? "30" : stakePlan == 2 ? "60" : stakePlan == 3 ? "90" : "120",
    amountStaked: stakeAmt.toString(),
    apy: stakePlan == 1 ? "10%" : stakePlan == 2 ? "12.79%" : stakePlan == 3 ? "17.29%" : "22.18%",
    maturityDate: '',
    amountAccruedTD: '',
    amountAccruedDaily: '',
    redeemed: 'false',
    lockedTxID: txId ? txId : "",
    }

    const { error, message }: any = await createNewStaking(data);
    if (error) {
      setLoading(false);
      toast.error(
        CustomToastWithLink({
          icon: ErrorIcon,
          title: 'Error',
          description: message,
          time: 'Now',
        })
      );
      return;
    }
    setStakePlan('')
    setStakeAmt('')
    setLoading(false)
  };

  const handleClaimTransaction = async (transaction:StakingResponse, txId: string, rewardsEarned: string) => {
    const data = {
      stakingTransactionUUID: transaction?.stakingTransactionUUID,
      profileId: transaction?.profileId,
      accountNumber: transaction?.accountNumber,
      profileName: transaction?.profileName,
      stakingPeriod: transaction?.stakingPeriod,
      amountClaimed: transaction?.amountStaked,
      apy: transaction?.apy,
      maturityDate: transaction?.maturityDate,
      redeemed: "true",
      lockedTxID: txId ? txId : '',
      rewardsEarned: rewardsEarned
    }

    const { error, message }: any = await createNewClaimTransaction(data);
    if (error) {
      setCurrentIndex(-1)
      setUnstakeLoading(false)
      toast.error(
        CustomToastWithLink({
          icon: ErrorIcon,
          title: 'Error',
          description: message,
          time: 'Now',
        })
      );
      return;
    }
    setCurrentIndex(-1)
    setUnstakeLoading(false)
  };

  const handleGetStakings = async () => {
    setGetTxnLoading(true);
    const { data }: any = await getStakingTransactions(profileDetails.profileId);
    setStakings(data?.data || []);
    setGetTxnLoading(false);
  };

  const handleNewStakingTransaction = (transaction: StakingResponse) => {
    if (stakings?.length == 0) {
      setStakings([transaction]);
    } else {
      // @ts-ignore
      setStakings((prev: any) => [transaction, ...prev]);
    }
  };

  const handleStakingAwardsUpdate = (transaction: any) => {
    if (transaction.stakingTransactionUUID) {
      setStakings((prev) => {
        const temp = prev ? prev : [];
        const index = temp.findIndex(
          (c) => c.stakingTransactionUUID == transaction.stakingTransactionUUID
        );
        if (index > -1) {
          // @ts-ignore
            temp[index].rewardsEarned = transaction.rewardsEarned;
        }
        return temp;
      });
    }
  }

  const isTimerExpired = (timestamp: any) => {
    const postEndTime = moment(timestamp).format();
    const countDownTime = new Date(postEndTime).getTime();
    const duration = countDownTime - new Date().getTime();
    // if (duration < 0) {
    //   toast.error(
    //     CustomToastWithLink({
    //       icon: ErrorIcon,
    //       title: 'SNFT Live Time Has Expired',
    //       description: 'You cannot claim award before lock duration',
    //       time: 'Now',
    //     })
    //   );
    // }
    return duration < 0 ? true : false;
  };

  useEffect(() => {
    if(profileDetails?.profileId)
    {
      handleGetStakings()
    }
  }, [profileDetails])

  useEffect(() => {
    // @ts-ignore
    stakingSocket.addEventListener('message', ({ data }) => {
      const response = JSON.parse(data);
      if (response?.event === 'new-staking-transaction') {
        handleNewStakingTransaction(response.transaction);
      } else if (response?.event === 'staking-rewards-earned') {
        handleStakingAwardsUpdate(response.transaction);
      }
    });
    return () => {
      stakingSocket.removeEventListener('message', () => {});
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getNextDate = () => {
    const currentDate = new Date();
    const timestamp = currentDate.getTime();
    const nextDayTimestamp = timestamp + (24 * 60 * 60 * 1000);
    const nextDate = new Date(nextDayTimestamp);
    return moment(nextDate).format('LL')
  }

  const getDailyApy = () => {
    if(stakeAmt && stakePlan)
    {
      const apy = stakePlan == 1 ? "10%" : stakePlan == 2 ? "12.79%" : stakePlan == 3 ? "17.29%" : "22.18%"
      const lockDuration = stakePlan == 1 ? "30" : stakePlan == 2 ? "60" : stakePlan == 3 ? "90" : "120"
      return ((Number(apy.split("%")[0])/100)/Number(lockDuration)).toFixed(8)+"%"
    }
    else {
      return false
    }
  }

  const getRewards = () => {
    const apy = stakePlan == 1 ? 10/100 : stakePlan == 2 ? 12.79/100 : stakePlan == 3 ? 17.29/100 : 22.18/100
    return (stakeAmt * apy).toFixed(8)
  }
  
  //staking/unstaking connectivity ends

  return (
    <div className={`${styles.container}`}>
      <Container className={`${styles.settingsContainer} asinnerContainer`}>
        <h1 className={styles.settings}>Staking</h1>
        <div className={styles.tabsContainer}>
          <div className="row align-items-center">
            <div className="col-lg-6 col-lg-6-rspnsv">
              <div className={styles.max540}>
                <div className={styles.TopLogo}>
                  <Image src={NapaIcon} alt="NapaIcon" width={48} height={48} />
                  <h4>
                    NAPA Token | <Link href="https://etherscan.io/token/0x8eb2df7137fb778a6387e84f17b80cc82cf9e884"> Etherscan </Link>
                    | Price $0.05 24h Chg +24%
                  </h4>
                </div>
                <div className={styles.MiddleCont}>
                  <label>Lock Amount</label>
                  <div className={styles.MiddleContInn}>
                    {/* <h3>0.48</h3> */}
                    <input
                      type="text"
                      value={stakeAmt}
                      disabled={loading}
                      placeholder="0.00"
                      onChange={amtHandler}
                    // onClick={call}
                    />
                    <span />
                    <p>NAPA</p>
                  </div>
                </div>
                <div className={styles.BottomCont}>
                  <label>Lock Period</label><span>{<span style={{color: '#91a5a6'}}>Plan Selected - {stakePlan == 0 ? "not selected" : stakePlan == 1 ? "30 days" : stakePlan == 2 ? "60 days" : stakePlan == 3 ? "90 days" : stakePlan == 4 ? "120 days" : null}</span>}</span>
                  <ul>
                    <li>
                      <input disabled={loading} checked={stakePlan == 1} type="radio" name="lock-amout" id="amountOne" onClick={() => changePlan(1)} />
                      <p>30 Days</p>
                    </li>
                    <li>
                      <input disabled={loading} checked={stakePlan == 2} type="radio" name="lock-amout" id="amountOne" onClick={() => changePlan(2)} />
                      <p>60 Days</p>
                    </li>
                    <li>
                      <input disabled={loading} checked={stakePlan == 3} type="radio" name="lock-amout" id="amountOne" onClick={() => changePlan(3)} />
                      <p>90 Days</p>
                    </li>
                    <li>
                      <input disabled={loading} checked={stakePlan == 4} type="radio" name="lock-amout" id="amountOne" onClick={() => changePlan(4)} />
                      <p>120 Days</p>
                    </li>
                  </ul>
                </div>
                <div className={styles.BottomAction}>
                  {
                    loading ? (
                      <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
                        <FadeLoader color="#ffffff" />
                    </div>
                    ) : (
                      <Button text="Lock" onClick={()=> !loading && !getTxnLoading && handleStake()} outlined />
                    )
                  }
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={`${styles.EarnRightBox} ${styles.max540}`}>
                <h4>Staking Summary</h4>
                <div className={styles.EarnRightBoxInner}>
                  <p>Lock Start Date</p>
                  <span>{stakeAmt && stakePlan ? moment(new Date()).format('LL') : "--"}</span>
                </div>
                <div className={styles.EarnRightBoxInner}>
                  <p>Interest Start Period</p>
                  <span>{stakeAmt && stakePlan ? getNextDate() : "--"}</span>
                </div>
                <div className={styles.EarnRightBoxInner}>
                  <p>Amount Locked</p>
                  <span className={styles.EarnRightBoxSpan}>
                    {/* <Image src={NapaIconv2} alt="" width={17} height={13} /> */}
                    {stakeAmt && stakePlan ? stakeAmt : "--"}
                  </span>
                </div>
                <div className={styles.EarnRightBoxInner}>
                  <p>Lock Duration</p>
                  <span>{stakeAmt && stakePlan ? (stakePlan == 1 ? "30" : stakePlan == 2 ? "60" : stakePlan == 3 ? "90" : "120") : "--"}</span>
                </div>
                <div className={styles.EarnRightBoxInner}>
                  <p>APY</p>
                  <span>{stakeAmt && stakePlan ? (stakePlan == 1 ? "10%" : stakePlan == 2 ? "12.79%" : stakePlan == 3 ? "17.29%" : "22.18%"): "--"}</span>
                </div>
                <div className={styles.EarnRightBoxInner}>
                  <p>Daily APY</p>
                  <span>{stakeAmt && stakePlan ? getDailyApy() : "--"}</span>
                </div>
                <div className={styles.EarnRightBoxInner}>
                  <p>Rewards Earned</p>
                  <span>{stakeAmt && stakePlan ? getRewards() : "--"}</span>
                </div>
              </div>
            </div>
            <div className="col-lg-12 ">
              <div className={styles.MainTable}>
                <h4>Staked Holdings</h4>
                <div className={styles.RightTableSc}>
                  <div className="datepickerBox">
                    <DateRangePicker
                      initialSettings={{
                        singleDatePicker: true,
                        showDropdowns: true,
                        maxYear: parseInt(moment().format('YYYY'), 10),
                        opens: 'left',
                      }}
                    >
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Start Date"
                      />
                    </DateRangePicker>
                  </div>
                  <div className="datepickerBox">
                    <DateRangePicker
                      initialSettings={{
                        singleDatePicker: true,
                        showDropdowns: true,
                        maxYear: parseInt(moment().format('YYYY'), 10),
                        opens: 'left',
                      }}
                    >
                      <input
                        type="text"
                        className="form-control"
                        placeholder="End Date"
                      />
                    </DateRangePicker>
                  </div>
                  <button className={styles.SearchButton}>
                    {/* <Image src={SearchIconV2} alt="" width={24} height={24} /> */}
                  </button>
                </div>
              </div>
              {
                (getTxnLoading || stakings?.length == 0) ? (
                  <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
                    {
                      getTxnLoading ? (
                        <FadeLoader color="#ffffff" />
                      ) : (
                        <p className={styles.notFound}>No Record Found</p>
                      )
                    }
                  </div>
                ) : (
                  <div className={styles.MainTableTable}>
                  <div className={styles.TableHead}>
                    <h4>Lock Start Date</h4>
                    <h4>Interest Start Period</h4>
                    <h4>Amount Locked</h4>
                    <h4>Lock Duration</h4>
                    <h4>APY</h4>
                    <h4>Daily APY</h4>
                    <h4>Earned Rewards</h4>
                    <h4></h4>
                  </div>
                  <div className={styles.TableRowMain}>
                    {
                      stakings?.map((staking, index)=>{
                        return (
                          <div key={staking.stakingTransactionUUID} className={styles.TableRow}>
                          <h4>
                            {moment(staking.lockStartDate).format('LL')}
                          </h4>
                          <h4>
                            {staking.stakingPeriod == "fixed" ? "fixed" : moment(staking.stakingPeriod).format('LL')}
                          </h4>
                          <h4>
                            {staking.amountStaked}
                            <div>
                              {/* <Image src={NapaIconv2} alt="" width={17} height={13} />{' '}
                              20.01 */}
                            </div>
                          </h4>
                          <h4>
                           {`${staking.lockDuration} Days`}
                          </h4>
                          <h4>
                           {staking.apy}
                          </h4>
                          <h4>
                            {staking.dailyApy}
                          </h4>
                          <h4>
                            {staking.rewardsEarned ? staking.rewardsEarned : '--'}
                          </h4>
                          <h4>
                            <label>&nbsp;</label>
                            {
                              currentIndex == index && unstakeLoading ? (
                                <div style={{width:"100%", display:"flex", justifyContent:"flex-end"}}>
                                  <FadeLoader color="#ffffff" />
                                </div>
                              ) : (
                                isTimerExpired(staking.lockEndDate) ? (
                                  <button className={styles.ClaimBtn} onClick={()=>!staking.rewardsEarned && handleUnStake(staking, index)}>{staking.rewardsEarned ? "Claimed" : "Claim"}</button>
                                ) : null
                              )
                            }
                          </h4>
                        </div>
                        )
                      })
                    }
                    {/* <div className={styles.TableRow}>
                      <h4>
                        <label>Lock Start Date</label>
                        12 Mar 2022
                      </h4>
                      <h4>
                        <label>Interest Period</label>1 month
                      </h4>
                      <h4>
                        <label>Amount Locked</label>
                        <div>
                          <Image src={NapaIconv2} alt="" width={17} height={13} />{' '}
                          20.01
                        </div>
                      </h4>
                      <h4>
                        <label>Lock Duration</label>2 months
                      </h4>
                      <h4>
                        <label>APY</label>
                        9.45%
                      </h4>
                      <h4>
                        <label>Daily APY</label>
                        5.4%
                      </h4>
                      <h4>
                        <label>Redeem Rewards</label>
                        2.450.00
                      </h4>
                      <h4>
                        <label>&nbsp;</label>
                        <button className={styles.ClaimBtn}>Claim</button>
                      </h4>
                    </div> */}
                    {/* <div className={styles.TableRow}>
                      <h4>
                        <label>Lock Start Date</label>
                        12 Mar 2022
                      </h4>
                      <h4>
                        <label>Interest Period</label>1 month
                      </h4>
                      <h4>
                        <label>Amount Locked</label>
                        <div>
                          <Image src={NapaIconv2} alt="" width={17} height={13} />{' '}
                          20.01
                        </div>
                      </h4>
                      <h4>
                        <label>Lock Duration</label>2 months
                      </h4>
                      <h4>
                        <label>APY</label>
                        9.45%
                      </h4>
                      <h4>
                        <label>Daily APY</label>
                        5.4%
                      </h4>
                      <h4>
                        <label>Redeem Rewards</label>
                        2.450.00
                      </h4>
                      <h4>
                        <label>&nbsp;</label>
                        <button className={styles.ClaimBtn}>Claim</button>
                      </h4>
                    </div> */}
                    {/* <div className={styles.TableRow}>
                      <h4>
                        <label>Lock Start Date</label>
                        12 Mar 2022
                      </h4>
                      <h4>
                        <label>Interest Period</label>1 month
                      </h4>
                      <h4>
                        <label>Amount Locked</label>
                        <div>
                          <Image src={NapaIconv2} alt="" width={17} height={13} />{' '}
                          20.01
                        </div>
                      </h4>
                      <h4>
                        <label>Lock Duration</label>2 months
                      </h4>
                      <h4>
                        <label>APY</label>
                        9.45%
                      </h4>
                      <h4>
                        <label>Daily APY</label>
                        5.4%
                      </h4>
                      <h4>
                        <label>Redeem Rewards</label>
                        2.450.00
                      </h4>
                      <h4>
                        <label>&nbsp;</label>
                        <button className={styles.ClaimBtn}>Claim</button>
                      </h4>
                    </div> */}
                    {/* <div className={styles.TableRow}>
                      <h4>
                        <label>Lock Start Date</label>
                        12 Mar 2022
                      </h4>
                      <h4>
                        <label>Interest Period</label>1 month
                      </h4>
                      <h4>
                        <label>Amount Locked</label>
                        <div>
                          <Image src={NapaIconv2} alt="" width={17} height={13} />{' '}
                          20.01
                        </div>
                      </h4>
                      <h4>
                        <label>Lock Duration</label>2 months
                      </h4>
                      <h4>
                        <label>APY</label>
                        9.45%
                      </h4>
                      <h4>
                        <label>Daily APY</label>
                        5.4%
                      </h4>
                      <h4>
                        <label>Redeem Rewards</label>
                        2.450.00
                      </h4>
                      <h4>
                        <label>&nbsp;</label>
                        <button className={styles.ClaimBtn}>Claim</button>
                      </h4>
                    </div> */}
                    {/* <div className={styles.TableRow}>
                      <h4>
                        <label>Lock Start Date</label>
                        12 Mar 2022
                      </h4>
                      <h4>
                        <label>Interest Period</label>1 month
                      </h4>
                      <h4>
                        <label>Amount Locked</label>
                        <div>
                          <Image src={NapaIconv2} alt="" width={17} height={13} />{' '}
                          20.01
                        </div>
                      </h4>
                      <h4>
                        <label>Lock Duration</label>2 months
                      </h4>
                      <h4>
                        <label>APY</label>
                        9.45%
                      </h4>
                      <h4>
                        <label>Daily APY</label>
                        5.4%
                      </h4>
                      <h4>
                        <label>Redeem Rewards</label>
                        2.450.00
                      </h4>
                      <h4>
                        <label>&nbsp;</label>
                        <button className={styles.ClaimBtn}>Claim</button>
                      </h4>
                    </div> */}
                    {/* <div className={styles.TableRow}>
                      <h4>
                        <label>Lock Start Date</label>
                        12 Mar 2022
                      </h4>
                      <h4>
                        <label>Interest Period</label>1 month
                      </h4>
                      <h4>
                        <label>Amount Locked</label>
                        <div>
                          <Image src={NapaIconv2} alt="" width={17} height={13} />{' '}
                          20.01
                        </div>
                      </h4>
                      <h4>
                        <label>Lock Duration</label>2 months
                      </h4>
                      <h4>
                        <label>APY</label>
                        9.45%
                      </h4>
                      <h4>
                        <label>Daily APY</label>
                        5.4%
                      </h4>
                      <h4>
                        <label>Redeem Rewards</label>
                        2.450.00
                      </h4>
                      <h4>
                        <label>&nbsp;</label>
                        <button className={styles.ClaimBtn}>Claim</button>
                      </h4>
                    </div> */}
                  </div>
                </div>
                )
              }
            </div>
          </div>
        </div>
      </Container>
      <div>
        <hr />
        <Footer footerIconShow={false} />
      </div>
    </div>
  );
}
