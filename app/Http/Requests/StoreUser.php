<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreUser extends FormRequest
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
           //'name'  => 'required',
           'username'  => 'required',
           'lastname'  => 'required',
           'email' => 'required|email|unique:users',
           'role' => ['required','regex:/^(Administrador|Usuario)$/'],
           'password' => 'required|confirmed|min:6',
           'status'  => 'required',
      ];
    }
}
