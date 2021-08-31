import React from 'react'
import StrainContent from '../../components/strain_content/StrainContent'
import './Strain.css'

export default function Strain() {
    return (
        <div className="strain_content">
            <h1 className="title">Strain Database</h1>
            <StrainContent />
        </div>
    )
}
