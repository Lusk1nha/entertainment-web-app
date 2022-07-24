import React from 'react';
import avatarMockupImage from '../../assets/image-avatar.png';

export function AvatarMockupIcon(props: React.ImgHTMLAttributes<HTMLImageElement>) {
   return (
      <img 
         {...props}
         src={avatarMockupImage}
      />
   );
}