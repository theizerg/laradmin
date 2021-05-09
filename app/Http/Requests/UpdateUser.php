<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use App\Rules\Currentpass;

class UpdateUser extends FormRequest
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
           'name'  => 'required',
           'lastname'  => 'required',
           'email' => 'required|email', Rule::unique('users')->ignore(\Hashids::decode($this->segment(1)[0])),
           'role' => ['sometimes','regex:/^(Administrador|Usuario)$/'],
           'password' => 'nullable|confirmed|min:6',
           'status'  => 'sometimes',
           'current_password' => ['required', new Currentpass],
      ];
    }
}
