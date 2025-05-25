import { IonContent, IonPage } from '@ionic/react';
import { HomeHeader } from '@widgets/header/home-header';

export default function Home() {
  return (
    <IonPage>
      <HomeHeader />
      <IonContent fullscreen>
        <div>
          <h1>Home</h1>
        </div>
      </IonContent>
    </IonPage>
  );
}
