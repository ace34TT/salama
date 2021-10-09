import { Divider, Typography } from '@mui/material';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Pie } from 'recharts';
const customers = [
    { name: '02-10-21', uv: 400, pv: 2400, amt: 2400 },
    { name: '02-10-21', uv: 10, pv: 2400, amt: 2400 },
    { name: '02-10-21', uv: 400, pv: 2400, amt: 120 },
    { name: '02-10-21', uv: 200, pv: 2400, amt: 120 },
    { name: '02-10-21', uv: 150, pv: 2400, amt: 120 },
    { name: '02-10-21', uv: 400, pv: 2400, amt: 120 },
    { name: '02-10-21', uv: 400, pv: 2400, amt: 120 },
    { name: '02-10-21', uv: 400, pv: 2400, amt: 120 }
];

const doctors = [
    { name: '02-10-21', uv: 0, pv: 2400, amt: 2400 },
    { name: '02-10-21', uv: 1, pv: 2400, amt: 2400 },
    { name: '02-10-21', uv: 10, pv: 2400, amt: 120 },
    { name: '02-10-21', uv: 20, pv: 2400, amt: 120 },
    { name: '02-10-21', uv: 150, pv: 2400, amt: 120 },
    { name: '02-10-21', uv: 300, pv: 2400, amt: 120 },
    { name: '02-10-21', uv: 4, pv: 2400, amt: 120 },
    { name: '02-10-21', uv: 5, pv: 2400, amt: 120 }
]

export default function CstDrChart() {
    return (
        <div>
            <div className="offset-1 mt-4">
                <LineChart width={700} height={300}  >
                    <Line type="monotone" dataKey="uv" stroke="#3c81e8" data={customers} />
                    <Line type="monotone" dataKey="uv" stroke="#fa325a" data={doctors} />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </div>
        </div >

    )
}
