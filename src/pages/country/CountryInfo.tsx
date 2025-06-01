import { IonPage, IonContent } from '@ionic/react';
import { ROUTE } from '@shared/constants/route';
import { SharedHeader } from '@widgets/header/shared-header';
import { type RouteComponentProps } from 'react-router-dom';

interface CountryInfoProps extends RouteComponentProps {}

export default function CountryInfo({ location }: CountryInfoProps) {
  console.log(location);
  return (
    <IonPage>
      <SharedHeader title={ROUTE.COUNTRY_INFO_ITEMS.headerTitle} />
      <IonContent fullscreen>
        <div>CountryInfo</div>
      </IonContent>
    </IonPage>
  );
}
