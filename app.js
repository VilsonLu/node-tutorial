const yargs = require('yargs');
const notes = require('./notes.js');

const titleOption = {
  describe: 'Title of note',
  demand: true,
  alias: 't',
};

const bodyOption = {
  describe: 'Description of note',
  demand: true,
  alias: 'b',
};

const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOption,
    body: bodyOption,
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title: titleOption,
  })
  .command('remove', 'Remove a note', {
    title: titleOption,
  })
  .help()
  .argv;
const command = argv._[0];

if (command === 'add') {
  const note = notes.addNote(argv.title, argv.body);

  if (note) {
    console.log('Note created');
    notes.logNote(note);
  } else {
    console.log('Title already exists');
  }
} else if (command === 'list') {
  const listNotes = notes.getAll();
  console.log(`Printing ${listNotes.length} note(s).`);

  listNotes.forEach((x) => {
    notes.logNote(x);
  });
} else if (command === 'read') {
  const note = notes.readNote(argv.title);
  if (note) {
    console.log('Note found');
    notes.logNote(note);
  } else {
    console.log('Note not found');
  }
} else if (command === 'remove') {
  const result = notes.removeNote(argv.title);
  const message = result ? 'Note was removed' : 'Note not found';
  console.log(message);
} else {
  console.log('Command not recognize');
}
