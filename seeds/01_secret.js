
exports.seed = function(knex, Promise) {
  return knex.raw('delete from secret; alter sequence secret_id_seq restart with 4')
    .then(function() {

      const fillerSecrets = [{
        id: 1,
        text: "I get high all the time but everybody thinks I'm normal."
      }, {
        id: 2,
        text: "My dog is probably so muddy."
      }]
      return knex('secret').insert(fillerSecrets)
    });
};
