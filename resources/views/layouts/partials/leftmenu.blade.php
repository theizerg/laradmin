<!-- begin sidebar-nav -->
<div class="sidebar-nav scrollbar scroll_light active">
    <ul class="metismenu " id="sidebarNav">
        <li class="nav-static-title">Personal</li>
        <li class="active">
            <a class="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i class="nav-icon ion ion-ios-build "></i>
                <span class="nav-title">Administración</span>
                <span class="nav-label label label-danger">4</span>
            </a>
            <ul aria-expanded="false">
                @can('VerUsuario')
                <li >
                 <a href='/user'>Usuarios</a>
                 </li>
                 @endcan
                 @can('VerRole')
                <li>
                 <a href='/roles'>Roles</a>
                </li>
                @endcan
                @can('VerLogins')
                <li>
                 <a href='/logins'>Logins</a>
                </li>
                @endcan
                @can('VerLogSistema')
                <li>
                 <a href='/logs'>Histórico</a>
                </li>
                @endcan
                @can('VerPermisos')
                <li class="scoop-hasmenu">
                    <a class="has-arrow" href="javascript: void(0);">Permisos</a>
                    <input type="hidden" value="{{ $roles = Spatie\Permission\Models\Role::get()  }}">
                    <ul aria-expanded="false">
                        @foreach ($roles as $role)
                        <li> <a href="/permission/{{ $role->name }}">{{ $role->name }} </a> </li>
                        @endforeach
                    </ul>
                </li>
                @endcan
                
            </ul>
        </li>
</div>
<!-- end sidebar-nav -->