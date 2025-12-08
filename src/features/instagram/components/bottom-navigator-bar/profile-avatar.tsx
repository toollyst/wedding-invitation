import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { ComponentProps } from 'react';

const AVATAR_BORDER_WIDTH = 2;

type ProfileAvatarProps = ComponentProps<typeof Avatar> & {
  size?: number;
  selected?: boolean;
};

export function ProfileAvatar({
  size = 24,
  selected,
  ...props
}: ProfileAvatarProps) {
  return (
    <Avatar
      {...props}
      className={cn(
        'boder border-2',
        selected ? 'border-foreground' : 'border-transparent',
        props.className,
      )}
      style={{
        width: size + AVATAR_BORDER_WIDTH,
        height: size + AVATAR_BORDER_WIDTH,
      }}
    >
      <AvatarImage src={'/images/wedding10.jpg'} />
    </Avatar>
  );
}
