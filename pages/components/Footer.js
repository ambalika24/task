import React from 'react';
import styles from '../../styles/Footer.module.css';
import Link from 'next/link'
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import PersonIcon from '@material-ui/icons/Person';
import DashboardIcon from '@material-ui/icons/Dashboard';
function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.cont}>                
                <div className={styles.first}>
                    <Link href="/">
                        <a ><DashboardIcon style={{color:"black"}} />
                        </a>
                    </Link>
                    <div>Home</div>
                </div>
                <div className={styles.first}>
                    <Link href="/">
                        <a ><ChatBubbleIcon style={{color:"grey"}}/>
                        </a>
                    </Link>
                    <div>Forum</div>
                </div>
                <div className={styles.first}>
                    <Link href="/">
                        <a><PersonIcon style={{color:"grey"}}/>
                        </a>    
                    </Link>
                    <div>Profile</div> 
                </div>
            </div>
        </div>
    );
        
}

export default Footer;