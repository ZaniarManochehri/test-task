import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import { connect } from 'react-redux';

function ZNAlert(props) {

  return (
    <Box sx={{ width: '100%', marginTop: 2, marginBottom: 1, }}>
      <Collapse in={props.alertOpen}>
        <Alert
          severity="info"
          color="info"
          sx={{ mb: 2 }}
        >
          Please enter something
        </Alert>
      </Collapse>
    </Box>
  );
}

const mapStateToProps = state => {
  return {
    alertOpen: state.home.alertOpen,
  }
}

export default connect(mapStateToProps, null)(ZNAlert);