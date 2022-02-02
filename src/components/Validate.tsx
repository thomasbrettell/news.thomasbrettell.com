import { useEffect, useContext } from 'react';
import { PasswordContext } from '../index';

const Validate = () => {
  const { update: setIsValidated } = useContext(PasswordContext);

  useEffect(() => {
    let enteredPassword: string | null = '';
    while (enteredPassword !== process.env.REACT_APP_PASSWORD) {
      enteredPassword = prompt('Enter password');
    }
    setIsValidated(true);
  }, [setIsValidated]);
  return null;
};

export default Validate;
