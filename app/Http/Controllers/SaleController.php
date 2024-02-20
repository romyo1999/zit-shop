<?php

namespace App\Http\Controllers;

use App\Models\Sale;
use App\Models\Order;
use Illuminate\Http\Request;
use Carbon\Carbon;

class SaleController extends Controller
{

    public function index()
    {
        $count=Sale::all()->count();
        $sales=Sale::paginate(10);

        $Formatteditems=$sales->getCollection()->map(function($item){
                $item['formatted_created_at']=Carbon::parse($item->created_at)->diffForHumans();
                return $item ;

        });
        $sales->setCollection($Formatteditems);



        return response()->json(["sales"=>$sales,"count"=>$count]);
    }


    public function create()
    {
        //
    }


    public function store(Request $request)
    {
        $request->validate([
            'mount'=>['required' ],
            'discount'=>['required','integer'],
           'product_id'=>["required","integer"],
           'user_id'=>["required","integer"] 
        ]);

            $sale=Sale::create([
                "mount"=>$request->mount,
                "discount"=>$request->discount,
                "product_id"=>$request->product_id,
                "user_id"=>$request->user_id
            ]);
            return response()->json(['massage'=>"salle added successfuly"],200);

    }


    public function show(Sale $sale)
    {
        //
    }


    public function edit(Sale $sale)
    {
        //
    }


    public function update(Request $request, Sale $sale)
    {
        //
    }


    public function destroy(Sale $sale)
    {
        //
    }
}
