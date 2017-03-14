import React, { Component } from 'react';
import './App.css';

import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import { convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { html: '' };
    this.onEditorStateChange = this.onEditorStateChange.bind(this);
  }

  onEditorStateChange(editorState) {
    this.setState({
      html: draftToHtml( convertToRaw( editorState.getCurrentContent() ) )
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h4>Code4HK: Draft.js Demo</h4>
        </div>
        <div className="container">
          <div className="row">
            <div className="col m6">
              <div className="card-panel">
                <Editor
                  placeholder="Put your content here..."
                  onEditorStateChange={ this.onEditorStateChange }
                  />
              </div>
            </div>
            <div className="col m6">
              <div className="card-panel grey lighten-4">
                <h5>HTML:</h5>
                <pre>{ this.state.html }</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
