import React from 'react'
import StrainContent from '../../components/strain_content/StrainContent'
import './Strain.css'

export default function Strain() {
    return (
        <div className="strain_content">
            <div className="title">Strain Database</div>
            <StrainContent />
        </div>
    )
}
