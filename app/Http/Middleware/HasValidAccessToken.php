<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class HasValidAccessToken
{
    /**
     * Request must have access token
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        \Log::debug(print_r(Session::all(), true));

        return Session::has('access_token')
            ? $next($request)
            : redirect('/');
    }
}
