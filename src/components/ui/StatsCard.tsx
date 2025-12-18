import { ReactNode } from 'react';
import { Card } from './Card';

interface StatsCardProps {
    title: string;
    value: string | number;
    icon: ReactNode;
    trend?: {
        value: number;
        isPositive: boolean;
    };
    className?: string;
}

export function StatsCard({ title, value, icon, trend, className }: StatsCardProps) {
    return (
        <Card className={`p-5 ${className}`}>
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-600">{title}</p>
                    <p className="text-3xl font-bold mt-2 text-gray-900">{value}</p>
                    {trend && (
                        <div className="flex items-center mt-2">
                            <span className={`text-sm font-medium ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                                {trend.isPositive ? '↗' : '↘'} {Math.abs(trend.value)}%
                            </span>
                            <span className="text-sm text-gray-500 ml-2">from last month</span>
                        </div>
                    )}
                </div>
                <div className="p-3 bg-gradient-to-br from-primary/10 to-purple-600/10 rounded-xl">
                    {icon}
                </div>
            </div>
        </Card>
    );
}