@extends('layouts.admin')

@section('title', 'Usuarios')
@section('page_title', 'Usuarios')
@section('page_subtitle', 'Editar')
@section('content')

  <section class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="btn-group">
          @can('VerUsuario')
          <a href="{{ url('user') }}" class="btn blue darken-4 text-white "><i class="mdi mdi-sort-alphabetical-ascending"></i> Listado</a>
          @endcan
          @can('RegistrarUsuario')
          <a href="{{ url('user/create') }}" class="btn blue darken-4 text-white "><i class="fa fa-plus-square"></i> Ingresar</a>
          @endcan
          <a href="{{ url('user', [$user->encode_id]) }}" class="btn blue darken-4 text-white "><i class="fa fa-eye"></i> Datos</a>
        </div>
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col-md-12">
        <div class="card card-line-primary">
           <div class="card-header  ">
              <h5 >Editar Usuario</h5>
             
            </div>
          <div class="card-body">
            <form role="form" id="main-form" autocomplete="off">
            <input type="hidden" id="_url" value="{{ url('user',[$user->encode_id]) }}">
            <input type="hidden" id="_token" value="{{ csrf_token() }}">   
            <div class="box-body">
              <div class="form-group pading">
                <label for="name">Nombres</label>
                <input id="name" type="name" class="form-control @error('name') is-invalid @enderror"name="name" value="{{ $user->name }}"  autocomplete="name" autofocus placeholder="Usuario">
                  @error('name')
                      <span class="invalid-feedback text-center" role="alert">
                          <strong>{{ $message }}</strong>
                      </span>
                  @enderror
              </div>
              <div class="form-group">
                <label for="last_name">Apellidos</label>
                 <input id="lastname" type="lastname" class="form-control @error('lastname') is-invalid @enderror"name="lastname" value="{{ $user->lastname }}"  autocomplete="lastname" autofocus placeholder="Usuario">
                  @error('lastname')
                      <span class="invalid-feedback text-center" role="alert">
                          <strong>{{ $message }}</strong>
                      </span>
                  @enderror
              </div>
               <div class="form-group">
                <label class="font-weight-bolder" for="status">Género</label>
                <div class="checkbox icheck">
                  <label class="font-weight-bolder">
                    <input type="radio" name="genero" value="M" checked> Masculino&nbsp;&nbsp;
                    <input type="radio" name="genero" value="F"> Femenino
                  </label>
                </div>
              </div>
              <div class="form-group">
                <label for="last_name">Usuario</label>
                 <input id="username" type="username" class="form-control @error('username') is-invalid @enderror"name="username" value="{{ $user->username }}"  autocomplete="username" autofocus placeholder="Usuario">
                  @error('username')
                      <span class="invalid-feedback text-center" role="alert">
                          <strong>{{ $message }}</strong>
                      </span>
                  @enderror
              </div>
              <div class="form-group">
                <label for="email">Correo Electrónico</label>
                 <input id="email" type="email" class="form-control @error('email') is-invalid @enderror"name="email" value="{{ $user->email }}"  autocomplete="email" autofocus placeholder="Contraseña">
                  @error('email')
                      <span class="invalid-feedback text-center" role="alert">
                          <strong>{{ $message }}</strong>
                      </span>
                  @enderror
              </div>
              @if(Auth::user()->hasrole('Administrador') && Auth::user()->id != $user->id)
              <div class="form-group">
                <label for="role">Tipo de usuario</label>
                <div class="checkbox icheck">
                  <label>
                    <input type="radio" name="role" value="Usuario" {{ $user->hasRole('Usuario') ? 'checked' : '' }}> Usuario&nbsp;&nbsp;
                    <input type="radio" name="role" value="Administrador" {{ $user->hasRole('Administrador') ? 'checked' : '' }}> Administrador
                  </label>
                </div>
              </div>
              @endif
              <div class="form-group">
                <label for="password">Nueva Contraseña</label>
               <input id="password" type="password" class="form-control @error('password') is-invalid @enderror"name="password" value="{{ old('password') }}"  autocomplete="password" autofocus placeholder="Contraseña">
                  @error('password')
                      <span class="invalid-feedback text-center" role="alert">
                          <strong>{{ $message }}</strong>
                      </span>
                  @enderror
              </div>
              <div class="form-group">
                <label for="password_confirmation">Confirmar Nueva Contraseña</label>
                 <input id="password_confirmation" type="password" class="form-control @error('password_confirmation') is-invalid @enderror"name="password_confirmation" value="{{ old('password_confirmation') }}"  autocomplete="password_confirmation" autofocus placeholder="Contraseña">
                  @error('password_confirmation')
                      <span class="invalid-feedback text-center" role="alert">
                          <strong>{{ $message }}</strong>
                      </span>
                  @enderror
              </div>
              @if(Auth::user()->hasrole('Administrador') && Auth::user()->id != $user->id)
              <div class="form-group">
                <label for="status">Acceso al sistema</label>
                <div class="checkbox icheck">
                  <label>
                    <input type="radio" name="status" value="1" {{ $user->status == 1 ? 'checked' : '' }}> Activo&nbsp;&nbsp;
                    <input type="radio" name="status" value="0" {{ $user->status == 0 ? 'checked' : '' }}> Deshabilitado&nbsp;&nbsp;
                  </label>
                </div>
              </div>
              @endif
              <br>
              <div class="form-group">
                <label for="password">Contraseña actual ({{ Auth::user()->display_name }})</label>
                 <input id="current_password" type="password" class="form-control @error('current_password') is-invalid @enderror"name="current_password" value="{{ old('current_password') }}"  autocomplete="current_password" autofocus placeholder="Contraseña">
                 
                 <span class="missing_alert text-danger" id="current_password_alert"></span>
              </div>
              <div class="box-footer">
              <button type="submit" class="btn blue darken-4 text-white  ajax" id="submit">
                <i id="ajax-icon" class="fa fa-edit"></i> Editar
              </button>
            </div>
          </div>
        </form>
          </div>
        </div>
      </div>
    </div>
  </section>

@endsection
@push('scripts')
    <script>
      $(function () {
        $('input').iCheck({
          checkboxClass: 'icheckbox_square-blue',
          radioClass: 'iradio_square-blue',
          increaseArea: '20%' // optional
        });
      });
    </script>
    <script src="{{ asset('js/admin/user/edit.js') }}"></script>
@endpush
