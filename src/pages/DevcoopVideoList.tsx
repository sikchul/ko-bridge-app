import { IonPage, IonContent } from '@ionic/react';
import { ROUTE } from '@shared/constants/route';
import SharedHeader from '@widgets/header/shared-header/ui/SharedHeader';

interface DevcoopVideoListProps {}

export default function DevcoopVideoList({}: DevcoopVideoListProps) {
  return (
    <IonPage>
      <SharedHeader title={ROUTE.VIDEOS.headerTitle} />
      <IonContent fullscreen>
        <div>DevcoopVideoList</div>
      </IonContent>
    </IonPage>
  );
}
