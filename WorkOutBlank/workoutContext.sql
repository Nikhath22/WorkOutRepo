Create database WorkoutDb
use WorkoutDb
Create table workout_Category
(
category_id int,
Name Varchar(64)
constraint pk_workout_category primary key(category_id)

)

Create table workout_Collection
(
  workout_title  Varchar(128),
  workout_note varchar(256),
  calories_burn_per_min float,
   category_id  int,
	workout_id int,
	constraint pk_workout_Collection primary key(workout_id),
	constraint fk_workout_Collection_workout_category foreign key(category_id) references workout_category(category_id)
	)

Create table workout_active
(
    workout_id int,
    start_time time,
     start_date date,
    end_date date,
    end_time time,
    comment varchar(64),
    status bit,
	constraint fk_workout_active_workout_Collection foreign key(workout_id) references workout_Collection(workout_id)
	)
  
  select * from workout_Category
   select * from workout_Collection
     select * from workout_active