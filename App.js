import React from 'react';
import { setupDatabase } from './src/database/db';
import Drawer from './src/components/Drawer';

const App = () => {
  return (
    <Drawer />
  );
};

setupDatabase();

export default App;

