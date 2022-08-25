import { FunctionComponent } from 'react';
import useAuthHook from 'components/LoginForm/useAuthHook';

const Logout: FunctionComponent = () => {
  const { logoutHandler } = useAuthHook();

  return (
    <button
      type="submit"
      onClick={() => logoutHandler()}
      className="text-white btn btn-sm btn-primary"
    >
      Logout
    </button>
  );
};
export default Logout;
