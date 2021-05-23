@extends('layouts.admin')

@section('title', 'Usuarios')
@section('page_title', 'Usuarios')
@section('page_subtitle', 'Ingresar')
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
        </div>
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col-md-12">
        <div class="card card-line-primary">
          <div class="card-header  ">
              <h5 >Crear Usuario</h5>
             
            </div>
          <div class="card-body">
            <ul class="list-inline">
               <li class="list-inline-item">
                  <a href="/" class="link_ruta">
                    Inicio &nbsp; &nbsp;<i class="fa fa-chevron-right" aria-hidden="true"></i>
                  </a>
                </li>
               <li class="list-inline-item">
                  <a href="/user" class="link_ruta">
                    Listado &nbsp; &nbsp;<i class="fa fa-chevron-right" aria-hidden="true"></i>
                  </a>
                </li>
               <li class="list-inline-item">
                  
                    Nuevo usuario
                 </li>
             </ul><br>
          
          <form role="form" id="main-form" autocomplete="off">
            <input type="hidden" id="_url" value="{{ url('user') }}">
            <input type="hidden" id="_token" value="{{ csrf_token() }}">
            <div class="card-body">
              <div class="form-group pading">
                <label class="font-weight-bolder" for="name">Nombres</label>
                <input class="form-control" style="font-size: 15px;" id="name" name="name" placeholder="Nombres">
                <span class="missing_alert text-danger" id="name_alert"></span>
              </div>
              <div class="form-group">
                <label class="font-weight-bolder" for="last_name">Apellidos</label>
                <input class="form-control" style="font-size: 15px;" id="last_name" name="lastname" placeholder="Apellidos">
                <span class="missing_alert text-danger" id="last_name_alert"></span>
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
              <div class="form-group pading">
                <label class="font-weight-bolder" for="username">Usuario</label>
                <input class="form-control" style="font-size: 15px;" id="username" name="username" placeholder="Ingrese el usuario">
                <span class="missing_alert text-danger" id="username_alert"></span>
              </div>
              <div class="form-group">
                <label class="font-weight-bolder" for="email">Correo Electrónico</label>
                <input class="form-control" style="font-size: 15px;" id="email" name="email" placeholder="Correo electrónico">
                <span class="missing_alert text-danger" id="email_alert"></span>
              </div>
              <div class="form-group">
                <label  for="role">Tipo de usuario</label>
                <div class="checkbox icheck">
                  <label class="font-weight-bolder">
                    <input type="radio" name="role" value="Usuario" checked> Usuario&nbsp;&nbsp;
                    <input type="radio" name="role" value="Administrador"> Administrador
                  </label>
                </div>
              </div>
              <div class="form-group">
                <label class="font-weight-bolder" for="password">Contraseña</label>
                <input type="password" style="font-size: 15px;" class="form-control" id="password" name="password" placeholder="Contraseña">
                <span class="missing_alert text-danger" id="password_alert"></span>
              </div>
              <div class="form-group">
                <label class="font-weight-bolder" for="password_confirmation">Confirmar Contraseña</label>
                <input type="password" style="font-size: 15px;" class="form-control" id="password_confirmation" name="password_confirmation" placeholder="Contraseña">
                <span class="missing_alert text-danger" id="password_confirmation_alert"></span>
              </div>
              <div class="form-group">
                <label class="font-weight-bolder" for="status">Acceso al sistema</label>
                <div class="checkbox icheck">
                  <label class="font-weight-bolder">
                    <input type="radio" name="status" value="1" checked> Activo&nbsp;&nbsp;
                    <input type="radio" name="status" value="0"> Deshabilitado
                  </label>
                </div>
              </div>
            </div>
              <div class="">
                <button type="submit" class="btn blue darken-4 text-white  ajax" id="submit">
                  <i id="ajax-icon" class="fa fa-save"></i> Ingresar
                </button>
               
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
    <script src="{{ asset('js/admin/user/create.js') }}"></script>
@endpush
