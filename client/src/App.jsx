import { useState, useRef } from 'react';
import './App.css';

function App() {
  const webviewRef = useRef(null);
  const [url, setUrl] = useState("https://www.google.com");

  const handleGo = () => {
    webviewRef.current.src = url;
  };

  const handleBack = () => {
    webviewRef.current.contentWindow.history.back();
  };

  const handleNewTab = () => {
    const newWindow = window.open(url, '_blank', 'width=800,height=600');
    if (newWindow) newWindow.focus();
  };

  return (
    <div className="app">
      <div className="controls" style={{ WebkitAppRegion: 'drag' }}>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleGo()}
        />
        <button onClick={handleGo}>Go</button>
        <button onClick={handleBack}>Back</button>
        <button onClick={handleNewTab}>New Tab</button>
      </div>
      <iframe
        ref={webviewRef}
        src={url}
        style={{ width: '100%', height: '90vh', border: 'none' }}
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
      />
    </div>
  );
}

export default App;
