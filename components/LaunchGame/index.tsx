import { FunctionComponent } from 'react';

interface LaunchGameProps {
  src: string;
}

const LaunchGame: FunctionComponent<LaunchGameProps> = ({ src }) => {
  return <iframe src={src} title="game" className="w-full h-full" />;
};
export default LaunchGame;
