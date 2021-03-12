<?php


namespace App\Traits;
use Illuminate\Support\Facades\Session;

trait HasApiAuthorization
{
    public function stateValid($state): bool
    {
        return Session::get('state') == $state;
    }

    public function has($key): bool
    {
        return Session::has($key) && !is_null(Session::get($key));
    }

    public function getIfExists($key)
    {
        return $this->has($key) ? Session::get($key) : null;
    }
}
