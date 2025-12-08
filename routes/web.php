<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/signin', function () {
    return Inertia::render('auth/login', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

Route::get('/admin',function(){
     return Inertia::render('dashboard');
})->name('admin');
});


require __DIR__.'/settings.php';


// Route::get('/', function () {
//     return Inertia::render('dashboard');
// })->name('welcome');

Route::get('/', function () {
    return Inertia::render('public/home');
})->name('homepage');

Route::get('/aboutus',function(){
     return Inertia::render('public/aboutus');
})->name('aboutus');

Route::get('/services',function(){
     return Inertia::render('public/services');
})->name('services');

Route::get('/rooms',function(){
     return Inertia::render('public/rooms');
})->name('rooms');

Route::get('/gallery',function(){
     return Inertia::render('public/gallery');
})->name('gallery');

Route::get('/contactus',function(){
     return Inertia::render('public/contactus');
})->name('contactus');

Route::get('/terms',function(){
     return Inertia::render('public/terms');
})->name('terms');

Route::get('/book',function(){
     return Inertia::render('public/book');
})->name('book');

Route::get('/deluxeroom',function(){
     return Inertia::render('public/roomdeluxe');
})->name('deluxroom');

Route::get('/executiveroom',function(){
     return Inertia::render('public/roomexecutive');
})->name('executiveroom');

Route::get('/familyroom',function(){
     return Inertia::render('public/roomfamily');
})->name('familyroom');

Route::get('/singleroom',function(){
     return Inertia::render('public/roomsingle');
})->name('singleroom');