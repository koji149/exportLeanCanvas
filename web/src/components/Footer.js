import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  footer: {
    width: "100%",
    backgroundColor: "#fff",
    color: "#b6b6b3",
    justifyContent: "center",
    alignItems: "center",
  },
  footerItem: {
    marginTop: 20,
    marginBottom: 20,
    marginRight: 40,
    marginLeft: 40,
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.footer} display="flex" flexDirection="row">
      <Box className={classes.footerItem} fontWeight="fontWeightSmall" m={1}>
        <Typography variant="caption" display="block" gutterBottom>
          Copyright © 2020 YourIdea Inc.
        </Typography>
      </Box>
      <Box className={classes.footerItem} fontWeight="fontWeightSmall" m={1}>
        <Typography variant="caption" display="block" gutterBottom>
          <Link
            to="/terms-of-service"
            color="inherit"
            style={{ color: "#424242", textDecoration: "none" }}
          >
            利用規約
          </Link>
        </Typography>
      </Box>
      <Box className={classes.footerItem} fontWeight="fontWeightSmall" m={1}>
        <Typography variant="caption" display="block" gutterBottom>
          <Link
            to="/privacy-policy"
            color="inherit"
            style={{ color: "#424242", textDecoration: "none" }}
          >
            プライバシーポリシー
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
