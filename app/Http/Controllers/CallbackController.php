<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CallbackController extends Controller
{
    public function prototype(Request $request): JsonResponse
    {
        return $this->successfulResponse('data', 'message');
    }
}
