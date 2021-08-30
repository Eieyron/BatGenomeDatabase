import React from 'react'
import './Topbar.css'
import {NotificationsNone} from '@material-ui/icons'

export default function Topbar() {
    return (
        <div className="topBar">
            <div className="topBarWrapper">
                <div className="topLeft">
                    <span><a className="logo" href="http://localhost:3000/">Bat Genome Database</a></span>
                </div>
                <div className="topRight">
                    <ul className="pages">
                        <li className="topBarButton"><a className="topBarOption" href="http://localhost:3000/">Home</a></li>
                        <li className="topBarButton"><a className="topBarOption" href="http://localhost:3000/strain">Strain</a></li>
                        <li className="topBarButton"><a className="topBarOption" href="http://localhost:3000/tax">Taxonomy</a></li>
                    </ul>
                    <div className="topBarIcons">
                        <NotificationsNone />
                    </div>
                </div>
            </div>
        </div>
    )
}
