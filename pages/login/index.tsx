import Header from 'components/Header';
import LoginForm from 'components/LoginForm';
import Head from 'next/head';
import { FunctionComponent } from 'react';

const LoginPage: FunctionComponent = () => {
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
      <div className="container flex flex-col items-center justify-start gap-2 mx-auto">
        <Header />
        <div className="flex justify-center w-3/4 py-20 mx-auto bg-white rounded-lg">
          <LoginForm />
        </div>
      </div>
    </>
  );
};
export default LoginPage;
