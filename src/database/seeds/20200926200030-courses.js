const sampleCourses = [
  'Engenharia Mecânica',
  'Arquitetura e Urbanismo',
  'Propaganda e Marketing',
  'Jornalismo',
  'Marketing',
  'Biomedicina',
  'Engenharia Civil',
  'Geografia',
  'História',
  'Sistemas de Informação',
];

const getRandomInt = require('../../utils/getRandomInt');

module.exports = {
  up: async (queryInterface) => {
    const courses = [];

    for (let i = 0; i < 10; i += 1) {
      const randomCourse = {
        id: i + 1,
        name: sampleCourses[i],
        kind_id: getRandomInt(1, 4),
        level_id: getRandomInt(1, 4),
        shift_id: getRandomInt(1, 4),
        university_id: i + 1,
        campus_id: i + 1,
        created_at: new Date(),
        updated_at: new Date(),
      };

      courses.push(randomCourse);
    }

    await queryInterface.bulkInsert('courses', courses);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('courses', null, {});
  },
};
