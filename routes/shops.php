<?php

use Illuminate\Routing\Router;
use Illuminate\Support\Facades\Route;

Route::domain('{id}.' . env('APP_URL'))->group(function () {


    Route::get('/', function($id) {
       echo $id;
       exit();
    });
});
