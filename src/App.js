import React, { Component } from 'react';
import './App.css';

// Include the Editor component and CSS
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h4>Code4HK: Draft.js Demo</h4>
        </div>
        <div className="container">
          { /* Let's put the Editor component here! */ }
          <Editor />
        </div>
      </div>
    );
  }
}

export default App;
