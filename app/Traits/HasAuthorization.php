<?php


namespace App\Traits;
use Illuminate\Support\Facades\Session;

trait HasAuthorization
{
    public function stateValid($state): bool
    {
        return Session::get('state') == $state;
    }
}
