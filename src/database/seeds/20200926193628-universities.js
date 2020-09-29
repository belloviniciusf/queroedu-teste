const getRandomInt = require('../../utils/getRandomInt');

module.exports = {
  up: async (queryInterface) => {
    const universities = [];

    for (let i = 0; i < 10; i += 1) {
      const randomUniversity = {
        id: i + 1,
        name: `Universidade ${i}`,
        score: getRandomInt(1, 5),
        logo_url: `https://api.adorable.io/avatars/${i}`,
        city_id: getRandomInt(1, 5),
        state_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      };

      universities.push(randomUniversity);
    }

    await queryInterface.bulkInsert('universities', universities);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('universities', null, {});
  },
};
