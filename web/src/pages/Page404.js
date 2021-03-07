import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { Link } from "react-router-dom";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import errorImg from "../image/404.png";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    height: 600,
  },
  container: {
    margin: "auto",
    padding: 50,
  },
  card: {
    maxWidth: 400,
    textAlign: "center",
    alignContent: "center",
  },
  media: {
    height: 140,
  },
});

const Page404 = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.container}>
        <Card className={classes.card}>
          <CardActionArea>
            <img src={errorImg} alt="アイコン" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                ページが見つかりませんでした。
              </Typography>
            </CardContent>
          </CardActionArea>
          <Box
            style={{
              textAlign: "center",
              paddingTop: 25,
              paddingBottom: 25,
              alignContent: "center",
            }}
          >
            <Link to="/">
              <Typography variant="button" display="block" gutterBottom>
                TOPに戻る
              </Typography>
            </Link>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default Page404;
