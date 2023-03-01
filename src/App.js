import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import BaseLayout from './Components/Routes/BaseLayout.jsx';
import './App.css';
import MainPage from './Components/MainPage.jsx';



const App = () => (
  <Routes>
    <Route element={<BaseLayout />}>
      <Route path="/" element={<MainPage />} />
    </Route>
  </Routes>
)

export default App;
