import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';import {
  withStyles,
} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import LinkOutlinedIcon from '@material-ui/icons/LinkOutlined';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3),
  },
  button: {
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const CancelButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText("#f5f5f5"),
    backgroundColor: "#f5f5f5",
    '&:hover': {
      backgroundColor: "#f5f5f5",
    },
  },
}))(Button);

const FinishModal = (props) => {
  const classes = useStyles();
  const openFinishModal = props.openFinishModal
  const handleCloseFinishModal = props.handleCloseFinishModal
  return (
    <>
      <Dialog
        open={openFinishModal}
        onClose={handleCloseFinishModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        style={{textAlign: "center", alignContent: 'center'}}
      >
        <DialogTitle id="alert-dialog-title" style={{textAlign: "center", paddingTop: 30, alignContent: 'center'}}>
          <Box fontWeight="fontWeightBold" m={1}>
            リーンキャンバスを作成しました！
          </Box>
        </DialogTitle>
        <DialogContent>
          <Box style={{textAlign: "center", paddingTop: 15, alignContent: 'center'}}>
          <Button href="https://app.bizmake.jp/canvas/js-4863/Lean/%EF%BD%8A-9489" color="primary" variant="outlined" startIcon={< LinkOutlinedIcon />}>
          https://aaaaaaaaaaaaaaaaaaaaa
        </Button>
          <Box m={2}>
            <Typography variant="body2">
              上記のシートは自動削除されるので、シートをコピーしてご使用ください。
              </Typography>
            </Box>
          </Box>
          <Box style={{textAlign: "center", paddingTop: 25,paddingBottom: 25, alignContent: 'center'}}>
            <CancelButton onClick={handleCloseFinishModal} variant="contained" >
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

export default FinishModal;