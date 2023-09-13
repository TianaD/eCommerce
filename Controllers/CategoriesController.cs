using eCommerse;
using eCommerse.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace eCommerse.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CategoriesController : Controller
    {
        private eCommerseDBContext _dBContext { get; set; }
        public CategoriesController(eCommerseDBContext dbContext)
        {
            _dBContext = dbContext;
        }

        [HttpPost]
        //http://localhost:5033/categories?Name=name&Description=description
        public async Task<ActionResult> CreateCategory(Category category)
        {
            _dBContext.Categories.Add(category);
            _dBContext.SaveChanges();
            return Ok();
        }

        [HttpGet]

        //http://localhost:5033/categories

        public async Task<IEnumerable<Category>> GetCategories()
        {
            List<Category> categories = _dBContext.Categories.Include(x => x.Products).ToList(); //.include is adding the products in our get categories route
            return categories;

        }

        [HttpDelete]
        //http://localhost:5033/categories?id=id
        public async Task<ActionResult<Category>> DeleteCategory(int id)
        {
            var category = await _dBContext.Categories.FindAsync(id);
            if (category == null)
            {
                return NotFound();
            }

            _dBContext.Categories.Remove(category);
            await _dBContext.SaveChangesAsync();
            return Ok();
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Category>> UpdateCategory(int id, [FromBody] Category categoryUpdate)
        {
            var category = await _dBContext.Categories
                .Include(category => category.Products)
                .SingleOrDefaultAsync (category => category.Id == id);

            category.Name = categoryUpdate.Name;
            category.Description = categoryUpdate.Description;

            _dBContext.Entry(category).State = EntityState.Modified;

            await _dBContext.SaveChangesAsync();

            return Ok(category);
        }
    }
}
