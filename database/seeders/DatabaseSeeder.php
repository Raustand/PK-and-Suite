<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Room;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    
    {
        // User::factory(10)->create();

        // User::firstOrCreate(
        //     ['email' => 'test@example.com'],
        //     [
        //         'name' => 'Test User',
        //         'password' => 'password',
        //         'email_verified_at' => now(),
        //     ]
        // );


        $rooms = [
    
            [
                'title' => "Single Room",
                'price' => 450.00,
                'image' => '/assets/single.jpg',
                'available' => 5,
                'total_rooms' => 10,
                'status' => 'active',
                'description' => "The Single Room is perfect for solo travelers, students, or business guests looking for simplicity and comfort. It comes with a cozy single bed, a work desk, and free Wi-Fi for productivity. The room also includes a flat-screen TV, a compact wardrobe, and a mini fridge. The private bathroom has a modern shower, and daily housekeeping ensures a clean and comfortable stay. This room is budget-friendly while still offering all the essentials.",
                'amenities' => [
                    ['icon' => "wifi", 'label' => "Free Wi-Fi"],
                    ['icon' => "roomService", 'label' => "24/7 room service"],
                    ['icon' => "kitchen", 'label' => "Mini fridge & microwave"],
                    ['icon' => "ac", 'label' => "Air Conditioning"],
                    ['icon' => "tv", 'label' => "Flat-screen TV"],
                    ['icon' => "coffee", 'label' => "Coffee Maker"],
                ],
            ],

            [
                'title' => "Family Room",
                'price' => 649.00,
                'image' => '/assets/fam.avif',
                'available' => 2,
                'total_rooms' => 8,
                'status' => 'active',
                'description' => "The Family Room is ideal for families or groups traveling together. It provides generous space with two queen-size beds or a king bed with an extra twin/sofa bed to accommodate children. The room includes a flat-screen TV with kids' channels, a mini fridge, and even a microwave for convenience. Families can also request a baby crib, and some rooms offer interconnected layouts for larger groups. A spacious bathroom with a bathtub makes it comfortable for families, ensuring everyone enjoys their stay.",
                'amenities' => [
                    ['icon' => "wifi", 'label' => "Free Wi-Fi"],
                    ['icon' => "ac", 'label' => "Air Conditioning"],
                    ['icon' => "tv", 'label' => "Flat-screen TV"],
                    ['icon' => "coffee", 'label' => "Coffee Maker"],
                    ['icon' => "roomService", 'label' => "24/7 room service"],
                    ['icon' => "kitchen", 'label' => "Mini fridge & microwave"],
                    ['icon' => "desk", 'label' => "Work Desk"],
                ],
            ],

            [
                'title' => "Executive Room",
                'price' => 870.00,
                'image' => '/assets/delux.jpg',
                'available' => 3,
                'total_rooms' => 6,
                'status' => 'active',
                'description' => "The Executive Suite is designed for guests who want luxury and extra comfort. It features a spacious king-size bed, a private balcony with breathtaking city views, and a separate living area for relaxation or meetings. The suite comes with modern amenities like a Smart TV, high-speed Wi-Fi, a mini bar, and a coffee maker. The en-suite bathroom includes a jacuzzi for ultimate relaxation. With a work desk and 24/7 room service, this room is perfect for business executives and travelers seeking a premium stay.",
                'amenities' => [
                    ['icon' => "wifi", 'label' => "Free Wi-Fi"],
                    ['icon' => "ac", 'label' => "Air Conditioning"],
                    ['icon' => "roomService", 'label' => "24/7 room service"],
                    ['icon' => "tv", 'label' => "Flat-screen TV"],
                    ['icon' => "coffee", 'label' => "Coffee Maker"],
                    ['icon' => "kitchen", 'label' => "Mini fridge & microwave"],
                    ['icon' => "balcony", 'label' => "Private Balcony"],
                    ['icon' => "desk", 'label' => "Work Desk"],
                ],
            ],

            [
                'title' => "Deluxe King Room",
                'price' => 699.00,
                'image' => '/assets/hypnos.jpg',
                'available' => 0,
                'total_rooms' => 5,
                'status' => 'active',
                'description' => "Experience unparalleled comfort in our Deluxe King Room. This spacious room features a plush king-sized bed, a modern work desk, and a cozy seating area. The en-suite bathroom is equipped with a rain shower and premium toiletries. Enjoy stunning city views from your private balcony.",
                'amenities' => [
                    ['icon' => "wifi", 'label' => "Free Wi-Fi"],
                    ['icon' => "ac", 'label' => "Air Conditioning"],
                    ['icon' => "tv", 'label' => "Flat-screen TV"],
                    ['icon' => "roomService", 'label' => "24/7 room service"],
                    ['icon' => "coffee", 'label' => "Coffee Maker"],
                    ['icon' => "kitchen", 'label' => "Mini fridge & microwave"],
                    ['icon' => "balcony", 'label' => "Private Balcony"],
                    ['icon' => "desk", 'label' => "Work Desk"],
                ],
            ]
        ];

        foreach($rooms as $room){
            Room::create($room);
        }
    }
}