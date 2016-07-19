import React, {Component} from 'react';
import {render} from 'react-dom';

import Snackbar from '../../snackbar/snackbar';

export default class App extends Component {
  constructor(props) {
    super(props);
    document.title = 'SnackBar Local';
  }

  _showSnackBar(payload) {
    Snackbar.show({pos: payload.position});
  }

  render() {
    return (
      <div>
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">Notifications inspired by Google Material Design</span>
          </div>
        </header>

        <div className="snackbar-container snackbar-pos bottom-center"
             style={{width: 'auto', opacity: '1', bottom: '-39px', background: 'rgb(50, 50, 50)'}}>

          <img src="./assets/images/_c2ba8ed4-26e6-448b-aeec-bed45e8f3f4a_small.png"/>

          <p style={{margin: '0px', padding: '0px', color: 'rgb(255, 255, 255)', fontSize: '26px', fontWeight: '500', lineHeight: '1.3em'}}>
            Congratulations Sally AgentFace!
          </p>

          <button className="mdl-button mdl-js-button mdl-button--icon" style={{marginLeft: '20px'}}>
            <i className="material-icons">close</i>
          </button>
        </div>

        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--4-col">
            <button onClick={this._showSnackBar.bind(this, {position: 'top-left'})}
                    className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect">
              Top Left
            </button>
          </div>
          <div className="mdl-cell mdl-cell--4-col" style={{textAlign: 'center'}}>
            <button onClick={this._showSnackBar.bind(this, {position: 'top-center'})}
                    className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect">
              Top Center
            </button>
          </div>
          <div className="mdl-cell mdl-cell--4-col" style={{textAlign: 'right'}}>
            <button onClick={this._showSnackBar.bind(this, {position: 'top-right'})}
                    className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect">
              Top Right
            </button>
          </div>
        </div>

        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--4-col">
            <button onClick={this._showSnackBar.bind(this, {position: 'bottom-left'})}
                    className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect">
              Bottom Left
            </button>
          </div>
          <div className="mdl-cell mdl-cell--4-col" style={{textAlign: 'center'}}>
            <button onClick={this._showSnackBar.bind(this, {position: 'bottom-center'})}
                    className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect">
              Bottom Center
            </button>
          </div>
          <div className="mdl-cell mdl-cell--4-col" style={{textAlign: 'right'}}>
            <button onClick={this._showSnackBar.bind(this, {position: 'bottom-right'})}
                    className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect">
              Bottom Right
            </button>
          </div>
        </div>


      </div>
    );
  }
}
