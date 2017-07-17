using Microsoft.AspNetCore.Mvc;
using MM.TOH.WebApi.Models;
using System.Collections.Generic;

namespace MM.TOH.WebApi.Controllers
{
    [Route("api/[controller]")]
    public class HeroesController : Controller
    {
        private List<Hero> heroes = new List<Hero>
        {
            new Hero { id = 11, name = "Mr. Nice" },
            new Hero { id = 12, name = "Narco"},
            new Hero { id = 13, name = "Bombasto" },
            new Hero { id = 14, name = "Celeritas" },
            new Hero { id = 15, name = "Magneta" },
            new Hero { id = 16, name = "RubberMan" },
            new Hero { id = 17, name = "Dynama" },
            new Hero { id = 18, name = "Dr IQ" },
            new Hero { id = 19, name = "Magma" },
            new Hero { id = 20, name = "Tornado" }
        };

        [HttpGet]
        public IEnumerable<Hero> Get()
        {
            return heroes;
        }

        [HttpGet("{id}")]
        public Hero Get(int id)
        {
            return FindHero(id);
        }

        [HttpPost]
        public Hero Post([FromBody]Hero newHero)
        {
            newHero.id = 99; // would never do this in a real app
            heroes.Add(newHero);

            return newHero;
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody]Hero updatedHero)
        {
            var hero = FindHero(id);
            hero = updatedHero;
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            heroes.Remove(FindHero(id));
        }

        private Hero FindHero(int id)
        {
            return heroes.Find(hero => hero.id == id);
        }

    }
}
