module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('levels', [
      {
        id: 1,
        name: 'Bacharelado',
      },
      {
        id: 2,
        name: 'Licenciatura',
      },
      {
        id: 3,
        name: 'Tecnólogo',
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('levels', null, {});
  },
};
