import React from 'react';
import { FaGithub } from "react-icons/fa";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

//Component
import styles from '../assets/styles/my-style.module.css';

function Header(props) {
    return (
        <div className={styles.headerContainer}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container  columnSpacing={{ xs: 0, sm: 1, md: 2 }}>
                    <Grid item xs={12} md>
                        <h1 className={styles.titleHeader}>
                            <FaGithub className={styles.icon} />
                            Github Search
                        </h1>
                    </Grid>
                    <Grid item xs md={6}>
                    </Grid>
                    <Grid item xs={12} md>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/about">About</a>
                            </li>
                        </ul>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Header;