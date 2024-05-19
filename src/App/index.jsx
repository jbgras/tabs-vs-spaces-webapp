import { useState } from 'react';
import UnityClient from '../UnityClient';

export default function App() {
  const [acceptedTerms, setAcceptedTerms] = useState(false);



  return (
    <>
      <h1>Tabs vs Spaces</h1>
      <p>
        By clicking <em>Play</em>, you agree the terms & services of this game.
      </p>
      <p>
        <button onClick={()=> setAcceptedTerms(true)}>PLAY</button>
      </p>

      {acceptedTerms && <UnityClient/> }
    </>
  )
}

