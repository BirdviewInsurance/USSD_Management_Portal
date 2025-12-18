'use client';

import { useTheme } from 'next-themes';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { CardBody } from '@heroui/card';
import { cn } from '@/lib/utils';

const data = [
    { date: 'Jan 1', requests: 4000, revenue: 2400, active: 42 },
    { date: 'Jan 2', requests: 3000, revenue: 1398, active: 38 },
    { date: 'Jan 3', requests: 2000, revenue: 9800, active: 45 },
    { date: 'Jan 4', requests: 2780, revenue: 3908, active: 41 },
    { date: 'Jan 5', requests: 1890, revenue: 4800, active: 39 },
    { date: 'Jan 6', requests: 2390, revenue: 3800, active: 43 },
    { date: 'Jan 7', requests: 3490, revenue: 4300, active: 46 },
];

export function UsageChart() {
    const { theme } = useTheme();

    const isDark = theme === 'dark' || theme === 'modern';
    const textColor = isDark ? '#a1a1aa' : '#71717a';
    const gridColor = isDark ? '#27272a' : '#e4e4e7';
    const tooltipBg = isDark ? '#27272a' : '#ffffff';
    const tooltipBorder = isDark ? '#3f3f46' : '#e4e4e7';

    return (
        <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorRequests" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="hsl(var(--success))" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="hsl(var(--success))" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorActive" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="hsl(var(--secondary))" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="hsl(var(--secondary))" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid
                        strokeDasharray="3 3"
                        stroke={gridColor}
                        vertical={false}
                    />
                    <XAxis
                        dataKey="date"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: textColor, fontSize: 11 }}
                        tickMargin={10}
                    />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: textColor, fontSize: 11 }}
                        tickMargin={10}
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: tooltipBg,
                            borderColor: tooltipBorder,
                            borderRadius: '12px',
                            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
                            color: isDark ? '#ffffff' : '#000000',
                            padding: '12px',
                            border: `1px solid ${tooltipBorder}`,
                        }}
                        labelStyle={{ fontWeight: 'bold', marginBottom: '8px' }}
                        formatter={(value, name) => {
                            const formattedName = {
                                requests: 'USSD Requests',
                                revenue: 'Revenue',
                                active: 'Active Clients'
                            }[name as string] || name;

                            if (name === 'revenue') return [`$${value}`, formattedName];
                            return [value, formattedName];
                        }}
                    />
                    <Area
                        type="monotone"
                        dataKey="requests"
                        stroke="hsl(var(--primary))"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#colorRequests)"
                        dot={{ stroke: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                        activeDot={{ r: 6, strokeWidth: 0 }}
                    />
                    <Area
                        type="monotone"
                        dataKey="revenue"
                        stroke="hsl(var(--success))"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#colorRevenue)"
                        dot={{ stroke: 'hsl(var(--success))', strokeWidth: 2, r: 4 }}
                        activeDot={{ r: 6, strokeWidth: 0 }}
                    />
                    <Area
                        type="monotone"
                        dataKey="active"
                        stroke="hsl(var(--secondary))"
                        strokeWidth={2}
                        fillOpacity={0.3}
                        fill="url(#colorActive)"
                        dot={{ stroke: 'hsl(var(--secondary))', strokeWidth: 2, r: 3 }}
                        activeDot={{ r: 5, strokeWidth: 0 }}
                    />
                </AreaChart>
            </ResponsiveContainer>

            <div className="flex justify-center space-x-8 mt-6">
                {[
                    { key: 'requests', label: 'USSD Requests', color: 'hsl(var(--primary))' },
                    { key: 'revenue', label: 'Revenue ($)', color: 'hsl(var(--success))' },
                    { key: 'active', label: 'Active Clients', color: 'hsl(var(--secondary))' },
                ].map((item) => (
                    <div key={item.key} className="flex items-center">
                        <div
                            className="h-3 w-3 rounded-full mr-2"
                            style={{ backgroundColor: item.color }}
                        />
                        <span className="text-sm font-medium text-default-600">
                            {item.label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}