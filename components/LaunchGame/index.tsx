import { FunctionComponent } from 'react';
import { LaunchGameProps } from './launchgame.type';

const LaunchGame: FunctionComponent<LaunchGameProps> = ({ src }) => {
  return <iframe src={src} title="game" className="w-full h-full" />;
};
export default LaunchGame;
