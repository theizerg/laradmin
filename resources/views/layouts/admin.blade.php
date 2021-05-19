<!DOCTYPE html>
<html> 
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Laradmmin - @yield('title')</title>
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <meta name="robots" content="noindex, nofollow">


    <!-- General CSS Files -->
     <link rel="stylesheet" href="{{ asset('assets/css/vendors.css') }}">
    <!-- endinject -->
    <!-- Plugin css for this page -->
    <!-- End plugin css for this page -->
    <!-- Layout styles -->
    <link rel="stylesheet" href="{{ asset('assets/css/style.css') }}">
     <!-- End layout styles -->
    <link rel="shortcut icon" href="{{ asset('assets/images/favicon.png') }}" />
    <link rel="stylesheet" href="{{asset('css/plugins.css')}} " />
     <link rel="stylesheet" href="{{asset('css/system.css')}} " />
     @stack('styles')
</head>
<body>
    <div class="app">
        <!-- begin app-wrap -->
        <div class="app-wrap">
            <!-- begin pre-loader -->
            <div class="loader">
                <div class="h-100 d-flex justify-content-center">
                    <div class="align-self-center">
                        <img src="{{ asset('assets/img/loader/loader.svg') }}" alt="loader">
                    </div>
                </div>
            </div>

            <!-- end pre-loader -->
            <!-- begin app-header -->
            <header class="app-header top-bar">
                <!-- begin navbar -->
                <nav class="navbar navbar-expand-md">

                    @include('layouts.partials.navbar')
                </nav>
                <!-- end navbar -->
            </header>
            <div class="app-container">
                <aside class="app-navbar">
                  @include('layouts.partials.leftmenu')
               </aside>
            </div>
            <div class="app-main" id="main">
                    <!-- begin container-fluid -->
                    <div class="container-fluid">
                        @yield('content')
                    </div>
                    <!-- end container-fluid -->
              </div>
         </div>
         <footer class="footer">
                <div class="row">
                    <div class="col-12 col-sm-6 text-center text-sm-left">
                        <p>&copy; Copyright 2019. All rights reserved.</p>
                    </div>
                   <div class="col  col-sm-6 ml-sm-auto text-center text-sm-right">
                        <p><a target="_blank" href="https://www.templateshub.net"></a><img src="{{asset('images/vendor/admin-lte/plugins/flag-icon-css/flags/4x3/ve.svg')}}" height="30"></p>
                    </div>
                </div>
            </footer>
            <!-- end footer -->
     </div>

     
    <!-- REQUIRED JS SCRIPTS -->
    <!-- jQuery -->
    <script src="{{asset('assets/js/vendors.js')}}"></script>
    <script src="{{ asset('assets/js/app.js') }}"></script>
    <script src="{{ asset('js/plugins.js') }}"></script>
    <script src="{{ asset('js/system.js') }}"></script>
    @stack('scripts')
    <script>


     @if(Session::has('message'))
     var type = "{{ Session::get('alert-type', 'info') }}";
     switch(type){
         case 'info':
             toastr.info("{{ Session::get('message') }}");
             break;

         case 'warning':
             toastr.warning("{{ Session::get('message') }}");
             break;

         case 'success':
             toastr.success("{{ Session::get('message') }}");
             break;

         case 'error':
             toastr.error("{{ Session::get('message') }}");
             break;
     }
 @endif
 </script>
    @stack('scripts')

    <style>

    #sidebar{


            
            }


    #opciones{

                background: #0313f1;


            }


    </style>

    @can('VerNotificaciones')


@endcan
</body>
</html>
