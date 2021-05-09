<ul class="sidebar-menu">
    <li class="menu-header">Opciones</li>
    <li class="dropdown">
        <a href="{{url('/home')}}" class="nav-link"><i
                data-feather="home"></i><span>Inicio</span></a>
    </li>
    <li class="menu-header">Gestión de administración</li>
    <li class="dropdown active">
        <a href="#" class="menu-toggle nav-link has-dropdown"><i
                data-feather="layout"></i><span>Usuarios</span></a>
        <ul class="dropdown-menu">
            <li><a class="nav-link" href="{{url('user')}}">Listado</a></li>
        </ul>
    </li>
</ul>