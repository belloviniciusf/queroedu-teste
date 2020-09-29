const getRandomInt = require('../../utils/getRandomInt');

module.exports = {
  up: async (queryInterface) => {
    const campus = [];

    for (let i = 0; i < 10; i += 1) {
      const randomCampus = {
        id: i + 1,
        name: `Campus ${i}`,
        university_id: i + 1,
        city_id: getRandomInt(1, 4),
        state_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      };

      campus.push(randomCampus);
    }

    await queryInterface.bulkInsert('campuses', campus);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('campuses', null, {});
  },
};
