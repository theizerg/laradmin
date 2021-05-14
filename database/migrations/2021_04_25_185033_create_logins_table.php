<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLoginsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('logins', function (Blueprint $table) {
            $table->increments('id');
            //$table->integer('user_id')->unsigned();
            $table->foreignId('user_id')->references('id')->on('users');
            $table->string('user_agent');
            $table->string('session_token', 40);
            $table->string('ip_address', 40);
            $table->timestamp('login_at')->useCurrent();
            $table->dateTime('logout_at')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('logins');
    }
}
