<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ShipmentController;

Route::group(["middleware" => "auth:api"],function(){
    Route::post('/shipment',[ShipmentController::class,'addShipment']);
    Route::get('/shipments/{id}',[ShipmentController::class,'getShipments']);
    Route::get('/shipment/{id}',[ShipmentController::class,'getShipmentById']);
    Route::post('/shipment/{id}',[ShipmentController::class,'updateShipment']);
    Route::delete('/shipment/{id}',[ShipmentController::class,'deleteShipment']);
});

Route::post('/login',[AuthController::class,'login']);
Route::post('/register',[AuthController::class,'register']);
