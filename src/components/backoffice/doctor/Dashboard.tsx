import React from 'react'
import WeeklyChart from './WeeklyChart'
export default function Dashboard() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6">
                    <WeeklyChart />
                </div>
                <div className="col-lg-4">
                </div>
            </div>

        </div>
    )
}

