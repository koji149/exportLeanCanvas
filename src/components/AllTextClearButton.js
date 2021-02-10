import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import FormatClearIcon from '@material-ui/icons/FormatClear';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  fab: {
    margin: theme.spacing(2),
  },
}));

const AllTextClearButton = (props) => {
  const classes = useStyles();

  const allTextClear = props.allTextClear
  const setProblem = props.setProblem
  const setAlternatives = props.setAlternatives
  const setCustomer = props.setCustomer
  const setEarlyAdopters = props.setEarlyAdopters
  const setUniqueValue = props.setUniqueValue
  const setSolution = props.setSolution
  const setChannels = props.setChannels
  const setRevenue = props.setRevenue
  const setCost = props.setCost
  const setKeyMetrics = props.setKeyMetrics
  const setUnfairAdvantage = props.setUnfairAdvantage

  const allClear = () => {
    allTextClear()
    setProblem("")
    setAlternatives("")
    setCustomer("")
    setEarlyAdopters("")
    setUniqueValue("")
    setSolution("")
    setChannels("")
    setRevenue("")
    setCost("")
    setKeyMetrics("")
    setUnfairAdvantage("")
  }

  return (
      <Tooltip title="すべて消去" arrow>
        <Fab color="default" onClick={allClear}>
          <FormatClearIcon />
        </Fab>
      </Tooltip>
  );
}

export default AllTextClearButton;