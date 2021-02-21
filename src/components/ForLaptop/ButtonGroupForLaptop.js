import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import DownLoadSpredSheetButton from '../DownLoadSpredSheetButton'
import AllTextClearButton from '../AllTextClearButton'

const useStyles = makeStyles((theme) => ({
  buttonGroup: {
    marginBottom: "10%",
    marginLeft: 8,
    marginRight: 8,
    display: "flex",
    flexDirection: "row"
  },
  button: {
    flex: "inherit",
    margin:"auto"
  }
}));

const ButtonGroupForLaptop = (props) => {
  const classes = useStyles();

  const {
    setProblem,
    setAlternatives,
    setCustomer,
    setEarlyAdopters,
    setUniqueValue,
    setSolution,
    setChannels,
    setRevenue,
    setCost,
    setKeyMetrics,
    setUnfairAdvantage,
    createLeanCanvas,
    allTextClear,
    spredSheetUrl,
    isArrivedUrl,
    setIsArrivedUrl
  } = props

  return (
    <Box className={classes.buttonGroup}  >

      <Box flex={0.5} className={classes.button}>
        <AllTextClearButton
          allTextClear={allTextClear}
          setProblem={setProblem}
          setAlternatives={setAlternatives}
          setCustomer={setCustomer}
          setEarlyAdopters={setEarlyAdopters}
          setUniqueValue={setUniqueValue}
          setSolution={setSolution}
          setChannels={setChannels}
          setRevenue={setRevenue}
          setCost={setCost}
          setKeyMetrics={setKeyMetrics}
          setUnfairAdvantage={setUnfairAdvantage}
        />
      </Box>
      <Box flex={0.5} className={classes.button}>
        <DownLoadSpredSheetButton
          createLeanCanvas={createLeanCanvas}
          spredSheetUrl={spredSheetUrl}
          isArrivedUrl={isArrivedUrl}
          setIsArrivedUrl={setIsArrivedUrl}
        />
      </Box>
    </Box>
  )
}

export default ButtonGroupForLaptop;