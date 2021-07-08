import React, {useState} from 'react'
import { ChromePicker } from 'react-color'
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  popover: {
    position: 'absolute',
    zIndex: '3000',
    right: "0",
    bottom: "0"
  },
  cover: {
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
  },
  colorBox: props => ({
    borderRadius: "4px",
    height: "20px",
    width: "40px",
    backgroundColor: props.color,
    border: "2px solid black",
    cursor: "pointer",
  }),
  colorPickerSettingWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    border: "2px solid rgb(173, 182, 190)",
    backgroundColor: theme.palette.background.paper,
    borderRadius: "4px"
  },
  title: {
    fontSize: "1.2em"
  }
}));

function ColorPickerSetting(props) {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [color, setColor] = useState(props.color);
  const classes = useStyles({ color: color });

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleChangeComplete = (color) => {
    setColor(color.hex);
  };

  return (
    <div style={{position: "relative"}}>
      <div className={classes.colorPickerSettingWrapper}>
        <div className={classes.title}>{props.title}</div>
        <div className={classes.colorBox} onClick={ handleClick } />
      </div>
      { displayColorPicker ? <div className={ classes.popover }>
        <div className={ classes.cover } onClick={ handleClose }/>
        <ChromePicker color={color} onChangeComplete={handleChangeComplete} />
      </div> : null }
    </div>
  );
}
export default ColorPickerSetting;