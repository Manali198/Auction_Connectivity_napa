import HighlightButton from '@/components/HighlightButton/HighlightButton';
import React from 'react'
import styles from './SectionthreeTbl.module.scss';

export default function SectionThreeTbl() {
    return (
        <div className={styles.SectionThree}>
            <div className="col-lg-12">
                <div className={styles.MainTable}>
                    <h4>Previous Earnings</h4>
                    <HighlightButton title="Claim Earnings" link=""  />
                </div>
                <div className={styles.MainTableTable} >
                    <table className={styles.tableMain}>
                        <thead className={styles.tableHead}>
                            <tr className={styles.tableRow}>
                                <th className={styles.tableTitle}>Time Frame</th>
                                <th className={styles.tableTitle}>Views</th>
                                <th className={styles.tableTitle}>Earnings (USD)</th>
                                <th className={styles.tableTitle}>Most Popular Country</th>
                                <th className={styles.tableTitle}>SNFT Leaderboards</th>
                                <th className={styles.tableTitle}>Owner</th>
                            </tr>
                        </thead>
                        <tbody className={styles.tableBody}>
                            <tr className={styles.tableRow}>
                                <td className={styles.tableTd}>Prev 7 Days</td>
                                <td className={styles.tableTd}>2,198</td>
                                <td className={styles.tableTd}>$5.00</td>
                                <td className={styles.tableTd}>United States</td>
                                <td className={styles.tableTd}>Most Like</td>
                                <td className={styles.tableTd}>Vampire</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td className={styles.tableTd}>Prev 30 Days</td>
                                <td className={styles.tableTd}>4,000</td>
                                <td className={styles.tableTd}>$10.00</td>
                                <td className={styles.tableTd}>Japan</td>
                                <td className={styles.tableTd}>Most Discussed</td>
                                <td className={styles.tableTd}>Aaron</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td className={styles.tableTd}>Prev 60 Days</td>
                                <td className={styles.tableTd}>2,198</td>
                                <td className={styles.tableTd}>$5.00</td>
                                <td className={styles.tableTd}>United States</td>
                                <td className={styles.tableTd}>Most Like</td>
                                <td className={styles.tableTd}>Vampire</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td className={styles.tableTd}>Prev 90 Days</td>
                                <td className={styles.tableTd}>4,000</td>
                                <td className={styles.tableTd}>$10.00</td>
                                <td className={styles.tableTd}>Japan</td>
                                <td className={styles.tableTd}>Most Discussede</td>
                                <td className={styles.tableTd}>Aaron</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td className={styles.tableTd}>Prev 180 Days</td>
                                <td className={styles.tableTd}>2,198</td>
                                <td className={styles.tableTd}>$5.00</td>
                                <td className={styles.tableTd}>United States</td>
                                <td className={styles.tableTd}>Most Like</td>
                                <td className={styles.tableTd}>Vampire</td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td className={styles.tableTd}>All Time</td>
                                <td className={styles.tableTd}>4,000</td>
                                <td className={styles.tableTd}>$10.00</td>
                                <td className={styles.tableTd}>Japan</td>
                                <td className={styles.tableTd}>Most Discussed</td>
                                <td className={styles.tableTd}>Aaron</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
