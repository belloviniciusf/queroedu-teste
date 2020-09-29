module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('states', [
      {
        id: 1,
        description: 'São Paulo',
        initials: 'SP',
        country_id: 1,
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('states', null, {});
  },
};
