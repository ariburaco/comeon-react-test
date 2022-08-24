import { useRouter } from 'next/router';
import { LoginData } from 'pages/api/login/login.type';
import { useEffect, useState } from 'react';
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
    if (isLoggedIn && player !== undefined) {
      setTimeout(() => {
        router.push('/');
      }, 1000);
    }
  }, [isLoggedIn, player, router]);

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
      toast.success(`Welcome ${loginResponse.player!.username}`);
      setLoginStatus(true);
      setPlayer(loginResponse.player!);
    } else {
      toast.error(`Username or password is incorrect`);
      setLoginStatus(false);
      setPlayer(undefined);
    }
  };

  return {
    username,
    password,
    handleUsernameChange,
    handlePasswordChange,
    handleSubmit,
  };
};
export default UseLoginHook;
