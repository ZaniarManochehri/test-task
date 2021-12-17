import React from 'react';
import Box from '@mui/material/Box';

function ZNBox(props) {
    let {bgcolor, color, text} = props;
    return(
        <Box sx={{
            width: 130,
            bgcolor,
            color,
            borderRadius: 2,
            height: 20,
            p: 1
        }}>
            {text}
        </Box>
    )
}

export default ZNBox;