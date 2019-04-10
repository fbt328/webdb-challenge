
exports.up = function(knex) {
  return knex.schema.createTable('actions', aTable => {
    aTable
        .increments();
    aTable
        .string('name', 128)
        .notNullable()
    aTable
        .string('notes')
    aTable
        .boolean('completed')
    aTable
        .foreign('projectID')
        .references('id')
        .on('projects')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('actions')
};

  
//   - [x] An `action` belongs to only one project. An action has:
//   - [x] a unique id.
//   - [x] a description of what needs to be done.
//   - [x] a notes column to add additional information.
//   - [x] a flag that indicates if the action has been completed.
// add relationships between actions and projects