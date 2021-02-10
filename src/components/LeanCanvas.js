import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import {
  fade,
} from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    marginLeft: 8,
    marginRight: 8
  },
  leanCanvas: {
    marginTop: "3%",
    marginBottom: "3%",
    marginLeft: 8,
    marginRight: 8
  },
  gridItem: {
    position: 'relative'
  },
  title: {
    fontSize: 14,
  },
  toolTipSmall: {
    position: 'absolute',
    zIndex: 2,
    top:10,
    right: 10
  },
  toolTipMedium: {
    position: 'absolute',
    zIndex: 2,
    top: 10,
    right: 10
  },
  toolTipLarge: {
    position: 'absolute',
    zIndex: 2,
    top: 10,
    right: 10
  },
  color: {
    color: "red"
  }
});


const useStylesFormSmall = makeStyles((theme) => ({
  root: {
    borderTop: '2px solid #e2e2e1',
    borderBottom: '2px solid #e2e2e1',
    borderLeft: '2px solid #e2e2e1',
    borderRight: '2px solid #e2e2e1',
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
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px inset`,
      borderColor: theme.palette.primary.main,
    },
  },
  focused: {},
}));
const useStylesFormMedium = makeStyles((theme) => ({
  root: {
    borderTop: '4px solid #e2e2e1',
    borderBottom: '4px solid #e2e2e1',
    borderLeft: '2px solid #e2e2e1',
    borderRight: '2px solid #e2e2e1',
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
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px inset`,
      borderColor: theme.palette.primary.main,
    },
  },
  focused: {},
}));

const FormTextField = ({formType, ...props}) => {
  const FormMedium = useStylesFormMedium()
  const FormSmall = useStylesFormSmall()
  const classes = formType ? FormMedium : FormSmall

  return <TextField InputProps={{ classes, disableUnderline: true }} {...props} />;
}

