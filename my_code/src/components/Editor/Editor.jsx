import React, {Component} from 'react';
import {useParams} from 'react-router-dom';
import AceEditor from "react-ace";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faExpand, faTrash, faSave } from '@fortawesome/free-solid-svg-icons'
import "ace-builds/src-noconflict/theme-tomorrow_night";
import "ace-builds/src-noconflict/mode-javascript";
import {matchPath} from 'react-router-dom';
import './Editor.sass';
import Loader from '../UI/Loader/Loader';
import store from '../../store/index';
import classNames from 'classnames';


class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullscreen: false
    };

    this.onClickFullscreenButton = this.onClickFullscreenButton.bind(this);
    this.editor = React.createRef();
  }

  onClickFullscreenButton() {
    this.setState({ fullscreen: !this.state.fullscreen });
  }

  onCopyAllButton() {
    //
  }

  componentDidMount() {
    this.bindSaveKeys();
    console.log(this.editor);
  }

  bindSaveKeys() {
    let timer;
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.keyCode == 83) {
        e.preventDefault();
        clearTimeout(timer);

        timer = setTimeout(this.onSaveSnippet.bind(this), 300);
      }
    });
  }

  onSaveSnippet() {
    const snippetId = this.match.params.snippetId;
    const snippets = this.props.snippets.data;
    
    if (!snippets)
      return false;
    
    let snippet = snippets.filter(snippet => snippetId == snippet.id)[0]; 
    
    
    if (snippet) 
      this.props.onClickSaveButton({snippetId, data: {text: snippet.text}});
  }


  
  onChangeEditor(value, snippet) {
    snippet.text = value;
  }
 
  render() {
    const className = classNames({
      'editor': true,
      'fullscreen': this.state.fullscreen
    });

    this.match = matchPath(this.props.location.pathname, {
      path: '/project:projectId/component:componentId/snippet:snippetId'
    });

    if (this.props.snippets?.data) {
      const  snippet = this.props.snippets.data.filter(snippet => this.match.params.snippetId == snippet.id)[0];
      
    
      return (
        <div className={className} >
          <div id="editor-area" className="editor__area">
            <AceEditor
              mode="javascript"
              ref={this.editor}
              onChange={(value) => {this.onChangeEditor(value, snippet)}}
              theme="tomorrow_night"
              value={snippet.text || ''}
              name={'snippet_' + snippet.id}
              editorProps={{ $blockScrolling: true }}
              height='100%'
              width='100%'
              tabSize={2}
              fontSize='16px'
              placeholder='Вставьте код, который хотите сохранить'
              style={{padding: '10px'}}
              setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true
              }}
            />
          </div>
          <div className="editor__panel">
            <ul className="editor__controls">
              <li className="editor__control">
                <button className="editor__button" onClick={this.onClickFullscreenButton}>
                  <FontAwesomeIcon icon={faExpand} />
                </button>
              </li>
              <li className="editor__control">
                <button className="editor__button">
                  <FontAwesomeIcon icon={faCopy} />
                </button>
              </li>
              <li className="editor__control">
                <button className="editor__button">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </li>
              <li className="editor__control">
                <button className="editor__button" onClick={() => { this.props.onClickSaveButton({snippetId: this.match.params.snippetId, data: {text: snippet.text}}) }}>
                  <FontAwesomeIcon icon={faSave} />
                </button>
              </li>
            </ul>
          </div>
        </div>
      );
      } else {
        return <Loader />
      }
  }
 
};

export default Editor;