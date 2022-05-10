require('dotenv').config();
require('./config/database');

const Project = require('./models/project');
const Image = require('./models/image');

(async function () {

  await Project.deleteMany({});
  const projects = await Project.create([
    { name: 'Foodtrucks', sortOrder: 10 },
    { name: 'Coffee', sortOrder: 20 },
    { name: 'Rocks', sortOrder: 30 },
  ]);

  await Image.deleteMany({});
  const images = await Image.create([
    { url: 'https://i.imgur.com/iiZoGEQ.jpeg', project: projects[0] },
    { url: 'https://i.imgur.com/BLFXESd.jpeg', project: projects[0] },
    { url: 'https://i.imgur.com/hREgzD9.jpeg', project: projects[1] },
    { url: 'https://i.imgur.com/ISkiwgl.jpeg', project: projects[1] },
    { url: 'https://i.imgur.com/TTpKcKD.jpeg', project: projects[2] },
    { url: 'https://i.imgur.com/PFNY72x.jpeg', project: projects[2] },
  ]);

  console.log(images)

  process.exit();

})();