import { useState } from 'react';
import { Button } from './components/Button/Button';
import { Counter } from './components/Counter/Counter';
import { LoginForm } from './components/LoginForm/LoginForm';
import { Modal } from './components/Modal/Modal';
import { LoginResult } from './components/LoginResult/LoginResult';

function App() {
  const [successLogin, setSuccessLogin] = useState(
    localStorage.getItem('succesLogin') || 0
  );
  const [errorLogin, setErrorLogin] = useState(
    localStorage.getItem('errorLogin') || 0
  );
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [loginResultModalIsVisible, setLoginResultModalIsVisible] =
    useState(false);
  const [loginResult, setLoginResult] = useState(false);

  const showResultModal = () => {
    setLoginResultModalIsVisible(true);
    setTimeout(() => {
      setModalIsVisible(false);
      setLoginResultModalIsVisible(false);
    }, 3000);
  };

  const successLoginHandler = () => {
    setSuccessLogin(+successLogin + 1);
    localStorage.setItem('succesLogin', (+successLogin + 1).toString());
    setLoginResult(true);
    showResultModal();
  };

  const errorLoginHandler = () => {
    setErrorLogin(+errorLogin + 1);
    localStorage.setItem('errorLogin', (+errorLogin + 1).toString());
    setLoginResult(false);
    showResultModal();
  };

  return (
    <div className='App'>
      <Button onClick={() => setModalIsVisible(true)}>Login</Button>
      <Counter count={+successLogin} />
      <Counter count={+errorLogin} negative />
      {modalIsVisible && (
        <Modal onClose={() => setModalIsVisible(false)}>
          {loginResultModalIsVisible ? (
            <LoginResult success={loginResult} />
          ) : (
            <LoginForm
              successLogin={successLoginHandler}
              errorLogin={errorLoginHandler}
              onClose={() => setModalIsVisible(false)}
            />
          )}
        </Modal>
      )}
    </div>
  );
}

export default App;
