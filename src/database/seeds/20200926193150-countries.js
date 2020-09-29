module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('countries', [
      {
        id: 1,
        description: 'Brasil',
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('countries', null, {});
  },
};
