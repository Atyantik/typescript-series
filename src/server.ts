import express = require("express");
const path = require("path");

const app: express.Application = express();
const port: number = 3000;

app.use("/static", express.static(path.join(__dirname, '..', 'build')));
app.get('/', (req: express.Request, res: express.Response): express.Response => {
	return res.send(`<!DOCTYPE html>
		<html>
			<head>
				<title>My experiments with TypeScript</title>
				<style>
				  html,body {
				  	margin:0;
				  	padding:0;
				  	font-family: monospace;
				  	font-size: 20px;
				  }
				  #logger {
				  	background-color: #eee; 
				  	padding: 20px; 
				  	max-width: 100%; 
				  	height: 600px; 
				  	max-height: calc( 90vh - 2em - 35px); 
				  	margin: 10px;
				  	overflow-y: auto;
				  }
				  .log-entry {
				  	max-width: 100%;
				  	padding: 5px;
				  	background-color: #f6f6f6;
				  }
				  .title {
				  	margin: 10px;
				  }
				</style>
			</head>
			<body>
				<h1 class="title">Logger:</h1>
				<div id="logger"></div>
				<script src="/static/index.js" async></script>
			</body>
		</html>
	`);
});
app.listen(port, (): void => console.log(`Example app listening on port ${port}!`));