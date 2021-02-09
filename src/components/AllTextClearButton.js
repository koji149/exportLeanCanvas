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

const AllTextClearButton = () => {
  const classes = useStyles();

  return (
      <Tooltip title="すべて消去" arrow>
        <Fab color="default" >
          <FormatClearIcon />
        </Fab>
      </Tooltip>
  );
}

export default AllTextClearButton;