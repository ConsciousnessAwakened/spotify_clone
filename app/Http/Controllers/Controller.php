<?php

namespace App\Http\Controllers;

use App\Traits\FractalTransformer;
use App\Traits\ResponsesJson;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests,
        DispatchesJobs,
        ValidatesRequests,
        ResponsesJson,
        FractalTransformer;
}
