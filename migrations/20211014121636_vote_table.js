exports.up = function(knex) {
    return knex.schema.createTable('votes', function(t) {
        t.increments('id').unsigned().primary();
        t.integer('user_id').unsigned();
        t.integer('calon_id').unsigned();
        t.string('harapan').notNull();
        t.string('saran').notNull();
        t.dateTime('vote_at').nullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('votes');
};