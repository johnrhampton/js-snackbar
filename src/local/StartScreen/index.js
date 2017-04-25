import React, {Component} from 'react';

import {show, ACTION_TYPE} from '../../snackbar';

export default class App extends Component {
  constructor(props) {
    super(props);
    document.title = 'SnackBar Local';
  }

  _showSnackBar(payload) {
    show(payload);
  }

  render() {
    return (
      <div>
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">Custom SnackBar Notifications inspired by Material Design</span>
          </div>
        </header>

        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--4-col">
            <button onClick={this._showSnackBar.bind(this, {pos: 'top-left'})}
                    className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect">
              Top Left
            </button>
          </div>
          <div className="mdl-cell mdl-cell--4-col" style={{textAlign: 'center'}}>
            <button onClick={this._showSnackBar.bind(this, {pos: 'top-center', actionType: ACTION_TYPE.TEXT})}
                    className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect">
              Top Center
            </button>
          </div>
          <div className="mdl-cell mdl-cell--4-col" style={{textAlign: 'right'}}>
            <button onClick={this._showSnackBar.bind(this, {pos: 'top-right', actionText: 'OK', actionType: ACTION_TYPE.TEXT})}
                    className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect">
              Top Right
            </button>
          </div>
        </div>

        <hr />

        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--4-col">
            <button onClick={this._showSnackBar.bind(this, {pos: 'bottom-left'})}
                    className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect">
              Bottom Left
            </button>
          </div>
          <div className="mdl-cell mdl-cell--4-col" style={{textAlign: 'center'}}>
            <button onClick={this._showSnackBar.bind(this, {pos: 'bottom-center'})}
                    className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect">
              Bottom Center
            </button>
          </div>
          <div className="mdl-cell mdl-cell--4-col" style={{textAlign: 'right'}}>
            <button onClick={this._showSnackBar.bind(this, {pos: 'bottom-right'})}
                    className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect">
              Bottom Right
            </button>
          </div>
        </div>

        <hr />

        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--4-col">
            <button onClick={this._showSnackBar.bind(this, {text: 'Custom Action Text', pauseOnHover: true, pos: 'top-right', backgroundColor: 'rgb(68, 138, 255)', actionText: 'OK', actionType: ACTION_TYPE.TEXT})}
                    className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect">
              Custom Action Text
            </button>
          </div>
          <div className="mdl-cell mdl-cell--4-col" style={{textAlign: 'center'}}>
            <button onClick={this._showSnackBar.bind(this, {text: 'Some Custom Text!', pos: 'top-right', backgroundColor: 'rgb(68, 138, 255)', notifyIcon: 'face', actionType: ACTION_TYPE.CLOSE})}
                    className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect">
              Custom w/ Icon
            </button>
          </div>
          <div className="mdl-cell mdl-cell--4-col" style={{textAlign: 'right'}}>
            <button onClick={this._showSnackBar.bind(this, {text: 'Custom Error Message!', backgroundColor: '#F44336', actionType: ACTION_TYPE.NONE})}
                    className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect">
              Custom w/ No Action
            </button>
          </div>
        </div>
      </div>
    );
  }
}
