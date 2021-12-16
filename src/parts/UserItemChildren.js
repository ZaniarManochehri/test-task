import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function UserItemChildren() {
    return (
        <Stack alignItems="center" spacing={2}>
            <Avatar
                alt="Remy Sharp"
                sx={{ width: 60, height: 60 }}
                src="https://res.cloudinary.com/stealthman22/image/upload/v1586308024/new-portfolio/hero/time-lapse-photography-of-waterfalls-during-sunset-210186.jpg" />
            <h3>zaniar</h3>
            <Button style={{ backgroundColor: 'black' }} variant="contained">More</Button>
        </Stack>
    );
}

export default UserItemChildren;