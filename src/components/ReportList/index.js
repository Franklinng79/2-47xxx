import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// Generate Data
function createData(id, address, time, scanLink) {
    return { id, address, time, scanLink };
}

// rows of data
const rows = [
    createData(
        0,
        '0x6D9E826Ec94f1C2f685Fa641b5E28CF6BD924e3C',
        '17:22:23 16 Mar, 2023',
        <Link href="#" sx={{fontStyle: 'italic'}}>View Report</Link>
    ),
    createData(
        1,
        '0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE',
        '17:22:25 16 Mar, 2023',
        <Link href="#" sx={{fontStyle: 'italic'}}>View Report</Link>
    ),
    createData(
        2, 
        '0x467511EC2B3A414c2fEAb86982d3C4AFC22c966D', 
        '17:22:25 16 Mar, 2023',
        <Link href="#" sx={{fontStyle: 'italic'}}>View Report</Link>
        ),
    createData(
        3,
        '0x4B7fFCB2b92fB4890f22f62a52Fb7A180eaB818e',
        '17:22:26 16 Mar, 2023',
        <Link href="#" sx={{fontStyle: 'italic'}}>View Report</Link>
    ),
    createData(
        4,
        '0x755ABB98Cf98F99662A390875788c617DdC2eCAA',
        '17:22:33 16 Mar, 2023',
        <Link href="#" sx={{fontStyle: 'italic'}}>View Report</Link>
    ),
    createData(
        5,
        '0x6D9E826Ec94f1C2f685Fa641b5E28CF6BD924e3C',
        '17:22:33 16 Mar, 2023',
        <Link href="#" sx={{fontStyle: 'italic'}}>View Report</Link>
    ),
    createData(
        6,
        '0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE',
        '17:22:35 16 Mar, 2023',
        <Link href="#" sx={{fontStyle: 'italic'}}>View Report</Link>
    ),
    createData(
        7, 
        '0x467511EC2B3A414c2fEAb86982d3C4AFC22c966D', 
        '17:22:35 16 Mar, 2023',
        <Link href="#" sx={{fontStyle: 'italic'}}>View Report</Link>
        ),
    createData(
        8,
        '0x4B7fFCB2b92fB4890f22f62a52Fb7A180eaB818e',
        '17:22:46 16 Mar, 2023',
        <Link href="#" sx={{fontStyle: 'italic'}}>View Report</Link>
    ),
    createData(
        9,
        '0x755ABB98Cf98F99662A390875788c617DdC2eCAA',
        '17:22:53 16 Mar, 2023',
        <Link href="#" sx={{fontStyle: 'italic'}}>View Report</Link>
    ),
];

// generate report list
export default function ReportList() {
    return (
            <React.Fragment>

                {/* generate table */}
                <Table size="small">
                    <TableHead>
                        <TableRow sx={{
                            bgcolor: '#5AFFE7',
                            fontWeight: 'bolder'
                        }}>
                            <TableCell sx={{ fontWeight: 'bold' }}>Contract Address</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Submitted at</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Actions</TableCell>
                        </TableRow>
                    </TableHead>

                    {/* map generated data to rows of data presented in table */}
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.id} sx={{mt:'2em'}}>
                                <TableCell>{row.address}</TableCell>
                                <TableCell>{row.time}</TableCell>
                                <TableCell>{row.scanLink}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </React.Fragment>
    );
}