import React, { Component } from 'react';
import './App.css';

import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import { convertToRaw, EditorState, convertFromHTML, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

import fetch from 'isomorphic-fetch';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      html: '',
      editorState: EditorState.createEmpty()
    };
    this.onEditorStateChange = this.onEditorStateChange.bind(this);
  }

  componentDidMount() {
    fetch('/sample.html')
      .then(response => response.text())
      .then(html => {
        // Convert HTML to editor state
        console.log(html);
        const blocksFromHTML = convertFromHTML(html);
        const state = ContentState.createFromBlockArray(
          blocksFromHTML.contentBlocks,
          blocksFromHTML.entityMap
        );
        return EditorState.createWithContent(state);
      })
      .then(editorState => this.setState({ editorState }));
  }

  onEditorStateChange(editorState) {
    this.setState({ editorState });
  }

  render() {
    const html = draftToHtml( convertToRaw( this.state.editorState.getCurrentContent() ) );

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
                  editorState={ this.state.editorState }
                  placeholder="Put your content here..."
                  onEditorStateChange={ this.onEditorStateChange }
                  />
              </div>
            </div>
            <div className="col m6">
              <div className="card-panel grey lighten-4">
                <h5>HTML:</h5>
                <pre>{ html }</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
