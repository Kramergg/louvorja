const DevTools = require("./DevTools");

export function send(action, param = null) {
    DevTools.write("ipcRenderer.send", action);
    ipcRenderer.send(action, param);
}