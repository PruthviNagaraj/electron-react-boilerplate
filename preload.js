
const { ipcRenderer, contextBridge } = require('electron');



contextBridge.exposeInMainWorld('electron', {
  notificationApi: {
    sendNotification(message) {
      ipcRenderer.send('notify', message);
    }
  },
  batteryApi: {

  },
  filesApi: {

  },
  testApi: {
    printIt(message) {
      ipcRenderer.send('print', message);
    },
    greetIt(name) {
      ipcRenderer.send('greet', name);
    }
  }
})
