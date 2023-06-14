import React from 'react';
import LiveStreamFilterTabs from './LiveStreamFilterTabs';
import styles from './LiveStreamTab1.module.scss';

const LiveStreamTab1 = () => {
  let streams = [
    {
      title:
        'Futuristic Fierce Radiant Cube Infinite Space of variations  Infinite Space of variations',
      streamImg: '/assets/images/streamCard1.png',
      userName: 'Marta Thornton',
      status: 'Live',
      avatar: '/img/user_had.png',
      viewers: '5.7K viewers',
    },
    {
      title:
        'Futuristic Fierce Radiant Cube Infinite Space of variations  Infinite Space of variations',
      userName: 'Catherine Patton',
      avatar: '/img/user_had.png',
      streamImg: '/assets/images/streamCard2.png',
      status: 'Live',
      viewers: '4,7K viewers',
    },
    {
      title:
        'Futuristic Fierce Radiant Cube Infinite Space of variations  Infinite Space of variations',
      streamImg: '/assets/images/streamCard1.png',
      userName: 'Marta Thornton',
      status: 'Live',
      avatar: '/img/user_had.png',
      viewers: '7K viewers',
    },
    {
      title:
        'Futuristic Fierce Radiant Cube Infinite Space of variations  Infinite Space of variations',
      userName: 'Catherine Patton',
      avatar: '/img/user_had.png',
      streamImg: '/assets/images/streamCard2.png',
      status: 'Live',
      viewers: '4K viewers',
    },
    {
      title:
        'Futuristic Fierce Radiant Cube Infinite Space of variations  Infinite Space of variations',
      streamImg: '/assets/images/streamCard1.png',
      userName: 'Marta Thornton',
      status: 'Live',
      avatar: '/img/user_had.png',
      viewers: '0 viewers',
    },
    {
      title:
        'Futuristic Fierce Radiant Cube Infinite Space of variations  Infinite Space of variations',
      userName: 'Catherine Patton',
      avatar: '/img/user_had.png',
      streamImg: '/assets/images/streamCard2.png',
      status: 'Live',
      viewers: '4K viewers',
    },
    {
      title:
        'Futuristic Fierce Radiant Cube Infinite Space of variations  Infinite Space of variations',
      streamImg: '/assets/images/streamCard1.png',
      userName: 'Marta Thornton',
      status: 'Live',
      avatar: '/img/user_had.png',
      viewers: '0 viewers',
    },
    {
      title:
        'Futuristic Fierce Radiant Cube Infinite Space of variations  Infinite Space of variations',
      userName: 'Catherine Patton',
      avatar: '/img/user_had.png',
      streamImg: '/assets/images/streamCard2.png',
      status: 'Live',
      viewers: '4K viewers',
    },
  ];
  return (
    <>
      <LiveStreamFilterTabs />
      <div className={styles.streamCardContainer}>
        {streams.map((val, index) => {
          return (
            <div key={index} className={styles.streamCard}>
              <div className={styles.streamStatusContainer}>
                <p className={styles.streamStatus}>{val.status}</p>
                <p className={styles.streamViewers}>{val.viewers}</p>
              </div>
              <img alt='' className={styles.liveStreams} src={val.streamImg} />
              <h5 className={styles.streamTitle}>{val.title}</h5>
              <div className={styles.avatarContainer}>
                <img
                  src={val.avatar}
                  className={styles.streamUserAvatar}
                  alt="avatar"
                />
                <p className={styles.streamUserName}>{val.userName}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default LiveStreamTab1;
