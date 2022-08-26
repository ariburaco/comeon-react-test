import {
  ChevronRightIcon,
  LockClosedIcon,
  UserIcon,
} from '@heroicons/react/outline';
import Header from 'components/Header';
import useAuthHook from 'hooks/useAuthHook';
import Head from 'next/head';
import { FunctionComponent } from 'react';

const LoginForm: FunctionComponent = () => {
  const {
    username,
    password,
    handleUsernameChange,
    handlePasswordChange,
    handleSubmit,
  } = useAuthHook();
  return (
    <>
      <Head>
        <title>Login | Comeon Group</title>
        <meta
          name="description"
          content="Comeon group assignment submission by ali burak ozden"
        />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center justify-start gap-2 px-4 mx-auto mb-10 md:px-10">
        <Header />
        <div className="flex justify-center w-full py-20 mx-auto bg-white rounded-lg md:w-3/4">
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
        </div>
      </div>
    </>
  );
};

export default LoginForm;
