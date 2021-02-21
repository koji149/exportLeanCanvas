import React, {useState, useEffect} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 15,
    borderRadius: 15,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress);

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const CustomizedProgressBars = (props) => {
  const classes = useStyles();
  const [progress, setProgress] = useState(0);

  const setOpenPreparationModal = props.setOpenPreparationModal
  const setOpenFinishModal = props.setOpenFinishModal
  const isArrivedUrl = props.isArrivedUrl
  const setIsArrivedUrl = props.setIsArrivedUrl


  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? (()=>{clearInterval(timer); return 100;})() : prevProgress + 5));
    }, 400);
    return () => clearInterval(timer);
  }, []
  );

  useEffect(() => {
    if ((isArrivedUrl)&&(progress>=100)) {
      setTimeout(() => {
        setOpenPreparationModal(false)
        setIsArrivedUrl(false)
        setOpenFinishModal(true)
      }, 100);
    }
  }, [isArrivedUrl,progress]
  );

  return (
    <div className={classes.root}>
      <BorderLinearProgress variant="determinate" value={progress} />
    </div>
  );
}

export default CustomizedProgressBars