import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import {
  withStyles,
} from '@material-ui/core/styles';
import CloudDownloadOutlinedIcon from '@material-ui/icons/CloudDownloadOutlined';

import FinishModal from './FinishModal'
import PreparationModal from './PreparationModal'
import ErrorArrivedModal from './ErrorArrivedModal'
import {quotes} from '../utilty/randomQuote'

const SpredSheetButton = withStyles((theme) => ({
  root: {
    borderRadius: 50,
    color: theme.palette.getContrastText("#0F9D58"),
    backgroundColor: "#0F9D58",
    '&:hover': {
      backgroundColor: "#0c7e46",
    },
  },
}))(Button);

const DownLoadSpredSheetButton = (props) => {
  const {
    createLeanCanvas,
    spredSheetUrl,
    isArrivedUrl,
    setIsArrivedUrl,
    isNotArrivedUrl,
    setIsNotArrivedUrl
  } = props

  const [openPreparationModal, setOpenPreparationModal] = useState(false);
  const [openFinishModal, setOpenFinishModal] = useState(false);
  const [openErrorArrivedModal, setOpenErrorArrivedModal] = useState(false);

  let [quote, setQuote] = useState("")
  let [byName, setByName] = useState("")

  const handleOpenPreparationModal = () => {
    displayRandomQuotesAndName ()
    setOpenPreparationModal(true);
    createLeanCanvas();
  };

  const handleClosePreparationModal = () => {
    setOpenPreparationModal(false);
    setIsArrivedUrl(false)
  };

  const handleCloseFinishModal = () => {
    setOpenFinishModal(false);
  };

  const handleCloseErrorArrivedModal = () => {
    setOpenErrorArrivedModal(false);
  };

  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  const displayRandomQuotesAndName = () => {
    setQuote(randomQuote.quote)
    setByName(randomQuote.name)
  }
  return (
    <>
      <SpredSheetButton variant="contained" color="primary" size="large" onClick={handleOpenPreparationModal} startIcon={<CloudDownloadOutlinedIcon />}>
        Google SpredSheet
      </SpredSheetButton>
      <PreparationModal
        openPreparationModal={openPreparationModal}
        setOpenPreparationModal={setOpenPreparationModal}
        handleClosePreparationModal={handleClosePreparationModal}
        setOpenFinishModal={setOpenFinishModal}
        setOpenErrorArrivedModal={setOpenErrorArrivedModal}
        spredSheetUrl={spredSheetUrl}
        isArrivedUrl={isArrivedUrl}
        setIsArrivedUrl={setIsArrivedUrl}
        isNotArrivedUrl={isNotArrivedUrl}
        setIsNotArrivedUrl={setIsNotArrivedUrl}
        quote={quote}
        byName={byName}
      />
      <FinishModal
        openFinishModal={openFinishModal}
        handleCloseFinishModal={handleCloseFinishModal}
        spredSheetUrl={spredSheetUrl}
        />
      <ErrorArrivedModal
      openErrorArrivedModal={openErrorArrivedModal}
      handleCloseErrorArrivedModal={handleCloseErrorArrivedModal}
      />
    </>
  )
}

export default DownLoadSpredSheetButton;