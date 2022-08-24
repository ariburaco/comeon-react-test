import { FunctionComponent } from 'react';
import {
  UserIcon,
  LockClosedIcon,
  ChevronRightIcon,
} from '@heroicons/react/outline';
import UseLoginHook from './useAuthHook';

const LoginForm: FunctionComponent = () => {
  const {
    username,
    password,
    handleUsernameChange,
    handlePasswordChange,
    handleSubmit,
  } = UseLoginHook();
  return (
    <form className="flex flex-col items-center justify-center gap-6">
      <label
        htmlFor="username"
        className="relative block text-gray-400 focus-within:text-gray-600"
      >
        <UserIcon className="absolute w-5 h-5 -translate-y-1/2 top-1/2 right-2 z-99" />
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleUsernameChange}
          autoComplete="username"
          placeholder="Username"
          className="py-2 pl-4 pr-8 bg-white rounded-sm border-[1px] border-base-100/40 focus:border-base-100/80 input-sm outline-none"
        />
      </label>

      <label
        htmlFor="password"
        className="relative block text-gray-400 focus-within:text-gray-600"
      >
        <LockClosedIcon className="absolute w-5 h-5 -translate-y-1/2 top-1/2 right-2 z-99" />
        <input
          type="password"
          name="password"
          value={password}
          autoComplete="current-password"
          onChange={handlePasswordChange}
          placeholder="Password"
          className="max-w-lg py-2 pl-4 pr-8 bg-white rounded-sm border-[1px] border-base-100/40 focus:border-base-100/80 input-sm outline-none"
        />
      </label>
      <button
        type="submit"
        onClick={handleSubmit}
        className="flex items-center w-full gap-2 px-10 font-bold capitalize transition-all hover:text-white btn btn-sm btn-primary"
      >
        Login
        <ChevronRightIcon className="w-4 h-4" />
      </button>
    </form>
  );
};
export default LoginForm;
