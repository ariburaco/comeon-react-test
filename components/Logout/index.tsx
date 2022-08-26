import useAuthHook from 'hooks/useAuthHook';
import { FunctionComponent } from 'react';

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
