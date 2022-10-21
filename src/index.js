import React from "react"
import ReactDom from "react-dom/client"

import './index.css'


import Zuri from './Zuri'






const container = document.getElementById("root");
const root = ReactDom.createRoot(container);
root.render(<Zuri></Zuri>)


// ReactDom.render(<Booklist/>,document.getElementById("root"))