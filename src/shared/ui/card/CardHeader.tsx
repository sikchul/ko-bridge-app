import { IonCardHeader } from '@ionic/react';
import type { ComponentProps } from 'react';

interface CardHeaderProps extends ComponentProps<typeof IonCardHeader> {}

export default function CardHeader({ children, ...props }: CardHeaderProps) {
  return <IonCardHeader {...props}>{children}</IonCardHeader>;
}
