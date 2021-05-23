# Laradmin

**Laradmin** es mi “personal pre.built" desarrollado haciendo uso de **Laravel 7** y una plantilla **Personalizada** basada en Bootstrap 4,  para ser usada como base inicial en proyectos que necesitan el desarrollo de un panel de control o administrativo con gestión de usuarios con roles y permisos.

El desarrollo  integra el sistema de autentificación por defecto de Laravel, y el uso del paquete spatie/laravel-permission cubriendo en la mayor medida:

- CRUD de usuarios
- Asignación de roles
- Asignación de permisos a roles
- Habilitar/deshabilitar acceso al usuario
- Recuperación de contraseña por correo electrónico
- Registro y listado de ingresos y salidas del sistema (logins)


> La intención como  proyecto base es trabajar con los roles de administrador (con todos los permisos), y el de usuario normal (permisos asignados a este rol), la misma se puede modificar y /o ampliar según las necesidades del proyecto de manera manual, aprovechando los recursos que facilita el paquete **spatie/laravel-permission** para agregar mas roles de usuarios así como diversos permisos.

---

## Requerimientos

- [Composer](https://getcomposer.org/)
- [Requerimientos de Laravel 7](https://laravel.com/docs/7/installation#installation)
- [Node.js y NPM](https://nodejs.org/es/) (Opcional para trabajar y compilar  los assets con Laravel Mix)

---

> Aviso **crear un virtual host** para este proyecto, **es necesario que el directorio public (como se aconseja) del framework funcione como la raíz**, o no funcionara la correcta lectura de las fuentes por parte de font awesome y otras librerias empleadas en este desarrollo.

## Instalación

```
git clone https://github.com/theizerg/laradmin.git
cd laradmin
composer install
```

Modificar el archivo **.env** con los datos correspondientes al proyecto, credenciales a la base de datos y envió de correo electrónico (recuperación de contraseña).

Migrar a la base de datos los roles y permisos iniciales, así como el **usuario administrador por defecto**.

```
cd laradmin
php artisan migrate --seed
```
Los datos del **usuario por defecto** podrán ser vistos (y modificados antes de migrar), en los archivos **seeds** del proyecto en **database/seeds**.

Enjoy!! :)

---

## Paquetes y dependencias

A continuación el listado de tecnologías y plugins utilizados en este desarrollo.

### Back-end
- [Laravel 7](https://laravel.com/)
- [spatie/laravel-permission 2.7](https://github.com/spatie/laravel-permission)
- [nicolaslopezj/searchable 1.*](https://github.com/nicolaslopezj/searchable)
- [vinkla/hashids 3.3](https://github.com/vinkla/laravel-hashids)
- Entre otros más.

### Front-end

- [Bootstrap 4.4](https://getbootstrap.com/docs/4.4/)
- [Jquery 3.2](https://jquery.com/)
- [Font Awesome 4.7.0](http://fontawesome.io/)
- [jQuery-Autocomplete 1.4.4](https://github.com/devbridge/jQuery-Autocomplete)
- [toastr 2.1.2](http://codeseven.github.io/toastr/)
- [iCheck 1.0.2](http://icheck.fronteed.com/)
- [Pace 1.0.3](http://github.hubspot.com/pace/docs/welcome/)

---


---

#### Créditos

Theizer González 
Backend web developer  
theizerg@gmail.com | [@theizerg_](https://instagram.com/theizerg_)
