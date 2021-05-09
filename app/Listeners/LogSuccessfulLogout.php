<?php

namespace App\Listeners;

use Illuminate\Auth\Events\Logout;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;


class LogSuccessfulLogout
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  Logout  $event
     * @return void
     */
    public function handle(Logout $event)
    {
        
        $login = $event->user->logins()->where('user_id', auth()->user()->id)->first();
        //dd($login);
        
        if ($login)
        {
            $login->logout_at = \Carbon\Carbon::now(); 
            $login->save();
        }
        
    }
}