import React, { Component } from 'react';
import './App.css';

import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class App extends Component {
  constructor(props) {
    super(props);
    // Customize toolbar
    this.toolbar = {
      blockType: {
        inDropdown: false
      },
      colorPicker: {
        colors: [ 'rgb(0,0,0)', 'rgb(255,0,0)', 'rgb(0,255,0)', 'rgb(0,0,255)', 'rgb(255,255,255)' ]
      }
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h4>Code4HK: Draft.js Demo</h4>
        </div>
        <div className="container">
          { /* Customize the editor via props */ }
          <Editor
            placeholder="Put your content here..."
            toolbar={ this.toolbar }
            />
        </div>
      </div>
    );
  }
}

export default App;
