import { useState } from 'react';
import './App.css'
import Notes from './components/notes';

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text:'Check the description for my frontend interview prep course',
    },
    {
      id:2, 
      text:"Like this video and Subscribe to Roadside Codader"
    },
  ]);


  return (
    <>
      <Notes notes={notes} setNotes={setNotes} />
    </>
  )
}

export default App
