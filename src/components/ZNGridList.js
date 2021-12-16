import React from 'react';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';
import UserItem from '../parts/UserItem';
import Grid from '@mui/material/Grid';

//Component
import UserItemChildren from '../parts/UserItemChildren';


function ZNGridList(props) {
    let { usersResult } = props;
    const renderView = () => {
        if (usersResult.length !== 0) {
            return (
                <Box sx={{ flexGrow: 1, marginTop: 4 }}>
                    <Grid container rowSpacing={15}  >
                        {usersResult.map((_, index) => (
                            <Grid item xs={4} sm={4} md={4} key={index}>
                                <UserItem>
                                    <UserItemChildren />
                                </UserItem>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            )
        } else {
            return null;
        }
    }

    return (
        <>
            {renderView()}
        </>
    )
}

const mapStateToProps = state => {
    return {
        usersResult: state.home.usersResult,
    }
}
export default connect(mapStateToProps, {})(ZNGridList);