import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import InputError from '@/components/input-error';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react';
import { Loader2 } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Manage Rooms',
        href: '/create/rooms',
    },
];

export default function Dashboard() {


    const {data, setData, post, errors, processing} = useForm<{
        name: string;
        image: File | null;
        description: string;
        amenities: string;
        price: string;
        total_rooms: string;
        status: string;
        
    }>({
        name: '',
        image: null,
        description: '',
        amenities: '',
        price: '',
        total_rooms: '',
        status: '',
    });

    function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post('/rooms', {
            preserveScroll: true,
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Add rooms" />

            <div className="flex h-full flex-col gap-4 rounded-xl p-4">
                <div className="rounded border p-6 shadow-xl">
                    {/* Header */}
                    <div className="mb-10 flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-slate-700">
                            Add Rooms 
                        </h2>

                        <div className="flex gap-2">
                        <Button asChild>
                            <Link href="/rooms">Go Back</Link>
                        </Button>
                        </div>

                    </div>
                    <Card>
                        <CardContent className="pt-6">
                            <form className="space-y-6" onSubmit={handleFormSubmit}>
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                    {/* Room Name */}
                                    <div className="col-span-2">
                                        <Label>Room Name</Label>
                                        <Input placeholder="Deluxe Room" type='text' id='name' value={data.name} onChange={(e) => setData('name', e.target.value)} aria-invalid={!!errors.name} />
                                        <InputError message={errors.name} />
                                    </div>

                                    {/* Amenities */}
                                    <div>
                                        <Label>Amenities</Label>
                                        <Select value={data.amenities} onValueChange={(value) => setData('amenities', value)} aria-invalid={!!errors.amenities}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select amenities" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="free_wifi">Free Wifi</SelectItem>
                                                <SelectItem value="air_condition">Air condition</SelectItem>
                                                <SelectItem value="mini_bar">Mini bar</SelectItem>
                                                <SelectItem value="room_service">Room service</SelectItem>
                                            </SelectContent>
                                            <InputError message={errors.amenities} />
                                        </Select>
                                    </div>

                                    {/* Total Rooms */}
                                    <div>
                                        <Label>Total Rooms</Label>
                                        <Input placeholder="0000" type='tel' value={data.total_rooms} onChange={(e) => setData('total_rooms', e.target.value)} aria-invalid={!!errors.total_rooms} />
                                        <InputError message={errors.total_rooms} />
                                    </div>

                                    {/* Description */}
                                    <div>
                                        <Label>Description</Label>
                                        <Input placeholder="" type='text' value={data.description} onChange={(e) => setData('description', e.target.value)} aria-invalid={!!errors.description} />
                                        <InputError message={errors.description} />
                                    </div>

                                    {/* Status */}
                                    <div>
                                        <Label>Status</Label>
                                        <Select value={data.status} onValueChange={(value) => setData('status', value)} aria-invalid={!!errors.status}  >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select status" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="available">Available</SelectItem>
                                                <SelectItem value="unavailable">Unavailable</SelectItem>
                                            </SelectContent>
                                            <InputError message={errors.status} />
                                        </Select>
                                    </div>

                                    {/* Price */}
                                    <div>
                                        <Label>Price</Label>
                                        <Input placeholder="$530" type='number' value={data.price} onChange={(e) => setData('price', e.target.value)} aria-invalid={!!errors.price} />
                                        <InputError message={errors.price} />
                                    </div>

                                    {/* Image */}
                                    <div>
                                        <Label>Select Image</Label>
                                        <Input type="file" id='image' onChange={(e) => {
                                            const file = e.target.files?.[0];
                                            if (file) { setData('image', file); }
                                        }} aria-invalid={!!errors.image} />
                                        <InputError message={errors.image} />
                                        <span className="text-sm text-gray-500">Image must be less than 2MB</span>
                                        {data.image && <img src={URL.createObjectURL(data.image)} alt="Preview" className="mt-2 w-32 object-cover rounded-lg" />}
                                    </div>
                                </div>

                                {/* Submit */}
                                <div className="flex justify-end">
                                    <Button size={'lg'} type="submit" disabled={processing}> {processing && <Loader2 className='animate-spin'/>}<span>Submit</span></Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AppLayout>
    );
}
