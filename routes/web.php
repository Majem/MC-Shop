<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/


require_once __DIR__ . '/shops.php';
require_once __DIR__ . '/dashboard.php';
Route::get('/', function () {
    return Inertia::render('Site/Home', [

    ]);
});

Route::get('/pricing', function () {
    return Inertia::render('Site/Pricing', [

    ]);
});

Route::get('/templates', function () {
    return Inertia::render('Site/Templates', [

    ]);
});
