import React from 'react';
import Box from '@mui/material/Box';
import CircularProgress, {
  circularProgressClasses,
} from '@mui/material/CircularProgress';
import {connect} from 'react-redux';



function FacebookCircularProgress(props) {
  return (
    <Box sx={{ position: 'relative' }}>
      <CircularProgress
        variant="determinate"
        sx={{
          color: (theme) =>
            theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
          position: 'absolute',
          right: 0,
        }}
        size={40}
        thickness={4}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="indeterminate"
        disableShrink
        sx={{
          color: (theme) => (theme.palette.mode === 'light' ? '#bdbdbd' : '#efefef'),
          animationDuration: '550ms',
          position: 'absolute',
          right: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: 'round',
          },
        }}
        size={40}
        thickness={4}
        {...props}
      />
    </Box>
  );
}

function ZNProgress(props) {
  return (
    <Box sx={{
      flexGrow: 1,
      width: '100%',
      height: 80,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
        <FacebookCircularProgress />
    </Box>
  );
}

const mapStateToProps = state => {
  return{
    loading: state.home.loading,
    userDetails: state.user.userDetails,
  }
}
export default connect(mapStateToProps, null)(ZNProgress);
