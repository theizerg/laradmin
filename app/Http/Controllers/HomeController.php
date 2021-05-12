<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Log\LogSistema;
use App\Models\User;
use Carbon\Carbon;

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
        $date_current = Carbon::now()->toDateTimeString();

        $prev_date1 = $this->getPrevDate(1);
        $prev_date2 = $this->getPrevDate(2);
        $prev_date3 = $this->getPrevDate(3);
        $prev_date4 = $this->getPrevDate(4);

        //$prev_date12 = $this->getPrevDate(12);
        
        //dd($prev_date0);
        $emp_count_1  = User::whereBetween('created_at',[$prev_date1,$date_current])->count();
        $emp_count_2  = User::whereBetween('created_at',[$prev_date2,$prev_date1])->count();
        $emp_count_3  = User::whereBetween('created_at',[$prev_date3,$prev_date2])->count();
        $emp_count_4  = User::whereBetween('created_at',[$prev_date4,$prev_date3])->count();


        $log = new LogSistema();

        $log->user_id = auth()->user()->id;
        $log->tx_descripcion = 'El usuario: '.auth()->user()->display_name.' Ha ingresado al home del sistema a las: '
        . date('H:m:i').' del día: '.date('d/m/Y');
        $log->save();

        return view('admin.home.index', compact('emp_count_1',
                                                'emp_count_2',
                                                'emp_count_3',
                                                'emp_count_4'
                                                ));
    }

    public function logs()
    {   
        //dd(LogSistema::get());

        $logs= LogSistema::get();

        return view('admin.home.logs', compact('logs'));
    }

     private function getPrevDate($num){
        return Carbon::now()->subMonths($num)->toDateTimeString();
    }
}
