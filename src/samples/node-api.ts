import { lstat } from 'fs/promises'
import { cwd } from 'process'
import { ipcRenderer } from 'electron'

ipcRenderer.on('main-process-message', (_event, ...args) => {
  
})

lstat(cwd()).then(stats => {
  
}).catch(err => {
  
})
