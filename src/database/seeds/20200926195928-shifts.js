module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('shifts', [
      {
        id: 1,
        name: 'Manhã',
      },
      {
        id: 2,
        name: 'Tarde',
      },
      {
        id: 3,
        name: 'Noite',
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('shifts', null, {});
  },
};
