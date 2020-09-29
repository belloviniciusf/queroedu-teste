const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface) => {
    const defaultPassword = 'queroedu';

    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        fullname: 'Vinícius Feres Belló',
        email: 'bello.viniciusf@gmail.com',
        password_hash: await bcrypt.hash(defaultPassword, 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        fullname: 'QueroEdu',
        email: 'teste@queroedu.com.br',
        password_hash: await bcrypt.hash(defaultPassword, 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
