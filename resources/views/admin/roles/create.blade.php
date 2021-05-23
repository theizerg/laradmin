@extends('layouts.admin')

@section('title', 'Roles')

@section('content')
<div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="btn-group">
          @can('VerRole')
          <a href="{{ url('roles') }}" class="btn blue darken-4 text-white "><i class="mdi mdi-sort-alphabetical-ascending"></i> Listado</a>
          @endcan
          @can('RegistrarRole')
          <a href="{{ url('roles/create') }}" class="btn blue darken-4 text-white "><i class="fa fa-plus-square"></i> Ingresar</a>
          @endcan
        </div>
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col-md-12">
        <div class="card card-line-primary">
          <div class="card-header  ">
              <h5>Registrar nuevo Role</h5>
             
            </div>
          <div class="card-body">
            <ul class="list-inline">
               <li class="list-inline-item">
                  <a href="/" class="link_ruta">
                    Inicio &nbsp; &nbsp;<i class="fa fa-chevron-right" aria-hidden="true"></i>
                  </a>
                </li>
               <li class="list-inline-item">
                  <a href="/roles" class="link_ruta">
                    Listado &nbsp; &nbsp;<i class="fa fa-chevron-right" aria-hidden="true"></i>
                  </a>
                </li>
               <li class="list-inline-item">
                  
                    Nuevo Role
                 </li>
	             </ul><br>
	             <form role="form" id="main-form" autocomplete="off">
		            <input type="hidden" id="_url" value="{{ url('roles') }}">
		            <input type="hidden" id="_token" value="{{ csrf_token() }}">
		            <input type="hidden" id="guard_name" value="web">
           
              <div class="form-group pading">
                <label class="font-weight-bolder" for="name">Nombre</label>
                <input class="form-control" style="font-size: 15px;" id="name" name="name" placeholder="Nombres">
                <span class="missing_alert text-danger" id="name_alert"></span>
              </div>
              
             
            </div>
              <div class="card-footer">
                <button type="submit" class="btn blue darken-4 text-white  ajax" id="submit">
                  <i id="ajax-icon" class="fa fa-save"></i> Ingresar
                </button>
               
              </div>
            </form>
	         
	     </div>
	 </div>
</div>
</div>

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
    <script src="{{ asset('js/admin/role/create.js') }}"></script>
@endpush
