@extends('layouts.adminfront')

@section('content')
<div class="container-fluid p-0">

  <div class="row no-gutters">
      <div class="col-sm-6 col-lg-5 col-xxl-3  align-self-center order-2 order-sm-1">
          <div class="d-flex align-items-center h-100-vh">
            <div class="card-body"> 
              <div class="login p-50">
                  <div class="card-body px-lg-5 py-lg-5">
                    <h1>Iniciar Sesión</h1><p class="text-muted">SAPCPV<br>
                      </p><p class="text-muted">Ingresa tu cuenta</p>
                       <form method="POST" action="{{ route('login') }}">
                      @csrf      
                      <div class="form-group mb-3">
                         <div class="input-group input-group-alternative active">
                           <div class="input-group-prepend">
                           <span class="input-group-text"><i class="fas fa-user-tie white-text"></i></span>
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
                        <span class="input-group-text"><i class=" white-text fas fa-lock"></i></span>
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
      <div class="col-sm-6 col-xxl-9 col-lg-7 bg-gradient o-hidden order-1 order-sm-2">
          <div class="row align-items-center h-100">
              <div class="col-7 mx-auto ">
                  <img class="img-fluid" src="assets/img/bg/login.svg" alt="">
              </div>
          </div>
      </div>
  </div>
</div>
@endsection
