<?php

namespace App\Http\Controllers;

use App\Services\Blueprint\ExpiredTokenInterface;
use App\Traits\SessionHandler;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Session;

class AuthorizationController extends Controller
{
    use SessionHandler;

    public function __construct()
    {
        //$expiredToken = 'BQBqujjHm_Afmj8Rka8TyLFt-VjH5RUvLVS7LqPZ43_8jXFo36KDDL6gSlTcdlym7Y3O1DjdEfnbIVxKS5nzh0Ubej5EQE9pIU-EYwsd_ZBS9LMbgLRoixXzhzDghKezUtoVFHYA3M3Gh7A1YXVcQDp-1D92Pq-KRRYnxbb00bxImNlc7i71dV-AmpoP6qDzdilpiF2Ou4uMXbeIX1LPr7VMR-UhOLqbyKb5-RXlYOWuahKoka210qWTlpGBMotMxplvioca3UMDuncroNHmI0tai0yJiGKjjqEJCWhEYcQDVA';
        //\App::make(ExpiredTokenInterface::class)->session('not_a_token');
    }

    public function index()
    {
        $callback = request()->has('error')
            ? redirect('/?message=' . urlencode(request()->get('error')))
            : inertia('Pages/Authentication/Guest');

        if (request()->wantsJson()) {

            if($this->stateValid(request()->input('state'))){

                $this->forgetAndPut('access_token', request()->input('access_token'));

                \Log::debug(["Callback Post Session" => collect(Session::all())->only(['api', 'state', 'access_token'])->toArray()]);

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
                $this->forgetAndPut('state', request()->input('state'));
                $this->forgetAndPut('api', request()->input('api'));

                \Log::debug(["Ask Authorization Session" => collect(Session::all())->only(['api', 'state', 'access_token'])->toArray()]);

                return $this->successfulResponse([], '');

            } catch(\Exception $exception) {

                return $this->errorResponse($exception->getMessage(), '');
            }
        }
    }
}
