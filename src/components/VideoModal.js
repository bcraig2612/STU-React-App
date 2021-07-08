import React, {useRef, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import ReactPlayer from 'react-player'

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: "transparent",
    "&:focus": {
      outline: "none"
    }
  },
}));

export default function VideoModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [playing, setPlaying] = useState(false);

  function handlePlayPause () {
    setPlaying(playing => !playing);
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <ReactPlayer
        config={{ attributes: { poster: props.poster } }}
        width='100%'
        height='100%'
        controls={true}
        playing={playing}
        url={props.videoURL} />
      <VideoModal />
    </div>
  );

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}