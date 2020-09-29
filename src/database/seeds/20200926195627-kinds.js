module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('kinds', [
      {
        id: 1,
        name: 'Presencial',
      },
      {
        id: 2,
        name: 'Semi-presencial',
      },
      {
        id: 3,
        name: 'Virtual',
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('kinds', null, {});
  },
};
