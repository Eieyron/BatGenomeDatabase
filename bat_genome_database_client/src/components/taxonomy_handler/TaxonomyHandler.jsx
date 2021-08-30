import React, { Component } from 'react'
import CategoryPicker from './CategoryPicker';
import './TaxonomyHandler.css'


export default class TaxonomyHandler extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            rendered_object: "default",
        }

        this.goToCategory = this.goToCategory.bind(this)
    }

    goToCategory(category_name){
        this.setState({
            rendered_object:category_name
        })
    }

    render() {

        if(this.state.rendered_object === "default"){
            return (            
                <div className="thandler">
    
                    <div className="sectionTitle">Select Taxonomy Category</div>
    
                    <ul>
                        <li><button onClick={() => this.goToCategory("Domain")}>Domain</button></li>
                        <li><button onClick={() => this.goToCategory("Phylum")}>Phylum</button></li>
                        <li><button onClick={() => this.goToCategory("Class")}>Class</button></li>
                        <li><button onClick={() => this.goToCategory("Order")}>Order</button></li>
                        <li><button onClick={() => this.goToCategory("Family")}>Family</button></li>
                        <li><button onClick={() => this.goToCategory("Genus")}>Genus</button></li>
                        <li><button onClick={() => this.goToCategory("Species")}>Species</button></li>
                    </ul>
                    
                </div>      
            )    
        }else{
            return(
                <CategoryPicker 
                    Category={this.state.rendered_object}
                />
            )
        }


    }
}
