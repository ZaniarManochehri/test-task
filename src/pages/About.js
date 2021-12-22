import React from 'react';

//Component
import {styles} from '../loader';

function About(props) {
    return(
        <div className={styles.aboutContainer}>
            <h1>About Page</h1>
            <p>This app is github search</p>
        </div>
    )
}

export default About;