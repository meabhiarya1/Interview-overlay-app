const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  onGoBack: (callback) => ipcRenderer.on("go-back", callback),
});
