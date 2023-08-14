import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  {
    name: 'ThankfulDB',
    location: 'default',
  },
  () => console.log('Database opened!'),
  error => {
    console.error('Database opening error: ', error.message);
  }
);

const setupDatabase = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS thankful_notes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        note TEXT,
        date TEXT
      );`,
      [],
      (_, results) => console.log('Table created successfully!'),
      (_, error) => console.error('Table creation error:', error.message)
    );
  });
};

export const insertNote = (noteText, currentDate) => {
  db.transaction(
    tx => {
      tx.executeSql('INSERT INTO thankful_notes (note, date) VALUES (?, ?)', [noteText, currentDate]);
    },
    (error) => console.error('Error inserting note:', error.message)
  );
};

export const getNotesBetweenDates = (startDate, endDate, callback) => {
  db.transaction(
    tx => {
      tx.executeSql(
        'SELECT note, date FROM thankful_notes WHERE date BETWEEN ? AND ?',
        [startDate, endDate],
        (_, results) => {
          callback(results.rows.raw());
        }
      );
    },
    (error) => console.error('Error fetching notes:', error.message)
  );
};

export const getAllNotes = (callback) => {
  db.transaction(
    tx => {
      tx.executeSql(
        'SELECT note, date FROM thankful_notes',
        [],
        (_, results) => {
          callback(results.rows.raw());
        }
      );
    },
    (error) => console.error('Error fetching all notes:', error.message)
  );
};

export { setupDatabase };
