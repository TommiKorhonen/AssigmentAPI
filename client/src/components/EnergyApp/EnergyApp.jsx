import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Cards from "../Cards/Cards"
import { CSVLink } from "react-csv"
const EnergyApp = () => {
    const [energyData, setEnergyData] = useState([]);
    const [loading, setLoading] = useState(false);

    const headers = [
        { label: "Timestamp", key: "timestamp" },
        { label: "ReportingGroup", key: "reportingGroup" },
        { label: "LocationName", key: "locationName" },
        { label: "Value", key: "value" },
        { label: "Unit", key: "unit" }
    ]
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    const csvReport = {
        filename: `KauppahallinData_${date}.csv`,
        headers: headers,
        data: energyData
    }

    const fetchEnergyData = async () => {
        try {
            setLoading(true)
            const response = await axios.get('http://localhost:4000/energyMonthly')
            setEnergyData(response.data)
            setLoading(false)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchEnergyData();
    }, [])
    return (
        loading ? <p className='text-4xl'>Loading...</p>
            :
            <div>
                <div className='p-4'>
                    <CSVLink {...csvReport} className="bg-green-500 text-2xl p-4">Export to CSV</CSVLink>
                </div>
                <Cards energyData={energyData} />
            </div>
    )
}

export default EnergyApp