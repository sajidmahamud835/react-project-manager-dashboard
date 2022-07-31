import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';


const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'date', headerName: 'Date', width: 150 },
    { field: 'paymentMethod', headerName: 'Payment Method', width: 150 },
    { field: 'amount', headerName: 'Amount', width: 110 },
    { field: 'status', headerName: 'Status', width: 160 },
];

const rows = [
    { id: 1, date: '2020-01-01', paymentMethod: 'PayPal', amount: '$100.00', status: 'Paid' },
    { id: 2, date: '2020-01-01', paymentMethod: 'PayPal', amount: '$100.00', status: 'Paid' },
    { id: 3, date: '2020-01-01', paymentMethod: 'PayPal', amount: '$100.00', status: 'Paid' },
    { id: 4, date: '2020-01-01', paymentMethod: 'PayPal', amount: '$100.00', status: 'Paid' },
    { id: 5, date: '2020-01-01', paymentMethod: 'PayPal', amount: '$100.00', status: 'Paid' },
    { id: 6, date: '2020-01-01', paymentMethod: 'PayPal', amount: '$100.00', status: 'Paid' },
    { id: 7, date: '2020-01-01', paymentMethod: 'PayPal', amount: '$100.00', status: 'Paid' },
    { id: 8, date: '2020-01-01', paymentMethod: 'PayPal', amount: '$100.00', status: 'Paid' },
    { id: 9, date: '2020-01-01', paymentMethod: 'PayPal', amount: '$100.00', status: 'Paid' },
    { id: 10, date: '2020-01-01', paymentMethod: 'PayPal', amount: '$100.00', status: 'Paid' },
    { id: 11, date: '2020-01-01', paymentMethod: 'PayPal', amount: '$100.00', status: 'Paid' },
];



export default function PaymentHistoryTable() {
    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </Box>
    );
}
