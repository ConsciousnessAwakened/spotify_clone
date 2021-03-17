<?php

namespace App\Http\Middleware;

use App\Traits\SessionHandler;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class HasValidAccessToken
{
    use SessionHandler;

    /**
     * Request must have valid access token
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        \Log::debug(["Middleware Session" => collect(Session::all())->only(['api', 'state', 'access_token'])->toArray()]);

        return $this->has('access_token')
            ? $next($request)
            : redirect('/');
    }
}
