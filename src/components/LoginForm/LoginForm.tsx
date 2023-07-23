import { useEffect, useState } from 'react';
import styles from './index.module.css';
import { ReactComponent as UserIcon } from '../../images/user.svg';
import { ReactComponent as CloseIcon } from '../../images/close.svg';
import { FormInput } from '../FormInput/FormInput';
import { Button } from '../Button/Button';
import users from '../../mocks/users.json';

interface IProps {
  successLogin: () => void;
  errorLogin: () => void;
  onClose: () => void;
}

const LoginForm = (props: IProps) => {
  const { successLogin, errorLogin, onClose } = props;
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailIsTouched, setEmailIsTouched] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordIsTouched, setPasswordIsTouched] = useState(false);

  useEffect(() => {
    if (emailIsTouched) {
      if (!email.length) {
        setEmailError('This field is required');
      } else if (
        !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          email
        )
      ) {
        setEmailError('Not valid E-mail address');
      } else {
        setEmailError('');
      }
    }
  }, [email, emailIsTouched]);

  useEffect(() => {
    if (passwordIsTouched) {
      if (!password.length) {
        setPasswordError('This field is required');
      } else {
        setPasswordError('');
      }
    }
  }, [password, passwordIsTouched]);

  const handleEmailChange = (value: string) => {
    setEmail(value);
    setEmailIsTouched(true);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    setPasswordIsTouched(true);
  };

  const login = () => {
    const foundUser = users.find((user) => user.email === email);
    if (foundUser && foundUser.password === password) {
      successLogin();
    } else if (foundUser) {
      setPasswordError('Wrong password');
      errorLogin();
    } else {
      setPasswordError(password ? '' : 'This field is required');
      if (password) {
        errorLogin();
      }
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailIsTouched(true);
    setPasswordIsTouched(true);
    login();
  };

  return (
    <div className={styles.container} onClick={(e) => e.stopPropagation()}>
      <div className={styles.logo}>
        <UserIcon />
      </div>
      <div className={styles.form}>
        <form onSubmit={handleSubmit}>
          <FormInput
            label='E-mail'
            type='email'
            onChange={handleEmailChange}
            value={email}
            error={emailError}
          />
          <FormInput
            label='Password'
            type='password'
            onChange={handlePasswordChange}
            value={password}
            error={passwordError}
          />
          <Button type='submit' fullWidth>
            Login
          </Button>
        </form>
        <div className={styles.footer}>
          <span>Forgot password?</span>
          <span>User registration</span>
        </div>
      </div>
      <div className={styles.closeButton} onClick={onClose}>
        <CloseIcon />
      </div>
    </div>
  );
};

export { LoginForm };
