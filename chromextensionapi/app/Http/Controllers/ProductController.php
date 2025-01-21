<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\JsonResponse;

class ProductController extends Controller
{
    public function getProducts(): JsonResponse
    {
        return response()->json(Product::all());
    }

}
