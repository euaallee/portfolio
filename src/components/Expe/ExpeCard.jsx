import React from 'react'

export default function ExpeCard({ imgExpe, expeItemName, psExpe }) {
    return (
        <div className="card">
            <div className="hover">
                <img src={imgExpe} alt={`Experiência ${expeItemName}`} />
                <h3>{expeItemName}</h3>
                <p>{psExpe}</p>
            </div>
        </div>
    )
}
