<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Rules\Currentpass;

class AsignacionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    { 
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {

        return [

            'serial_bandes'         => 'required',
            'descripcion'         => 'required',
            'equipo_id'         => 'required',
            'nb_funcionario'         => 'required',
            'nb_gerencia'         => 'required',
            'nb_unidad_administrativa'         => 'required',
            'nu_piso'         => 'required',
            'nu_extension'         => 'required',
            'status'         => 'required',
            'nb_especialista_soporte'         => 'required',
            'current_password' => ['required', new Currentpass],
        ];
    }
}
