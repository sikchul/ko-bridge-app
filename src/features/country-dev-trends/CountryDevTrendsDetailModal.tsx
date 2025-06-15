import {
  IonButton,
  IonButtons,
  IonChip,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonRow,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import type { CountryDevTrendDB } from '@shared/api/supabase';

export interface CountryDevTrendsDetailModalProps {
  selectedItem: CountryDevTrendDB | null;
  onDismiss: () => void;
}

export default function CountryDevTrendsDetailModal({
  selectedItem,
  onDismiss
}: CountryDevTrendsDetailModalProps) {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>상세보기</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={onDismiss}>닫기</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonChip>{selectedItem?.country || selectedItem?.country_name}</IonChip>
              <IonChip>{selectedItem?.sector}</IonChip>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <p>{`출처: ${selectedItem?.source} | 발행일: ${selectedItem?.published_date}`}</p>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <h2>상세 내용</h2>
              <p>{selectedItem?.content_1}</p>
              <p>{selectedItem?.content_2}</p>
              <p>{selectedItem?.content_3}</p>
              <p>{selectedItem?.content_4}</p>
              <p>{selectedItem?.content_5}</p>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </>
  );
}
