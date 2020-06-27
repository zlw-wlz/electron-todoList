let ipcMain = require('electron').ipcMain
function resizeWindow (mainWindow){
  ipcMain.on('window-restore-mini',()=>{
    mainWindow.minimize()
    console.log('window-restore-mini=>Windows have been minimized')
  })
  ipcMain.on('window-restore-max',()=>{
    mainWindow.maximize()
    console.log('window-restore-max=>Windows have been maxed')
  })
  ipcMain.on('window-close',()=>{
    mainWindow.closed()
    console.log('window-restore-close=>Windows have been closed')
  })
}
module.exports =  resizeWindow
