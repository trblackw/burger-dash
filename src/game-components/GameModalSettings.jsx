import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import Modal from "./../components/Modal";
import Button from "./../components/Button";

import gameConstants from "./../constants";

function GameModalSetting(props) {
  const dispatch = useDispatch();
  const paused = useSelector(state => state.gameStatus.paused, shallowEqual);

  useEffect(() => {}, [paused]);

  function handlePause() {
    dispatch({
      type: gameConstants.TOGGLE_PAUSE
    });
  }

  function handlePlayAgain() {
    dispatch({
      type: gameConstants.TOGGLE_PAUSE
    });
    dispatch({
      type: gameConstants.RESTART
    });
  }
  function handleExit() {
    props.onExit();
    dispatch({
      type: gameConstants.TOGGLE_PAUSE
    });
    dispatch({
      type: gameConstants.RESTART
    });
  }

  return (
    <>
      <Modal.Window show={paused} backdropOnClick={handlePause}>
        <Modal.Title>What would you like to do?</Modal.Title>
        <Button primary onClick={handlePause}>
          <i className="fa fa-fw fa-play" /> Resume
        </Button>
        <Button onClick={handlePlayAgain}>
          <i className="fa fa-fw fa-repeat" />
        </Button>
        <Button onClick={handleExit}>
          <i className="fa fa-fw fa-sign-out" />
        </Button>
      </Modal.Window>
      <Button
        settings
        onClick={handlePause}
        style={{
          position: "absolute",
          zIndex: "15",
          right: "-3px",
          borderRadius: "8px 0px 0px 8px",
          top: "50%",
          transform: "translateY(-50%)"
        }}
      >
        <i className="fa fa-cog" />
      </Button>
    </>
  );
}

export default GameModalSetting;