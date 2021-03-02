import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';import {
  withStyles,
} from '@material-ui/core/styles';

import LinkOutlinedIcon from '@material-ui/icons/LinkOutlined';

const CancelButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText("#f5f5f5"),
    backgroundColor: "#f5f5f5",
    '&:hover': {
      backgroundColor: "#f5f5f5",
    },
  },
}))(Button);

const ErrorArrivedModal = (props) => {
  const openErrorArrivedModal = props.openErrorArrivedModal
  const handleCloseErrorArrivedModal = props.handleCloseErrorArrivedModal
  const TWITTER_URL = process.env.TWITTER_URL;

  return (
    <>
      <Dialog
        open={openErrorArrivedModal}
        onClose={handleCloseErrorArrivedModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        style={{textAlign: "center", alignContent: 'center'}}
      >
        <DialogTitle id="alert-dialog-title" style={{textAlign: "center", paddingTop: 30, alignContent: 'center'}}>
          <Box fontWeight="fontWeightBold" m={1}>
            エラーにより作成に失敗しました。時間を置いて再度お試しください。
          </Box>
        </DialogTitle>
        <DialogContent>
          <Box style={{textAlign: "center", paddingTop: 15, alignContent: 'center'}}>
          <Button href={TWITTER_URL} color="primary" variant="outlined" startIcon={< LinkOutlinedIcon />}>
          twitterで状態を確認する。
        </Button>

          </Box>
          <Box style={{textAlign: "center", paddingTop: 25,paddingBottom: 25, alignContent: 'center'}}>
            <CancelButton onClick={handleCloseErrorArrivedModal} variant="contained" >
              <Box fontWeight="fontWeightBold" >
                編集を続ける
              </Box>
            </CancelButton>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default ErrorArrivedModal;