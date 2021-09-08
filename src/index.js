import React from 'react'
import ReactCOM from 'react-dom'
import App from './App'
import {BrowserRouter} from 'react-router-dom'

ReactCOM.render(
<BrowserRouter>
       <App/>
</BrowserRouter>
,document.getElementById('root'))