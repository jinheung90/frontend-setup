import React, { useEffect } from 'react';
import './IamportInterfaces';

const IamportTest: React.FC = () => {
  useEffect(() => {});

  const callback = () => {};

  const onClickPayment = () => {
    const { IMP } = window;
    if (IMP === undefined) {
      return 'error';
    }
    const data = {};
  };

  return (
    <div className="container" id="container">
      {<button onClick={onClickPayment}>PaymentTestButton</button>}
    </div>
  );
};
