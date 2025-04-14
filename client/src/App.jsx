import { useState } from "react";
import "./App.css";

function App() {
  const [url, setUrl] = useState("https://www.google.com");

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
      {/* Make the control bar draggable */}
      <div className="controls">
        <button onClick={handleBack} style={{ WebkitAppRegion: "no-drag" }}>
          Back
        </button>
        <button onClick={handleNewTab} style={{ WebkitAppRegion: "no-drag" }}>
          New Tab
        </button>
      </div>
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
