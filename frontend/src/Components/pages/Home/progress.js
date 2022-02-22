
import { CircularProgress } from '@material-ui/core';
import '../Home/Home.css';

function Progress(props) {
  return (
    <div className='progress_container'>
        <CircularProgress variant="determinate" value={props.value} className='circle_rate' />
    </div>
  );
}

export default Progress;