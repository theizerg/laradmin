<!-- Brand Logo -->
<a href="{{ url('/') }}" class="brand-link">
      <img src="{{ asset('images/logo/logo-hexagono.png') }}" alt="AdminLTE Logo" class="brand-image img-circle " style="opacity: .8">
      <span class="brand-text font-weight-light">LARADMIN</span>
    </a>
<div class="sidebar">
  <div class="user-panel mt-3 pb-3 mb-3 d-flex">
     <div class="info text-white text-center">
    <a href="/" class="d-block h5 ml-1 white-text"> {{auth()->user()->display_name}}</a>
    <small class="h7 white-text "> {{ Auth::user()->hasrole('Administrador') ? 'Administrador del sistema' : 'Usuario del sistema' }}</small>
    <br>
      <a href="logout" onclick="event.preventDefault();document.getElementById('logout-form').submit();" id="example" class="btn"  data-toggle="tooltip" data-placement="top" title="Tooltip on top">
          <i class="fas fa-sign-out-alt"></i> Salir del sistema
      </a>
      <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
          {{ csrf_field() }}
      </form>
  </div>
</div>
  <!-- SidebarSearch Form -->
<div class="form-inline">
  <div class="input-group mb-3" data-widget="sidebar-search">
    <input class="form-control form-control-sidebar" type="search" placeholder="Buscar link del menú" aria-label="Search">
    <div class="input-group-append">
      <button class="btn btn-sidebar">
        <i class="fas fa-search fa-fw"></i>
      </button>
    </div>
  </div>
</div>

  <!-- Sidebar Menu -->
  <nav class="mt-2">
    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
      <!-- Add icons to the links using the .nav-icon class
           with font-awesome or any other icon font library -->
     <li class="nav-item has-treeview menu-open">
        @can('VerPermisos')
        <a href="#" class="nav-link active">
          <i class="nav-icon mdi mdi-view-dashboard"></i>
          <p>
            Administración
            <i class="right fas fa-angle-left"></i>
          </p>
        </a>
         @endcan
        <ul class="nav nav-treeview">
          @can('VerPermisos')
          <li class="nav-item">
            <a href="/user" class="nav-link">
              <i class="fas fa-users nav-icon text-orange"></i>
              <p>Usuarios</p>
            </a>
          </li>
          @endcan
          @can('VerPermisos')
          <li class="nav-item has-treeview">
          <a href="#" class="nav-link">
            <i class="nav-icon mdi mdi-lock blue-text"></i>
            <p>
              Permisos
              <i class="right fas fa-angle-left"></i>
            </p>
          </a>
          <ul class="nav nav-treeview">
            <input type="hidden" value="{{$roles = Spatie\Permission\Models\Role::get()}}">
            @foreach ($roles as $role)
            <li class="nav-item">
              <a href="/permission/{{ $role->name }}" class="nav-link">
                <i class="{{$role->icon}} nav-icon"></i>
                <p>{{ $role->name }}</p>
              </a>
            </li>
            @endforeach
          </ul>
        </li>
        @endcan
        @can('VerRole')
          <li class="nav-item">
            <a href="/roles" class="nav-link">
              <i class="fas fa-user-tie nav-icon green-text"></i>
              <p>Roles</p>
            </a>
          </li>
          @endcan
          @can('VerLogins')
          <li class="nav-item">
            <a href="/logins" class="nav-link">
              <i class="fas fa-sign-in-alt nav-icon purple-text"></i>
              <p>Logins</p>
            </a>
          </li>
          @endcan   
           @can('VerLogins')
          <li class="nav-item">
            <a href="/logs" class="nav-link">
              <i class="mdi mdi-light-switch nav-icon red-text"></i>
              <p>Logs del sistema</p>
            </a>
          </li>
          @endcan
        </ul>
      </li>
       @if (auth()->user()->hasRole('Usuario') )
            
     @endif  
      
      </ul>
  </nav>
<!-- /.sidebar-menu -->
</div>
<!-- /.sidebar -->