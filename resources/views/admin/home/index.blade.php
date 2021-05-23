@extends('layouts.admin')
@section('title', 'Inicio')
@section('content')
<section class="container">
    @if ( Auth::user()->hasRole('Administrador'))
      
  
  <div class="container">
      <div class="row">
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box blue darken-3 text-white">
              <div class="inner">
                <h3>{{ App\Models\User::count() }}</h3>

                <p>Usuarios registrados.</p>
              </div>
                <div class="icon">
                   <i class="fas fa-user-tie"></i>
                </div>
                </div>
          </div>
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box green darken-3 text-white">
                  <div class="inner">
                    <h3>{{Spatie\Permission\Models\Role::count()}}</h3>

                    <p>Roles registrados.</p>
                  </div>
                    <div class="icon">
                       <i class="fas fa-lock"></i>
                    </div>
              </div>
          </div>
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box purple darken-3 text-white">
                  <div class="inner">
                    <h3>{{Spatie\Permission\Models\Permission::count()}}</h3>

                    <p>Permisos registrados.</p>
                  </div>
                    <div class="icon">
                       <i class="fas fa-lock-open"></i>
                    </div>
              </div>
          </div>
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box orange darken-3 text-white">
                  <div class="inner">
                    <h3> {{App\Models\Log\LogSistema::count()}}</h3>

                    <p>Histórico del sistema.</p>
                  </div>
                    <div class="icon">
                       <i class="fas fa-file-archive"></i>
                    </div>
              </div>
          </div>
    </div>

    <div class="col-sm-12">
         <div class="card ">
                <div class="card-header">
                   <div class="card-body">
                     <div class="container-fluid">
                      <div class="card-panel">
                      <canvas id="employee"></canvas>
                       </div>
                   </div>
               </div>
            </div>
        </div>
    </div>
</div>
      
   
@else 
<div class="row">
    <a href="#" class="navbar-btn sidebar-toggle" data-toggle="offcanvas" role="button" data-tooltip="tooltip" title="Toggle">asdasds</a>
</div>  
@endif




</section>
@endsection
 @if ( Auth::user()->hasRole('Administrador'))
@push('scripts')

{{-- Create the chart with javascript using canvas --}}
    <script>
        // Get Canvas element by its id
        employee_chart = document.getElementById('employee').getContext('2d');
        chart = new Chart(employee_chart,{
            type:'line',
            data:{
                labels:[
                    /*
                        this is blade templating.
                        we are getting the date by specifying the submonth
                     */
                    '{{Carbon\Carbon::now()->subMonths(3)->toFormattedDateString()}}',
                    '{{Carbon\Carbon::now()->subMonths(2)->toFormattedDateString()}}',
                    '{{Carbon\Carbon::now()->subMonths(1)->toFormattedDateString()}}',
                    '{{Carbon\Carbon::now()->subMonths(0)->toFormattedDateString()}}'
                    ],
                datasets:[{
                    label:'Usuarios guardados en los últimos 4 meses.',
                    data:[
                        
                        '{{$emp_count_4}}',
                        '{{$emp_count_3}}',
                        '{{$emp_count_2}}',
                        '{{$emp_count_1}}'
                    ],
                    backgroundColor: [
                        'rgba(178,235,242 ,1)'
                    ],
                    borderColor: [
                        'rgba(0,150,136 ,1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });
    </script>
@endpush
@else

@endif
