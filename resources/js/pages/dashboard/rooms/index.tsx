import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
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

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Rooms Management',
        href: '/rooms',
    },
];

export default function Dashboard() {
   

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Rooms Management" />
            <div className="flex h-full flex-l flex-col gap-4 rounded-xl p-4">
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
                            <Link href="/rooms/create" prefetch>New Room</Link>
                        </Button>
                    </div>
                    <Card>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>#</TableHead>
                                        <TableHead>Image</TableHead>
                                        <TableHead>Name</TableHead>
                                        <TableHead>Description</TableHead>
                                        <TableHead>Amenities</TableHead>
                                        <TableHead>Total Rooms</TableHead>
                                        <TableHead>Price</TableHead>
                                        <TableHead>Status</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {/* Map through staff data here */}
                                    <TableRow>
                                        <TableCell>1</TableCell>
                                        <TableCell>Image</TableCell>
                                        <TableCell>Single Room</TableCell>
                                        <TableCell>Spacious room with sea view</TableCell>
                                        <TableCell>WiFi, TV, Mini-bar</TableCell>
                                        <TableCell>10</TableCell>
                                        <TableCell>$150</TableCell>
                                        <TableCell>Available</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>1</TableCell>
                                        <TableCell>Image</TableCell>
                                        <TableCell>Deluxe Room</TableCell>
                                        <TableCell>Spacious room with sea view</TableCell>
                                        <TableCell>WiFi, TV, Mini-bar</TableCell>
                                        <TableCell>5</TableCell>
                                        <TableCell>$250</TableCell>
                                        <TableCell>Occupied</TableCell>
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