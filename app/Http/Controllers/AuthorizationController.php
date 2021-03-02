<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Session;

class AuthorizationController extends Controller
{
    public function index()
    {
        return inertia('Pages/Authentication/Guest');
    }

    public function callback(): JsonResponse
    {
        return $this->successfulResponse(request()->all(), '');
    }

    public function storeState(): JsonResponse
    {
        if (request()->wantsJson()) {

            try {
                \Log::debug(print_r(Session::all(), true));

                Session::flush();
                Session::put('state', request()->get('state'));

                \Log::debug(print_r(Session::all(), true));

                return $this->successfulResponse(request()->all(), '');

            } catch(\Exception $exception) {

                return $this->errorResponse($exception->getMessage(), '');
            }
        }
    }
}
