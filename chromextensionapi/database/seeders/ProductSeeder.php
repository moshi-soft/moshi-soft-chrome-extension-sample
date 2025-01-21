<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Product::create([
            'name' => 'Sample Product 1',
            'description' => 'A sample product for testing.',
            'price' => 12.50,
            'image_url' => 'https://picsum.photos/seed/picsum/200/300',
        ]);

        Product::create([
            'name' => 'Sample Product 2',
            'description' => 'Another sample product.',
            'price' => 22.99,
            'image_url' => 'https://picsum.photos/seed/picsum/200/300',
        ]);
    }
}
