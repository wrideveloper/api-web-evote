exports.up = function(knex) {
    return knex.schema.createTable('calons', function(t) {
        t.increments('id').unsigned().primary();
        t.string('nama').notNull();
        t.string('kelas').notNull();
        t.text('visi').nullable();
        t.text('misi').nullable();
        t.string('foto').notNull();
    });

};

exports.down = function(knex) {
    return knex.schema.dropTable('calons');
};