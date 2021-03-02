import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {
  withStyles,
} from '@material-ui/core/styles';

import CustomizedProgressBars from './CustomizedProgressBars'

const CancelButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText("#f5f5f5"),
    backgroundColor: "#f5f5f5",
    '&:hover': {
      backgroundColor: "#f5f5f5",
    },
  },
}))(Button);

const PreparationModal = (props) => {
  const openPreparationModal = props.openPreparationModal
  const setOpenPreparationModal = props.setOpenPreparationModal
  const handleClosePreparationModal = props.handleClosePreparationModal
  const setOpenFinishModal = props.setOpenFinishModal
  const spredSheetUrl = props.spredSheetUrl
  const isArrivedUrl = props.isArrivedUrl
  const setIsArrivedUrl = props.setIsArrivedUrl
  const isNotArrivedUrl = props.isNotArrivedUrl
  const setIsNotArrivedUrl = props.setIsNotArrivedUrl
  const setOpenErrorArrivedModal = props.setOpenErrorArrivedModal
  let quote = props.quote
  let byName = props.byName

  return (
  <Dialog
    open={openPreparationModal}
    onClose={handleClosePreparationModal}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
    style={{textAlign: "center", alignContent: 'center'}}
  >
    <DialogTitle id="alert-dialog-title" style={{textAlign: "center", paddingTop: 30, alignContent: 'center'}}>
      <Box fontWeight="fontWeightBold" m={1}>
        リーンキャンバスを準備中...
      </Box>
      <Box fontWeight="fontWeightRegular" fontSize={14} m={1}>
        20秒ほどかかる場合がございます。しばらくお待ちください。
      </Box>
    </DialogTitle>
    <DialogContent>
      <CustomizedProgressBars
        setOpenPreparationModal={setOpenPreparationModal}
        setOpenFinishModal={setOpenFinishModal}
        setOpenErrorArrivedModal={setOpenErrorArrivedModal}
        spredSheetUrl={spredSheetUrl}
        isArrivedUrl={isArrivedUrl}
        setIsArrivedUrl={setIsArrivedUrl}
        isNotArrivedUrl={isNotArrivedUrl}
        setIsNotArrivedUrl={setIsNotArrivedUrl}
      />
      <Box id="alert-dialog-description" style={{textAlign: "center", paddingTop: 25, alignContent: 'center'}}>
        <Box fontWeight="fontWeightLight" color="text.disabled" fontSize={16}>
          {quote}ー{byName}ー
        </Box>
      </Box>
      <Box style={{textAlign: "center", paddingTop: 25,paddingBottom: 25, alignContent: 'center'}}>
        <CancelButton onClick={handleClosePreparationModal} variant="contained" >
          <Box fontWeight="fontWeightBold" >
            キャンセル
          </Box>
        </CancelButton>
      </Box>
    </DialogContent>
  </Dialog>
  )
}

export default PreparationModal;