var faker = require('faker');
module.exports = function () {
const users =  []
for (let i = 1; i < 50; i++) {
const lenghtBody = Math.round(Math.random()*200)

  users.push(
    {
      id: i,
      createdAt: faker.date.past(),
      body: faker.lorem.words(n=lenghtBody),
        firstName:faker.name.firstName(),
        lastName: faker.name.lastName(),
        location: faker.address.country(),
      picture: {
        flag: flagAleat,
        url:  faker.image.avatar(),
      },
      commentCount:  faker.random.number({min:5, max:100}),
    },
  )
  }
  return {
    users:users
  }

}