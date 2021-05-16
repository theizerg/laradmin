<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <meta content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no" name="viewport">

    <title>Iniciar sesión</title>
    <!-- General CSS Files -->

     <link rel="stylesheet" href="{{asset('assets/css/app.min.css')}} " />
     <link rel="stylesheet" href="{{asset('css/app.css')}} " />
     <link rel="stylesheet" href="{{asset('css/system.css')}} " />


</head>
<body id="body">
    <div class="loader"></div>
    <div id="app">
        <section class="section">
            <div class="container mt-5">
                <div class="row">

                    @yield('content')
                    
                </div>
            </div>
        </section>
    </div>

    <!-- General JS Scripts -->
    
   <script src="{{asset('assets/js/app.min.js')}}"></script>
  <!-- JS Libraies -->
  <script src="{{asset('js/app.js')}}"></script>
  <!-- Page Specific JS File -->
  <script src="{{asset('js/system.js')}}"></script>
  <!-- Template JS File -->
  <script src="{{asset('assets/js/scripts.js')}}"></script>
  <!-- Custom JS File -->
  <script src="{{asset('assets/js/custom.js')}}"></script>
   @stack('scripts')
   <style>
         #body{

          background-image: url("{{asset('/images/fondo/fondo_pagina.png') }}");    
          background-repeat: repeat;
          background-position: 30px;
    
        }
    </style>

</body>

</html>
