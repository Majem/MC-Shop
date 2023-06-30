<?php

use Illuminate\Support\Facades\Route;

Route::domain('panel.' . env('APP_URL'))->group(function () {
    Route::get('/', function () {
        echo 'asd';
        exit();
    });
});
