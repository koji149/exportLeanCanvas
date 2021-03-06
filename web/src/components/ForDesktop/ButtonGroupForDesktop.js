import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import DownLoadSpredSheetButton from '../DownLoadSpredSheetButton'
import AllTextClearButton from '../AllTextClearButton'

const useStyles = makeStyles((theme) => ({
  buttonGroup: {
    marginTop: "3%",
    marginBottom: "3%",
    marginLeft: 8,
    marginRight: 8,
    display: "flex",
    flex: 0.1,
    flexDirection: "column"
  },
  button: {
    flex: "inherit",
    margin:"auto"
  }
}));

const ButtonGroupForDesktop = (props) => {
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
    setIsArrivedUrl,
    isNotArrivedUrl,
    setIsNotArrivedUrl
  } = props

  return (
    <Box className={classes.buttonGroup}  >
      <Box flex={0.5} className={classes.button}>
        <DownLoadSpredSheetButton
          createLeanCanvas={createLeanCanvas}
          spredSheetUrl={spredSheetUrl}
          isArrivedUrl={isArrivedUrl}
          setIsArrivedUrl={setIsArrivedUrl}
          isNotArrivedUrl={isNotArrivedUrl}
          setIsNotArrivedUrl={setIsNotArrivedUrl}
        />
      </Box>
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
    </Box>
  )
}

export default ButtonGroupForDesktop;