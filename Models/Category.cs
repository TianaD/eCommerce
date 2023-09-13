using System.ComponentModel.DataAnnotations;
using System.Data;


namespace eCommerse.Models
{
    public class Category
    {
        [Key]//signify to entity framework that this is a primary key
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public List<Product>? Products { get; set; } 
        public Category(string name, string description) 
        { 
            Name = name;
            Description = description;
        }
    }
}
