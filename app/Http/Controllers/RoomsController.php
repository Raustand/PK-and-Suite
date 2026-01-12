<?php

namespace App\Http\Controllers;

use App\Models\Rooms;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;

class RoomsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('dashboard/rooms/index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('dashboard/rooms/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'image' => 'required|image|max:2048',
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'amenities' => 'required|string',
            'price' => 'required|numeric',
            'total_rooms' => 'required|integer',
            'image' => 'required|image|max:2048',
        ]);
        $file = $request->file('image');
        $filePath = $file->store('rooms', 'public');
        Rooms::create([
            'user_id' => Auth::id(),
            'name' => $request->name,
            'description' => $request->description,
            'amenities' => $request->amenities,
            'price' => $request->price,
            'total_rooms' => $request->total_rooms,
            'slug' => Str::slug($request->name),
            'image' => $filePath,
        ]);
        return redirect()->route('rooms.index')->with('success', 'Room created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Rooms $rooms)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Rooms $rooms)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Rooms $rooms)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Rooms $rooms)
    {
        //
    }
}
