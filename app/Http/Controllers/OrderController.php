<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use App\Models\Order;
use Illuminate\Http\Request;
use Carbon\Carbon;


class OrderController extends Controller
{

    public function index()
    {
        $count=Order::all()->count();
        $orders=Order::where('status',"processing")->with("product")->paginate(8);
        $Formatteditems=$orders->getCollection()->map(function($item){
            $item['formatted_created_at']=Carbon::parse($item->created_at)->diffForHumans();
            return $item ;

    });
    $orders->setCollection($Formatteditems);



    return response()->json(["orders"=>$orders,"count"=>$count]);
    }

 



    public function store(Request $request)
    {
        $request->validate([
            'size'=>['required',"string"],
            'quantity'=>['required',"integer"],
            'gift'=>['required'],
            'shipping'=>['required',"string"],
            'discount'=>['required',"string"],
            'product_id'=>['required',"integer"],
        ]);

        $user=Auth::user();

        if($user){
            $order=Order::create([
                "size"=>$request->size,
                "quantity"=>$request->quantity,
                "gift"=>$request->gift,
                "discount"=>$request->discount,
                "status"=>'processing',
                "shipping"=>$request->shipping,
                "user_id"=>$user->id,
                "product_id"=>$request->product_id
            ]);
            return response()->json(["massage"=>"added successfuly"],200);
        }else{
            return response()->json(["Error"=>"unatorized"],401);
        }
    }

  
    public function show()
    {
        $user=Auth::user();

        if($user){
            $oreders=Order::where('user_id',$user->id)->with('product')->get();
            return response()->json(["orders"=>$oreders],200);
        }else{
            return response()->json(["Error"=>'unatorized'],401);
        }
    }

 
    public function recive($id)
    {
        $order=Order::findOrFail($id);
        $order->delete();
        return response()->json(["message"=>"order completed"],200);
    }

 
    public function update_status(Request $request, $id)
    {
        $request->validate([
            "status"=>["required","string"]
        ]);
        $order=Order::findOrFail($id);
        if($order){
            $order->status=$request->status;
            $order->save();
            response()->json(["massage"=>"status updated successfuly"],200);
        }
    }

 
    public function destroy(Order $order)
    {
        //
    }
}
