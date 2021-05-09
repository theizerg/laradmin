<ul class="sidebar-menu">
    <!-- Sidebar user panel (optional) -->
   <div class="user-panel mt-3 pb-3 mb-3 d-flex">
    <div class="info text-white text-center">
      <a href="/" class="d-block h5 ml-5 black-text"> {{auth()->user()->display_name}}</a>
      <small class="h7 black-text ml-5 "> {{ Auth::user()->hasrole('Administrador') ? 'Administrador del sistema' : 'Usuario del sistema' }}</small>
      <br>
    </div>
  </div>
    <li class="menu-header">Opciones</li>
    <li class="dropdown">
        <a href="{{url('/')}}" class="nav-link"><i
                data-feather="home"></i><span>Inicio</span></a>
    </li>
    <li class="menu-header">Gestión de administración</li>
    @can('VerUsuario')
    <li class="dropdown ">
        <a href="#" class="menu-toggle nav-link has-dropdown"><i
                data-feather="layout"></i><span>Usuarios</span></a>
        <ul class="dropdown-menu">
            <li><a class="nav-link" href="{{url('user')}}">Listado</a></li>
        </ul>
    </li>
    @endcan
    @can('VerPermisos')
   <li class="dropdown" >
        <a href="#" class="menu-toggle nav-link has-dropdown"><i
                data-feather="lock"></i><span>Permisos</span></a>
        <ul class="dropdown-menu">
            <input type="hidden" value="{{$roles = Spatie\Permission\Models\Role::get()}}">
            <li>
                @foreach ($roles as $role)
                <a href="/permission/{{ $role->name }}" class="nav-link">
                <p>{{ $role->name }}</p>
              </a>
                @endforeach
            </li>
        </ul>
        @endcan
        @can('VerRole')
        <li class="dropdown ">
        <a href="#" class="menu-toggle nav-link has-dropdown"><i
                data-feather="user"></i><span>Roles</span></a>
        <ul class="dropdown-menu">
            <li><a class="nav-link" href="{{url('roles')}}">Listado</a></li>
        </ul>
       </li>
        @endcan
        @can('VerLogins')
       <li class="dropdown ">
        <a href="#" class="menu-toggle nav-link has-dropdown"><i
                data-feather="log-in"></i><span>Logins</span></a>
        <ul class="dropdown-menu">
            <li class="nav-item">
            <a href="/logins" class="nav-link">
             
             Listado
            </a>
          </li>
        </ul>
       </li>
       @endcan
       @can('VerLogSistema')   
       <li class="dropdown ">
        <a href="#" class="menu-toggle nav-link has-dropdown"><i
                data-feather="list"></i><span>Logs del sistema</span></a>
        <ul class="dropdown-menu">
            <li class="nav-item">
            <a href="/logs" class="nav-link">
             
             Listado
            </a>
          </li>
        </ul>
       </li>
       @endcan   
    </li>

</ul>