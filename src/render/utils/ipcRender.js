let ipc = window.require('electron').ipcRenderer
export default{
  miniWindow(){
    ipc.send('window-restore-mini')
  },
  maxWindow(){
    ipc.send('window-restore-max')
  },
  closeWindow(){
    ipc.send('window-close')
  }
}