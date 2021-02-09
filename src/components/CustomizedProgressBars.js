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

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? clearInterval(timer) : prevProgress + 10));
    }, 800);
    return () => clearInterval(timer);
  }, []
  );

  const result = new Promise(resolve => {
    if (progress>=100)resolve(progress);
  })

  result
    .then(result => {
      return new Promise(resolve => {
        setTimeout(() => {
          setOpenPreparationModal(false)
          resolve(result)
        }, 500);
      });
    })
    .then(result => {
      return new Promise(resolve => {
        setTimeout(() => {
          setOpenFinishModal(true)
          resolve(result)
        }, 100);
      });
    })
    
  return (
    <div className={classes.root}>
      <BorderLinearProgress variant="determinate" value={progress} />
    </div>
  );
}

export default CustomizedProgressBars