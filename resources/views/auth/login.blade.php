@extends('layouts.adminfront')


@section('title', 'Login')

@section('content')
  <div class="container-fluid p-0">
     <div class="row no-gutters justify-content-center">
        <div class="col-sm-6 col-lg-5 col-xxl-4  align-self-center order-2 order-sm-1">
            <div class="card-group">
                <div class="card p-4 mt-5 elevation-1">
                    <div class="card-body px-lg-5 py-lg-5">
                        <h1>Iniciar Sesión</h1><!-- <p class="text-muted">ADMIN<br>
                            Email : admin@macbrame.com<br> Pass : macbrame</p> -->
                        <p class="text-muted">Ingresa tu cuenta</p>
                         <form id="main-form" autocomplete="off"><br>
                          <input type="hidden" id="_url" value="{{ url('login') }}">
                          <input type="hidden" id="_redirect" value="{{ url('/') }}">
                          <input type="hidden" id="_token" value="{{ csrf_token() }}">
                            <div class="input-group mb-3">
                                <input type="text" id="username" name="username" value="{{ old('username') }}" class="form-control" autofocus placeholder="Ingrese el usuario">
                                <span class="invalid-feedback" id="username_alert" role="alert" style="font-size: 100%;"></span>
                            </div>

                            <div class="input-group mb-4">
                                <input type="password" id="password" name="password" class="form-control" placeholder="Password">
                                <span class="invalid-feedback" id="password_alert" role="alert" style="font-size: 100%;"></span>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <button type="submit" class="btn blue darken-4 form-control" id="boton">
                                        <i class="fas fa-sign-in-alt text-white" id="ajax-icon"></i> <span class="text-white ml-3">{{ __('Iniciar Sesión') }}</span>
                                    </button>                           
                                </div>   
                                
                            </div>
                        </form>
                    </div>
                </div><br>
            </div>
        </div>
         <div class="col-sm-6 col-lg-5 col-xxl-4  align-self-center order-2 order-sm-1">
            <div class="card-group">
                <div class="card p-4 mt-5 blue darken-4 elevation-1">
                  <div class="card-header text-white text-center">
                    <h4>LARADMIN</h4>
                  </div>
                    <div class="card-body px-lg-5 py-lg-5 text-white  text-center">
                        <i class="mdi mdi-laptop fa-7x"></i>
                        <p class="text-muted text-white">Sistema desarrollado para iniciar proyectos en Laravel.</p>
                        
                    </div>
                </div><br>
            </div>
        </div>
    </div>
</div>

@endsection

@push('scripts')
    <script src="{{ asset('js/admin/auth/login.js') }}"></script>
@endpush

