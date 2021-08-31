import React from 'react'
import './Topbar.css'
import {Link} from 'react-router-dom'

export default function Topbar() {
    return (
        <div className="topBar">
            <div className="topBarWrapper">
                <div className="topLeft">
                    <h1><a className="logo" href="http://localhost:3000/">Bat Genome Database</a></h1>
                </div>
                <div className="topRight">
                    <ul className="pages">
                        <li className="topBarButton"><Link className="topBarOption" to="/">Home</Link></li>
                        <li className="topBarButton"><Link className="topBarOption" to="/about">About</Link></li>
                        <li className="topBarButton"><Link className="topBarOption" to="/strain">Strain</Link></li>
                        <li className="topBarButton"><Link className="topBarOption" to="/taxonomy">Taxonomy</Link></li>
                        <li className="topBarButton"><Link className="topBarOption" to="/login">Login</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
