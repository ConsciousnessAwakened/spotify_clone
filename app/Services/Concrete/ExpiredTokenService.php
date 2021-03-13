<?php

namespace App\Services\Concrete;

use App\Services\Blueprint\ExpiredTokenInterface;

class ExpiredTokenService implements ExpiredTokenInterface
{
    public function session($accessToken)
    {
        \Log::debug("ExpiredTokenService session");

        \Session::forget('access_token');

        \Session::put('access_token', $accessToken);

        \Log::debug(["Expired Token Sessioned" => \Session::all()]);
    }
}
