import { IonBackButton, IonButtons, IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import { ROUTE } from '@shared/constants/route';
import { chevronBackOutline } from 'ionicons/icons';

import styles from './SharedHeader.module.scss';

interface SharedHeaderProps {
  title: string;
  defaultHref?: string;
}

export default function SharedHeader({ title, defaultHref = ROUTE.HOME.path }: SharedHeaderProps) {
  return (
    <IonHeader className="ion-no-border" collapse="fade">
      <IonToolbar className={styles.toolbar}>
        <IonButtons slot="start">
          <IonBackButton icon={chevronBackOutline} defaultHref={defaultHref} />
        </IonButtons>
        <IonTitle className={`${styles.title} ion-no-padding`} size="small">
          {title}
        </IonTitle>
      </IonToolbar>
    </IonHeader>
  );
}
