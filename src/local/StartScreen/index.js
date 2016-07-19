import React, {Component} from 'react';
import {render} from 'react-dom';

import Snackbar from '../../snackbar/snackbar';

export default class App extends Component {
  constructor(props) {
    super(props);
    document.title = 'SnackBar Local';
  }

  _showSnackBar(position) {
    Snackbar.show({pos: position});
  }

  render() {
    return (
      <div>
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">Notifications inspired by Google Material Design</span>
          </div>
        </header>

        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--4-col">
            <button onClick={this._showSnackBar.bind(this, 'top-left')}
                    className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect">
              Top Left
            </button>
          </div>
          <div className="mdl-cell mdl-cell--4-col" style={{textAlign: 'center'}}>
            <button onClick={this._showSnackBar.bind(this, 'top-center')}
                    className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect">
              Top Center
            </button>
          </div>
          <div className="mdl-cell mdl-cell--4-col" style={{textAlign: 'right'}}>
            <button onClick={this._showSnackBar.bind(this, 'top-right')}
                    className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect">
              Top Right
            </button>
          </div>
        </div>

        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--4-col">
            <button onClick={this._showSnackBar.bind(this, 'bottom-left')}
                    className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect">
              Bottom Left
            </button>
          </div>
          <div className="mdl-cell mdl-cell--4-col" style={{textAlign: 'center'}}>
            <button onClick={this._showSnackBar.bind(this, 'bottom-center')}
                    className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect">
              Bottom Center
            </button>
          </div>
          <div className="mdl-cell mdl-cell--4-col" style={{textAlign: 'right'}}>
            <button onClick={this._showSnackBar.bind(this, 'bottom-right')}
                    className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect">
              Bottom Right
            </button>
          </div>
        </div>
      </div>
    );
  }
}
