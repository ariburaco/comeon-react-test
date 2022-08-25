import Logout from 'components/Logout';
import Image from 'next/image';
import { FunctionComponent } from 'react';
import { PlayerinfoProps } from './playerinfo.type';

const Playerinfo: FunctionComponent<PlayerinfoProps> = ({ player }) => {
  return (
    <div className="flex flex-col items-center justify-start gap-2 md:flex-row">
      <div className="flex flex-col items-center gap-4 md:flex-row">
        <Image
          priority
          className="rounded-full"
          src={player!.avatar}
          alt={player!.name}
          width={50}
          height={50}
        />
        <div className="flex flex-col items-start justify-start">
          <h1 className="text-sm font-bold md:text-md">{player!.name}</h1>
          <p className="text-xs font-semibold text-gray-500 md:text-sm">
            {player!.event}
          </p>
        </div>
        <Logout />
      </div>
    </div>
  );
};
export default Playerinfo;
