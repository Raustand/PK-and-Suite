import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';

import { Head, Link, useForm } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';
import { 
  Hotel, 
  Users, 
  TrendingUp, 
  Calendar,
  CheckCircle,
  Clock,
  AlertCircle,
  DollarSign,
  BedDouble
} from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

export default function Dashboard() {
    const stats = [
        { 
            label: "Available Rooms", 
            value: 15, 
            total: 45,
            icon: BedDouble,
            trend: "+2 from yesterday",
            color: "bg-green-50 border-green-200",
            iconColor: "text-green-600",
            valueColor: "text-green-700"
        },
        { 
            label: "Total Guests", 
            value: 48,
            icon: Users,
            trend: "+5 this week",
            color: "bg-blue-50 border-blue-200",
            iconColor: "text-blue-600",
            valueColor: "text-blue-700"
        },
        { 
            label: "Revenue Today", 
            value: "$3,450",
            icon: DollarSign,
            trend: "+12% from yesterday",
            color: "bg-purple-50 border-purple-200",
            iconColor: "text-purple-600",
            valueColor: "text-purple-700"
        },
        { 
            label: "Check-ins Today", 
            value: 8,
            icon: Calendar,
            trend: "3 pending",
            color: "bg-orange-50 border-orange-200",
            iconColor: "text-orange-600",
            valueColor: "text-orange-700"
        },
    ];

    const recentActivity = [
        {
            name: "Lucas Bennett",
            room: "Single Room - 101",
            in: "2024-07-15",
            out: "2024-07-20",
            status: "Confirmed",
            statusColor: "bg-green-100 text-green-700 border-green-200"
        },
        {
            name: "Sophia Carter",
            room: "Family Room - 205",
            in: "2024-07-16",
            out: "2024-07-22",
            status: "Checked In",
            statusColor: "bg-blue-100 text-blue-700 border-blue-200"
        },
        {
            name: "Owen Hayes",
            room: "Executive Room - 302",
            in: "2024-07-18",
            out: "2024-07-25",
            status: "Pending",
            statusColor: "bg-yellow-100 text-yellow-700 border-yellow-200"
        },
        {
            name: "Emma Wilson",
            room: "Deluxe King - 410",
            in: "2024-07-17",
            out: "2024-07-21",
            status: "Checked Out",
            statusColor: "bg-gray-100 text-gray-700 border-gray-200"
        },
    ];

    const getStatusIcon = (status: string) => {
        switch(status) {
            case "Confirmed":
                return <CheckCircle className="w-4 h-4" />;
            case "Checked In":
                return <CheckCircle className="w-4 h-4" />;
            case "Pending":
                return <Clock className="w-4 h-4" />;
            default:
                return <AlertCircle className="w-4 h-4" />;
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <main className="flex-1 p-6 bg-gray-50">
                {/* Welcome Banner */}
                <div className="mb-6 p-6 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold mb-2">Welcome Back!</h1>
                            <p className="text-indigo-100">Here's what's happening at P-K Hotel today</p>
                        </div>
                        <Hotel className="w-16 h-16 opacity-50" />
                    </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, i) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={i}
                                className={`${stat.color} border-2 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow`}
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className={`p-3 rounded-lg ${stat.color}`}>
                                        <Icon className={`w-6 h-6 ${stat.iconColor}`} />
                                    </div>
                                    {stat.total && (
                                        <span className="text-sm text-gray-500">
                                            of {stat.total}
                                        </span>
                                    )}
                                </div>
                                <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
                                <p className={`text-4xl font-bold ${stat.valueColor} mb-2`}>
                                    {stat.value}
                                </p>
                                <div className="flex items-center gap-1 text-xs text-gray-500">
                                    <TrendingUp className="w-3 h-3" />
                                    <span>{stat.trend}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Recent Activity Section */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-bold text-gray-800">Recent Activity</h2>
                            <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                                View All →
                            </button>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    {[
                                        "Guest Name",
                                        "Room",
                                        "Check-in",
                                        "Check-out",
                                        "Status",
                                        "Actions"
                                    ].map((col, i) => (
                                        <th
                                            key={i}
                                            className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                        >
                                            {col}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {recentActivity.map((row, i) => (
                                    <tr 
                                        key={i} 
                                        className="hover:bg-gray-50 transition-colors"
                                    >
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold">
                                                    {row.name.split(' ').map(n => n[0]).join('')}
                                                </div>
                                                <div>
                                                    <p className="font-medium text-gray-900">{row.name}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="font-medium text-indigo-600">{row.room}</span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-600">
                                            {new Date(row.in).toLocaleDateString('en-US', { 
                                                month: 'short', 
                                                day: 'numeric' 
                                            })}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-600">
                                            {new Date(row.out).toLocaleDateString('en-US', { 
                                                month: 'short', 
                                                day: 'numeric' 
                                            })}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${row.statusColor}`}>
                                                {getStatusIcon(row.status)}
                                                {row.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                                                View Details
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button className="p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all text-left">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-indigo-50 rounded-lg">
                                <Calendar className="w-5 h-5 text-indigo-600" />
                            </div>
                            <div>
                                <p className="font-semibold text-gray-800">New Booking</p>
                                <p className="text-xs text-gray-500">Add a reservation</p>
                            </div>
                        </div>
                    </button>

                    <button className="p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all text-left">
                        <Link href="/rooms" className="flex items-center gap-3">
                            <div className="p-2 bg-purple-50 rounded-lg">
                                <BedDouble className="w-5 h-5 text-purple-600" />
                            </div>
                            <div>
                                <p className="font-semibold text-gray-800">Manage Rooms</p>
                                <p className="text-xs text-gray-500">View room status</p>
                            </div>
                        </Link>
                    </button>
                </div>
            </main>
        </AppLayout>
    );
}