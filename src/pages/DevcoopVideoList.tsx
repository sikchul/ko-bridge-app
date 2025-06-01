import { IonPage } from '@ionic/react';
import { ROUTE } from '@shared/constants/route';
import { SharedIonContent } from '@widgets/content/shared-content';
import { SharedHeader } from '@widgets/header/shared-header';

interface DevcoopVideoListProps {}

export default function DevcoopVideoList({}: DevcoopVideoListProps) {
  return (
    <IonPage>
      <SharedHeader title={ROUTE.VIDEOS.headerTitle} />
      <SharedIonContent>
        <div>DevcoopVideoList</div>
      </SharedIonContent>
    </IonPage>
  );
}
