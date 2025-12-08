const {app, BrowserWindow} = require("electron")

//Is app ready and initialized ? show the app window
app.whenReady().then(() => {
    const window = new BrowserWindow()
    window.loadFile("index.html")
})