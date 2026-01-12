import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { Search } from 'lucide-react';
import { toast } from 'sonner';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { useEffect } from 'react';

// interface PageProps {
//     flash: {
//         message?: string;
//         error?: string;
//     };
//     [key: string]: any;
// }

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Staff Management',
        href: '/staff',
    },
];


export default function Dashboard() {

    const { flash } = usePage<{flash: {message?: string}}>().props;
    
    useEffect(() => {
        if (flash.message) {
           toast.success(flash.message);
        }
    }, [flash.message]);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Staff Management" />
            <div className="flex-l flex h-full flex-col gap-4 rounded-xl p-4">
                <div className="rounded border p-6 shadow-xl">
                    <div className="flex items-center justify-between mb-10">
                        <div className="relative w-full sm:w-1/3">
                            <div className="peer-disable:opacity-50 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80">
                                <Search size={16} aria-hidden={true} />
                            </div>
                            <input
                                id={"search"}
                                className="flex h-10 w-full rounded-md border border-input bg-background px-9 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="Search..."
                                type="search"
                            />
                        </div>
                        <Button className="flex rounded-md border" asChild>
                            <Link href="/staff/create" prefetch>New Staff</Link>
                        </Button>
                    </div>
                    <Card>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>#</TableHead>
                                        <TableHead>Image</TableHead>
                                        <TableHead>Staff Name</TableHead>
                                        <TableHead>D.O.B</TableHead>
                                        <TableHead>Gender</TableHead>
                                        <TableHead>Email</TableHead>
                                        <TableHead>Phone</TableHead>
                                        <TableHead>Role</TableHead>
                                        <TableHead>Salary</TableHead>
                                        <TableHead>Status</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {/* Map through staff data here */}
                                    <TableRow>
                                        <TableCell>1</TableCell>
                                        <TableCell>Image</TableCell>
                                        <TableCell>John Doe</TableCell>
                                        <TableCell>1990-01-01</TableCell>
                                        <TableCell>Male</TableCell>
                                        <TableCell>
                                            john.doe@example.com
                                        </TableCell>
                                        <TableCell>+1234567890</TableCell>
                                        <TableCell>Manager</TableCell>
                                        <TableCell>$50,000</TableCell>
                                        <TableCell>Active</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>2</TableCell>
                                        <TableCell>Image</TableCell>
                                        <TableCell>John Doe</TableCell>
                                        <TableCell>1990-01-01</TableCell>
                                        <TableCell>Male</TableCell>
                                        <TableCell>
                                            john.doe@example.com
                                        </TableCell>
                                        <TableCell>+1234567890</TableCell>
                                        <TableCell>Manager</TableCell>
                                        <TableCell>$50,000</TableCell>
                                        <TableCell>Active</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AppLayout>
    );
}
