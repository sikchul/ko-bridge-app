import { IonItem } from '@ionic/react';
import { forwardRef } from 'react';
import type { ComponentProps } from 'react';

import styles from './CardItem.module.scss';

interface CardItemProps extends ComponentProps<typeof IonItem> {}

const CardItem = forwardRef<HTMLIonItemElement, CardItemProps>(({ children, ...props }, ref) => {
  return (
    <IonItem ref={ref} className={styles['card-item']} {...props}>
      {children}
    </IonItem>
  );
});

CardItem.displayName = 'CardItem';

export default CardItem;
