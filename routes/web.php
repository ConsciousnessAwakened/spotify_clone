<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/callback', [\App\Http\Controllers\CallbackController::class, 'prototype']);

Route::get('/', function () {

    return inertia('Layouts/App');
});

Route::get('/authorize', function () {

    return inertia('Layouts/App');
});
