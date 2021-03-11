<?php


namespace App\Traits;
use Illuminate\Support\Facades\Session;

trait HasAuthorization
{
    public function stateValid($state): bool
    {
        return Session::get('state') == $state;
    }

    public function hasAccessToken(): bool
    {
        return Session::has('access_token') && !is_null(Session::get('access_token'));
    }
}
