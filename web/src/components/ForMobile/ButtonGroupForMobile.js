import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import DownLoadSpredSheetButtonForMobile from './DownLoadSpredSheetButtonForMobile';

const useStyles = makeStyles((theme) => ({
  buttonGroup: {
    marginTop: "3%",
    marginBottom: "5%",
    marginLeft: 8,
    marginRight: 8,
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    right: 10,
    bottom: 20,
    zIndex: 3
  },
  button: {
    flex: "inherit",
    margin:"auto"
  }
}));

const ButtonGroupForMobile = (props) => {
  const classes = useStyles();
  const {
    createLeanCanvas,
    spredSheetUrl,
    isArrivedUrl,
    setIsArrivedUrl,
    isNotArrivedUrl,
    setIsNotArrivedUrl
  } = props

  return (
    <Box className={classes.buttonGroup}  >
      <Box className={classes.button}>
        <DownLoadSpredSheetButtonForMobile
          createLeanCanvas={createLeanCanvas}
          spredSheetUrl={spredSheetUrl}
          isArrivedUrl={isArrivedUrl}
          setIsArrivedUrl={setIsArrivedUrl}
          isNotArrivedUrl={isNotArrivedUrl}
          setIsNotArrivedUrl={setIsNotArrivedUrl}
        />
      </Box>
    </Box>
  )
}

export default ButtonGroupForMobile;