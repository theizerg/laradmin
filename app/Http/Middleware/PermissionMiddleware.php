<?php

namespace App\Http\Middleware;

use Closure;

class PermissionMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next,$permission)
    {
        if (\Auth::guest()) {
            return redirect('/login');
        }
        if (! $request->user()->can($permission)) {
          
            $notification = array(
                'message' => '¡Acceso denegado!',
                'alert-type' => 'error'
            );
             return \Redirect::to('/')->with($notification);
        }
        return $next($request);
    }
}
