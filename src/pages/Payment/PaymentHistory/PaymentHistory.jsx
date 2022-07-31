import { Card, CardContent } from '@mui/material';
import React from 'react';
import PaymentHistoryTable from '../../../components/PaymentHistoryTable/PaymentHistoryTable';

const PaymentHistory = () => {
    return (
        <div>
            <h1>Payment History</h1>
            <Card variant="outlined">
                <CardContent>
                    <PaymentHistoryTable />
                </CardContent>
            </Card>

        </div>
    );
};

export default PaymentHistory;