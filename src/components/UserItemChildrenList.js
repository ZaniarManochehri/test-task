import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

//Component
import styles from '../assets/styles/my-style.module.css';

function UserItemChildren(props) {
    return (
        <Stack alignItems="center" spacing={2}>
            <Avatar
                alt={`${props.name}-avatar`}
                sx={{ width: 60, height: 60 }}
                src={props.avatar} />
            <h3>{props.name}</h3>
            <Link className={styles.btnMore} to={`/user/${props.name}`}>
                <Button
                    style={{ backgroundColor: 'black' }}
                    variant="contained"
                >
                    More
                </Button>
            </Link>
        </Stack>
    );
}

export default UserItemChildren;