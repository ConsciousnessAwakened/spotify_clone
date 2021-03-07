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

Route::get('/', [\App\Http\Controllers\AuthorizationController::class, 'index']);
Route::get('/callback', [\App\Http\Controllers\AuthorizationController::class, 'index']);
Route::post('/callback', [\App\Http\Controllers\AuthorizationController::class, 'index']);

Route::post('/state', [\App\Http\Controllers\AuthorizationController::class, 'storeState']);

Route::get('/feature', function(){return inertia('Pages/Main/Welcome');});

Route::middleware(['authorized'])->group(function () {

    Route::get('/account', function(){return inertia('Pages/Main/Welcome');});
});
