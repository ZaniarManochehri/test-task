import React from 'react';

//Component
import styles from '../assets/styles/my-style.module.css';
import BorderedLayout from '../parts/BorderedLayout';

function UserDetailsItem(props) {
    let { text, url } = props;
    return (
        <BorderedLayout
            paddingLeft={4}
            paddingTop={2}
            paddingBottom={2}
        >
            <a className={styles.btnUserDetails} href={url}>{text}</a>
        </BorderedLayout>
    )

}

export default UserDetailsItem;