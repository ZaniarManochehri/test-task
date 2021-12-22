import React from 'react';

//Component
import {styles, BorderedLayout} from '../../loader';

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