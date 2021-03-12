import React, { useState, useContext, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { useMediaQuery } from "react-responsive";
import axios from "axios";

import LeanCanvasForDesktop from "./ForDesktop/LeanCanvasForDesktop";
import ButtonGroupForDesktop from "./ForDesktop/ButtonGroupForDesktop";
import LeanCanvasForLaptop from "./ForLaptop/LeanCanvasForLaptop";
import ButtonGroupForLaptop from "./ForLaptop/ButtonGroupForLaptop";
import LeanCanvasForTablet from "./ForTablet/LeanCanvasForTablet";
import ButtonGroupForTablet from "./ForTablet/ButtonGroupForTablet";
import LeanCanvasForMobile from "./ForMobile/LeanCanvasForMobile";
import ButtonGroupForMobile from "./ForMobile/ButtonGroupForMobile";

import AppContext from "../contexts/AppContext";
import { ALL_TEXT_CLEAR, CREATE_LEAN_CANVAS, TEXT_CLEAR } from "../actions";

const useStyles = makeStyles({
  root: {
    width: "100%",
    flex: 1,
    minHeight: "100vh",
    position: "relative",
    paddingBottom: 25,
    boxSizing: "border-box",
  },
  desktop: {
    marginTop: 40,
    marginLeft: 8,
    marginRight: 8,
    display: "flex",
    flexDirection: "row",
  },
  laptop: {
    marginLeft: 8,
    marginRight: 8,
    display: "flex",
    flexDirection: "column",
  },
  tablet: {
    marginLeft: 8,
    marginRight: 8,
    display: "flex",
    flexDirection: "column",
    position: "relative",
  },
  mobile: {
    marginLeft: 8,
    marginRight: 8,
    display: "flex",
    flexDirection: "column",
    position: "relative",
  },
});

const Main = () => {
  // require('dotenv').config();
  const classes = useStyles();

  const [problem, setProblem] = useState("");
  const [alternatives, setAlternatives] = useState("");
  const [customer, setCustomer] = useState("");
  const [earlyAdopters, setEarlyAdopters] = useState("");
  const [uniqueValue, setUniqueValue] = useState("");
  const [solution, setSolution] = useState("");
  const [channels, setChannels] = useState("");
  const [revenue, setRevenue] = useState("");
  const [cost, setCost] = useState("");
  const [keyMetrics, setKeyMetrics] = useState("");
  const [unfairAdvantage, setUnfairAdvantage] = useState("");

  const [spredSheetUrl, setSpredSheetUrl] = useState("");
  const [isArrivedUrl, setIsArrivedUrl] = useState(false);
  const [isNotArrivedUrl, setIsNotArrivedUrl] = useState(false);

  const isFirstRender = useRef(false);

  const { dispatch } = useContext(AppContext);

  const isDesktop = useMediaQuery({ minWidth: 1280 });
  const isLaptop = useMediaQuery({ minWidth: 1076, maxWidth: 1279 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1075 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  // require('dotenv').config();
  const REACT_APP_API_URL_EXPORT = process.env.REACT_APP_API_URL_EXPORT;
  // const REACT_APP_API_URL_EXPORT_PRO = process.env.REACT_APP_API_URL_EXPORT_PRO;
  const createLeanCanvas = (e) => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
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
        unfairAdvantage,
      });
      axios({
        method: "POST",
        url: REACT_APP_API_URL_EXPORT,
        data: {
          problem: problem,
          alternatives: alternatives,
          customer: customer,
          earlyAdopters: earlyAdopters,
          uniqueValue: uniqueValue,
          solution: solution,
          channels: channels,
          revenue: revenue,
          cost: cost,
          keyMetrics: keyMetrics,
          unfairAdvantage: unfairAdvantage,
        },
      })
        .then((response) => {
          setSpredSheetUrl(
            `https://docs.google.com/spreadsheets/d/${response.data}/edit`
          );
          setIsArrivedUrl(true);
        })
        .catch((error) => {
          setIsNotArrivedUrl(true);
        });
    }
  };

  const allTextClear = (e) => {
    dispatch({
      type: ALL_TEXT_CLEAR,
    });
  };

  const textClear = (e) => {
    const id = e.id;
    dispatch({
      type: TEXT_CLEAR,
      id,
    });
  };

  return (
    <>
      {isDesktop ? (
        <Box className={classes.desktop}>
          <LeanCanvasForDesktop
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
          <ButtonGroupForDesktop
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
            spredSheetUrl={spredSheetUrl}
            isArrivedUrl={isArrivedUrl}
            setIsArrivedUrl={setIsArrivedUrl}
            isNotArrivedUrl={isNotArrivedUrl}
            setIsNotArrivedUrl={setIsNotArrivedUrl}
          />
        </Box>
      ) : null}
      {isLaptop ? (
        <Box className={classes.laptop}>
          <LeanCanvasForLaptop
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
          <ButtonGroupForLaptop
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
            spredSheetUrl={spredSheetUrl}
            isArrivedUrl={isArrivedUrl}
            setIsArrivedUrl={setIsArrivedUrl}
            isNotArrivedUrl={isNotArrivedUrl}
            setIsNotArrivedUrl={setIsNotArrivedUrl}
          />
        </Box>
      ) : null}
      {isTablet ? (
        <Box className={classes.tablet}>
          <LeanCanvasForTablet
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
            textClear={textClear}
          />
          <ButtonGroupForTablet
            createLeanCanvas={createLeanCanvas}
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
            spredSheetUrl={spredSheetUrl}
            isArrivedUrl={isArrivedUrl}
            setIsArrivedUrl={setIsArrivedUrl}
            isNotArrivedUrl={isNotArrivedUrl}
            setIsNotArrivedUrl={setIsNotArrivedUrl}
          />
        </Box>
      ) : null}
      {isMobile ? (
        <Box className={classes.mobile}>
          <LeanCanvasForMobile
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
            textClear={textClear}
          />
          <ButtonGroupForMobile
            createLeanCanvas={createLeanCanvas}
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
            spredSheetUrl={spredSheetUrl}
            isArrivedUrl={isArrivedUrl}
            setIsArrivedUrl={setIsArrivedUrl}
            isNotArrivedUrl={isNotArrivedUrl}
            setIsNotArrivedUrl={setIsNotArrivedUrl}
          />
        </Box>
      ) : null}
    </>
  );
};

export default Main;
