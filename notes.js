const fs = require('fs');

const fetchNotes = () => {
  try {
    const noteString = fs.readFileSync('notes-data.json');
    return JSON.parse(noteString);
  } catch (e) {
    return [];
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const addNote = (title, body) => {
  const notes = fetchNotes();

  const note = {
    title,
    body,
  };

  const duplicateNote = notes.filter(x => x.title === title);

  if (duplicateNote.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }

  return null;
};

const getAll = () => {
  const notes = fetchNotes();
  return notes;
};

const removeNote = (title) => {
  const notes = fetchNotes();
  const filteredNotes = notes.filter(x => x.title !== title);
  saveNotes(filteredNotes);
  return notes.length !== filteredNotes.length;
};

const readNote = (title) => {
  const notes = fetchNotes();
  const filteredNotes = notes.filter(x => x.title === title);
  return filteredNotes[0];
};

const logNote = (note) => {
  console.log('----');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
  addNote,
  getAll,
  removeNote,
  readNote,
  logNote,
};
