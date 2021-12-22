import React from 'react';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { connect } from 'react-redux';

//Component
import {handleChangeSearchInputValue, handleSearchForUsers} from '../../store/action';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    border: '1px solid #ced4da',
    fontSize: 24,
    padding: '5px 8px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '&:focus': {
      boxShadow: `${alpha('#000', 0.9)} 0 0 0 0.1rem`,
      borderColor: 'black',
    },
  },
}));

function ZNInput(props) {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      props.handleSearchForUsers(event.target.value);
    }
  }

  return (
    <BootstrapInput
      fullWidth defaultValue={props.searchInputValue}
      value={props.searchInputValue}
      onChange={event => props.handleChangeSearchInputValue(event)}
      onKeyDown={(event) => handleKeyDown(event)}
      placeholder="Search User..."
      autoComplete='off'
      id="bootstrap-input" />
  )
}

const mapStateToProps = state => {
  return {
    searchInputValue: state.home.searchInputValue,
  }
}

export default connect(mapStateToProps, { handleChangeSearchInputValue, handleSearchForUsers })(ZNInput);