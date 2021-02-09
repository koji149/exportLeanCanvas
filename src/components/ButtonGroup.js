import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import DownLoadSpredSheetButton from './DownLoadSpredSheetButton'
import AllTextClearButton from './AllTextClearButton'
import ChangeColorTextButton from './ChangeColorTextButton'

const useStyles = makeStyles((theme) => ({
  buttonGroup: {
    marginTop: "3%",
    marginBottom: "3%",
    marginLeft: 8,
    marginRight: 8,
    
  },
  button: {
    flex: "inherit",
    margin:"auto"
  }
}));

const ButtonGroup = (props) => {
  const classes = useStyles();

  const createLeanCanvas = props.createLeanCanvas
  return (
    <Box flex={0.1} className={classes.buttonGroup} display="flex" flexDirection="column" >
      <Box flex={0.5} className={classes.button}>
        <DownLoadSpredSheetButton createLeanCanvas={createLeanCanvas}/>
      </Box>
      <Box flex={0.25} >
      </Box>
      <Box flex={0.25} className={classes.button}>
        <AllTextClearButton />
      </Box>
      <Box flex={0.25} className={classes.button}>
        <ChangeColorTextButton />
      </Box>
    </Box>
  )
}

export default ButtonGroup;