const getRandomInt = require('../../utils/getRandomInt');

const calculateDiscount = (fullPrice, priceWithDiscount) =>
  Number(((fullPrice - priceWithDiscount) / fullPrice) * 100).toFixed(2);

module.exports = {
  up: async (queryInterface) => {
    const [, courses] = await queryInterface.sequelize.query(
      'SELECT id, university_id, campus_id from courses limit 10'
    );
    const offers = [];

    await courses.forEach((course) => {
      const { id: course_id, university_id, campus_id } = course;
      for (let i = 0; i < 3; i += 1) {
        const full_price = getRandomInt(500, 1000);
        const price_with_discount = getRandomInt(100, 499);
        const discount_percentage = calculateDiscount(full_price, price_with_discount);
        const enrollment_semester = `2020.${getRandomInt(1, 3)}`;

        const randomOffer = {
          full_price,
          price_with_discount,
          discount_percentage,
          enrollment_semester,
          start_date: new Date(),
          course_id,
          university_id,
          campus_id,
          created_at: new Date(),
          updated_at: new Date(),
        };

        offers.push(randomOffer);
      }
    });

    await queryInterface.bulkInsert('offers', offers);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('offers', null, {});
  },
};
