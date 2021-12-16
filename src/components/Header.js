import React from 'react';
import { FaGithub } from "react-icons/fa";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";

//Component
import styles from '../assets/styles/my-style.module.css';

function Header(props) {

    return (
        <div className={styles.headerContainer}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container columnSpacing={{ xs: 0, sm: 0, md: 2 }}>
                    <Grid item xs={12} md>
                        <Stack justifyContent="center" alignItems="center">
                            <h1 className={styles.titleHeader}>
                                <FaGithub className={styles.icon} />
                                Github Search
                            </h1>
                        </Stack>
                    </Grid>

                    <Grid item xs md={6} />

                    <Grid item xs={12} md>
                        <Stack style={{ height: '100%' }}
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <ul>
                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                >
                                    <Link className={styles.btnMenu} to="/">Home</Link>
                                    <Link className={styles.btnMenu} to="/about">About</Link>
                                </Stack>
                            </ul>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Header;