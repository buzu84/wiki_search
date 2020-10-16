import React, { useState } from 'react'
import Search from './components/Search'
import HighlightText from './components/HighlightText'

function App() {
  const [textToHighLight, setTextToHighLight] = useState('');

  return (
    <>
      <Search textToHighLight={textToHighLight}/>
      <HighlightText setTextToHighLight={setTextToHighLight}/>
    </>
  );
}

export default App;
