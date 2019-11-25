import React from 'react';

import style from './ContactPage.module.css';

const ContactPage = () => {

  console.log('CONTACT PAGE');
  
  return (
    <div className={`${style.contactPageContainer}`}>
      <h3>contact page</h3>
      <p>Nội dung của trang contact </p>
    </div>
  )
};

export default ContactPage;