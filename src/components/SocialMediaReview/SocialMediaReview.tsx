import type { NextPage } from 'next';
import Image from 'next/image';
import styles from './SocialMediaReview.module.scss';
import moment from 'moment';
import Link from 'next/link';

type SocialMediaReviewProps = {
  description: string;
  icon: string;
  articleBody: string;
  date: string;
  username: string;
  onChatClicked: () => void;
  articlesTags: string;
  currentIndex: number;
  openIndex: null | number;
  setOpenIndex: CallableFunction;
};

const SocialMediaReview: NextPage<SocialMediaReviewProps> = ({
  description,
  articleBody,
  icon,
  date,
  username,
  onChatClicked,
  articlesTags,
  currentIndex,
  openIndex,
  setOpenIndex,
}) => {
  return (
    <div
      className={styles.reviewContainer}
      onClick={() => openIndex !== currentIndex && setOpenIndex(currentIndex)}
    >
      <div className={styles.review}>
        <p>
          {description}{' '}
          {openIndex === currentIndex && (
            <button onClick={() => setOpenIndex(null)}>
              <Image
                src="/img/close_ic.svg"
                alt=""
                width="24px"
                height="24px"
              />
            </button>
          )}{' '}
        </p>
      </div>
      <div className={styles.userContainer}>
        <div className={styles.avatar}>
          <Image
            src={icon}
            className={styles.avatarImg}
            width={40}
            height={40}
            alt="avatar"
          />
        </div>
        <div className={styles.userInfo}>
          <span className={styles.userName}>{username}</span>
          <span className={styles.date}>
            {moment(date).format('DD MMMM YYYY')}
          </span>
        </div>

        {openIndex === currentIndex && (
          <div className={styles.twoLinkAj}>
            <div className={styles.twoLinkInnr}>
              <Link href="#">
                <a>
                  NAPA Social Media{' '}
                  <Image
                    src="/img/left_erow_ic.svg"
                    alt=""
                    width="14px"
                    height="14px"
                  />
                </a>
              </Link>
            </div>
            <div className={styles.twoLinkInnr}>
              <Link href="#">
                <a>
                  NFT Project on NAPA Marketplace{' '}
                  <Image
                    src="/img/left_erow_ic.svg"
                    alt=""
                    width="14px"
                    height="14px"
                  />
                </a>
              </Link>
            </div>
            <div className={styles.twoLinkInnr}>
              <a
                role="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  e.cancelable = true;
                  onChatClicked();
                }}
              >
                Chat{' '}
                <Image
                  src="/img/left_erow_ic.svg"
                  alt=""
                  width="14px"
                  height="14px"
                />
              </a>
            </div>
          </div>
        )}
      </div>
      <div className={styles.SmallContent}>
        <p>
          {openIndex !== currentIndex && (
            <div
              className={styles.description}
              dangerouslySetInnerHTML={{
                __html:
                  articleBody.substring(0, 400) +
                  (articleBody.length > 400 ? '...' : ''),
              }}
            ></div>
          )}
        </p>
      </div>
      {openIndex === currentIndex && (
        <div className={styles.allPeragraphMain}>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{
              __html: articleBody,
            }}
          ></div>
          <div className={styles.ulPerent}>
            <ul>
              {articlesTags &&
                articlesTags?.split(',').map((tag, index) => {
                  return (
                    <li key={`article-tag-${index}`}>
                      <p>{tag}</p>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
export default SocialMediaReview;
