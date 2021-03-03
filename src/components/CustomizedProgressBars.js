import React, {useEffect} from 'react';
import { makeStyles} from '@material-ui/core/styles';
// import LinearProgress from '@material-ui/core/LinearProgress';
import CircularIndeterminate from "./CircularIndeterminate"

// const BorderLinearProgress = withStyles((theme) => ({
//   root: {
//     height: 15,
//     borderRadius: 15,
//   },
//   colorPrimary: {
//     backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
//   },
//   bar: {
//     borderRadius: 5,
//     backgroundColor: '#1a90ff',
//   },
// }))(LinearProgress);

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const CustomizedProgressBars = (props) => {
  const classes = useStyles();
  // const [progress, setProgress] = useState(0);

  const setOpenPreparationModal = props.setOpenPreparationModal
  const setOpenFinishModal = props.setOpenFinishModal
  const setOpenErrorArrivedModal = props.setOpenErrorArrivedModal
  const isArrivedUrl = props.isArrivedUrl
  const setIsArrivedUrl = props.setIsArrivedUrl
  const isNotArrivedUrl = props.isNotArrivedUrl
  const setIsNotArrivedUrl = props.setIsNotArrivedUrl


  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setProgress((prevProgress) => (prevProgress >= 100 ? (()=>{clearInterval(timer); return 100;})() : prevProgress + 5));
  //   }, 400);
  //   return () => clearInterval(timer);
  // }, []
  // );

  // progressBar完成時コード
  // useEffect(() => {
  //   if ((isArrivedUrl)&&(progress>=100)) {
  //     setTimeout(() => {
  //       setOpenPreparationModal(false)
  //       setIsArrivedUrl(false)
  //       setOpenFinishModal(true)
  //     }, 100);
  //   }
  // }, [isArrivedUrl,progress]
  // );

  // 暫定対応
  useEffect(() => {
    if ((isArrivedUrl)) {
      setTimeout(() => {
        setOpenPreparationModal(false)
        setIsArrivedUrl(false)
        setOpenFinishModal(true)
      }, 100);
    }
  }, [isArrivedUrl, setOpenPreparationModal, setIsArrivedUrl, setOpenFinishModal]
  );

  useEffect(() => {
    if ((isNotArrivedUrl)) {
      setTimeout(() => {
        setOpenPreparationModal(false)
        setIsNotArrivedUrl(false)
        setOpenErrorArrivedModal(true)
      }, 100);
    }
  }, [isNotArrivedUrl, setOpenPreparationModal, setIsNotArrivedUrl, setOpenErrorArrivedModal]
  );

  return (
    <div className={classes.root}>
      {/* <BorderLinearProgress variant="determinate" value={progress} /> */}
      <CircularIndeterminate/>
    </div>
  );
}

export default CustomizedProgressBars