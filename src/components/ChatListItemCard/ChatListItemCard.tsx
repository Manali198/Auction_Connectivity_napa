import type { NextPage } from 'next';
import React from 'react';
import moment from 'moment';
import Image from 'next/image';

import styles from './ChatListItemCard.module.scss';

type ChatListItemCardProps = {
  username: string;
  avatar?: string;
  description: string;
  date: string;
};

const ChatListItemCard: NextPage<any, ChatListItemCardProps> = ({
  username,
  description,
  date,
  avatar,
}) => {
  const time = new Date(Math.ceil(Number(date) / 10000000) * 1000);
  return (
    // @ts-ignore
    <div className={styles.chatItemContainer}>
      <div className={styles.userContainer}>
        <div className={styles.avatar}>
          <Image
            src={avatar ? `${avatar}` : "/assets/images/img_avatar.png"}
            width={32}
            height={32}
            alt="avatar"
            className={styles.avatarImage}
          />
        </div>
        <div className={styles.userInfo}>
          <div className={styles.userNameContainer}>
            <span className={styles.userName}>{username}</span>
            <span className={styles.timestamp}>
              {moment(time).format('DD/MM/ hh:mm:ss')}
            </span>
          </div>
          <span className={styles.description}>{description}</span>
        </div>
      </div>
    </div>
  );
};

export default ChatListItemCard;
