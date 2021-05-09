@extends('layouts.adminfront')

@section('title', 'Inicio de sesión')
@section('subtitle', 'Ingresa tus datos para iniciar sesión.')

@section('content')
<div class="container ">
  <div class="row justify-content-center">
    <div class="col-md-12">
      <div class="header">
        {{-- <div class="text-center">
            <img src="{{asset('images/logo/logo.png')}}" alt="AdminLTE Logo" height="90" class="text-center mb-3">
        </div> --}}
      </div>
    </div>
    <div class="col-lg-4 col-md-4">
      <div class="card card-primary">
        
         <div class="card-body px-lg-5 py-lg-5">
          <h1>Iniciar Sesión</h1><p class="text-muted">SAPCPV<br>
          </p><p class="text-muted">Ingresa tu cuenta</p>
            <form method="POST" action="{{ route('login') }}">
                @csrf      
            <div class="form-group mb-3">
              <div class="input-group input-group-alternative">
                <div class="input-group-prepend">
                  <span class="input-group-text"><i class="fas fa-user-tie"></i></span>
                </div>
                <input id="username" type="text" class="form-control @error('username') is-invalid @enderror" name="username" value="{{ old('username') }}" required autocomplete="username" autofocus placeholder="Usuario">
                  @error('username')
                      <span class="invalid-feedback text-center" role="alert">
                          <strong>{{ $message }}</strong>
                      </span>
                  @enderror
              </div>
               <span class="missing_alert text-danger text-center" id="username_alert"></span>
            </div>
            <div class="form-group">
              <div class="input-group input-group-alternative">
                <div class="input-group-prepend">
                  <span class="input-group-text"><i class="fas fa-lock"></i></span>
                </div>
                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required placeholder="Contraseña">
                @error('password')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
              </div>
            </div>
            <div class="text-center">
             <button type="submit" class="btn blue darken-4 form-control" id="boton">
                  <i class="fas fa-sign-in-alt text-white" id="ajax-icon"></i> <span class="text-white ml-3">{{ __('Iniciar Sesión') }}</span>
              </button> 
            </div>
          </form>
        </div>
      </div>
      </div>
    </div>
  </div>
</div>
@endsection
