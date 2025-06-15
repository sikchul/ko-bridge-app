import { IonList } from '@ionic/react';
import type { ComponentProps } from 'react';

interface CardListProps extends ComponentProps<typeof IonList> {}

export default function CardList({ children, ...props }: CardListProps) {
  return <IonList {...props}>{children}</IonList>;
}
