import React, { useEffect } from 'react';
import Container from '../../Layout/Container/Container';
import Footer from '../Footer/Footer';
import styles from './Events.module.scss';
import Image from 'next/image';
import Select from 'react-select';
import 'bootstrap-daterangepicker/daterangepicker.css';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap/dist/css/bootstrap.css';
import moment from 'moment';
import 'bootstrap-daterangepicker/daterangepicker.css';
import 'rc-slider/assets/index.css';
import Link from 'next/link';
import { RecentEvents } from '@/types/event';
import { getRecentEvents } from '@/services/EventApi';
import { FadeLoader } from 'react-spinners';

export default function EventsList() {
  const [events, setEvents] = React.useState<RecentEvents[] | null>(null);
  const [eventsLoading, setEventsLoading] = React.useState(false);

  const options = [
    { value: 'Crypto Events', label: 'Crypto Events' },
    { value: 'Festivals', label: 'Festivals' },
    { value: 'Party Events', label: 'Party Events' },
  ];

  const [active, setActive] = React.useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  const handleGetRecentEvents = async () => {
    setEventsLoading(true);
    const { data }: any = await getRecentEvents();
    setEvents(data?.data || []);
    setEventsLoading(false);
  };

  useEffect(() => {
    handleGetRecentEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className={`${styles.container}`}>
        <Container className={`${styles.settingsContainer} asinnerContainer`}>
          <h1 className={styles.settings}>Events</h1>
          <div className={styles.tipandtotolmain}>
            <div className="select_main">
              <Select
                options={options}
                // menuIsOpen={true}
                className="select_pernt"
                placeholder="Category"
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
                <Image
                  src="/img/exit_icon.svg"
                  alt=""
                  width="24px"
                  height="24px"
                />
              </button>
              <div className={`${styles.MobileDatpcker} MobileDatpckerEvent`}>
                <div className="select_main select_main_event">
                  <Select
                    options={options}
                    // menuIsOpen={true}
                    className="select_pernt"
                    placeholder="Category"
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
                </div>
              </div>
            </div>
            <div className={styles.buttonpernt}>
              <button>
                <Image
                  src="/img/search_icon_aj.svg"
                  alt=""
                  height="24px"
                  width="24px"
                  className=""
                />
              </button>
            </div>
          </div>

          <div className={styles.EventsListOvrl}>
            <div className={styles.EventsListcrol}>
              {eventsLoading || events?.length == 0 ? (
                <div className={styles.loadingContainer}>
                  {true ? (
                    <FadeLoader color="#ffffff" />
                  ) : (
                    <h4>No Event Found</h4>
                  )}
                </div>
              ) : (
                <div className={styles.EventsListGridBx}>
                  {events?.map((event) => {
                    return (
                      <div key={event.eventId}>
                        <div className={styles.CardlistPrntBx}>
                          <Link
                            href="events-details"
                            className={styles.CardlistPrntBxLink}
                          >
                            <a className={`${styles.CardlistABx} hovereffect`}>
                              <Image
                                src={
                                  event.eventImageBanner ||
                                  event.eventImageOne ||
                                  event.eventImageTwo
                                }
                                width={282}
                                height={372}
                                alt=""
                                className="evmtimg"
                              />
                              <div className={styles.CardBxTopconten}>
                                <Image
                                  src="/img/location_icon_evnt.svg"
                                  width={20}
                                  height={20}
                                  alt=""
                                />
                                <h2>
                                  {event.address}, {event.city}
                                </h2>
                              </div>
                              <div className={styles.CardBxBotconten}>
                                <p>{event.eventTitle}</p>
                                <h3>{moment(event.updatedAt).format('lll')}</h3>
                              </div>
                            </a>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </Container>
        <div>
          <hr />
          <Footer footerIconShow={false} />
        </div>
      </div>
    </>
  );
}
