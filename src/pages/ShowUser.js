import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from "react-router-dom";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import { pink } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';

//Component
import ZNButton from "../parts/ZNButton";
import UserProfile from "../components/UserProfile";
import UserSummaryDetails from "../components/UserSummaryDetails";
import UserDetailsItem from "../components/UserDetailsItem";
import { handleGetUserDetails } from '../store/action';

function ShowUser(props) {
    let params = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        props.handleGetUserDetails(params.name);
    }, [])

    let hireableIcon = <CloseIcon sx={{ color: pink[500] }} />;
    let { userDetails } = props;
    if (userDetails !== undefined) {
        let hireable = userDetails.hireable;
        if (hireable !== null) {
            console.log(hireable)
            hireableIcon = hireable ? <CheckIcon color="success" /> : <CloseIcon sx={{ color: pink[500] }} />
        }
    }

    return (
        <Box sx={{ flexGrow: 1, paddingRight: 20, paddingLeft: 20 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Stack alignItems="center" justifyContent="flex-start" direction="row" spacing={2}>
                        <ZNButton
                            // @ts-ignore
                            text="Back To Search"
                            backgroundColor="#f4f4f4"
                            color="#333"
                            width={200}
                            onClick={() => navigate('/')}
                        />
                        <span>hireable:</span>
                        {hireableIcon}
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <UserProfile
                        userName={params.name}
                        url={userDetails !== undefined ? userDetails.url : ''}
                        login={userDetails !== undefined ? userDetails.login : ''}
                        company={userDetails !== undefined ? userDetails.company : ''}
                        blog={userDetails !== undefined ? userDetails.blog : ''}
                        bio={userDetails !== undefined ? userDetails.bio : null}
                        avatarUrl={userDetails !== undefined ? userDetails.avatar_url : ''} />
                </Grid>
                <Grid item xs={12}>
                    <UserSummaryDetails
                        followers={userDetails !== undefined ? userDetails.followers : 0}
                        following={userDetails !== undefined ? userDetails.following : 0}
                        publicRepo={userDetails !== undefined ? userDetails.public_repos : 0}
                        publicGists={userDetails !== undefined ? userDetails.public_gists : 0}
                    />
                </Grid>
                {
                    props.userRepos.map(item => (
                        <Grid item xs={12} key={item.id}>
                            <UserDetailsItem text={item.name} url={item.html_url} />
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    );
}

const mapStateToProps = state => {
    return {
        userDetails: state.user.userDetails,
        userRepos: state.user.userRepos,
    }
}

export default connect(mapStateToProps, { handleGetUserDetails })(ShowUser);