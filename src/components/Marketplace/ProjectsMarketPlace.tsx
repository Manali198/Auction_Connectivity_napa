import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Select from 'react-select';
import 'bootstrap-daterangepicker/daterangepicker.css';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap/dist/css/bootstrap.css';
import moment from 'moment';
import styles from './ProjectsMarketPlace.module.scss';
import Link from 'next/link';

export default function ProjectsMarketPlace(props: any) {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];
  const optionstow = [
    { value: '1', label: 'Price 20 MRP' },
    { value: '2', label: 'Price 250 MRP' },
    { value: '3', label: 'Price 50 MRP' },
  ];
  const optionsfour = [
    { value: 'chocolate', label: '4h 32 min' },
    { value: 'strawberry', label: '4h 32 min' },
    { value: 'vanilla', label: '4h 32 min' },
  ];
  const [active, setActive] = React.useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  const [isActiveTwo, setActiveTwo] = React.useState(false);
  const toggleClass = () => {
    setActiveTwo(!isActiveTwo);
  };
  ///
  const ref: any = useRef(null);
  const { onClickOutside } = props;

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setActive(isActiveTwo);
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onClickOutside]);
  return (
    <>
      <div className={styles.tipandtotolmain}>
        <div className="select_main slectmainmargnsmll">
          <Select
            options={options}
            // menuIsOpen={true}
            className="select_pernt slctrspnsv"
            placeholder="Price (from low)"
            classNamePrefix="cntrslct"
          />
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
            options={optionsfour}
            // menuIsOpen={true}
            className="select_pernt"
            placeholder="Time"
            classNamePrefix="cntrslct"
          />
          <Select
            options={optionstow}
            // menuIsOpen={true}
            className="select_pernt slctrspnsv"
            placeholder="Rating"
            classNamePrefix="cntrslct"
          />
        </div>

        <div className={styles.AnyObjects}>
          <button className={styles.FilterButton} onClick={handleClick}>
            Filters
          </button>
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
          <div className={`${styles.MobileDatpcker} MobileDatpckertips`}>
            <div className="select_main">
              <Select
                options={options}
                // menuIsOpen={true}
                className="select_pernt slctrspnsv"
                placeholder="Price (from low)"
                classNamePrefix="cntrslct"
              />
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
                options={optionsfour}
                // menuIsOpen={true}
                className="select_pernt slctrspnsv"
                placeholder="Time"
                classNamePrefix="cntrslct"
              />
              <Select
                options={optionstow}
                // menuIsOpen={true}
                className="select_pernt slctrspnsv"
                placeholder="Rating"
                classNamePrefix="cntrslct"
              />
            </div>
          </div>
        </div>
        <div className={styles.buttonperntAj}>
          <div
            className={
              isActiveTwo
                ? `${styles.PstnBtnEnter} ${styles.Active}`
                : `${styles.PstnBtnEnter}`
            }
          >
            <input type="text" placeholder="Enter name or eth address.." />
          </div>
          <button onClick={toggleClass}>
            <Image
              src="/img/search_icon_aj.svg"
              alt=""
              height="24px"
              width="24px"
              className=""
            />
          </button>
          {/* <button className={styles.marginPrnt}><Image src='/img/grid_ic_light.svg' alt='' height="24px" width="24px" className='' /></button>
                    <button><Image src='/img/grid_ic_dark.svg' alt='' height="24px" width="24px" className='' /></button> */}
          {/* pstnbx */}
          <div className={styles.PstnSetBxMain}>
            <div
              className={
                isActiveTwo
                  ? `${styles.ScrollPstn} ${styles.Active}`
                  : `${styles.ScrollPstn}`
              }
            >
              <div className={styles.PositionProject}>
                <div className={styles.ProjectPsnIn}>
                  <div className={styles.UpScPstn}>
                    <p>Projects</p>
                  </div>
                  <div className={styles.FuturisticFierceBx}>
                    <div className={styles.FuturisticFsrst}>
                      <Image
                        src="/img/pstnfrst01.png"
                        height="48px"
                        width="48px"
                        alt=""
                        className=""
                      />
                      <div className={styles.FuturisticText}>
                        <h6>
                          Futuristic<span>Fierce</span>
                        </h6>
                        <p>8,213 items</p>
                      </div>
                    </div>
                    <div className={styles.Last24Text}>
                      <Image
                        src="/img/napa_ic.svg"
                        height="20px"
                        width="20px"
                        alt=""
                        className=""
                      />
                      <h5>0.24</h5>
                    </div>
                  </div>
                  <div className={styles.FuturisticFierceBx}>
                    <div className={styles.FuturisticFsrst}>
                      <Image
                        src="/img/pstnfrst02.png"
                        height="48px"
                        width="48px"
                        alt=""
                        className=""
                      />
                      <div className={styles.FuturisticText}>
                        <h6>
                          <span>Man in</span> Futuristic
                        </h6>
                        <p>2,347 items</p>
                      </div>
                    </div>
                    <div className={styles.Last24Text}>
                      <Image
                        src="/img/napa_ic.svg"
                        height="20px"
                        width="20px"
                        alt=""
                        className=""
                      />
                      <h5>1.03</h5>
                    </div>
                  </div>
                </div>
                {/* secnd */}
                <div className={styles.ProjectPsnIn}>
                  <div className={styles.UpScPstn}>
                    <p>Items</p>
                  </div>
                  <div className={styles.FuturisticFierceBx}>
                    <div className={styles.FuturisticFsrst}>
                      <Image
                        src="/img/pstnfrst03.png"
                        height="48px"
                        width="48px"
                        alt=""
                        className=""
                      />
                      <div className={styles.FuturisticText}>
                        <h6>
                          Futuristic <span>Spaces</span>
                        </h6>
                        <p>Ending In 5h 44 min</p>
                      </div>
                    </div>
                    <div className={styles.Last24Text}>
                      <Image
                        src="/img/napa_ic.svg"
                        height="20px"
                        width="20px"
                        alt=""
                        className=""
                      />
                      <h5>3.14</h5>
                    </div>
                  </div>
                  <div className={styles.FuturisticFierceBx}>
                    <div className={styles.FuturisticFsrst}>
                      <Image
                        src="/img/pstnfrst04.png"
                        height="48px"
                        width="48px"
                        alt=""
                        className=""
                      />
                      <div className={styles.FuturisticText}>
                        <h6>
                          <span>Horizont</span> Futuristic
                        </h6>
                        <p>Ending In 2h 22 min</p>
                      </div>
                    </div>
                    <div className={styles.Last24Text}>
                      <Image
                        src="/img/napa_ic.svg"
                        height="20px"
                        width="20px"
                        alt=""
                        className=""
                      />
                      <h5>3.16</h5>
                    </div>
                  </div>
                </div>
                {/* lstOne */}
                <div className={styles.ProjectPsnIn}>
                  <div className={styles.UpScPstn}>
                    <p>Projects</p>
                  </div>
                  <div className={styles.FuturisticFierceBx}>
                    <div className={styles.FuturisticFsrst}>
                      <Image
                        src="/img/pstnfrst01.png"
                        height="48px"
                        width="48px"
                        alt=""
                        className=""
                      />
                      <div className={styles.FuturisticText}>
                        <h6>
                          Futuristic<span>Fierce</span>
                        </h6>
                        <p>8,213 items</p>
                      </div>
                    </div>
                    <div className={styles.Last24Text}>
                      <Image
                        src="/img/napa_ic.svg"
                        height="20px"
                        width="20px"
                        alt=""
                        className=""
                      />
                      <h5>0.24</h5>
                    </div>
                  </div>
                  <div className={styles.FuturisticFierceBx}>
                    <div className={styles.FuturisticFsrst}>
                      <Image
                        src="/img/pstnfrst02.png"
                        height="48px"
                        width="48px"
                        alt=""
                        className=""
                      />
                      <div className={styles.FuturisticText}>
                        <h6>
                          <span>Man in</span> Futuristic
                        </h6>
                        <p>2,347 items</p>
                      </div>
                    </div>
                    <div className={styles.Last24Text}>
                      <Image
                        src="/img/napa_ic.svg"
                        height="20px"
                        width="20px"
                        alt=""
                        className=""
                      />
                      <h5>1.03</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* pstnbx */}
        </div>
      </div>

      <div className={styles.scrollPernt}>
        <div className={styles.CustomGridContainer}>
          <div className={styles.CustomGrid}>
            <div className={styles.TipsTulsOverlay}>
              <div className={styles.boxinnrcont}>
                <Link href="/projects">
                  <a href="" className={`${styles.apernt} hovereffect`}>
                    <Image
                      src="/img/project011.png"
                      height="372px"
                      width="282px"
                      alt=""
                      className="evmtimg"
                    />

                    <div className={styles.downCont}>
                      <h3>Bless the Fallout Sadnesssads</h3>
                      <div className={styles.flexPernt}>
                        <div className={styles.currentBit}>
                          <h5>Abilities or he perfectly.</h5>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.CustomGrid}>
            <div className={styles.TipsTulsOverlay}>
              <div className={styles.boxinnrcont}>
                <Link href="/projects">
                  <a href="" className={`${styles.apernt} hovereffect`}>
                    <Image
                      src="/img/project012.png"
                      height="372px"
                      width="282px"
                      alt=""
                      className="evmtimg"
                    />

                    <div className={styles.downCont}>
                      <h3>Escape from the Wave of Negative</h3>
                      <div className={styles.flexPernt}>
                        <div className={styles.currentBit}>
                          <h5>Oh to another chamber pleased.</h5>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.CustomGrid}>
            <div className={styles.TipsTulsOverlay}>
              <div className={styles.boxinnrcont}>
                <Link href="/projects">
                  <a href="" className={`${styles.apernt} hovereffect`}>
                    <Image
                      src="/img/project013.png"
                      height="372px"
                      width="282px"
                      alt=""
                      className="evmtimg"
                    />

                    <div className={styles.downCont}>
                      <h3>Cyberpunk Reality in your Eyes</h3>
                      <div className={styles.flexPernt}>
                        <div className={styles.currentBit}>
                          <h5>Went me rank at last loud shot.</h5>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.CustomGrid}>
            <div className={styles.TipsTulsOverlay}>
              <div className={styles.boxinnrcont}>
                <Link href="/projects">
                  <a href="" className={`${styles.apernt} hovereffect`}>
                    <Image
                      src="/img/project014.png"
                      height="372px"
                      width="282px"
                      alt=""
                      className="evmtimg"
                    />

                    <div className={styles.downCont}>
                      <h3>Stairs to the Future of Beauty</h3>
                      <div className={styles.flexPernt}>
                        <div className={styles.currentBit}>
                          <h5>Valley afford uneasy joy she thrown .</h5>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.CustomGrid}>
            <div className={styles.TipsTulsOverlay}>
              <div className={styles.boxinnrcont}>
                <Link href="/projects">
                  <a href="" className={`${styles.apernt} hovereffect`}>
                    <Image
                      src="/img/project015.png"
                      height="372px"
                      width="282px"
                      alt=""
                      className="evmtimg"
                    />

                    <div className={styles.downCont}>
                      <h3>Molecules of your Strange Feelings</h3>
                      <div className={styles.flexPernt}>
                        <div className={styles.currentBit}>
                          <h5>Went me rank at last loud shot.</h5>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.CustomGrid}>
            <div className={styles.TipsTulsOverlay}>
              <div className={styles.boxinnrcont}>
                <Link href="/projects">
                  <a href="" className={`${styles.apernt} hovereffect`}>
                    <Image
                      src="/img/project016.png"
                      height="372px"
                      width="282px"
                      alt=""
                      className="evmtimg"
                    />

                    <div className={styles.downCont}>
                      <h3>All that Remains of Them</h3>
                      <div className={styles.flexPernt}>
                        <div className={styles.currentBit}>
                          <h5>All that Remains of Them</h5>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.CustomGrid}>
            <div className={styles.TipsTulsOverlay}>
              <div className={styles.boxinnrcont}>
                <Link href="/projects">
                  <a href="" className={`${styles.apernt} hovereffect`}>
                    <Image
                      src="/img/project017.png"
                      height="372px"
                      width="282px"
                      alt=""
                      className="evmtimg"
                    />

                    <div className={styles.downCont}>
                      <h3>Northlane as your Personal Radar</h3>
                      <div className={styles.flexPernt}>
                        <div className={styles.currentBit}>
                          <h5>Oh to another chamber pleased.</h5>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.CustomGrid}>
            <div className={styles.TipsTulsOverlay}>
              <div className={styles.boxinnrcont}>
                <Link href="/projects">
                  <a href="" className={`${styles.apernt} hovereffect`}>
                    <Image
                      src="/img/project018.png"
                      height="372px"
                      width="282px"
                      alt=""
                      className="evmtimg"
                    />

                    <div className={styles.downCont}>
                      <h3>Fly in Parallel Worlds with a Thrill</h3>
                      <div className={styles.flexPernt}>
                        <div className={styles.currentBit}>
                          <h5>Abilities or he perfectly.</h5>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/* extrapoint */}
          <div className={styles.CustomGrid}>
            <div className={styles.TipsTulsOverlay}>
              <div className={styles.boxinnrcont}>
                <Link href="/projects">
                  <a href="" className={`${styles.apernt} hovereffect`}>
                    <Image
                      src="/img/project018.png"
                      height="372px"
                      width="282px"
                      alt=""
                      className="evmtimg"
                    />

                    <div className={styles.downCont}>
                      <h3>Fly in Parallel Worlds with a Thrill</h3>
                      <div className={styles.flexPernt}>
                        <div className={styles.currentBit}>
                          <h5>Abilities or he perfectly.</h5>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
