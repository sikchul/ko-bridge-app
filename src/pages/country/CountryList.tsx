import { IonButton, IonContent, IonPage } from '@ionic/react';
import { ROUTE } from '@shared/constants/route';
import { SharedHeader } from '@widgets/header/shared-header';
import { type RouteComponentProps } from 'react-router-dom';

interface CountryListProps extends RouteComponentProps {}

export default function CountryList({ history }: CountryListProps) {
  return (
    <IonPage>
      <SharedHeader title={ROUTE.COUNTRIES.headerTitle} />
      <IonContent fullscreen>
        <div>CountryList</div>
        <IonButton onClick={() => history.push('/countries/1')}>Go to CountryInfoList</IonButton>
      </IonContent>
    </IonPage>
  );
}
