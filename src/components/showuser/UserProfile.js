import React from 'react';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

//Component
import BorderedLayout from '../../parts/showuser/BorderedLayout';

function UserProfile(props) {
    let {
        avatarUrl,
        userName,
        bio,
        url,
        htmlUrl,
        login,
        blog,
        company,
        location,
    } = props;
    const above900 = useMediaQuery('(min-width:900px)');
    return (
        <BorderedLayout
            paddingLeft={20}
            paddingRight={20}
            paddingTop={4}
            paddingBottom={4}
            gridColumn="span 12"
            justifyContent={above900 ? "flex-start" : "center"}
        >
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Stack
                        alignItems="center"
                        justifyContent="flex-start"
                        direction="row"
                        spacing={2}>
                        <Stack alignItems="center" justifyContent="center" spacing={2} >
                            <Avatar
                                alt={`-avatar`}
                                sx={{ width: 150, height: 150 }}
                                src={avatarUrl} />
                            <span>{userName}</span>
                            <span>{location}</span>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={6} >
                    <Stack
                        style={{ display: bio === null ? 'none' : 'flex' }}
                        alignItems="center"
                        justifyContent="center"
                        spacing={2}>
                        <h3>Bio :</h3>
                        <p>{bio}</p>
                        <Button
                            style={{ backgroundColor: 'black' }}
                            variant="contained"
                            href={htmlUrl}
                        >
                            Visit Github Page
                        </Button>
                        <span>Login : {login}</span>
                        <span>Company : {company}</span>
                        <span>Website : {blog}</span>
                    </Stack>
                </Grid>
            </Grid>
        </BorderedLayout>
    )
}

export default UserProfile;