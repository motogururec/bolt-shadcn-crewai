import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, Brain, Zap, Target } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    { title: 'Active Agents', value: '12', icon: Brain, color: 'text-blue-500' },
    { title: 'Tasks Completed', value: '342', icon: Target, color: 'text-green-500' },
    { title: 'Avg. Response Time', value: '1.2s', icon: Zap, color: 'text-yellow-500' },
    { title: 'System Load', value: '68%', icon: Activity, color: 'text-red-500' },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className={`h-4 w-4 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}