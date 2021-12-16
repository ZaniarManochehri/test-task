import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

function UserItemChildren(props) {
    return (
        <Stack alignItems="center" spacing={2}>
            <Avatar
                alt={`${props.name}-avatar`}
                sx={{ width: 60, height: 60 }}
                src={props.avatar} />
            <h3>{props.name}</h3>
            <Button
                style={{ backgroundColor: 'black' }}
                variant="contained"
                href="/user/zan"
            >
                More
            </Button>
        </Stack>
    );
}

export default UserItemChildren;