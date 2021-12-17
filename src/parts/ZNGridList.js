import React from 'react';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';
import UserItem from '../components/UserItemList';
import Grid from '@mui/material/Grid';

//Component
import UserItemChildren from '../components/UserItemChildrenList';


function ZNGridList(props) {
    let { usersResult } = props;

    return (
        <Box sx={{ flexGrow: 1, marginTop: 4, flex: usersResult.length !== 0 ? 'flex' : 'none' }}>
            <Grid container rowSpacing={15}  >
                {usersResult.map((item, index) => (
                    <Grid item xs={4} sm={4} md={4} key={index}>
                        <UserItem>
                            <UserItemChildren
                                // @ts-ignore
                                id={item.id} avatar={item.avatar_url} name={item.login} />
                        </UserItem>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

const mapStateToProps = state => {
    return {
        usersResult: state.home.usersResult,
    }
}
export default connect(mapStateToProps, {})(ZNGridList);