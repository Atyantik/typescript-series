let str: string = "Hello, World!";
function log(s: any): void {
	const logger: HTMLElement = document.getElementById("logger");
	const logWrapper: HTMLElement = document.createElement("div");
	logWrapper.className = "log-entry";
	logWrapper.innerHTML = `${(new Date).toLocaleTimeString()}: ${JSON.stringify(s)}`;
	logger.appendChild(logWrapper);
}
log(str);