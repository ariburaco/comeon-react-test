import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useStore } from 'store';
import { loginCall, logoutCall } from 'utils/apiHelpers';

const useAuthHook = () => {
  const player = useStore((state) => state.player);
  const setPlayer = useStore((state) => state.setPlayer);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
      setPlayer(loginResponse.player!, true);
    } else {
      toast.error(`Username or password is incorrect`);
      setPlayer(undefined, false);
    }
  };

  const logoutHandler = async () => {
    const logoutResponse = await logoutCall(player!);
    if (logoutResponse.status === 'success') {
      toast.success(`Goodbye ${player!.name}`);
      setPlayer(undefined, false);
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
