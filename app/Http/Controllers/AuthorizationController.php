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
            ? redirect('/?message=' . urlencode(request()->get('error')))
            : inertia('Pages/Authentication/Guest');

        if (request()->wantsJson()) {

            if($this->stateValid(request()->input('state'))){

                \Log::debug(print_r(request()->all(), true));

                Session::put('access_token', request()->input('access_token'));

                return $this->successfulResponse([], '');
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
                \Log::debug(print_r(Session::all(), true));
                return $this->successfulResponse(request()->all(), '');

            } catch(\Exception $exception) {

                return $this->errorResponse($exception->getMessage(), '');
            }
        }
    }
}
