import React, {useState, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import LeanCanvas from './LeanCanvas'
import ButtonGroup from './ButtonGroup'

import AppContext from "../contexts/AppContext"
import {ALL_TEXT_CLEAR, CREATE_LEAN_CANVAS} from "../actions"

const useStyles = makeStyles({
  root: {
    width: "100%",
    flex: 1,
    minHeight: "100vh",
    position: "relative",
    paddingBottom: 25,
    boxSizing: 'border-box'
  },
  main: {
    marginLeft: 8,
    marginRight: 8,
  },
});

const Main = () => {
  const classes = useStyles();

  const [problem, setProblem] = useState("")
  const [alternatives, setAlternatives] = useState("")
  const [customer, setCustomer] = useState("")
  const [earlyAdopters, setEarlyAdopters] = useState("")
  const [uniqueValue, setUniqueValue] = useState("")
  const [solution, setSolution] = useState("")
  const [channels, setChannels] = useState("")
  const [revenue, setRevenue] = useState("")
  const [cost, setCost] = useState("")
  const [keyMetrics, setKeyMetrics] = useState("")
  const [unfairAdvantage, setUnfairAdvantage] = useState("")
  console.log(problem)

  const { state, dispatch} = useContext(AppContext)

  const createLeanCanvas = e => {
    console.log("createLeanCanvasまで来た")
    dispatch({
      type: CREATE_LEAN_CANVAS,
      problem,
      alternatives,
      customer,
      earlyAdopters,
      uniqueValue,
      solution,
      channels,
      revenue,
      cost,
      keyMetrics,
      unfairAdvantage
    })
  }

  const allTextClear = e => {
    console.log("deleteLeanCanvasまで来た")
    dispatch({
      type: ALL_TEXT_CLEAR,
    })
  }

  return (
    <Box display="flex" flexDirection="row" className={classes.main}>
      <LeanCanvas
        problem={problem}
        setProblem={setProblem}
        alternatives={alternatives}
        setAlternatives={setAlternatives}
        customer={customer}
        setCustomer={setCustomer}
        earlyAdopters={earlyAdopters}
        setEarlyAdopters={setEarlyAdopters}
        uniqueValue={uniqueValue}
        setUniqueValue={setUniqueValue}
        solution={solution}
        setSolution={setSolution}
        channels={channels}
        setChannels={setChannels}
        revenue={revenue}
        setRevenue={setRevenue}
        cost={cost}
        setCost={setCost}
        keyMetrics={keyMetrics}
        setKeyMetrics={setKeyMetrics}
        unfairAdvantage={unfairAdvantage}
        setUnfairAdvantage={setUnfairAdvantage}
        />
      <ButtonGroup
        createLeanCanvas={createLeanCanvas} 
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
  )
}

export default Main;