import React from 'react';
import {connect} from 'react-redux';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ZNInput from '../components/ZNInput';
import ZNButton from '../components/ZNButton';
import ZNAlert from '../components/ZNAlert';
import ZNGridList from '../components/ZNGridList';
import { handleSearchForUsers } from '../store/action';

function Home(props) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container columnSpacing={{ xs: 0, sm: 0, md: 2 }}>

                <Grid item xs />

                <Grid item xs={8}>
                    <ZNAlert />
                    <ZNInput />
                    <ZNButton
                        // @ts-ignore
                        text="Submit"
                        backgroundColor="black"
                        onClick={() => props.handleSearchForUsers(props.searchInputValue)}
                    />
                    <ZNButton
                        // @ts-ignore
                        text="Clear"
                        backgroundColor="#f4f4f4"
                        display={props.usersResult.length !== 0 ? 'flex' : 'none'}
                        color="#333"
                        onClick={() => props.handleSearchForUsers(props.searchInputValue)}
                    />
                    <ZNGridList />
                </Grid>

                <Grid item xs />

            </Grid>
        </Box>
    )
}

const mapStateToProps = state => {
    return{
        searchInputValue: state.home.searchInputValue,
        usersResult: state.home.usersResult,
    }
}

export default connect(mapStateToProps, {handleSearchForUsers})(Home);