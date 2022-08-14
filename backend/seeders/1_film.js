const data = [
  {
    name: "john wick",
    description: "John Wick is an American neo-noir action-thriller media franchise created by screenwriter Derek Kolstad and starring Keanu Reeves as John Wick, a former hitman who is forced back into the criminal underworld he had abandoned",
    releaseDate: new Date(),
    rating: 5,
    ticketPrice: 1200,
    country: "Pakistan",
    genre: "funny,action",
    photo: "film.png",
    createdAt: new Date(),
    updatedAt: new Date(),

  },
  {
    name: "Avengers end game",
    description: "action-thriller media franchise created by marvel",
    releaseDate: new Date(),
    rating: 5,
    ticketPrice: 1250,
    country: "Pakistan",
    genre: "Horror,action",
    photo: "film.png",
    createdAt: new Date(),
    updatedAt: new Date(),

  },
  {
    name: "Film 3",
    description: "Film description",
    releaseDate: new Date(),
    rating: 5,
    ticketPrice: 1300,
    country: "USA",
    genre: "funny,action",
    photo: "film.png",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Films", data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Films", null, {});
  },
};
