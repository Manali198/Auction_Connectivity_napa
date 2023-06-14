import React from 'react';
import styles from './MintedPostsTab.module.scss';
import 'bootstrap-daterangepicker/daterangepicker.css';
import moment from 'moment';
import Image from 'next/image';
import 'rc-slider/assets/index.css';
import TooltipSlider from './TooltipSlider';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import { ArrowDownIcon } from '../assets';
import DatePicker from "react-datepicker";

export default function MintedPostsTab(props: any) {
  const [active, setActive] = React.useState(false);
  const [startDate, setStartDate] = React.useState<any>(null);
  const [endDate, setEndDate] = React.useState<any>();
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <>
      <div className={styles.MintedHead}>
        <div className={styles.LeftHeader}>
          <div className={styles.RightTableSc}>
          <div className="datepickerBox">
            <div className={styles.datepickerBox}>
              <DatePicker
                className={styles.dateStart}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                placeholderText="From Date"
              />
              <img height={13} width={13} src={ArrowDownIcon} alt="" />
            </div>
          </div>
          <div className="datepickerBox">
            <div className={styles.datepickerBox}>
              <DatePicker
                className={styles.dateStart}
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                placeholderText="To Date"
              />
              <img height={13} width={13} src={ArrowDownIcon} alt="" />
            </div>
          </div>
          </div>
          <div className={styles.RangeNone}>
            <div className={styles.RangePrnt}>
              <span>Tiers</span>
              <div className={styles.RangeSlider}>
                <TooltipSlider
                  range
                  min={1}
                  max={10}
                  defaultValue={[3, 8]}
                  tipFormatter={(value: number) => `${value}`}
                  {...props}
                  className="tooltipminted"
                />
              </div>
            </div>
          </div>
        </div>
        {/* <secondRight></secondRight> */}
        <div className={styles.RightHeader}>
          <div className={`${styles.ProgressRight} ${styles.RangeNone}`}>
            <div className={styles.RangePrnt}>
              <span>Earned Tokens</span>
              <div className={styles.RangeSlider}>
                <TooltipSlider
                  range
                  min={0}
                  max={10}
                  defaultValue={[3, 8]}
                  tipFormatter={(value: any) => `${value}`}
                  {...props}
                  className="tooltipminted"
                />
              </div>
            </div>
          </div>
          <div className={styles.AnyObjects}>
            <button className={styles.FilterButton} onClick={handleClick}>
              Filters
            </button>
          </div>
          <div className={styles.RightThreeBtn} id="nav-tab" role="tablist">
            {/* <button className={styles.SearchButton}>
              <Image src="/img/search_icon.svg" alt="" width={24} height={24} />
            </button> */}
            <button
              className={`${styles.GridBtn} nav-link active`}
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              <Image
                src="/img/grid4_icon.svg"
                alt=""
                width={24}
                height={24}
                onClick={() => props.getval(true)}
              />
            </button>
            <button
              className={`${styles.ListBtn} nav-link active`}
              id="nav-profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-profile"
              type="button"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              <Image
                src="/img/rows_icon.svg"
                alt=""
                width={24}
                height={24}
                onClick={() => props.getval(false)}
              />
            </button>
          </div>
        </div>
      </div>
      <div
        className={
          active
            ? `${styles.FilterBox} ${styles.active}`
            : `${styles.FilterBox}`
        }
      >
        <button className={styles.ExitButton} onClick={handleClick}>
          <Image src="/img/exit_icon.svg" alt="" width="24px" height="24px" />
        </button>
        <div className={styles.MobileDatpcker}>
          <div className="datepickerBox datepickerBoxv3">
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
          <div className="datepickerBox datepickerBoxv3">
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
        </div>

        <div className={styles.RangePrnt}>
          <span>Tiers</span>
          <div className={styles.RangeSlider}>
            <TooltipSlider
              range
              min={1}
              max={10}
              defaultValue={[3, 8]}
              tipFormatter={(value: any) => `${value}`}
              {...props}
              className="tooltipminted"
            />
          </div>
        </div>
        <div className={styles.RangePrnt}>
          <span>Earned Tokens</span>
          <div className={styles.RangeSlider}>
            <TooltipSlider
              range
              min={0}
              max={10}
              defaultValue={[3, 8]}
              tipFormatter={(value: any) => `${value}`}
              {...props}
              className="tooltipminted"
            />
          </div>
        </div>
      </div>
    </>
  );
}
