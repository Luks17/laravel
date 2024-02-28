<?php

use App\Http\Controllers\Dashboard\ClientController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});



Route::middleware('auth')->group(function () {
    Route::get('/dashboard',  [DashboardController::class, "index"])->name("dashboard");


    Route::get("/dashboard/clients", [ClientController::class, "index"])->name("dashboard.clients");
    Route::get("/dashboard/clients/create", [ClientController::class, "create"])->name("dashboard.clients.create");
    Route::get("/dashboard/clients/{id}", [ClientController::class, "show"])->name("dashboard.clients.show");
    Route::get("/dashboard/clients/{id}/edit", [ClientController::class, "edit"])->name("dashboard.clients.edit");

    Route::post("/dashboard/clients", [ClientController::class, "store"])->name("dashboard.clients.store");
    Route::put("/dashboard/clients/{id}/update", [ClientController::class, "update"])->name("dashboard.clients.update");
    
    Route::delete("/dashboard/clients/{id}", [ClientController::class, "destroy"])->name("dashboard.clients.destroy");

    
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
