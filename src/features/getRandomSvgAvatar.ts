import Avocado from 'assets/avatars/avocado.svg';
import Cloud from 'assets/avatars/cloud.svg';
import Coffee from 'assets/avatars/coffee.svg';
import DrawLove from 'assets/avatars/draw-love.svg';
import Sloth from 'assets/avatars/sloth.svg';
import { ReactComponent as AvocadoRC } from 'assets/avatars/avocado.svg';
import { ReactComponent as CloudRC } from 'assets/avatars/cloud.svg';
import { ReactComponent as CoffeeRC } from 'assets/avatars/coffee.svg';
import { ReactComponent as DrawLoveRC } from 'assets/avatars/draw-love.svg';
import { ReactComponent as SlothRC } from 'assets/avatars/sloth.svg';
import { SvgAvatarIcons } from 'shared/ui/icons/SvgAvatar';

const icons = ['avocado', 'cloud', 'coffee', 'draw-love', 'sloth'];
export const getRandomSvgAvatar = () => {
  const index = Math.floor(Math.random() * 5);
  return icons[index] as SvgAvatarIcons;
};

const paths = [Avocado, Cloud, Coffee, DrawLove, Sloth];
export const getRandomSvgPath = () => {
  const index = Math.floor(Math.random() * 5);
  return paths[index];
};

const RC = [AvocadoRC, CloudRC, CoffeeRC, DrawLoveRC, SlothRC];
export const getRandomSvgAsRCAvatar = () => {
  const index = Math.floor(Math.random() * 5);
  return RC[index];
}
