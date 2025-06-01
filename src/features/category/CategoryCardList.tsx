import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonIcon,
  IonRow,
  useIonRouter
} from '@ionic/react';
import { CATEGORY_INFO_DATA, CATEGORY_KEYS } from '@shared/constants/route';
import { book, school, newspaperOutline, globeOutline, businessOutline } from 'ionicons/icons';
import { useMemo } from 'react';

import styles from './CategoryCardList.module.scss';

export default function CategoryCardList() {
  const router = useIonRouter();
  const categoryItems = useMemo(() => {
    return CATEGORY_INFO_DATA.map((category) => {
      let icon = newspaperOutline;
      switch (category.key) {
        case CATEGORY_KEYS.COUNTRY_DEV_TRENDS:
          icon = newspaperOutline;
          break;
        case CATEGORY_KEYS.VOLUNTEER_GUIDES:
          icon = book;
          break;
        case CATEGORY_KEYS.DISPATCH_AGENCIES:
          icon = globeOutline;
          break;
        case CATEGORY_KEYS.GLOBAL_TRAINING:
          icon = school;
          break;
        case CATEGORY_KEYS.OVERSEAS_OFFICES:
          icon = businessOutline;
          break;
      }
      return {
        ...category,
        icon
      };
    });
  }, []);
  return (
    <IonGrid className="ion-no-padding">
      <IonRow>
        {categoryItems.map((category) => (
          <IonCol className="ion-no-padding" key={category.path} size="12" sizeSm="6">
            <IonCard className={styles.card} button onClick={() => router.push(category.path)}>
              <IonCardHeader className="ion-text-center">
                <IonIcon icon={category.icon} className={styles.icon} />
                <IonCardTitle className="ion-padding-top">{category.headerTitle}</IonCardTitle>
              </IonCardHeader>
            </IonCard>
          </IonCol>
        ))}
      </IonRow>
    </IonGrid>
  );
}
