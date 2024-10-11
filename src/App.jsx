import './styles/App.scss';
import $ from 'jQuery';
import initialValue from './initialValue';
import { marked } from 'marked';
import { useState, useEffect } from 'react';

const App = () => {
  const [value, setValue] = useState(initialValue);
  const [isEditorExpanded, setEditorExpanded] = useState(false);
  const [isPreviewExpanded, setPreviewExpanded] = useState(false);

  const handleClickEditor = () => {
    setEditorExpanded((prev) => !prev);
  }

  const handleClickPreview = () => {
    setPreviewExpanded((prev) => !prev);
  }

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  useEffect(() => {
    $('#preview').html(marked.parse(value));
  }, [value]);

  return (
    <div className='app-wrapper'>
      <div className={`wrapper editor-wrapper ${isPreviewExpanded ? 'display' : ''}`}>
        <div className='titlebar'>
          <div>Editor</div>
          <div
            className={`icon ${isEditorExpanded ? 'minimize' : 'maximize'}`}
            onClick={handleClickEditor}>
          </div>
        </div>
        <textarea
          id='editor'
          className={isEditorExpanded ? 'resize-none full-height' : 'resize-vertical min-height-editor'}
          value={value}
          onChange={handleChange}></textarea>
      </div>
      <div className={`wrapper preview-wrapper ${isEditorExpanded ? 'display' : ''}`}>
        <div className='titlebar'>
          <div>Preview</div>
          <div
            className={`icon ${isPreviewExpanded ? 'minimize' : 'maximize'}`}
            onClick={handleClickPreview}>
          </div>
        </div>
        <div
          id='preview'
          className={isPreviewExpanded ? 'full-height' : 'min-height-preview'}>
        </div>
    </div>
    </div>
  )
}

export default App;
