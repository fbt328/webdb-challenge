
exports.up = function(knex) {
  return knex.schema.createTable('projects', pTable => {
      pTable.increments();
      pTable
        .string('name', 128)
        .notNullable()
        .unique();
      pTable
        .string('description')
        .notNullable();
      pTable.boolean('completed')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('projects')
};


//   - [X] A `project` can contain multiple actions and has:
//   - [X] a unique Id.
//   - [X] a name.
//   - [X] a description.
//   - [x] a flag that indicates if the project is complete or not.


