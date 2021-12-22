import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

//Component
import BorderedLayout from '../../parts/showuser/BorderedLayout';
import ZNBox from '../../parts/showuser/ZNBox';

function UserSummaryDetails(props) {
    let {followers, following, publicRepo, publicGists} =props;
    return (
        <BorderedLayout
            paddingTop={2}
            paddingBottom={2}
            justifyContent="center"
            alignItems="center"
            gridColumn="span 12"
        >
            <Grid container spacing={2}>
                <Grid item xs={3} />
                <Grid item xs={6}>
                    <Stack direction="row" justifyContent="space-around">
                        <ZNBox
                            bgcolor='text.disabled'
                            color='background.paper'
                            text={`Followers : ${followers}`}
                        />

                        <ZNBox
                            bgcolor='error.main'
                            color='error.contrastText'
                            text={`Folloing : ${following}`}
                        />

                        <ZNBox
                            bgcolor='success.main'
                            color='success.contrastText'
                            text={`Public Repos : ${publicRepo === undefined ? 0 : publicRepo}`}
                        />

                        <ZNBox
                            bgcolor='text.primary'
                            color='background.paper'
                            text={`Public Gists : ${publicGists === undefined ? 0 : publicGists}`}
                        />

                    </Stack>
                </Grid>
                <Grid item xs={3} />
            </Grid>
        </BorderedLayout>
    )
}

export default UserSummaryDetails;