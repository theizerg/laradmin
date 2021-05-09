@extends('layouts.admin')
@section('title', 'Log del sistema')
@section('content')

<div class="container">

        <div class="col-md-12">
          <div class="card card-primary">
            <div class="card-header  ">
              <h3>Logs del sistema</h3>
             
            </div>
             <!-- /.card-header -->
                <div class="card-body table-responsive">
                     <ul class="list-inline">
                   <li class="list-inline-item">
                      <a href="/" class="link_ruta">
                        Inicio &nbsp; &nbsp;<i class="fa fa-chevron-right" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul><br>
	                <table id="example" class="table table-striped " style="width:100%">
	                    <thead>
	                    <tr>
	                    <th>#</th>
	                    <th>Detalle completo</th> 
	                    </tr>
	                    </thead>
	                    <tbody>
	                    @foreach ($logs as $log)
	                    <tr class="row{{ $log->id }}">
	                    <td>{{ $log->id }}</td>
	                    <td>{{ $log->tx_descripcion }}</td>
	                    
	                    </tr>
	                    @endforeach
	                    </tr>
	                    </tbody>                
	                </table>
                </div>
                <!-- /.card-body -->
            </div>
        </div>
   
@endsection
