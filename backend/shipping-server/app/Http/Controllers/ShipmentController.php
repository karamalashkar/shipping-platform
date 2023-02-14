<?php

namespace App\Http\Controllers;
use App\Models\Shipment;

use Illuminate\Http\Request;

class ShipmentController extends Controller{

    function addShipment(Request $request){
        $waybill=$request->waybill;
        $userID=$request->userID;
        
        $date=date("Y-m-d");
        $time=date("h-i-s");
        $shipmentNumber=$userID.$date.$time;

        $shipment=new Shipment;

        $shipment->customer_name=$request->customerName;
        $shipment->customer_address=$request->customerAddress;
        $shipment->customer_phone_number=$request->customerPhoneNumber;
        $shipment->user_id=$userID;

        $base64Image = explode(";base64,", $waybill);
        $explodeImage = explode("image/", $base64Image[0]);
        $imageType = $explodeImage[1];
        $image_base64 = base64_decode($base64Image[1]);
        $imageName = $shipmentNumber . '.'.'png';
        \File::put(public_path('assets'). '/' . $imageName, base64_decode($base64Image[1]));
        $shipment->waybill=$imageName;

        $shipment->save();
        return response()->json([
            'status' => 'success'
        ]);
    }
    
    function getShipments(Request $request){
        $userID=$request->id;
        
        $response=Shipment::where('user_id',$userID)->get();
        
        return response()->json([
            'data' => $response
        ]);
    }
}
