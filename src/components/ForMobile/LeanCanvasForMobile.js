import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import {
  fade,
} from '@material-ui/core/styles';

import TextClearButtonForMobile from './TextClearButtonForMobile'

const useStyles = makeStyles({
  root: {
    paddingBottom: 150
  },
  container: {
    marginTop: "3%",
    marginBottom: "3%",
    marginLeft: 8,
    marginRight: 8,
    display: "flex",
    flexDirection: "column"
  },
  glidItemsHorizontal: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  glidItem: {
    position: 'relative',
  },
  gridItemTwoRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  color: {
    color: "red"
  }
});


const useStylesForm = makeStyles((theme) => ({
  root: {
    borderTop: '3px solid #e2e2e1',
    borderBottom: '3px solid #e2e2e1',
    borderLeft: '3px solid #e2e2e1',
    borderRight: '3px solid #e2e2e1',
    overflow: 'hidden',
    borderRadius: 0,
    backgroundColor: '#fff',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:hover': {
      backgroundColor: '#fafafa',
      borderColor: "#c8c8c8",
    },
    '&$focused': {
      backgroundColor: '#fff',
      boxshadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px inset`,
      borderColor: theme.palette.primary.main,
    },
  },
  focused: {},
}));

const FormTextField = ({...props}) => {
  const classes = useStylesForm()
  return <TextField InputProps={{ classes, disableUnderline: true }} {...props} />;
}

const LeanCanvasForMobile = (props) => {
  const classes = useStyles();
  const textClear = props.textClear
  const problem = props.problem
  const setProblem = props.setProblem
  const alternatives = props.alternatives
  const setAlternatives = props.setAlternatives
  const customer = props.customer
  const setCustomer = props.setCustomer
  const earlyAdopters = props.earlyAdopters
  const setEarlyAdopters = props.setEarlyAdopters
  const uniqueValue = props.uniqueValue
  const setUniqueValue = props.setUniqueValue
  const solution = props.solution
  const setSolution = props.setSolution
  const channels = props.channels
  const setChannels = props.setChannels
  const revenue = props.revenue
  const setRevenue = props.setRevenue
  const cost = props.cost
  const setCost = props.setCost
  const keyMetrics = props.keyMetrics
  const setKeyMetrics = props.setKeyMetrics
  const unfairAdvantage = props.unfairAdvantage
  const setUnfairAdvantage = props.setUnfairAdvantage


  return (
    <Box className={classes.root}>
      <Box className={classes.container}>
        <Paper elevation={3} >
              <Grid item xs className={classes.glidItem}>
              <TextClearButtonForMobile setProblem={setProblem} textClear={textClear}/>
                  <FormTextField
                    label="➀課題"
                    variant="filled"
                    id="form-input"
                    multiline 
                    rows={7} 
                    fullWidth
                    value={problem} 
                    onChange={e => setProblem(e.target.value)}
                  />
              </Grid>
              <Grid item xs className={classes.glidItem}>
                <TextClearButtonForMobile setAlternatives={setAlternatives} textClear={textClear}/>
                <FormTextField
                  label="➁既存の代替品"
                  variant="filled"
                  id="form-input"
                  multiline
                  rows={7}
                  fullWidth
                  value={alternatives} 
                  onChange={e => setAlternatives(e.target.value)}
                />
              </Grid>
              <Grid item xs className={classes.glidItem}>
              <TextClearButtonForMobile setCustomer={setCustomer} textClear={textClear}/>
                  <FormTextField
                    label="➂顧客セグメント"
                    variant="filled"
                    id="form-input"
                    multiline
                    rows={7}
                    fullWidth
                    value={customer} 
                    onChange={e => setCustomer(e.target.value)}
                  />
              </Grid>
              <Grid item xs className={classes.glidItem}>
              <TextClearButtonForMobile setEarlyAdopters={setEarlyAdopters} textClear={textClear}/>
                  <FormTextField
                    label="➃アーリーアダプター"
                    className={classes.margin}
                    variant="filled"
                    id="form-input"
                    multiline
                    rows={7}
                    fullWidth
                    value={earlyAdopters} 
                    onChange={e => setEarlyAdopters(e.target.value)}
                  />
              </Grid>
              <Grid item xs className={classes.glidItem}>
              <TextClearButtonForMobile setUniqueValue={setUniqueValue} textClear={textClear}/>
                <FormTextField
                    label="➄独自の価値提案"
                    variant="filled"
                    id="form-input"
                    multiline
                    rows={7}
                    fullWidth
                    value={uniqueValue} 
                    onChange={e => setUniqueValue(e.target.value)}
                  />
              </Grid>
              <Grid item xs className={classes.glidItem}>
              <TextClearButtonForMobile setSolution={setSolution} textClear={textClear}/>
                <FormTextField
                    label="➅ソリューション"
                    variant="filled"
                    id="form-input"
                    multiline
                    rows={7}
                    fullWidth
                    value={solution} 
                    onChange={e => setSolution(e.target.value)}
                  />
              </Grid>
              <Grid item xs className={classes.glidItem}>
              <TextClearButtonForMobile setChannels={setChannels} textClear={textClear}/>
                <FormTextField
                  label="➆チャネル"
                  className={classes.margin}
                  variant="filled"
                  id="form-input"
                  multiline
                  rows={7}
                  fullWidth
                  value={channels} 
                  onChange={e => setChannels(e.target.value)}
                />
              </Grid>
              <Grid item xs className={classes.glidItem}>
              <TextClearButtonForMobile setRevenue={setRevenue} textClear={textClear}/>
                <FormTextField
                  label="➇収益の流れ"
                  className={classes.margin}
                  variant="filled"
                  id="form-input"
                  multiline
                  rows={7}
                  fullWidth
                  value={cost} 
                  onChange={e => setCost(e.target.value)}
                />
              </Grid>
              <Grid item xs className={classes.glidItem}>
              <TextClearButtonForMobile setCost={setCost} textClear={textClear}/>
                <FormTextField
                  label="➈コスト構造"
                  className={classes.margin}
                  variant="filled"
                  id="form-input"
                  multiline
                  rows={7}
                  fullWidth
                  value={revenue} 
                  onChange={e => setRevenue(e.target.value)}
                />
              </Grid>
              <Grid item xs className={classes.glidItem}>
              <TextClearButtonForMobile setKeyMetrics={setKeyMetrics} textClear={textClear}/>
                <FormTextField
                  label="➉主要指標"
                  variant="filled"
                  id="form-input"
                  multiline
                  rows={7}
                  fullWidth
                  value={keyMetrics} 
                  onChange={e => setKeyMetrics(e.target.value)}
                />
              </Grid>
              <Grid item xs className={classes.glidItem}>
              <TextClearButtonForMobile setUnfairAdvantage={setUnfairAdvantage} textClear={textClear}/>
                <FormTextField
                  label="⑪圧倒的な優位性"
                  variant="filled"
                  id="form-input"
                  multiline
                  rows={7}
                  fullWidth
                  value={unfairAdvantage} 
                  onChange={e => setUnfairAdvantage(e.target.value)}
                />
              </Grid>
        </Paper>
      </Box>
    </Box>
  )
}

export default LeanCanvasForMobile;