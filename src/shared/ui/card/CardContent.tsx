import { IonCardContent } from '@ionic/react';
import type { ComponentProps } from 'react';

interface CardContentProps extends ComponentProps<typeof IonCardContent> {}

export default function CardContent({ children, ...props }: CardContentProps) {
  return <IonCardContent {...props}>{children}</IonCardContent>;
}
