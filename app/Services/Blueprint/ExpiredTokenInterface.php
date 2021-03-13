<?php

namespace App\Services\Blueprint;

interface ExpiredTokenInterface
{
    public function session($accessToken);
}
