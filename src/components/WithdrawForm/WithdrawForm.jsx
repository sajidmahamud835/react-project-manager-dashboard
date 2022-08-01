import { Card, CardContent, CardHeader, FormControl, FormHelperText, Input, InputAdornment, InputLabel, Select, TextField, MenuItem, Button } from '@mui/material';
import React from 'react';

const paymentMethods = [
    {
        value: 'PayPal',
        label: 'PayPal',
    },
    {
        value: 'Bank',
        label: 'Bank',
    },
    {
        value: 'Credit Card',
        label: 'Credit Card',
    }
];

const WithdrawForm = () => {

    const [withdrawRequest, setWithdrawRequest] = React.useState({
        amount: '',
        paymentMethod: '',
    });


    return (
        <div>
            <Card>
                <CardHeader title="Withdraw Funds" subheader="Withdraw funds from your account." />
                <CardContent>
                    <TextField
                        id="amount"
                        label="Amount"
                        type="number"
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }}
                        defaultValue="30"
                        onChange={(e) => setWithdrawRequest({ ...withdrawRequest, amount: e.target.value })}
                        helperText="Enter the amount you want to withdraw."
                        sx={{ margin: '10px' }}
                    />

                    <TextField
                        id="select-payment-method"
                        select
                        label="Payment Method"
                        onChange={(e) => setWithdrawRequest({ ...withdrawRequest, paymentMethod: e.target.value })}
                        helperText="Please select a payment method."
                        sx={{ margin: '10px' }}
                    >
                        {paymentMethods.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>

                    <p>
                        <Button variant="contained" color="primary" sx={{ margin: 'auto 20px' }}>
                            Withdraw
                        </Button>
                    </p>

                </CardContent>
            </Card>
        </div>
    );
};

export default WithdrawForm;