import React from 'react';
import Box from '@mui/material/Box';

function UserItem(props) {
  return (
    <Box
      border={1}
      borderColor="divider"
      gridColumn="span 4"
      sx={{
        width: '97%',
        height: '150%',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {props.children}
    </Box>
  );
}

export default UserItem;
