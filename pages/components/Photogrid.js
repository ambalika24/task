/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styles from '../../styles/PhotoGrid.module.css';

function PhotoGrid(props) {
    return (
        
        <div className={styles.GridContainer}>
                <div className={styles.Heading}>Candid Feeds</div>
                <div className={styles.Container1}>
                    <div  className={`${styles.Item1} ${styles.Cont1Item}`} style={{ backgroundImage: `url("${props.array[0].image}")`}}><div className={styles.Test1}>{props.array[0].title}</div></div>
                    <div className={`${styles.Item2} ${styles.Cont1Item}`}><div className={styles.Test2}>{props.array[1].title}</div></div>
                    <div className={`${styles.Item3} ${styles.Cont1Item}`}><div className={styles.Test3}>{props.array[2].title}</div></div>
                    <div className={`${styles.Item4} ${styles.Cont1Item}`}><div className={styles.Test4}>{props.array[3].title}</div></div>
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