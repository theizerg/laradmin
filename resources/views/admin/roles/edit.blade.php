@extends('layouts.admin')

@section('title', 'Role')
@section('page_title', 'Role')
@section('page_subtitle', 'Editar')
@section('content')

  <section class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="btn-group">
          @can('VerUsuario')
          <a href="{{ url('roles') }}" class="btn blue darken-4 text-white "><i class="mdi mdi-sort-alphabetical-ascending"></i> Listado</a>
          @endcan
          @can('RegistrarRole')
          <a href="{{ url('roles/create') }}" class="btn blue darken-4 text-white "><i class="fa fa-plus-square"></i> Ingresar</a>
          @endcan
          <a href="{{ url('roles', [$role->encode_id]) }}" class="btn blue darken-4 text-white "><i class="fa fa-eye"></i> Datos</a>
        </div>
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col-md-12">
        <div class="card card-line-primary">
           <div class="card-header">
              <h5>Editar Role</h5>
             
            </div>
          <div class="card-body">
            <form role="form" id="main-form">
            <input type="hidden" id="_url" value="{{ url('roles', [$role->encode_id]) }}">
            <input type="hidden" id="_token" value="{{ csrf_token() }}">
            <div class="box-body">
              <div class="form-group pading">
                <label for="name">Nombre</label>
                <input class="form-control" id="name" name="name" value="{{ $role->name }}" placeholder="Nombres">
                <span class="missing_alert text-danger" id="name_alert"></span>
              </div>           
              <br>
              <div class="form-group">
                <label for="password">Contraseña actual ({{ Auth::user()->display_name }})</label>
                <input type="password" class="form-control" id="current_password" name="current_password" placeholder="Contraseña actual">
                <span class="missing_alert text-danger" id="current_password_alert"></span>
              </div>
              <div class="box-footer">
              <button type="submit" class="btn blue darken-4 text-white  ajax" id="submit">
                <i id="ajax-icon" class="fa fa-edit"></i> Editar
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
    <script src="{{ asset('js/admin/role/edit.js') }}"></script>
@endpush
