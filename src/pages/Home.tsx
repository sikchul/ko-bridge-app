import { IonContent, IonPage } from '@ionic/react';
import { HomeHeader } from '@widgets/header/home-header';
import { type RouteComponentProps } from 'react-router-dom';

interface HomeProps extends RouteComponentProps {}

export default function Home({}: HomeProps) {
  return (
    <IonPage>
      <HomeHeader />
      <IonContent fullscreen>
        <div>Home</div>
      </IonContent>
    </IonPage>
  );
}
