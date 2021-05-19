@extends('layouts.admin')
@section('title', 'Inicio')
@section('content')
<section class="container">
    @if ( Auth::user()->hasRole('Administrador'))
      
  
  <div class="row">
    <div class="col-sm-12">
        <div class="card card-primary card-statistics">
            <div class="row no-gutters">
                <div class=" col-xxl-3 col-lg-6">
                    <div class="p-20 border-lg-right border-bottom border-xxl-bottom-0">
                        <div class="d-flex m-b-10">
                            <p class="mb-0 font-regular text-muted font-weight-bold">Usuarios</p>
                            <a class="mb-0 ml-auto font-weight-bold" href="#"><i class="ti ti-more-alt"></i> </a>
                        </div>
                        <div class="d-block d-sm-flex h-100 align-items-center">
                            <div class="apexchart-wrapper">
                                <i class="fas fa-user-tie blue-text fa-5x"></i> 
                            </div>
                            <div class="statistics mt-3 mt-sm-0 ml-sm-auto text-center text-sm-right">
                                <h3 class="mb-2 fa-3x mr-3"><i></i> {{ App\Models\User::count() }}</h3>
                                <p>Cantidad actual de usuarios.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-3 col-lg-6">
                    <div class="p-20 border-xxl-right border-bottom border-xxl-bottom-0">
                        <div class="d-flex m-b-10">
                            <p class="mb-0 font-regular text-muted font-weight-bold">Roles</p>
                            <a class="mb-0 ml-auto font-weight-bold" href="#"><i class="ti ti-more-alt"></i> </a>
                        </div>
                        <div class="d-block d-sm-flex h-100 align-items-center">
                            <div class="apexchart-wrapper">
                                <i class="fas fa-lock green-text fa-5x"></i>
                            </div>
                            <div class="statistics mt-3 mt-sm-0 ml-sm-auto text-center text-sm-right">
                                <h3 class="mb-2 fa-3x mr-3"><i></i> {{Spatie\Permission\Models\Role::count()}}</h3>
                                
                                <p>Cantidad de roles en el sistema</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-3 col-lg-6">
                    <div class="p-20 border-lg-right border-bottom border-lg-bottom-0">
                        <div class="d-flex m-b-10">
                            <p class="mb-0 font-regular text-muted font-weight-bold">Permisos</p>
                            <a class="mb-0 ml-auto font-weight-bold" href="#"><i class="ti ti-more-alt"></i> </a>
                        </div>
                        <div class="d-block d-sm-flex h-100 align-items-center">
                            <div class="apexchart-wrapper">
                                <i class="fas fa-user-lock purple-text fa-5x"></i>
                            </div>
                            <div class="statistics mt-3 mt-sm-0 ml-sm-auto text-center text-sm-right">
                                <h3 class="mb-2 fa-3x mr-3"><i></i> {{Spatie\Permission\Models\Permission::count()}}</h3>
                                
                                <p>Cantidad de permisos en el sistema</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-3 col-lg-6">
                    <div class="p-20 border-lg-right border-bottom border-lg-bottom-0">
                        <div class="d-flex m-b-10">
                            <p class="mb-0 font-regular text-muted font-weight-bold">Historial</p>
                            <a class="mb-0 ml-auto font-weight-bold" href="#"><i class="ti ti-more-alt"></i> </a>
                        </div>
                        <div class="d-block d-sm-flex h-100 align-items-center">
                            <div class="apexchart-wrapper">
                                <i class="fas fa-history orange-text fa-5x"></i>
                            </div>
                            <div class="statistics mt-3 mt-sm-0 ml-sm-auto text-center text-sm-right">
                                <h3 class="mb-2 fa-3x mr-3"><i></i> {{App\Models\Log\LogSistema::count()}}</h3>
                                
                                <p>Histórico del sistema</p>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
          </div>
      </div>
    </div>
      
    <div class="card card-primary">
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
@else 
<div class="row">
    
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
