import React from 'react'

// interface ICardProps {
//     timestamp: string,
//     reportingGroup: string,
//     locationName: string,
//     value: number,
//     unit: string
// }

const Card = ({ timestamp, reportingGroup, locationName, value, unit }) => {
    return (
        <article className='flex flex-col border '>
            <div className='grid grid-cols-5'>
                <p>Timestamp</p>
                <p>ReportingGroup</p>
                <p>LocationName</p>
                <p>Value</p>
                <p>Unit</p>
            </div>
            <div className='grid grid-cols-5'>
                <p>{timestamp}</p>
                <p>{reportingGroup}</p>
                <p>{locationName}</p>
                <p>{value}</p>
                <p>{unit}</p>
            </div>
        </article>
    )
}

export default Card