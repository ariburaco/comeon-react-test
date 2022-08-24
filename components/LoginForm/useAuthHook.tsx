import { useRouter } from 'next/router';
import { LoginData } from 'pages/api/login/login.type';
import { useState, useEffect } from 'react';
import useAuthState from 'store';
import { toast } from 'react-hot-toast';

const UseLoginHook = () => {
  const isLoggedIn = useAuthState((state) => state.isLoggedIn);

  const player = useAuthState((state) => state.player);
  const setLoginStatus = useAuthState((state) => state.setLoginStatus);
  const setPlayer = useAuthState((state) => state.setPlayer);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/');
    }
  }, []);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const loginRequest = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const loginResponse = (await loginRequest.json()) as LoginData;
    if (loginResponse.status === 'success') {
      toast.success(`Welcome ${loginResponse.player!.name}`);
      setLoginStatus(true);
      setPlayer(loginResponse.player!);
      router.push('/');
    } else {
      toast.error(`Username or password is incorrect`);
      setLoginStatus(false);
      setPlayer(undefined);
    }
  };

  const logoutHandler = async () => {
    const logoutRequest = await fetch('/api/logout', {
      method: 'POST',
      body: JSON.stringify({
        username: player!.username,
      }),
    });

    const logoutResponse = (await logoutRequest.json()) as LoginData;
    if (logoutResponse.status === 'success') {
      toast.success(`Goodbye ${player!.name}`);
      setLoginStatus(false);
      setPlayer(undefined);
      router.push('/login');
    } else {
      toast.error(`Something went wrong while logging out`);
    }
  };

  return {
    username,
    password,
    handleUsernameChange,
    handlePasswordChange,
    handleSubmit,
    logoutHandler,
  };
};
export default UseLoginHook;
