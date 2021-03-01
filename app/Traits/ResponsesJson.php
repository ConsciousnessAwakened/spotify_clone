<?php

namespace App\Traits;

use Symfony\Component\HttpFoundation\Response;
use Illuminate\Http\JsonResponse;

trait ResponsesJson
{
    protected function response(
        $isSuccessful,
        $data,
        $message,
        $errors,
        $responseCode = Response::HTTP_OK
    ): JsonResponse {
        return new JsonResponse(
            array(
                'isSuccessful' => $isSuccessful,
                'values' => $data,
                'message' => $message,
                'errors' => $errors
            ),
            $responseCode
        );
    }

    public function successfulResponse($data = null, $message = 'Success.'): JsonResponse
    {
        return $this->response(true, $data, $message, array());
    }

    public function noDataFoundResponse($errors = array(), $message = 'No data found.'): JsonResponse
    {
        return $this->response(false, array(), $message, $errors, Response::HTTP_NOT_FOUND);
    }

    public function errorResponse($errors = array(), $message = 'Failed.'): JsonResponse
    {
        return $this->response(false, array(), $message, $errors, Response::HTTP_BAD_REQUEST);
    }

    public function notAuthorizedResponse($message = 'Unauthorized.'): JsonResponse
    {
        return $this->response(false, array(), $message, array(), Response::HTTP_UNAUTHORIZED);
    }
}
