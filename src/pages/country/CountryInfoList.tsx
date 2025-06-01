import { IonPage, IonContent, IonButton } from '@ionic/react';
import { COUNTRY_INFO_DATA, ROUTE } from '@shared/constants/route';
import { SharedHeader } from '@widgets/header/shared-header';
import { type RouteComponentProps } from 'react-router-dom';

interface CountryInfoListProps extends RouteComponentProps {}

export default function CountryInfoList({ history, match }: CountryInfoListProps) {
  return (
    <IonPage>
      <SharedHeader title={ROUTE.COUNTRY_INFO_ITEMS.headerTitle} />
      <IonContent fullscreen>
        <div>CountryInfoList</div>
        <IonButton onClick={() => history.push(match.url + COUNTRY_INFO_DATA[0].path)}>
          Go to CountryInfo
        </IonButton>
      </IonContent>
    </IonPage>
  );
}
