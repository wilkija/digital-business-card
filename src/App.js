import Main from './components/Main';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(BIO_DATA);
  return (
    <div className="App">
      <Main className="container" data={data}></Main>
    </div>
  );
}

const BIO_DATA = {
  name: 'JACOB WILKINSON',
  pronouns: '(he/him)',
  title: 'Full Stack Software Engineer',
  tech: 'Node | JavaScript | React | MongoDB',
  email: 'wilkija@gmail.com',
  linkedIn: 'linkedin.com/in/j-wilkinson/',
  portfolio: 'jacobwilkinson.netlify.app/'
};

export default App;
