import { IonItem, IonList, IonSkeletonText } from '@ionic/react';

import styles from './CardListSkeleton.module.scss';

export default function CardListSkeleton() {
  const items = Array.from({ length: 3 });
  return (
    <IonList className={`${styles['card-list']} ion-no-padding`} lines="none">
      {items.map((_, index) => (
        <IonItem key={index} className={`${styles['card-list-item']}`}>
          <IonSkeletonText className={`${styles['card-list-skeleton']}`} animated />
        </IonItem>
      ))}
    </IonList>
  );
}
