import { useRouter } from 'next/router';
import { LoginData } from 'pages/api/login/login.type';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useStore } from 'store';
import shallow from 'zustand/shallow';

const UseLoginHook = () => {
  const { isLoggedIn, player, setLoginStatus, setPlayer } = useStore(
    (store) => ({
      isLoggedIn: store.isLoggedIn,
      player: store.player,
      setLoginStatus: store.setLoginStatus,
      setPlayer: store.setPlayer,
    }),
    shallow
  );

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn && player !== undefined) {
      router.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn, player]);

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
