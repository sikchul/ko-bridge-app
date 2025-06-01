import { IonPage } from '@ionic/react';
import { ROUTE } from '@shared/constants/route';
import { SharedIonContent } from '@widgets/content/shared-content';
import { SharedHeader } from '@widgets/header/shared-header';

interface CommunityListProps {}

export default function CommunityList({}: CommunityListProps) {
  return (
    <IonPage>
      <SharedHeader title={ROUTE.COMMUNITIES.headerTitle} />
      <SharedIonContent>
        <div>CommunityList</div>
      </SharedIonContent>
    </IonPage>
  );
}
