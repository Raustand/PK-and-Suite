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
        title: 'Create Staff',
        href: '/staff/create',
    },
];

export default function Dashboard() {


    const {data, setData, post, errors, processing} = useForm<{
        name: string;
        dob: string;
        gender: string;
        email: string;
        phone: string;
        role: string;
        salary: string;
        status: string;
        image: File | null;
    }>({
        name: '',
        dob: '',
        gender: '',
        email: '',
        phone: '',
        role: '',
        salary: '',
        status: '',
        image: null,
    });

    function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post('/staff', {
            preserveScroll: true,
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Staff" />

            <div className="flex h-full flex-col gap-4 rounded-xl p-4">
                <div className="rounded border p-6 shadow-xl">
                    {/* Header */}
                    <div className="mb-10 flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-slate-700">
                            Create Staff 
                        </h2>

                        <div className="flex gap-2">
                        <Button asChild>
                            <Link href="/staff">Go Back</Link>
                        </Button>
                        </div>

                    </div>

                    <Card>
                        <CardContent className="pt-6">
                            <form className="space-y-6" onSubmit={handleFormSubmit}>
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                    {/* Staff Name */}
                                    <div className="col-span-2">
                                        <Label>Staff Name</Label>
                                        <Input placeholder="John Doe" type='name' id='name' value={data.name} onChange={(e) => setData('name', e.target.value)} aria-invalid={!!errors.name} />
                                        <InputError message={errors.name} />
                                    </div>

                                    {/* DOB */}
                                    <div>
                                        <Label>Date of Birth</Label>
                                        <Input  type="date" id='dob' value={data.dob} onChange={(e) => setData('dob', e.target.value)} aria-invalid={!!errors.dob} />
                                        <InputError message={errors.dob} />
                                    </div>

                                    {/* Gender */}
                                    <div>
                                        <Label>Gender</Label>
                                        <Select value={data.gender} onValueChange={(value) => setData('gender', value)} aria-invalid={!!errors.gender}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select gender" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="male">Male</SelectItem>
                                                <SelectItem value="female">Female</SelectItem>
                                            </SelectContent>
                                            <InputError message={errors.gender} />
                                        </Select>
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <Label>Email</Label>
                                        <Input type="email" placeholder="john.doe@example.com" id='Email' value={data.email} onChange={(e) => setData('email', e.target.value)} aria-invalid={!!errors.email} />
                                        <InputError message={errors.email} />
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <Label>Phone</Label>
                                        <Input placeholder="+1234567890" type='phone' value={data.phone} onChange={(e) => setData('phone', e.target.value)} aria-invalid={!!errors.phone} />
                                        <InputError message={errors.phone} />
                                    </div>

                                    {/* Role */}
                                    <div>
                                        <Label>Role</Label>
                                        <Input placeholder="Manager" type='role' value={data.role} onChange={(e) => setData('role', e.target.value)} aria-invalid={!!errors.role} />
                                        <InputError message={errors.role} />
                                    </div>

                                    {/* Status */}
                                    <div>
                                        <Label>Status</Label>
                                        <Select value={data.status} onValueChange={(value) => setData('status', value)} aria-invalid={!!errors.status}  >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select status" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="active">Active</SelectItem>
                                                <SelectItem value="inactive">Inactive</SelectItem>
                                            </SelectContent>
                                            <InputError message={errors.status} />
                                        </Select>
                                    </div>

                                    {/* Salary */}
                                    <div>
                                        <Label>Salary</Label>
                                        <Input placeholder="$50,000" type='salary' value={data.salary} onChange={(e) => setData('salary', e.target.value)} aria-invalid={!!errors.salary} />
                                        <InputError message={errors.salary} />
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
