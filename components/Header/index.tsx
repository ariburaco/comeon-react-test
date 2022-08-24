import { FunctionComponent } from 'react';
import Image from 'next/image';

const Header: FunctionComponent = () => {
  return (
    <div className="md:w-[780px] md:h-[146px] mt-10">
      <Image
        width={780}
        height={146}
        src="/images/logo.svg"
        alt="Comeon Logo"
        priority
      />
    </div>
  );
};
export default Header;
