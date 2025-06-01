import { IonPage } from '@ionic/react';
import { CATEGORY_INFO_DATA } from '@shared/constants/route';
import { SharedIonContent } from '@widgets/content/shared-content';
import { SharedHeader } from '@widgets/header/shared-header';
import { useMemo } from 'react';
import { type RouteComponentProps } from 'react-router-dom';

interface CategoryInfoProps extends RouteComponentProps {}

export default function CategoryInfo({ location }: CategoryInfoProps) {
  const title = useMemo(() => {
    return (
      CATEGORY_INFO_DATA.find((category) => category.path === location.pathname)?.headerTitle || ''
    );
  }, [location.pathname]);
  return (
    <IonPage>
      <SharedHeader title={title} />
      <SharedIonContent>
        <div>CategoryInfo</div>
      </SharedIonContent>
    </IonPage>
  );
}
