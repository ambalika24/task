/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styles from '../../styles/PhotoGrid.module.css';

function PhotoGrid() {
    return (
        <div className={styles.GridContainer}>
                <div className={styles.Heading}>Candid Feeds</div>
                <div className={styles.Container1}>
                    <div className={`${styles.Item1} ${styles.Cont1Item}`}><div className={styles.Test1}>Why are Animals Slaughtered?</div></div>
                    <div className={`${styles.Item2} ${styles.Cont1Item}`}><div className={styles.Test2}>Which type of skin are you having?</div></div>
                    <div className={`${styles.Item3} ${styles.Cont1Item}`}><div className={styles.Test3}>Honest Problems with New Agriculture Reform Bill</div></div>
                    <div className={`${styles.Item4} ${styles.Cont1Item}`}><div className={styles.Test4}>How to become Savage?</div></div>
                </div>
                <div className={styles.Heading2}>Candid for you</div>
                <div className={styles.Container2}>
                    <div className={`${styles.Item5} ${styles.Cont2Item}`}><div className={styles.Test5}>What is #FOMO?</div></div>
                    <div className={`${styles.Item6} ${styles.Cont2Item}`}><div className={styles.Test6}>Story behind Halloween</div></div>
                    <div className={`${styles.Item7} ${styles.Cont2Item}`}><div className={styles.Test5}>Unboxing WhatsApp's<br></br> New Privacy Policy</div></div>
                    <div className={`${styles.Item8} ${styles.Cont2Item}`}><div className={styles.Test5}>Top Candid Places<br></br> to visit in Jodhpur</div></div>
                    <div className={`${styles.Item9} ${styles.Cont2Item}`}><div className={styles.Test8}>What is Narcissism?</div></div>
                    <div className={`${styles.Item10} ${styles.Cont2Item}`}><div className={styles.Test8}>What is Cholesterol?</div></div>
                </div>
        </div>
    )
}



export default PhotoGrid