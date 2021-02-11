import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {
  withStyles,
} from '@material-ui/core/styles';
import CloudDownloadOutlinedIcon from '@material-ui/icons/CloudDownloadOutlined';

import FinishModal from '../FinishModal'
import PreparationModal from '../PreparationModal'

const useStyles = makeStyles((theme) => ({
  paper: {
    width: 400,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3),
  },
  button: {
    margin: theme.spacing(2),
    height: 80,
    width: 80
  },
  icon: {
    height: 35,
    width: 35
  }
}));

const SpredSheetButton = withStyles((theme) => ({
  root: {
    borderRadius: 50,
    boxShadow: '0 3px 5px 2px #0c7e46',
    color: theme.palette.getContrastText("#0F9D58"),
    backgroundColor: "#0F9D58",
    '&:hover': {
      backgroundColor: "#0c7e46",
    },
  },
}))(Button);

const DownLoadSpredSheetButtonForTabet = (props) => {
  const createLeanCanvas = props.createLeanCanvas

  const classes = useStyles();
  const [openPreparationModal, setOpenPreparationModal] = useState(false);
  const [openFinishModal, setOpenFinishModal] = useState(false);

  const handleOpenPreparationModal = () => {
    console.log("モーダル開く前")
    setOpenPreparationModal(true);
    createLeanCanvas();
    console.log("モーダル開いた後")

  };

  const handleClosePreparationModal = () => {
    setOpenPreparationModal(false);
    
  };

  const handleCloseFinishModal = () => {
    setOpenFinishModal(false);
  };

  return (
    <>
      <SpredSheetButton className={classes.button} onClick={handleOpenPreparationModal}>
        <CloudDownloadOutlinedIcon className={classes.icon}/>
      </SpredSheetButton> 
      <PreparationModal 
        openPreparationModal={openPreparationModal}
        setOpenPreparationModal={setOpenPreparationModal} 
        handleClosePreparationModal={handleClosePreparationModal} 
        setOpenFinishModal={setOpenFinishModal}
      />
      <FinishModal openFinishModal={openFinishModal} handleCloseFinishModal={handleCloseFinishModal}/>
    </>
  )
}

export default DownLoadSpredSheetButtonForTabet;