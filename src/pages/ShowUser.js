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
import ZNProgress from '../parts/ZNProgress';

function ShowUser(props) {
    let params = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        props.handleGetUserDetails(params.name);
    }, [])

    let showUserView = () => {
        let { userDetails, loading } = props;
        if (loading) {
            return <ZNProgress />
        } else {
            let hireableIcon = <CloseIcon sx={{ color: pink[500] }} />;
            let hireable = userDetails.hireable;
            if (hireable !== null) {
                hireableIcon = hireable ? <CheckIcon color="success" /> : <CloseIcon sx={{ color: pink[500] }} />
            }
            return (
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
                            url={userDetails.url}
                            htmlUrl={userDetails.html_url}
                            login={userDetails.login}
                            company={userDetails.company}
                            blog={userDetails.blog}
                            bio={userDetails.bio}
                            location={userDetails.location}
                            avatarUrl={userDetails.avatar_url} />
                    </Grid>
                    <Grid item xs={12}>
                        <UserSummaryDetails
                            followers={userDetails.followers}
                            following={userDetails.following}
                            publicRepo={userDetails.public_rep}
                            publicGists={userDetails.public_gi}
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
            )
        }
    }


    return (
        <Box sx={{ flexGrow: 1, paddingRight: 20, paddingLeft: 20 }}>
            {showUserView()}
        </Box>
    );
}

const mapStateToProps = state => {
    return {
        userDetails: state.user.userDetails,
        userRepos: state.user.userRepos,
        loading: state.user.loading,
    }
}

export default connect(mapStateToProps, { handleGetUserDetails })(ShowUser);