import { useEffect, useRef } from 'react';
import type { NextPage } from 'next';
import styles from './ChatWindow.module.scss';

import ChatListItemCard from '../ChatListItemCard/ChatListItemCard';
import useProfile from '@/hooks/useProfile';

type ChatWindowProps = {
  message: string;
  setMessage: (message: string) => void;
  messageHandler: () => void;
  messages: any;
};

const ChatWindow: NextPage<ChatWindowProps> = ({
  message,
  setMessage,
  messageHandler,
  messages,
}) => {
  const ref = useRef(null);
  const { profileDetails } = useProfile();

  useEffect(() => {
    if (ref.current) {
      // @ts-ignore
      ref.current.scrollTop = ref.current.scrollHeight;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages]);

  return (
    <>
      <div className={`${styles.chatWindowContainer} otherscroll`} ref={ref}>
        {messages &&
          messages.length > 0 &&
          messages.map(({ message, timetoken }: any, index: number) => {
            return (
              <ChatListItemCard
                key={`chat-${index}`}
                username={message?.from}
                avatar={profileDetails?.avatar}
                description={message?.text}
                date={timetoken}
              />
            );
          })}
      </div>
      <div className={styles.chatInputContainer}>
        <input
          className={styles.input}
          placeholder="Message.."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (!message) {
              return;
            }
            if (e.key === 'Enter') {
              messageHandler();
              setMessage('');
            }
          }}
        />
        <button
          className={styles.send}
          onClick={() => {
            // @ts-ignore
            ref.current.scrollIntoView({ behavior: 'smooth' });
            if (!message) {
              return;
            }
            messageHandler();
            setMessage('');
          }}
        >
          Send
        </button>
      </div>
    </>
  );
};

export default ChatWindow;
