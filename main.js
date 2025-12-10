const {app, BrowserWindow} = require("electron")

//Is app ready and initialized ? show the app window
app.whenReady().then(() => {
    const window = new BrowserWindow({
        frame: false,
        transparent: true,
    })
    window.loadFile("index.html")
})