import React from 'react'
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Legend, Bar, Tooltip } from 'recharts'

/**
 * 
 * @param {Array<object>} data de la forma [{name: 'Enero',quantity: filterQuantity(1),amount: addAmount(1)}],
 * @returns gráfico de barras doble
 */
export const CustomBarChart = ({data = []}) => {
    return (
        <ResponsiveContainer width='100%' aspect={4.0 / 2.0}>
        <BarChart data={data} barGap={4}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
            <YAxis yAxisId="right" orientation="right" stroke="#333"/>
            <Legend />
            <Tooltip cursor={{ stroke: '#333', strokeWidth: 1 }} />
            <Bar yAxisId="left" name="Cantidad" dataKey="quantity" fill="#cf0000" />
            <Bar yAxisId="right" name="Monto" dataKey="amount" fill="#1cc5dc" />
        </BarChart>
    </ResponsiveContainer>

    )
}
