import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import DownLoadSpredSheetButton from '../DownLoadSpredSheetButton'
import AllTextClearButton from '../AllTextClearButton'
import ChangeColorTextButton from '../ChangeColorTextButton'

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

  const createLeanCanvas = props.createLeanCanvas
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

  return (
    <Box className={classes.buttonGroup}  >
      <Box flex={0.5} className={classes.button}>
        <DownLoadSpredSheetButton createLeanCanvas={createLeanCanvas}/>
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