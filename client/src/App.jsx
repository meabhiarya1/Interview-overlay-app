import { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [url, setUrl] = useState("https://www.google.com");

  const handleGo = () => {
    const view = document.querySelector("webview");
    if (view) {
      view.loadURL(url);
    }
  };

  const handleBack = () => {
    const view = document.querySelector("webview");
    if (view && view.canGoBack()) {
      view.goBack();
    }
  };

  const handleNewTab = () => {
    const newWindow = window.open(url, "_blank", "width=800,height=600");
    if (newWindow) newWindow.focus();
  };

  return (
    <div className="app">
      {/* <div className="controls" style={{ WebkitAppRegion: "drag" }}>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleGo()}
        />
        <button onClick={handleGo}>Go</button>
        <button onClick={handleBack}>Back</button>
        <button onClick={handleNewTab}>New Tab</button>
      </div> */}
      <webview
        src="https://www.google.com"
        style={{ width: "100vw", height: "100vh", border: "none" }}
        allowpopups="true"
        webpreferences="nativeWindowOpen=yes"
      ></webview>
    </div>
  );
}

export default App;
