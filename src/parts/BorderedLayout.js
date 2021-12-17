import React from 'react';
import Box from '@mui/material/Box';

function BorderedLayout(props) {
    let {
        gridColumn = "span 4",
        width,
        height,
        flexDirection,
        alignItems,
        justifyContent,
        paddingLeft,
        paddingRight,
        paddingTop,
        paddingBottom,
    } = props;
    return (
        <Box
            border={1}
            borderColor="divider"
            gridColumn={gridColumn}
            sx={{
                width,
                height,
                backgroundColor: 'white',
                display: 'flex',
                flexDirection,
                alignItems,
                justifyContent,
                paddingLeft,
                paddingRight,
                paddingTop,
                paddingBottom,
            }}
        >
            {props.children}
        </Box>
    );
}

export default BorderedLayout;
