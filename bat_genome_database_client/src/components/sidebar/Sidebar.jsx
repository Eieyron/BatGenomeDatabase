import React, { Component } from 'react'
import './Sidebar.css'

export default class Sidebar extends Component {

    constructor(props){
        super(props)

        this.state = {
            classname:"sidebar_inactive"
        }

        this.toggle_show = this.toggle_show.bind(this)
    }

    toggle_show(){
        
        if (this.state.classname === "sidebar_inactive") {
            this.setState({
                classname:"sidebar"
            })
        }else {
            this.setState({
                classname:"sidebar_inactive"
            })
        }
 
    }


    render() {
        return (
            <>
                <button className="openbtn" onClick={this.toggle_show}> Sidebar </button>
                &emsp;Breadcrumbs
                <div className={this.state.classname}>
                    <a href="#" className="closebtn" onClick={this.toggle_show}>X</a>
                    <a href="/">Home</a>
                    <a href="/strain">Strain</a>
                    <a href="/tax">Taxonomy</a>
                </div>
            </>
        )
    }
}
