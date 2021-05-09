<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Log\LogSistema;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {   
        //dd(LogSistema::get());

        $log = new LogSistema();

        $log->user_id = auth()->user()->id;
        $log->tx_descripcion = 'El usuario: '.auth()->user()->display_name.' Ha ingresado al home del sistema a las: '
        . date('H:m:i').' del día: '.date('d/m/Y');
        $log->save();

        return view('admin.home.index');
    }

    public function logs()
    {   
        //dd(LogSistema::get());

        $logs= LogSistema::get();

        return view('admin.home.logs', compact('logs'));
    }
}
