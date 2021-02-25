<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="icon" href="{{ asset('images/spotify/spotify-icons-logos/icons/01_RGB/02_PNG/Spotify_Icon_RGB_White.png') }}">
        <title>{{ env('APP_NAME') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">

        <link href="{{ mix('assets/css/app.css') }}" rel="stylesheet">

        <script src="{{ mix('assets/js/app.js') }}" defer></script>
    </head>
    <body>
        @include('sample_tailwind')
    </body>
</html>
