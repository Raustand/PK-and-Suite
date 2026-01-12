<?php

namespace App\Http\Controllers;

use App\Models\Staff;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;

class StaffController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('dashboard/staff/index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('dashboard/staff/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'dob' => 'required|date',
            'gender' => 'required',
            'position' => 'required',
            'email' => 'required|email|unique:staff,email',
            'phone' => 'required',
            'role' => 'required',
            'salary' => 'required|numeric',
            'status' => 'required|string',
            'image' => 'required|image|max:2048',
        ]);
        $file = $request->file('image');
        $filePath = $file->store('staff', 'public');

        Staff::create([
            'user_id' => Auth::id(),
            'slug' => Str::slug($request->name),
            'name' => $request->name,
            'dob' => $request->dob,
            'gender' => $request->gender,
            'position' => $request->position,
            'email' => $request->email,
            'phone' => $request->phone,
            'role' => $request->role,
            'salary' => $request->salary,
            'status' => $request->status,
            'image_path' => $filePath
        ]);
        return to_route('staff/index')->with('success', 'Staff member added successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Staff $staff)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Staff $staff)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Staff $staff)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Staff $staff)
    {
        //
    }
}
