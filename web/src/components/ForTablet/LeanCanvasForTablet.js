import React, { useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import { fade } from "@material-ui/core/styles";

import TextClearButtonForTablet from "./TextClearButtonForTablet";

const useStyles = makeStyles({
  root: {
    paddingBottom: 120,
  },
  container: {
    marginTop: "3%",
    marginBottom: "3%",
    marginLeft: 8,
    marginRight: 8,
    display: "flex",
    flexDirection: "column",
  },
  glidItemsHorizontal: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  glidItem: {
    position: "relative",
  },
  gridItemTwoRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  color: {
    color: "red",
  },
});

const useStylesForm = makeStyles((theme) => ({
  root: {
    borderTop: "3px solid #e2e2e1",
    borderBottom: "3px solid #e2e2e1",
    borderLeft: "3px solid #e2e2e1",
    borderRight: "3px solid #e2e2e1",
    overflow: "hidden",
    borderRadius: 0,
    backgroundColor: "#fff",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:hover": {
      backgroundColor: "#fafafa",
      borderColor: "#c8c8c8",
    },
    "&$focused": {
      backgroundColor: "#fff",
      boxshadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px inset`,
      borderColor: theme.palette.primary.main,
    },
  },
  focused: {},
}));

const FormTextField = ({ ...props }) => {
  const classes = useStylesForm();
  return (
    <TextField InputProps={{ classes, disableUnderline: true }} {...props} />
  );
};

const LeanCanvasForTablet = (props) => {
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
    setUnfairAdvantage,
    textClear,
  } = props;

  const PLOBLEM_KEY = "problem";
  const ALTERNATIVES_KEY = "alternatives";
  const CUSTOMER_KEY = "customer";
  const EARLYADOPTERS_KEY = "earlyAdopters";
  const UNIQUEVALUE_KEY = "uniqueValue";
  const SOLUTION_KEY = "solution";
  const CHANNELS_KEY = "channels";
  const REVENUE_KEY = "revenue";
  const COST_KEY = "cost";
  const KEYMETRICS_KEY = "keyMetrics";
  const UNFAIRADVANTAGE_KEY = "unfairAdvantage";

  const initValue = (key, dispatch) => {
    const initVal = sessionStorage.getItem(key);
    dispatch(initVal ? JSON.parse(initVal) : "");
  };

  useEffect(() => {
    initValue(PLOBLEM_KEY, setProblem);
    initValue(ALTERNATIVES_KEY, setAlternatives);
    initValue(CUSTOMER_KEY, setCustomer);
    initValue(EARLYADOPTERS_KEY, setEarlyAdopters);
    initValue(UNIQUEVALUE_KEY, setUniqueValue);
    initValue(SOLUTION_KEY, setSolution);
    initValue(CHANNELS_KEY, setChannels);
    initValue(REVENUE_KEY, setRevenue);
    initValue(COST_KEY, setCost);
    initValue(KEYMETRICS_KEY, setKeyMetrics);
    initValue(UNFAIRADVANTAGE_KEY, setUnfairAdvantage);
  }, [
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
  ]);

  const mounted = useRef(false);
  useEffect(() => {
    if (mounted.current) {
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
      mounted.current = true;
    }
  }, [
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
    unfairAdvantage,
  ]);

  return (
    <Box className={classes.root}>
      <Box className={classes.container}>
        <Paper elevation={3}>
          <Grid container item className={classes.glidItemsHorizontal}>
            <Grid item xs className={classes.glidItem}>
              <TextClearButtonForTablet
                setProblem={setProblem}
                textClear={textClear}
              />
              <FormTextField
                label="①課題"
                variant="filled"
                id="form-input"
                multiline
                rows={7}
                fullWidth
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
              />
            </Grid>
            <Grid item xs className={classes.glidItem}>
              <TextClearButtonForTablet
                setAlternatives={setAlternatives}
                textClear={textClear}
              />
              <FormTextField
                label="②既存の代替品"
                variant="filled"
                id="form-input"
                multiline
                rows={7}
                fullWidth
                value={alternatives}
                onChange={(e) => setAlternatives(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid container item className={classes.glidItemsHorizontal}>
            <Grid item xs className={classes.glidItem}>
              <TextClearButtonForTablet
                setCustomer={setCustomer}
                textClear={textClear}
              />
              <FormTextField
                label="③顧客セグメント"
                variant="filled"
                id="form-input"
                multiline
                rows={7}
                fullWidth
                value={customer}
                onChange={(e) => setCustomer(e.target.value)}
              />
            </Grid>
            <Grid item xs className={classes.glidItem}>
              <TextClearButtonForTablet
                setEarlyAdopters={setEarlyAdopters}
                textClear={textClear}
              />
              <FormTextField
                label="④アーリーアダプター"
                className={classes.margin}
                variant="filled"
                id="form-input"
                multiline
                rows={7}
                fullWidth
                value={earlyAdopters}
                onChange={(e) => setEarlyAdopters(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid container item className={classes.glidItemsHorizontal}>
            <Grid item xs className={classes.glidItem}>
              <TextClearButtonForTablet
                setUniqueValue={setUniqueValue}
                textClear={textClear}
              />
              <FormTextField
                label="⑤独自の価値提案"
                variant="filled"
                id="form-input"
                multiline
                rows={7}
                fullWidth
                value={uniqueValue}
                onChange={(e) => setUniqueValue(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid container item className={classes.glidItemsHorizontal}>
            <Grid item xs className={classes.glidItem}>
              <TextClearButtonForTablet
                setSolution={setSolution}
                textClear={textClear}
              />
              <FormTextField
                label="⑥ソリューション"
                variant="filled"
                id="form-input"
                multiline
                rows={7}
                fullWidth
                value={solution}
                onChange={(e) => setSolution(e.target.value)}
              />
            </Grid>
            <Grid item xs className={classes.glidItem}>
              <TextClearButtonForTablet
                setChannels={setChannels}
                textClear={textClear}
              />
              <FormTextField
                label="⑦チャネル"
                className={classes.margin}
                variant="filled"
                id="form-input"
                multiline
                rows={7}
                fullWidth
                value={channels}
                onChange={(e) => setChannels(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid container item className={classes.glidItemsHorizontal}>
            <Grid item xs className={classes.glidItem}>
              <TextClearButtonForTablet
                setRevenue={setRevenue}
                textClear={textClear}
              />
              <FormTextField
                label="⑧収益の流れ"
                className={classes.margin}
                variant="filled"
                id="form-input"
                multiline
                rows={7}
                fullWidth
                value={revenue}
                onChange={(e) => setRevenue(e.target.value)}
              />
            </Grid>
            <Grid item xs className={classes.glidItem}>
              <TextClearButtonForTablet
                setCost={setCost}
                textClear={textClear}
              />
              <FormTextField
                label="⑨コスト構造"
                className={classes.margin}
                variant="filled"
                id="form-input"
                multiline
                rows={7}
                fullWidth
                value={cost}
                onChange={(e) => setCost(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid container item className={classes.glidItemsHorizontal}>
            <Grid item xs className={classes.glidItem}>
              <TextClearButtonForTablet
                setKeyMetrics={setKeyMetrics}
                textClear={textClear}
              />
              <FormTextField
                label="⑩主要指標"
                variant="filled"
                id="form-input"
                multiline
                rows={7}
                fullWidth
                value={keyMetrics}
                onChange={(e) => setKeyMetrics(e.target.value)}
              />
            </Grid>
            <Grid item xs className={classes.glidItem}>
              <TextClearButtonForTablet
                setUnfairAdvantage={setUnfairAdvantage}
                textClear={textClear}
              />
              <FormTextField
                label="⑪圧倒的な優位性"
                variant="filled"
                id="form-input"
                multiline
                rows={7}
                fullWidth
                value={unfairAdvantage}
                onChange={(e) => setUnfairAdvantage(e.target.value)}
              />
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Box>
  );
};

export default LeanCanvasForTablet;
