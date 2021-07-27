import fastify from 'fastify';

const server = fastify();
const apiInfo: {version: number, description: string} = {
  version: 1, description: "Movies server API" 
};

//Type definition for a "movie" object.
type Moive = {
  id: number,
  name: string,
  year: number,
  description: string 
}

//The dataset, an array of "movies" based on the "movie" object.
const movies: Moive[] = [{
    id: 1,
    name: "Inception",
    year: 2010,
    description: "A thief tries to plant an idea into the mind of a C.E.O."
  }, 
  {
    id: 2,
    name: "The Matrix",
    year: 1999,
    description: "A hacker discovers a shocking truth about his world."
  }, 
  {
    id: 3,
    name: "Donnie Darka",
    year: 2001,
    description: "A troubled teenager follows a man in a rabbit suit."
  }];

server.get('/', async (request, reply) => {
  return 'This is the home page.';
});

server.get('/api/info', async (request, reply) => {
  reply
    .code(200)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send(apiInfo);
});

server.get('/api/movies', async (request, reply) => {
  reply
    .code(200)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send(movies);
});

server.listen(8080, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});