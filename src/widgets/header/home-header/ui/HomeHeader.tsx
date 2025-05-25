import { IonButton, IonButtons, IonHeader, IonIcon, IonToolbar } from '@ionic/react';
import { personCircle } from 'ionicons/icons';

import styles from './HomeHeader.module.scss';
import HomeHeaderTitle from './HomeHeaderTitle';

export default function HomeHeader() {
  return (
    <IonHeader className="ion-no-border" collapse="fade">
      <IonToolbar className={styles.scrolled}>
        <HomeHeaderTitle />
        <IonButtons slot="end">
          <IonButton color="primary" size="large">
            <IonIcon slot="icon-only" icon={personCircle} />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
}
