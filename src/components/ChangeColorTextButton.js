import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import FormatColorTextIcon from '@material-ui/icons/FormatColorText';
import Tooltip from '@material-ui/core/Tooltip';
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


const ChangeColorTextButton = () => {
  const classes = useStyles();
  const [color, setColor] = useState("default");

  const changeColor = () => {
    if (color === "default") {
      setColor("secondary")
    } else {
      setColor("default")
    }
  }
  return (
    <div className={classes.root}>
      <Tooltip title="文字の色を変更" arrow>
        <Fab color={color} className={classes.fab} onClick={changeColor}>
          <FormatColorTextIcon />
        </Fab>
      </Tooltip>
    </div>
  );
}

export default ChangeColorTextButton;