<?php

namespace App\Http\Controllers;

use App\Models\Feedback;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class FeedbackController extends Controller
{

    public function index($id)
    {

        $stars=Feedback::where("product_id",$id)->sum("rating");
        $count=Feedback::where("product_id",$id)->count();
        $rating=$stars/$count;
        $ratingArray=[];
        $feedback=Feedback::where("product_id",$id)->with('user')->get();
        for($i=0;$i<$rating ;$i++){
            $ratingArray[$i]=$i;
        }
        return response()->json(['feedback'=>$feedback,'stars'=>$ratingArray]);
    }
    public function store($id,Request $request)
    {
        $request->validate([
            "rating"=>["required","integer"],
            "reviews"=>["string"]
        ]);

        $user=Auth::user();
        if ($user){
            
            $reviews=Feedback::create([
                "rating"=>$request->rating,
                "reviews"=>$request->reviews,
                "user_id"=>$user->id,
                "product_id"=>$id
            ]);
            return response()->json(["massage"=>"reviews added successfuly"]);

        }else{
            return response()->json(['error'=>"unatorized"],401);
        }

    }
}
