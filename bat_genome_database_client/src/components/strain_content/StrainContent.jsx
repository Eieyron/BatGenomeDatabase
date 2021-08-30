// import React from 'react'
import './StrainContent.css'


import React, { Component } from 'react'
import { Button } from '@material-ui/core'


// const axios = require('axios').default;

export default class StrainContent extends Component {

    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    'name':"error",
                }
            ],
            isLoaded: false,
        }
    }

    componentDidMount(){

        fetch('http://127.0.0.1:8000/strain/')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            })

    }

    render() {
        return (
            <div className="strain_content_body">

                {
                    this.state.items.map(strain => (

                        <div key={strain.id}>

                            {console.log(strain)}

                            <div className="name">{strain.name}</div>
                            <div className="section">Name and Taxonomic Classification</div>
                
                                <ul className="section_contents">
                                <li className="information"><b>Scientific Name</b> &emsp;<i>{strain.scientific_name}</i></li>
                                <li className="information"><b>Domain</b> &emsp;<i>{strain.domain}</i></li>
                                <li className="information"><b>Phylum</b> &emsp;<i>{strain.phylum}</i></li>
                                <li className="information"><b>Class</b> &emsp;<i>{strain.class_name}</i></li>
                                <li className="information"><b>Order</b> &emsp;<i>{strain.order}</i></li>
                                <li className="information"><b>Family</b> &emsp;<i>{strain.family}</i></li>
                                <li className="information"><b>Genus</b> &emsp;<i>{strain.genus}</i></li>
                                <li className="information"><b>Species</b> &emsp;<i>{strain.species}</i></li>
                                </ul>
                

                            <div className="section">Culture and Growth Conditions</div>

                                <ul className="section_contents">
                                    <li className="information"><b>Medium</b> &emsp;<i>{strain.medium}</i></li>
                                    <li className="information"><b>Medium Composition</b> &emsp;<i>{strain.medium_composition}</i></li>
                                    <li className="information"><b>Medium Growth</b> &emsp;<i>{strain.medium_growth}</i></li>
                                    <li className="information"><b>Temperature</b> &emsp;<i>{strain.temperature}</i></li>
                                    <li className="information"><b>Temperature Range</b> &emsp;<i>{strain.temperature_range}</i></li>
                                    <li className="information"><b>Temperature Type</b> &emsp;<i>{strain.temperature_type}</i></li>
                                </ul>
                

                            <div className="section">Sequence Information</div>

                                <ul className="section_contents">
                                    <Button variant="contained"><a href={strain.type_strain}>Get Fasta</a></Button>
                                </ul>


                        </div>
                    ))
                }
                
            </div>
        )
    }
}

