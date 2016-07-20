import React, {Component} from 'react';
import {render} from 'react-dom';

import {show} from '../../snackbar/snackbar';

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
            <span className="mdl-layout-title">Custom Notifications inspired by Google Material Design</span>
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
            <button onClick={this._showSnackBar.bind(this, {pos: 'top-center'})}
                    className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect">
              Top Center
            </button>
          </div>
          <div className="mdl-cell mdl-cell--4-col" style={{textAlign: 'right'}}>
            <button onClick={this._showSnackBar.bind(this, {pos: 'top-right'})}
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

          </div>
          <div className="mdl-cell mdl-cell--4-col" style={{textAlign: 'center'}}>
            <button onClick={this._showSnackBar.bind(this, {text: 'Some Custom Text!', pos: 'top-right', backgroundColor: 'rgb(68, 138, 255)', imgSrc: 'http://lorempixel.com/output/city-h-g-256-294-10.jpg'})}
                    className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect">
              Custom w/ Image
            </button>
          </div>
          <div className="mdl-cell mdl-cell--4-col" style={{textAlign: 'right'}}>

          </div>
        </div>
      </div>
    );
  }
}
