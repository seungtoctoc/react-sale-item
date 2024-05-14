import React from 'react';

import Header from '../../components/header/Header';
import Main from '../../components/main/Main';
import Footer from '../../components/footer/Footer';
import TitleBar from '../../components/titleBar/TitleBar';

export default function MainPage() {
  return (
    <div className='flex-col'>
      <Header />
      <TitleBar />
      <Main />
      <Footer />
    </div>
  );
}
