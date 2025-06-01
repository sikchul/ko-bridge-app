import { IonContent } from '@ionic/react';
import type { DefaultComponentProps } from '@shared/types/props';
import type { ComponentProps } from 'react';

import styles from './SharedIonContent.module.scss';

interface SharedIonContentProps extends DefaultComponentProps, ComponentProps<typeof IonContent> {}

export default function SharedIonContent({ children, ...props }: SharedIonContentProps) {
  return (
    <IonContent className={styles.content} fullscreen {...props}>
      {children}
    </IonContent>
  );
}
