import { IonCol, IonGrid, IonRow, IonTitle, IonIcon } from '@ionic/react';
import { earthOutline } from 'ionicons/icons';

import styles from './HomeHeaderTitle.module.scss';

export default function HomeHeaderTitle() {
  return (
    <IonGrid className="ion-no-padding">
      <IonRow className="ion-align-items-center">
        <IonCol size="auto" className="ion-no-padding ion-padding-start">
          <IonIcon icon={earthOutline} className={styles.icon} />
        </IonCol>
        <IonCol className="ion-no-padding">
          <IonTitle size="small" className={`${styles.title} ion-no-padding`}>
            KOICA Bridge
          </IonTitle>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
}
