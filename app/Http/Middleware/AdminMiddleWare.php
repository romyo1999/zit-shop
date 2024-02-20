<?php

namespace App\Http\Middleware;
use Illuminate\Support\Facades\Auth;
use Closure;
use Illuminate\Http\Request;

class AdminMiddleWare
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        
        if (auth()->check()) {
            $user=Auth::user();
            if($user->role==="admin"){
                return $next($request);
            }else{
                 return response()->json(['error'=>"access denied"],403);
            }
        }

        return response()->json(['error'=>"unatorized"],401);
    }
    }
