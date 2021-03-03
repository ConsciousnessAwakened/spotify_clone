<?php

namespace App\Http\Controllers;

use App\Traits\HasAuthorization;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Session;

class AuthorizationController extends Controller
{
    use HasAuthorization;

    public function index()
    {
        $callback = request()->has('error')
            ? redirect('/')
            : inertia('Pages/Authentication/Guest');

        if (request()->wantsJson()) {
            if($this->stateValid(request()->input('state'))){
                return $this->successfulResponse(request()->all(), '');
            } else {
                return $this->errorResponse(['Invalid State'], '');
            }
        }

        return $callback;
    }

    public function storeState(): JsonResponse
    {
        if (request()->wantsJson()) {

            try {
                Session::flush();
                Session::put('state', request()->get('state'));

                return $this->successfulResponse(request()->all(), '');

            } catch(\Exception $exception) {

                return $this->errorResponse($exception->getMessage(), '');
            }
        }
    }
}
