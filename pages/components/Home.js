import React from 'react';
import styles from '../../styles/Home.module.css';
import Link from 'next/link'
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';

function Home() {
    return (
      <div className={styles.TopContainer}>
        <div className={styles.Background}>
        </div>
          <div className={styles.HeaderContainer}>
            <div className={styles.MainHeading}>
              Candider
            </div>
            <div className={styles.SubHeading}>
              Real
              <div className={styles.HeaderDot}></div>
              Honest
              <div className={styles.HeaderDot}></div>
              Candid
            </div>
            <div className={styles.SearchContainer}>
              <div className={styles.SearchLink}>
                <Link href="/">
                  <a>
                    <SearchIcon className={styles.SearchIcon} fontSize="small"/>
                    <div className={styles.SearchText}>
                      Search & ask
                    </div>
                  </a>
                </Link>
              </div>
                <Link href="/">
                  <a className={styles.AddIcon} >
                    <AddIcon fontSize="small"/>
                  </a>
                </Link>
            </div>
          </div>
      </div>
    )
}

export default Home