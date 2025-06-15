import { IonCardTitle } from '@ionic/react';
import type { ComponentProps } from 'react';

interface CardTitleProps extends ComponentProps<typeof IonCardTitle> {}

export default function CardTitle({ children, ...props }: CardTitleProps) {
  return <IonCardTitle {...props}>{children}</IonCardTitle>;
}
