import { contextBridge, ipcRenderer } from "electron";

declare global {
  interface Window {
    electronAPI: any;
  }
}

contextBridge.exposeInMainWorld('electronAPI', {
});
