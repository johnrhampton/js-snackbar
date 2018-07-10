import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { show, ACTION_TYPE } from './snackbar'; // eslint-disable-line
import './snackbar.css'; // eslint-disable-line

function App() {
  function handleSnackbarClick() {
    show({ pos: 'top-center', text: 'You triggered a full Snackbar click!' });
  }

  function handleTimeout() {
    show({ pos: 'top-center', text: 'The snackbar has timed out!' });
  }

  function showSnackBar(e) {
    const {
      currentTarget: { dataset },
    } = e;
    show({
      pos: dataset.pos,
      actionType: dataset.actionType,
      actionText: dataset.actionText,
      text: dataset.text || 'A message!',
      pauseOnHover: dataset.pauseOnHover,
      backgroundColor: dataset.backgroundColor,
      notifyIcon: dataset.notifyIcon,
      onSnackbarClick: dataset.onClick ? handleSnackbarClick : null,
      onTimeout: dataset.onTimeout ? handleTimeout : null,
    });
  }

  return (
    <div>
      <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title">
            Custom SnackBar Notifications inspired by Material Design
          </span>
        </div>
      </header>

      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--4-col">
          <button
            data-pos="top-left"
            onClick={showSnackBar}
            className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect">
            Top Left
          </button>
        </div>
        <div className="mdl-cell mdl-cell--4-col" style={{ textAlign: 'center' }}>
          <button
            onClick={showSnackBar}
            data-pos="top-center"
            data-action-type={ACTION_TYPE.TEXT}
            data-action-text="OK"
            className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect">
            Top Center
          </button>
        </div>
        <div className="mdl-cell mdl-cell--4-col" style={{ textAlign: 'right' }}>
          <button
            onClick={showSnackBar}
            data-pos="top-right"
            data-action-type={ACTION_TYPE.TEXT}
            data-action-text="OK"
            className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect">
            Top Right
          </button>
        </div>
      </div>

      <hr />

      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--4-col">
          <button
            onClick={showSnackBar}
            data-pos="bottom-left"
            className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect">
            Bottom Left
          </button>
        </div>
        <div className="mdl-cell mdl-cell--4-col" style={{ textAlign: 'center' }}>
          <button
            onClick={showSnackBar}
            data-pos="bottom-center"
            className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect">
            Bottom Center
          </button>
        </div>
        <div className="mdl-cell mdl-cell--4-col" style={{ textAlign: 'right' }}>
          <button
            onClick={showSnackBar}
            data-pos="bottom-right"
            className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect">
            Bottom Right
          </button>
        </div>
      </div>

      <hr />

      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--4-col">
          <button
            onClick={showSnackBar}
            data-pos="top-right"
            data-action-type={ACTION_TYPE.TEXT}
            data-action-text="OK"
            data-text="Custom Action Text"
            data-pause-on-hover
            data-background-color="rgb(68, 138, 255)"
            className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect">
            Custom Action Text
          </button>
        </div>
        <div className="mdl-cell mdl-cell--4-col" style={{ textAlign: 'center' }}>
          <button
            onClick={showSnackBar}
            data-pos="top-right"
            data-action-type={ACTION_TYPE.CLOSE}
            data-action-text="OK"
            data-text="Some Custom Text!"
            data-pause-on-hover
            data-background-color="rgb(68, 138, 255)"
            data-notify-icon="face"
            className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect">
            Custom w/ Icon
          </button>
        </div>
        <div className="mdl-cell mdl-cell--4-col" style={{ textAlign: 'right' }}>
          <button
            onClick={showSnackBar}
            data-pos="top-right"
            data-action-type={ACTION_TYPE.NONE}
            data-action-text="OK"
            data-text="Custom Error Message!"
            data-background-color="#F44336"
            className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect">
            Custom w/ No Action
          </button>
        </div>
      </div>

      <hr />

      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--4-col">
          <button
            onClick={showSnackBar}
            data-pos="top-right"
            data-action-type={ACTION_TYPE.TEXT}
            data-action-text="OK"
            data-text="Click on the snackbar!"
            data-background-color="rgb(68, 138, 255)"
            data-pause-on-hover
            data-on-timeout
            data-on-click
            className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect">
            Custom Action Text w/ Snackbar Action
          </button>
        </div>
        <div className="mdl-cell mdl-cell--4-col" style={{ textAlign: 'center' }}>
          <button
            onClick={showSnackBar}
            data-pos="top-right"
            data-action-type={ACTION_TYPE.CLOSE}
            data-text="Let me timeout!"
            data-background-color="rgb(68, 138, 255)"
            data-on-timeout
            data-on-click
            data-notify-icon="face"
            className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect">
            Custom w/ Icon w/ Snackbar Action
          </button>
        </div>
        <div className="mdl-cell mdl-cell--4-col" style={{ textAlign: 'right' }}>
          <button
            onClick={showSnackBar}
            data-pos="top-right"
            data-text="Custom Action Text"
            data-background-color="#F44336"
            data-action-type={ACTION_TYPE.NONE}
            data-on-click
            className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect">
            Custom w/ No Action w/ Snackbar Action
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
