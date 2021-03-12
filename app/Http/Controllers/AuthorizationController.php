<?php

namespace App\Http\Controllers;

use App\Traits\HasApiAuthorization;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Session;

class AuthorizationController extends Controller
{
    use HasApiAuthorization;

    public function index()
    {
        $callback = request()->has('error')
            ? redirect('/?message=' . urlencode(request()->get('error')))
            : inertia('Pages/Authentication/Guest');

        if (request()->wantsJson()) {

            if($this->stateValid(request()->input('state'))){

                Session::put('access_token', request()->input('access_token'));
                \Log::debug(collect(Session::all())->only(['state', 'access_token'])->toArray());

                return $this->successfulResponse([], '');
            } else {

                return $this->errorResponse(['Invalid State'], '');
            }
        }

        return $callback;
    }

    public function askAuthorization(): JsonResponse
    {
        if (request()->wantsJson()) {

            try {
                Session::flush();
                Session::put('state', request()->input('state'));
                Session::put('api', request()->input('api'));
                \Log::debug(print_r(Session::all(), true));

                return $this->successfulResponse(request()->all(), '');

            } catch(\Exception $exception) {

                return $this->errorResponse($exception->getMessage(), '');
            }
        }
    }
}
