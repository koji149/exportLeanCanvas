import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import DownLoadSpredSheetButtonForTabet from './DownLoadSpredSheetButtonForTabet'

const useStyles = makeStyles((theme) => ({
  buttonGroup: {
    marginTop: "3%",
    marginBottom: "5%",
    marginLeft: 8,
    marginRight: 8,
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    right: 20,
    bottom: 20
  },
  button: {
    flex: "inherit",
    margin:"auto"
  }
}));

const ButtonGroupForTablet = (props) => {
  const classes = useStyles();

  const {
    createLeanCanvas,
    spredSheetUrl,
    isArrivedUrl,
    setIsArrivedUrl
  } = props

  return (
    <Box className={classes.buttonGroup}  >
      <Box className={classes.button}>
        <DownLoadSpredSheetButtonForTabet
          createLeanCanvas={createLeanCanvas}
          spredSheetUrl={spredSheetUrl}
          isArrivedUrl={isArrivedUrl}
          setIsArrivedUrl={setIsArrivedUrl}
        />
      </Box>
    </Box>
  )
}

export default ButtonGroupForTablet;