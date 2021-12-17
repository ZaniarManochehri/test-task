import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { connect } from 'react-redux';

function ZNButton(props) {
    const { backgroundColor, text, display, color, onClick, width = '100%' } = props;
    const ColorButton = styled(Button)(({ theme }) => ({
        marginTop: 20,
        width,
        fontSize: 20,
        backgroundColor,
        color,
        display,
        textTransform: 'none',
        '&:hover': {
            backgroundColor,
        },
    }));

    return (
        <ColorButton
            variant="contained"
            onClick={onClick}>
            {text}
        </ColorButton>
    );
}

const mapStateToProps = state => {
    return {
    }
}

export default connect(mapStateToProps, null)(ZNButton);