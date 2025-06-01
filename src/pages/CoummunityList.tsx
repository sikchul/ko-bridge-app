import { IonPage, IonContent } from '@ionic/react';
import { ROUTE } from '@shared/constants/route';
import SharedHeader from '@widgets/header/shared-header/ui/SharedHeader';

interface CommunityListProps {}

export default function CommunityList({}: CommunityListProps) {
  return (
    <IonPage>
      <SharedHeader title={ROUTE.COMMUNITIES.headerTitle} />
      <IonContent fullscreen>
        <div>CommunityList</div>
      </IonContent>
    </IonPage>
  );
}
