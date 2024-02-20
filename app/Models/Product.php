<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable=[
        "title",
        "description",
        "price",
        "image1",
        "image2",
        "group" ,
        "category_id"
    ];

    public function category(){
        return $this->belongsTo(Category::class);
    }

    public function favorit(){
        return $this->hasMany(Favorit::class);
    }

    public function cart (){
        return $this->hasMany(Cart::class);
    }

    public function Order (){
        return $this->hasMany(Order::class);
    }

    public function feedback (){
        return $this->hasMany(Feedback::class);
    }

    public function sale (){
        return $this->hasMany(Sale::class);
    }
}
