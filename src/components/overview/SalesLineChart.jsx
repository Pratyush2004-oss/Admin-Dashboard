import React from 'react'
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from "recharts";

const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"];

const SALES_CHANNEL_DATA = [
    { name: "Website", value: 45600 },
    { name: "Mobile App", value: 38200 },
    { name: "Marketplace", value: 29800 },
    { name: "Social Media", value: 18700 },
];
const SalesLineChart = () => {
    return (
        <motion.div
            className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 lg:col-span-2'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
        <h2 className='text-lg font-medium mb-4 text-gray-100'>Sales by Channel</h2>

        <div className='h-80'>
        <ResponsiveContainer width={'100%'} height={'100%'}>
        <BarChart data={SALES_CHANNEL_DATA}>
        <CartesianGrid strokeDasharray='3 3' stroke='#4B5563'/>
        <XAxis stroke='#9CA3AF' dataKey={'name'}/>
        <YAxis stroke='#9CA3AF'/>
        <Tooltip
        contentStyle={{
            backgroundColor: "rgba(31,41,55,0.8)",
            borderColor: "#4B5563"
        }}
        itemStyle={{
            color: "#E5E7EB"
        }}
        />

        <Legend/>
        <Bar dataKey={'value'} fill='#8884d8'> 
        {SALES_CHANNEL_DATA.map((entry, idx)=> (
            <Cell key={`cell=${idx}`} fill={COLORS[idx % COLORS.length]}/>
        ))}
        
        </Bar>
        
        </BarChart>
        
        </ResponsiveContainer>
        </div>
        </motion.div>
    )
}

export default SalesLineChart