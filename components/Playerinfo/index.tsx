import { FunctionComponent } from 'react';
import Image from 'next/image';
import { PlayerinfoProps } from './playerinfo.type';

const Playerinfo: FunctionComponent<PlayerinfoProps> = ({ player }) => {
  return (
    <div className="flex flex-row items-center gap-4">
      <Image
        priority
        className="rounded-full"
        src={player!.avatar}
        alt={player!.name}
        width={50}
        height={50}
      />
      <div className="flex flex-col items-start justify-start text-base-300">
        <h1 className="font-bold text-md">{player!.name}</h1>
        <p className="text-sm font-semibold text-gray-500">{player!.event}</p>
      </div>
    </div>
  );
};
export default Playerinfo;
