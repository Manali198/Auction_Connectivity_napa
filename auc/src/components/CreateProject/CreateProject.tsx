import React, {useState} from 'react';
import 'bootstrap-daterangepicker/daterangepicker.css';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap/dist/css/bootstrap.css';
import styles from './CreateProject.module.scss';
import Input from '../Input/Input';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

export default function CreateProject() {
    const [name, setName] = useState('');
  
    const [nameone, setNameone] = useState('');
    const [nametwo, setNametwo] = useState('');
    const [namefour, setNamefour] = useState('');
    const [namefive, setNamefive] = useState('');
    const [namesix, setNamesix] = useState('');
    const [namesevan, setNamesevan] = useState('');
    const [nameeight, setNameeight] = useState('');
    const [namenaine, setNamenaine] = useState('');
    const [nameten, setNameten] = useState('');


    // const [file, setFile] = useState(null);
   

   
  return (
    <>

        <div className={styles.CreateProject}>
            <div className={styles.CustomGridContainer}>
                <div className={`${styles.CreateGrner} ${styles.CreateGrnerFrst}`}>
                    <h4>General</h4>
                    <div className={styles.FrstInput}>
                        <Input
                            value={name}
                            type="text"
                            placeholder="Of Aliens & Men in Space"
                            label="Your Project's Name"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className={styles.FrstInput}>
                        <Input
                            value={nameone}
                            type="text"
                            placeholder="Ethereum, ETH"
                            label="What is your collection's blockchain?"
                            onChange={(e) => setNameone(e.target.value)}
                        />
                    </div>
                    <div className={styles.FrstInput}>
                        <Input
                            value={nametwo}
                            type="text"
                            placeholder="150"
                            label="How many NFT's will be in the collection?"
                            onChange={(e) => setNametwo(e.target.value)}
                        />
                    </div>
                </div>
                <div className={styles.CreateGrner}>
                    <h4>Your Project{"'"}s Sale Start Date </h4>
                    <div className={`${styles.sdffdsf} ${styles.FrstInputThrdaj} FrstInputThrdajPrnt`}>
                        <p>Date</p>
                        <div className="datepickerBox datepickerBoxpool">
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
                            <div className="datepiker_img_bx">
                                <img src='/img/calendar_icon.png' alt='' />
                            </div>
                        </div>
                        
                    </div>
                        <h5 className={styles.DefultPoolh5}>Is Your Project Communal?</h5>
                    <div className="radiopoolbox">
                        <div className="form-check frst_radio">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                            <label className="form-check-label" htmlFor="exampleRadios1">
                                Yes
                            </label>
                            </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                            <label className="form-check-label" htmlFor="exampleRadios2">
                                No
                            </label>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>  
        <div className={styles.CreateProject}>
            <div className={styles.CustomGridContainer}>
                <div className={styles.CreateGrner}>
                    <h4>Members</h4>
                    <div className={`${styles.FrstInput} ${styles.FrstInputSmall}`}>
                        <Input
                            value={namefour}
                            type="text"
                            placeholder="alice.wilson@gmail.com"
                            label="Member 1"
                            onChange={(e) => setNamefour(e.target.value)}
                        />
                    </div>
                    <div className={`${styles.FrstInput} ${styles.FrstInputsecnd}`}>
                        <Input
                            value={namefive}
                            type="text"
                            placeholder="john.ridley@gmail.com"
                            label="Member 2"
                            onChange={(e) => setNamefive(e.target.value)}
                        />
                        <button>
                            <Image src='/img/project_cret_ic.png' alt='' width="24px" height="24px" />
                        </button>
                    </div>
                    <div className={`${styles.FrstInput} ${styles.FrstInputsecnd}`}>
                        <Input
                            value={namesix}
                            type="text"
                            placeholder="lea.thompson@gmail.com"
                            label="Member 3"
                            onChange={(e) => setNamesix(e.target.value)}
                        />
                        <button>
                            <Image src='/img/project_cret_ic.png' alt='' width="24px" height="24px" />
                        </button>
                    </div>
                    <div className={styles.AddMoreBtn}>
                        <button>
                            <Image src="/img/plus_ic.png" alt="" width={24} height={24} />
                            Add More
                        </button>
                    </div>
                </div>
                <div className={styles. CreateGrner}>
                    <h4>Links</h4>
                    <div className={styles.FrstInput}>
                        <Input
                            value={namesevan}
                            type="text"
                            placeholder="www.of-aliens-and-men.com/"
                            label="Website"
                            onChange={(e) => setNamesevan(e.target.value)}
                        />
                    </div>
                    <div className={styles.FrstInput}>
                        <Input
                            value={nameeight}
                            type="text"
                            placeholder="www.github.com/of-aliens-and-men"
                            label="Github"
                            onChange={(e) => setNameeight(e.target.value)}
                        />
                    </div>
                    <div className={styles.FrstInput}>
                        <Input
                            value={namenaine}
                            type="text"
                            placeholder="www.opensea.io/collection/of-aliens-and-men"
                            label="Previous NFT Projects"
                            onChange={(e) => setNamenaine(e.target.value)}
                        />
                    </div>
                </div>
            </div>          
        </div>
        <div className={styles.CreateProject}>
        <h4>Other</h4>
            <div className={styles.CustomGridContainer}>
                <div className={styles.CreateGrner}>
                  
                    <div className={styles.TextArea}>
                        <p>Short description about project</p> 
                        <textarea></textarea>
                    </div>
                    <div className={styles.FrstInput}>
                        <Input
                            value={namenaine}
                            type="text"
                            placeholder="www.opensea.io/collection/of-aliens-and-men"
                            label="Hard Cap"
                            onChange={(e) => setNamenaine(e.target.value)}
                        />
                    </div>
                    <div className={styles.FrstInput}>
                        <Input
                            value={nameten}
                            type="text"
                            placeholder="www.whitepaper.com/a87dfb6d"
                            label="Link to Whitepaper"
                            onChange={(e) => setNameten(e.target.value)}
                        />
                    </div>
                </div>
                <div className={`${styles.CreateGrner} ${styles.CreateGrnerSecand}`}>
                    <div className={styles.TextArea}>
                        <p>How will your project improve the NFT community?</p> 
                        <textarea></textarea>
                    </div>
                    <div className={styles.FrstInput}>
                        <Input
                            value={namenaine}
                            type="text"
                            placeholder="www.opensea.io/collection/of-aliens-and-men"
                            label="Soft Cap"
                            onChange={(e) => setNamenaine(e.target.value)}
                        />
                    </div>
                    <div className={styles.FrstInput}>
                        {/* <Input
                            value={name}
                            type="text"
                            placeholder="www.whitepaper.com/a87dfb6d"
                            label="Link to Whitepaper"
                            onChange={(e) => setName(e.target.value)}
                        /> */}
                    </div>
                </div>
            </div>
            <div className={styles.linkPrnt}>
                <Link href="createproject"><a>Submit</a></Link>
            </div>
        </div>
        
    </>
  )
}
