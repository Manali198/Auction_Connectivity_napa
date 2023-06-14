import { updateMintPostStatus } from '../../services/MintApi';
import React, { useEffect, useState } from 'react';
import { useTimer } from 'react-timer-hook';
import styles from './Mytimer.module.scss';

type MyTimerProps = {
  expiryTimestamp: number;
  postId?: string;
  isExpired?: string;
  napaTokenEarned?: string;
  socket: WebSocket;
  amountEarned?: string;
  tokenPrice: number;
};

function MyTimer({
  expiryTimestamp,
  postId,
  isExpired,
  socket,
  napaTokenEarned,
  amountEarned,
  tokenPrice,
}: MyTimerProps) {
  const [currentNapaPrice, setCurrentNapaPrice] = useState(`4.29650254`);
  const { seconds, minutes, hours, isRunning } = useTimer({
    //@ts-ignore
    expiryTimestamp,
    onExpire: async () => {
      if (postId && isExpired == 'false' && napaTokenEarned == '') {
        await updateMintPostStatus(
          postId,
          '1',
          amountEarned ? amountEarned : currentNapaPrice,
          tokenPrice
        );
      }
      if (postId && napaTokenEarned == '') {
        await updateMintPostStatus(
          postId,
          '1',
          amountEarned ? amountEarned : currentNapaPrice,
          tokenPrice
        );
      }
    },
  });

  useEffect(() => {
    // @ts-ignore
    socket.addEventListener('message', ({ data }) => {
      const response = JSON.parse(data);
      if (response?.event === 'napa-token-price') {
        setCurrentNapaPrice(`${response?.price}`);
      }
    });
    return () => {
      socket.removeEventListener('message', () => {});
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isRunning ? (
        <div className={styles.timerContainer}>
          <h4
            className={`${
              hours >= 6
                ? styles.now
                : hours < 6 && hours >= 1
                ? styles.sixHoursLeft
                : styles.oneHourLeft
            }`}
          >
            <span>
              {hours < 10 && 0}
              {hours}
            </span>
            :
            <span>
              {minutes < 10 && 0}
              {minutes}
            </span>
            :
            <span>
              {seconds < 10 && 0}
              {seconds}
            </span>
          </h4>
          <p
            className={`${
              hours >= 6
                ? styles.now
                : hours < 6 && hours >= 1
                ? styles.sixHoursLeft
                : styles.oneHourLeft
            }`}
          >
            Live Post!
          </p>
        </div>
      ) : (
        <>
          <p className={styles.timerEnded}>Live Time Expired</p>
        </>
      )}
    </>
  );
}

export default MyTimer;
