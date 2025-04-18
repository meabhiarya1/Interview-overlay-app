const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    alwaysOnTop: true,
    frame: true,
    transparent: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
      contextIsolation: true,
      webviewTag: true,
    },
  });

  mainWindow.loadFile(path.join("uploads", "build", "index.html"));

  // mainWindow.webContents.openDevTools();

  // Define top-level menu items including Back and New Tab
  const template = [
    {
      label: "File",
      submenu: [{ role: "quit" }],
    },
    {
      label: "Edit",
      submenu: [{ role: "copy" }, { role: "paste" }],
    },
    {
      label: "View",
      submenu: [
        { role: "reload" },
        { role: "toggledevtools" },
        { type: "separator" },
        { role: "resetzoom" },
        { role: "zoomin" },
        { role: "zoomout" },
        { role: "togglefullscreen" },
      ],
    },
    {
      label: "Back",
      click: () => {
        const focusedWindow = BrowserWindow.getFocusedWindow();
        if (focusedWindow) {
          focusedWindow.webContents.send("go-back");
        }
      },
    },
    {
      label: "Forward",
      click: () => {
        const focusedWindow = BrowserWindow.getFocusedWindow();
        if (focusedWindow) {
          focusedWindow.webContents.send("go-forward");
        }
      },
    },

    {
      label: "New Tab",
      click: () => {
        const newWin = new BrowserWindow({
          width: 800,
          height: 600,
          alwaysOnTop: false,
          frame: true,
          transparent: false,
          webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            nodeIntegration: true,
            contextIsolation: true,
            webviewTag: true,
          },
        });
        newWin.loadFile(path.join("uploads", "build", "index.html"));
      },
    },
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
