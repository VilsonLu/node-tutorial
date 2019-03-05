const yargs = require('yargs');
const notes = require('./notes.js');

// Add
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv) => {
    notes.addNote(argv.title, argv.body);
  },
});

// Remove
yargs.command({
  command: 'remove',
  describe: 'Remove note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv) => {
    notes.removeNote(argv.title);
  },
});

// Read
yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv) => {
    const note = notes.readNote(argv.title);
    if (note) {
      notes.logNote(note);
    } else {
      console.log('Note not found');
    }
  },
});

yargs.command({
  command: 'list',
  describe: 'List all note',
  handler: () => {
    const listNotes = notes.getAll();
    listNotes.forEach((x) => {
      notes.logNote(x);
    });
  },
});

yargs.parse();
