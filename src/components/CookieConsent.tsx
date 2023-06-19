import React from 'react';
import CookieConsent from 'react-cookie-consent';

const CookieAccept = () => {
  return (
    <CookieConsent
      enableDeclineButton
      flipButtons
      location="bottom"
      buttonText="Accept"
      cookieName="cookie-towedd"
      style={{ background: 'blue' }}
      buttonStyle={{
        color: '#000',
        fontSize: '15px'
      }}
      declineButtonStyle={{
        margin: '10px 10px 10px 0'
      }}
      expires={450}
    >
      This website uses cookies
    </CookieConsent>
  );
};

export default CookieAccept;
