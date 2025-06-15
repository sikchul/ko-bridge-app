import { IonCardSubtitle } from '@ionic/react';
import type { ComponentProps } from 'react';

interface CardSubtitleProps extends ComponentProps<typeof IonCardSubtitle> {}

export default function CardSubtitle({ children, ...props }: CardSubtitleProps) {
  return <IonCardSubtitle {...props}>{children}</IonCardSubtitle>;
}
