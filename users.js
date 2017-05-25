var faker = require('faker');

function generateTagList() {
  var tagList = ['Operations',
    'Identity',
    'Directives',
    'Accounts',
    'Metrics',
    'Intranet',
    'Metrics',
    'Marketing',
    'Data',
    'Creative'
  ];
  var count = Math.floor(Math.random() * 4) + 1;
  var temp = tagList;
  var tags = [];

  for (var i = 0; i < count; i++) {
    position = Math.floor(Math.random() * temp.length);
    tags.push(temp[position]);
    temp.splice(position, 1);
  }
  console.log(tags);
  return tags;
}


function generatePosts() {
  var authorList = [{
      id: 0,
      name: 'Willow Murazik',
      username: 'Johnathon.Ward',
      email: 'Deon_Block@example.com',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/chadengle/128.jpg',
      url: 'http://loma.biz',
      bio: 'Explicabo quam architecto sequi aliquam.'
    },
    {
      id: 1,
      name: 'Yolanda Medhurst III',
      username: 'Heloise.Rutherford',
      email: 'Libbie.Schroeder2@example.com',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/atariboy/128.jpg',
      url: 'https://marc.org',
      bio: 'Provident assumenda enim quia.'
    },
    {
      id: 2,
      name: 'Dan Kutch',
      username: 'Gloria71',
      email: 'Helmer25@example.org',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/buddhasource/128.jpg',
      url: 'http://king.name',
      bio: 'Omnis iste aliquid alias est numquam.'
    },
    {
      id: 3,
      name: 'Aniya Mills',
      username: 'Jenifer55',
      email: 'Kyle.Wintheiser@example.com',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/caseycavanagh/128.jpg',
      url: 'https://meda.net',
      bio: 'Id consectetur fuga cupiditate explicabo similique repellat.'
    },
    {
      id: 4,
      name: 'Jarret Purdy',
      username: 'Carissa_Mills46',
      email: 'Vaughn63@example.org',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/moynihan/128.jpg',
      url: 'http://oswald.info',
      bio: 'Nemo quis tenetur quidem pariatur accusamus tenetur.'
    },
    {
      id: 5,
      name: 'Rhett Nikolaus',
      username: 'Terry57',
      email: 'Cayla_Emard87@example.org',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/andresenfredrik/128.jpg',
      url: 'http://loma.biz',
      bio: 'At voluptatem provident consequuntur qui.'
    },
    {
      id: 6,
      name: 'Jaden Bogan Jr.',
      username: 'Skye_Lehner',
      email: 'Jaleel44@example.com',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/dvdwinden/128.jpg',
      url: 'https://brian.org',
      bio: 'Voluptas maxime eum unde quisquam sit totam.'
    },
    {
      id: 7,
      name: 'Fay Grady',
      username: 'Michaela.Boyle64',
      email: 'Emmett.Steuber@example.com',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ajaxy_ru/128.jpg',
      url: 'http://arno.info',
      bio: 'Consequatur pariatur minima eveniet architecto laborum.'
    },
    {
      id: 8,
      name: 'Francesca Gerlach',
      username: 'Quinten_Daniel',
      email: 'Shanny.Wyman71@example.org',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/AlbertoCococi/128.jpg',
      url: 'http://sallie.name',
      bio: 'Veritatis sequi pariatur suscipit ipsa ut quaerat.'
    },
    {
      id: 9,
      name: 'Mrs. Zander Lowe',
      username: 'Cheyanne.Cronin',
      email: 'Raquel81@example.org',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ramanathan_pdy/128.jpg',
      url: 'https://kaden.biz',
      bio: 'Rerum maiores aut ad minima omnis et repudiandae et.'
    }
  ];
  var blogs = [];

  for (var id = 0; id < 100; id++) {
    var title = faker.random.word();
    var slug = faker.lorem.slug();
    var content = faker.lorem.paragraphs();
    var image = faker.image.image();
    var category = faker.name.jobDescriptor();
    var tags = generateTagList();
    // tags.push(tagList[Math.floor(Math.random() * tagList.length)]);
    var createdDate = faker.date.recent();
    var author = authorList[Math.floor(Math.random() * authorList.length)];

    blogs.push({
      "id": id,
      "title": title,
      "slug": slug,
      "content": content,
      "image": image,
      "category": category,
      "tags": tags,
      "createdDate": createdDate,
      "author": author
    })
  }
  return { "blogs": blogs }
}

module.exports = generatePosts
