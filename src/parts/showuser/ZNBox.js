import React from 'react';
import Box from '@mui/material/Box';

function ZNBox(props) {
    let {bgcolor, color, text} = props;
    return(
        <Box sx={{
            width: 95,
            bgcolor,
            color,
            borderRadius: 2,
            height: 20,
            fontSize: 12,
            p: 1,
            display: 'flex',
            justifyContent: 'center',
        }}>
            {text}
        </Box>
    )
}

export default ZNBox;