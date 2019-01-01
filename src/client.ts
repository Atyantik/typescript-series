let str: string = "Hello, World!";
function log(s: any): void {
  const logger: HTMLElement = document.getElementById("logger");
  const logWrapper: HTMLElement = document.createElement("div");
  logWrapper.className = "log-entry";
  logWrapper.innerHTML = `${(new Date).toLocaleTimeString()}: (${typeof s}):: ${JSON.stringify(s)}`;
  logger.appendChild(logWrapper);
}
log(str);

setTimeout(() => {
  import('./component/global').then(Global => {
    log(Global);
  });
}, 2000);