const LeanCanvas = (props) => {
  const classes = useStyles();

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
    <Box flex={0.9}>
      <Box display="flex" flexDirection="column" className={classes.leanCanvas}>
        <Paper elevation={3} >
          <Box flex={0.8}>
          <Grid container direction="row" justify="center" alignItems="center" >
            <Grid item xs >
              <Grid container direction="column" justify="center" alignItems="center" item xs className={classes.gridItem}>
                <Tooltip title="上位三つの課題を記載します。" placement="top" className={classes.toolTipSmall}>
                  <InfoOutlinedIcon color="action" />
                </Tooltip>
                  <FormTextField
                    label="➀課題"
                    className={classes.color}
                    variant="filled"
                    id="form-input"
                    formType={false}
                    multiline 
                    rows={7} 
                    fullWidth
                    value={problem} 
                    onChange={e => setProblem(e.target.value)}
                  />
              </Grid>
              <Grid item xs className={classes.gridItem}>
                <Tooltip title="既存の代替品を記載します。" placement="top" className={classes.toolTipSmall}>
                  <InfoOutlinedIcon color="action" />
                </Tooltip>
                <FormTextField
                  label="➁既存の代替品"
                  className={classes.margin}
                  variant="filled"
                  id="form-input"
                  formType={false}
                  multiline
                  rows={7}
                  fullWidth
                  value={alternatives} 
                  onChange={e => setAlternatives(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid item xs>
              <Grid container direction="column" justify="center" alignItems="center" item xs className={classes.gridItem}>
                <Tooltip title="具体的な解決策の上位三つを記載します。" placement="top" className={classes.toolTipSmall}>
                  <InfoOutlinedIcon color="action" />
                </Tooltip>
                <FormTextField
                    label="➅ソリューション"
                    className={classes.margin}
                    variant="filled"
                    id="form-input"
                    formType={false}
                    multiline
                    rows={7}
                    fullWidth
                    value={solution} 
                    onChange={e => setSolution(e.target.value)}
                  />
              </Grid>
              <Grid item xs className={classes.gridItem}>
                <Tooltip title="PMFにたどり着くまでに計測すべき指標を記載します。" placement="top" className={classes.toolTipSmall}>
                    <InfoOutlinedIcon color="action" />
                </Tooltip>
                <FormTextField
                  label="➉主要指標"
                  className={classes.margin}
                  variant="filled"
                  id="form-input"
                  formType={false}
                  multiline
                  rows={7}
                  fullWidth
                  value={keyMetrics} 
                  onChange={e => setKeyMetrics(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid item xs className={classes.gridItem}>
              <Tooltip title="他とは違っていて注目する価値がある理由を記載します。" placement="top" className={classes.toolTipMedium}>
                  <InfoOutlinedIcon color="action" />
              </Tooltip>
              <FormTextField
                  label="➄独自の価値提案"
                  className={classes.margin}
                  variant="filled"
                  id="form-input"
                  formType={true}
                  multiline
                  rows={16}
                  fullWidth
                  value={uniqueValue} 
                  onChange={e => setUniqueValue(e.target.value)}
                />
            </Grid>
            <Grid item xs>
              <Grid container direction="column" justify="center" alignItems="center" item xs className={classes.gridItem}>
                <Tooltip title="競合に対しての圧倒的な優位性を記載します。" placement="top" className={classes.toolTipSmall}>
                  <InfoOutlinedIcon color="action" />
                </Tooltip>
                <FormTextField
                  label="⑪圧倒的な優位性"
                  className={classes.margin}
                  variant="filled"
                  id="form-input"
                  formType={false}
                  multiline
                  rows={7}
                  fullWidth
                  value={unfairAdvantage} 
                  onChange={e => setUnfairAdvantage(e.target.value)}
                />
              </Grid>
              <Grid item xs className={classes.gridItem}>
                <Tooltip title="顧客にリーチする経路を記載します。" placement="top" className={classes.toolTipSmall}>
                  <InfoOutlinedIcon color="action" />
                </Tooltip>
                <FormTextField
                  label="➆チャネル"
                  className={classes.margin}
                  variant="filled"
                  id="form-input"
                  formType={false}
                  multiline
                  rows={7}
                  fullWidth
                  value={channels} 
                  onChange={e => setChannels(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid item xs>
              <Grid container direction="column" justify="center" alignItems="center" item xs className={classes.gridItem}>
                <Tooltip title="顧客の特徴を記載します。" placement="top" className={classes.toolTipSmall}>
                  <InfoOutlinedIcon color="action" />
                </Tooltip>
                  <FormTextField
                    label="➂顧客セグメント"
                    className={classes.margin}
                    variant="filled"
                    id="form-input"
                    formType={false}
                    multiline
                    rows={7}
                    fullWidth
                    value={customer} 
                    onChange={e => setCustomer(e.target.value)}
                  />
              </Grid>
              <Grid container direction="column" justify="center" alignItems="center" item xs className={classes.gridItem}>
                <Tooltip title="課題に対して積極的に代替策を探している人の特徴を記載します。" placement="top" className={classes.toolTipSmall}>
                  <InfoOutlinedIcon color="action" />
                </Tooltip>
                  <FormTextField
                    label="➃アーリーアダプター"
                    className={classes.margin}
                    variant="filled"
                    id="form-input"
                    formType={false}
                    multiline
                    rows={7}
                    fullWidth
                    value={earlyAdopters} 
                    onChange={e => setEarlyAdopters(e.target.value)}
                  />
                </Grid>
            </Grid>
          </Grid>
          </Box>
          <Box flex={0.2} className={classes.gridItem}>
            <Grid container direction="row" justify="center" alignItems="center" >
              <Grid item xs className={classes.gridItem}>
                <Tooltip title="市場に送り出すまでにかかるコストを記載します。" placement="top" className={classes.toolTipLarge}>
                  <InfoOutlinedIcon color="action" />
                </Tooltip>
                <FormTextField
                  label="➈コスト構造"
                  className={classes.margin}
                  variant="filled"
                  id="form-input"
                  formType={false}
                  multiline
                  rows={7}
                  fullWidth
                  value={revenue} 
                  onChange={e => setRevenue(e.target.value)}
                />
              </Grid>
              <Grid item xs className={classes.gridItem}>
                <Tooltip title="どのような課金形態になるのかを記載します。" placement="top" className={classes.toolTipLarge}>
                  <InfoOutlinedIcon color="action" />
                </Tooltip>
                <FormTextField
                  label="➇収益の流れ"
                  className={classes.margin}
                  variant="filled"
                  id="form-input"
                  formType={false}
                  multiline
                  rows={7}
                  fullWidth
                  value={cost} 
                  onChange={e => setCost(e.target.value)}
                />
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>
    </Box>
  )
}

export default LeanCanvas