import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useStore } from 'store';
import { loginCall, logoutCall } from 'utils/apiHelpers';

const useAuthHook = () => {
  const isLoggedIn = useStore((state) => state.isLoggedIn);
  const player = useStore((state) => state.player);
  const setLoginStatus = useStore((state) => state.setLoginStatus);
  const setPlayer = useStore((state) => state.setPlayer);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const loginResponse = await loginCall(username, password);

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
    const logoutResponse = await logoutCall(player!);
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
export default useAuthHook;
