import React, {useEffect, useRef} from 'react';
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
    flex: 0.9
  },
  container: {
    marginTop: "3%",
    marginBottom: "3%",
    marginLeft: 8,
    marginRight: 8,
    display: "flex",
    flexDirection: "column"
  },
  containerTopRatio: {
    flex: 0.8
  },
  topContent:{
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  gridItemTwoVertical: {
    position: 'relative',
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  gridItemOnlyOne: {
    position: 'relative',
  },
  containerBottomRatio: {
    flex: 0.2
  },
  gridItemTwoRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  toolTipSmall: {
    position: 'absolute',
    zIndex: 2,
    top:8,
    right: 10
  },
  toolTipMedium: {
    position: 'absolute',
    zIndex: 2,
    top: 8,
    right: 10
  },
  toolTipLarge: {
    position: 'absolute',
    zIndex: 2,
    top: 8,
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
      boxshadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px inset`,
      borderColor: theme.palette.primary.main,
    },
  },
  focused: {},
}));
const useStylesFormMedium = makeStyles((theme) => ({
  root: {
    borderTop: '4px solid #e2e2e1',
    borderBottom: '3px solid #e2e2e1',
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
      boxshadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px inset`,
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

const LeanCanvasForDesktop = (props) => {
  const classes = useStyles();

  const {
    problem,
    setProblem,
    alternatives,
    setAlternatives,
    customer,
    setCustomer,
    earlyAdopters,
    setEarlyAdopters,
    uniqueValue,
    setUniqueValue,
    solution,
    setSolution,
    channels,
    setChannels,
    revenue,
    setRevenue,
    cost,
    setCost,
    keyMetrics,
    setKeyMetrics,
    unfairAdvantage,
    setUnfairAdvantage
  } = props

  const PLOBLEM_KEY = 'problem'
  const ALTERNATIVES_KEY = 'alternatives'
  const CUSTOMER_KEY = 'customer'
  const EARLYADOPTERS_KEY = 'earlyAdopters'
  const UNIQUEVALUE_KEY = 'uniqueValue'
  const SOLUTION_KEY = 'solution'
  const CHANNELS_KEY = 'channels'
  const REVENUE_KEY = 'revenue'
  const COST_KEY = 'cost'
  const KEYMETRICS_KEY = 'keyMetrics'
  const UNFAIRADVANTAGE_KEY = 'unfairAdvantage'

  const initValue = (key, dispatch) => {
    const initVal = sessionStorage.getItem(key);
    dispatch(initVal ? JSON.parse(initVal) : "");
  }

  useEffect(() => {
    initValue(PLOBLEM_KEY, setProblem)
    initValue(ALTERNATIVES_KEY, setAlternatives)
    initValue(CUSTOMER_KEY, setCustomer)
    initValue(EARLYADOPTERS_KEY, setEarlyAdopters)
    initValue(UNIQUEVALUE_KEY, setUniqueValue)
    initValue(SOLUTION_KEY, setSolution)
    initValue(CHANNELS_KEY, setChannels)
    initValue(REVENUE_KEY, setRevenue)
    initValue(COST_KEY, setCost)
    initValue(KEYMETRICS_KEY, setKeyMetrics)
    initValue(UNFAIRADVANTAGE_KEY, setUnfairAdvantage)
  }, []);

  const mounted = useRef(false)
  useEffect(() => {
    if(mounted.current) {
      sessionStorage[PLOBLEM_KEY] = JSON.stringify(problem);
      sessionStorage[ALTERNATIVES_KEY] = JSON.stringify(alternatives);
      sessionStorage[CUSTOMER_KEY] = JSON.stringify(customer);
      sessionStorage[EARLYADOPTERS_KEY] = JSON.stringify(earlyAdopters);
      sessionStorage[UNIQUEVALUE_KEY] = JSON.stringify(uniqueValue);
      sessionStorage[SOLUTION_KEY] = JSON.stringify(solution);
      sessionStorage[CHANNELS_KEY] = JSON.stringify(channels);
      sessionStorage[REVENUE_KEY] = JSON.stringify(revenue);
      sessionStorage[COST_KEY] = JSON.stringify(cost);
      sessionStorage[KEYMETRICS_KEY] = JSON.stringify(keyMetrics);
      sessionStorage[UNFAIRADVANTAGE_KEY] = JSON.stringify(unfairAdvantage);
    } else {
      mounted.current = true
    }
  }, [problem, alternatives, customer, earlyAdopters, uniqueValue, solution, channels, revenue, cost, keyMetrics, unfairAdvantage])

  return (
    <Box className={classes.root}>
      <Box className={classes.container}>
        <Paper elevation={3} >
          <Box className={classes.containerTopRatio}>
          <Grid container className={classes.topContent}>
            <Grid item xs >
              <Grid container item xs className={classes.gridItemTwoVertical}>
                <Tooltip title="上位三つの課題を記載します。" placement="top" className={classes.toolTipSmall}>
                  <InfoOutlinedIcon color="action" />
                </Tooltip>
                  <FormTextField
                    label="①課題"
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
              <Grid item xs className={classes.gridItemTwoVertical}>
                <Tooltip title="既存の代替品を記載します。" placement="top" className={classes.toolTipSmall}>
                  <InfoOutlinedIcon color="action" />
                </Tooltip>
                <FormTextField
                  label="②既存の代替品"
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
              <Grid container item xs className={classes.gridItemTwoVertical}>
                <Tooltip title="具体的な解決策の上位三つを記載します。" placement="top" className={classes.toolTipSmall}>
                  <InfoOutlinedIcon color="action" />
                </Tooltip>
                <FormTextField
                    label="⑥ソリューション"
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
              <Grid item xs className={classes.gridItemTwoVertical}>
                <Tooltip title="PMFにたどり着くまでに計測すべき指標を記載します。" placement="top" className={classes.toolTipSmall}>
                    <InfoOutlinedIcon color="action" />
                </Tooltip>
                <FormTextField
                  label="⑩主要指標"
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
            <Grid item xs className={classes.gridItemOnlyOne}>
              <Tooltip title="他とは違っていて注目する価値がある理由を記載します。" placement="top" className={classes.toolTipMedium}>
                <InfoOutlinedIcon color="action" />
              </Tooltip>
              <FormTextField
                  label="⑤独自の価値提案"
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
              <Grid container item xs className={classes.gridItemTwoVertical}>
                <Tooltip title="競合に対しての圧倒的な優位性を記載します。" placement="top" className={classes.toolTipSmall}>
                  <InfoOutlinedIcon color="action" />
                </Tooltip>
                <FormTextField
                  label="⑪圧倒的な優位性"
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
              <Grid item xs className={classes.gridItemTwoVertical}>
                <Tooltip title="顧客にリーチする経路を記載します。" placement="top" className={classes.toolTipSmall}>
                  <InfoOutlinedIcon color="action" />
                </Tooltip>
                <FormTextField
                  label="⑦チャネル"
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
            <Grid item xs >
              <Grid container item xs className={classes.gridItemTwoVertical}>
                <Tooltip title="顧客の特徴を記載します。" placement="top" className={classes.toolTipSmall}>
                  <InfoOutlinedIcon color="action" />
                </Tooltip>
                  <FormTextField
                    label="③顧客セグメント"
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
              <Grid container item xs className={classes.gridItemTwoVertical}>
                <Tooltip title="課題に対して積極的に代替策を探している人の特徴を記載します。" placement="top" className={classes.toolTipSmall}>
                  <InfoOutlinedIcon color="action" />
                </Tooltip>
                  <FormTextField
                    label="④アーリーアダプター"
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
          <Box className={classes.containerBottomRatio}>
            <Grid container className={classes.gridItemTwoRow}>
              <Grid item xs className={classes.gridItemOnlyOne}>
                <Tooltip title="市場に送り出すまでにかかるコストを記載します。" placement="top" className={classes.toolTipLarge}>
                  <InfoOutlinedIcon color="action" />
                </Tooltip>
                <FormTextField
                  label="⑨コスト構造"
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
              <Grid item xs className={classes.gridItemOnlyOne}>
                <Tooltip title="どのような課金形態になるのかを記載します。" placement="top" className={classes.toolTipLarge}>
                  <InfoOutlinedIcon color="action" />
                </Tooltip>
                <FormTextField
                  label="⑧収益の流れ"
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

export default LeanCanvasForDesktop