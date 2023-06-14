import React from 'react';
import Select from 'react-select';
import 'bootstrap-daterangepicker/daterangepicker.css';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap/dist/css/bootstrap.css';
import moment from 'moment';
import styles from './CoBetchingPools.module.scss';
import CoBatchingPoolsPool from '../CoBatchingPool/CoBatchingPool';
// import CoBatchingPoolTwo from '../CoBatchingPoolTwo/CoBatchingPoolTwo';
// import CoBatchingPoolThree from '../CoBatchingPoolThree/CoBatchingPoolThree';
// import CoBatchingPoolFour from '../CoBatchingPoolFour/CoBatchingPoolFour';
import Link from 'next/link';

export default function CoBetchingPools() {
   
      const optionsthree = [
        { value: '1', label: '20%' },
        { value: '2', label: '50%' },
        { value: '3', label: '100%' },
      ];
   
    //   const [active, setActive] = React.useState(false);
    //   const handleClick = () => {
    //     setActive(!active);
    //   };
  return (
    <>
       
            <div className={styles.tipandtotolmain}>
                <div>
                    <ul className="nav nav-tabs poolt_teb_prnt" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">My Pools</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"> Member Pools</button>
                        </li>
                    </ul>
                </div>                
                <div className="select_main select_main_ab">
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
                    <Select
                        options={optionsthree}
                        // menuIsOpen={true}
                        className="select_pernt slctrspnsv"
                        placeholder="Contribute (from low)"
                        classNamePrefix="cntrslct"
                    />
                </div>
               
                <div className={styles.buttonperntAj}>
                   <button className={styles.buttocreateBtn}><Link href='/create-new-pool'><a >Create New Pool</a></Link></button>
                </div>
            </div>
            <div className="tab-content my-batching" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div className={styles.GridprntAbOvrliy}>
                        <div className={styles.GridprntAb}>
                            <div className={styles.GridprntAbPaading}><CoBatchingPoolsPool /></div>
                            {/* <div className={styles.GridprntAbPaading}><CoBatchingPoolTwo /></div>
                            <div className={styles.GridprntAbPaading}><CoBatchingPoolThree /></div>                        
                            <div className={styles.GridprntAbPaading}><CoBatchingPoolFour /></div>
                            <div className={styles.GridprntAbPaading}><CoBatchingPoolsPool /></div>
                            <div className={styles.GridprntAbPaading}><CoBatchingPoolTwo /></div> */}
                        </div>  
                    </div>                      
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">No Active Pools</div>
            </div>
       
    </>
  )
}
