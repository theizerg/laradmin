<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Rules\Currentpass;

class StoreModelo extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
           'nb_nombre'  => 'required|unique:marcas',       
           'status'  => 'required',
           'marca_id'  => 'required',
           'current_password' => ['required', new Currentpass],
      ];
    }
}
