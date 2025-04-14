import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    if (window.electronAPI) {
      window.electronAPI.onGoBack(() => {
        const webview = document.querySelector("webview");
        if (webview?.canGoBack()) webview.goBack();
      });

      window.electronAPI.onGoForward(() => {
        const webview = document.querySelector("webview");
        if (webview?.canGoForward()) webview.goForward();
      });
    }
  }, []);

  return (
    <div className="app">
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
