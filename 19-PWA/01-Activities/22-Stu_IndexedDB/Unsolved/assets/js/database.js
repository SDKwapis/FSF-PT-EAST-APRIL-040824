import { openDB } from 'idb';

const initdb = async () =>

// TODO: Add a comment explaining what this method does
// creates a database named todo and we will use version 1
  openDB('todos', 1, {
    // TODO: Add a comment explaining the functionality of this method:
    // sets the database schema if it isnt already defined
    upgrade(db) {
      if (db.objectStoreNames.contains('todos')) {
        console.log('todos database already exists');
        return;
      }
      // TODO: Add a comment explaining what we're doing with the object store:
      // we create a key named id which will automatically be incrmented for us.
      db.createObjectStore('todos', { keyPath: 'id', autoIncrement: true });
      console.log('todos database created');
    },
  });

initdb();
