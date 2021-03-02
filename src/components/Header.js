import React from "react"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  logo: {
    background: 'linear-gradient(45deg, #1976d2 0%, #2196f3 35%, #00d4ff 100%)',
    border: 0,
    boxShadow: '0 3px 5px 2px #b6dcfb',
    color: 'white',
    position: "sticky",
    width: "100%"
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.logo}>
      <Toolbar>
        <Typography variant="h6" >
        YourIdea - リーンキャンバスエクスポートツール
        </Typography>
      </Toolbar>
    </AppBar>
    </>
    );
}

export default Header;