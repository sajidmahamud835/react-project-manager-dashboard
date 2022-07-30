import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";


const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
}: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? "start" : "end"}
            dominantBaseline="central"
        >
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

export default function ProjectsChart(props) {
    const data = props.data
    const COLORS = props.colors;
    return (
        <Card sx={{ minHeight: 400 }}>
            <CardHeader title="Project Completaion" />
            <CardContent>
                <Grid container spacing={3}>
                    <Grid item xs={7}>
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={data}
                                    cx={160}
                                    cy={120}
                                    labelLine={false}
                                    label={renderCustomizedLabel}
                                    outerRadius={120}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {data.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={COLORS[index % COLORS.length]}
                                        />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </Grid>
                    <Grid item xs={3}>
                        <Grid container spacing={3}>
                            {data.map((entry, index) => (
                                <Grid item xs={12} key={`grid-${index}`}>
                                    <Card
                                        sx={{
                                            backgroundColor: COLORS[index % COLORS.length],
                                            color: "white",
                                            textAlign: "center",
                                            padding: "1rem"
                                        }}
                                    >
                                        {entry.name}
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}
