import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import {Provider} from "react-redux"
import store from "./redux/store/store"
import Main from './components/Main/index'


ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
		<Main/>
		<Provider store={store}>
		  <App />
		</Provider>
	   </BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
