import React from 'react'
import Card from '../Card/Card'
const Cards = ({ energyData }) => {
    return (
        <div>
            {energyData.map((energy, index) => {
                return (
                    <Card
                        key={index}
                        timestamp={energy.timestamp}
                        reportingGroup={energy.reportingGroup}
                        locationName={energy.locationName}
                        value={energy.value}
                        unit={energy.unit}
                    />
                )
            })}
        </div>
    )
}

export default Cards