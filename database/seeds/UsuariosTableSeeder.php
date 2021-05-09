<?php

use Illuminate\Database\Seeder;
use App\Models\User;

class UsuariosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = new User;
        $user->name     = 'Theizer';
        $user->username = 'tgonzalez';
        $user->genero   = 'M';
        $user->lastname = 'Gonzalez';
        $user->email    = 'tgonzalez@gmail.com';
        $user->password = 'admin';
        $user->status   = 1; // (1) active (0)disabled
        $user->save();

        $user->assignRole('Administrador');


         $user = new User;
        $user->name     = 'Ada';
        $user->username = 'atovar';
        $user->genero   = 'F';
        $user->lastname = 'Tovar';
        $user->email    = 'adatov@gmail.com';
        $user->password = 'admin';
        $user->status   = 1; // (1) active (0)disabled
        $user->save();

        $user->assignRole('Usuario');
    }
}
