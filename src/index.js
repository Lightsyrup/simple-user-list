import React from "react";
import ReactDOM from "react-dom";
import BasicRoutes from "./routes/index.jsx";
import "./index.less";

ReactDOM.render(
	<React.StrictMode>
		<BasicRoutes />
	</React.StrictMode >,
	document.getElementById("root")
);
