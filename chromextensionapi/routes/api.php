<?php

use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/products', [ProductController::class, 'getProducts']);
//Route::get('/product-details', function () {
//    return response()->json([
//        'title' => 'Sample Product 2',
//        'description' => 'Another sample product.',
//        'price' => 22.99,
//        'images' => ['https://picsum.photos/seed/picsum/200/300'],
//        'category' => 'Electronics'
//    ]);
//});
