import React from 'react';
import { ReactComponent as Avocado } from 'assets/avatars/avocado.svg';
import { ReactComponent as Cloud } from 'assets/avatars/cloud.svg';
import { ReactComponent as Coffee } from 'assets/avatars/coffee.svg';
import { ReactComponent as DrawLove } from 'assets/avatars/draw-love.svg';
import { ReactComponent as Sloth } from 'assets/avatars/sloth.svg';

export type SvgAvatarIcons =
  | 'avocado'
  | 'cloud'
  | 'coffee'
  | 'draw-love'
  | 'sloth';

interface SvgAvatarProps extends React.SVGProps<SVGSVGElement> {
  icon: SvgAvatarIcons;
}

export function SvgAvatar({ icon, ...props }: SvgAvatarProps) {
  switch (icon) {
    case 'avocado':
      return <Avocado {...props} />;
    case 'cloud':
      return <Cloud {...props} />;
    case 'coffee':
      return <Coffee {...props} />;
    case 'draw-love':
      return <DrawLove {...props} />;
    case 'sloth':
      return <Sloth {...props} />;
    default:
      return null;
  }
}
