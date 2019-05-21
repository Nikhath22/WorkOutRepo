using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BusinessLogic1;

namespace WorkOutWebAPI.Controllers
{
    public class categoryController : ApiController
    {

        WorkoutDbEntities2 db = new WorkoutDbEntities2();
        public IHttpActionResult Get()
        {

            return Ok(db.workout_Category.ToArray());
        }
        public IHttpActionResult Get(int? id)
        {
            if (id < 0)
            {
                return BadRequest("Invalid Workout id");
            }
            var data = db.workout_Category.Find(id);
            if (data == null) {
                return NotFound();
                 }
            return Ok(data);
        }

        public IHttpActionResult Post(workout_Category obj)
        {
            db.workout_Category.Add(obj);
           
            int objvar = db.SaveChanges();
            if (objvar > 0)
            {
                return StatusCode(HttpStatusCode.Created);
            }
            {
                return BadRequest("not exist");
            }




        }


        public IHttpActionResult Put(workout_Category obj)
        {
            db.workout_Category.Attach(obj);
            db.Entry(obj).State = System.Data.Entity.EntityState.Modified;
            var r = db.SaveChanges();
            if (r > 0)
            {
                return StatusCode(HttpStatusCode.Accepted);
            }
            else
            {
                return BadRequest("not exust");
            }

          


        }

        public IHttpActionResult Delete(int id)
        {
            var o = db.workout_Category.Find(id);
            if (o == null)
            {
                return NotFound();
            }
            db.workout_Category.Remove(o);
            int r = db.SaveChanges();
            if (r > 0)
            {
                return StatusCode(HttpStatusCode.NoContent);
            }
            else
            {
                return BadRequest("not");
            }
        }


    }
}
