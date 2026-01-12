
<?php

use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations for the staff table.
     */
    public function up(): void
    {
        Schema::create('staff', function (Blueprint $table) {
            $table->id();
            // Relationship to the Users table
            $table->foreignIdFor(User::class)->constrained()->cascadeOnDelete();
            $table->string('user_id');
            
            // Core Staff Info
            $table->string('image')->nullable();
            $table->string('full_name');
            $table->date('date_of_birth');
            $table->enum('gender', ['male', 'female', 'other'])->nullable();
            $table->string('phone')->unique();
            $table->string('email')->unique();
            
            // Role & Status
            $table->string('role')->default('staff');
            $table->enum('status', ['active', 'inactive', 'on_leave'])->default('active');
            
            // Work-Related Data
            $table->decimal('salary', 10, 2)->nullable();
            $table->string('slug')->unique();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('staff');
    }
};