import { IonPage } from '@ionic/react';
import { SharedIonContent } from '@widgets/content/shared-content';
import { HomeHeader } from '@widgets/header/home-header';
import { type RouteComponentProps } from 'react-router-dom';

interface HomeProps extends RouteComponentProps {}

export default function Home({}: HomeProps) {
  return (
    <IonPage>
      <HomeHeader />
      <SharedIonContent>
        <div>Home</div>
      </SharedIonContent>
    </IonPage>
  );
}
