import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  fab: {
      position: 'absolute',
      zIndex: 2,
      right: 3,
      padding: 8
    },
}));

const TextClearButtonForTablet = (props) => {
  const classes = useStyles();

  const thisTextClear = props.textClear
  const textClear = () => {
    if (props.setProblem) {props.setProblem("") }
    if (props.setAlternatives) props.setAlternatives("")
    if (props.setCustomer) props.setCustomer("")
    if (props.setEarlyAdopters) props.setEarlyAdopters("")
    if (props.setUniqueValue) props.setUniqueValue("")
    if (props.setSolution) props.setSolution("")
    if (props.setChannels) props.setChannels("")
    if (props.setRevenue) props.setRevenue("")
    if (props.setCost) props.setCost("")
    if (props.setKeyMetrics) props.setKeyMetrics("")
    if (props.setUnfairAdvantage) props.setUnfairAdvantage("")
  }

  return (
    <IconButton aria-label="delete" size="medium" onClick={textClear} className={classes.fab}>
      <DeleteIcon />
    </IconButton>
  );
}

export default TextClearButtonForTablet;