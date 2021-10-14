exports.up = function(knex) {
    return knex.schema.createTable('users', function(t) {
        t.increments('id').unsigned().primary();
        t.string('nama').notNull();
        t.string('nim').notNull();
        t.string('password').notNull();
        t.enum('role', ['admin', 'voter']).defaultTo('voter');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};