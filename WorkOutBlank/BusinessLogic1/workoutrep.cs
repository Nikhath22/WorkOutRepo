using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogic1
{
    public class workoutrep
    {
        WorkoutDbEntities2 db = new WorkoutDbEntities2();

        public List<workout_Category> ListCategory()
        {
            try
            {

                return db.workout_Category.ToList();

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public void AddCategory(workout_Category item)
        {
            try
            {
                WorkoutDbEntities2 db = new WorkoutDbEntities2();
                db.workout_Category.Add(item);
                db.SaveChanges();
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

        public void DeleteCategory(int id)
        {
            Console.WriteLine("enter the category id to delete");
            int Id = int.Parse(Console.ReadLine());
            try
            {
                WorkoutDbEntities2 db = new WorkoutDbEntities2();
                var ObjCategory = (from obj in db.workout_Category
                                   where obj.category_id == Id
                                   select obj).First();
                db.workout_Category.Remove(ObjCategory);
                db.SaveChanges();


            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void EditCategory(workout_Category item)
        {

            try
            {
                WorkoutDbEntities2 db = new WorkoutDbEntities2();
                var ObjCategory = (from obj in db.workout_Category
                                   where obj.category_id == item.category_id
                                   select obj).First();

                ObjCategory.Name = item.Name;

                db.SaveChanges();




            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public workout_Category GetCategory(int id)
        {
            workout_Category objWork = null;

            try
            {
                WorkoutDbEntities2 db = new WorkoutDbEntities2();
                objWork = (from obj in db.workout_Category
                           where obj.category_id == id
                           select obj).First();
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return objWork;

        }
    }
}
