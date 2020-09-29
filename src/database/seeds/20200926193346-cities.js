module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('cities', [
      {
        id: 1,
        description: 'São José dos Campos',
        state_id: 1,
      },
      {
        id: 2,
        description: 'São Paulo',
        state_id: 1,
      },
      {
        id: 3,
        description: 'São Carlos',
        state_id: 1,
      },
      {
        id: 4,
        description: 'Valinhos',
        state_id: 1,
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('cities', null, {});
  },
};
