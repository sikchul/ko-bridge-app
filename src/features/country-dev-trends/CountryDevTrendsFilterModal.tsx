import {
  useFetchDevTrendCountryList,
  useFetchDevTrendPublishedDateList,
  useFetchDevTrendSectorList
} from '@entities/country-dev-trends/hooks';
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonRow,
  IonSelect,
  IonSelectOption
} from '@ionic/react';
import { useState } from 'react';

import styles from './CountryDevTrendsFilterModal.module.scss';

export type FilterParams = {
  country: string;
  year: string;
  sector: string;
};

export interface CountryDevTrendsFilterModalProps {
  country: string;
  year: string;
  sector: string;
  onDismiss: (params: FilterParams) => void;
}

export default function CountryDevTrendsFilterModal({
  country,
  year,
  sector,
  onDismiss
}: CountryDevTrendsFilterModalProps) {
  const [selectedCountry, setSelectedCountry] = useState<string>(country || '');
  const [selectedYear, setSelectedYear] = useState<string>(year || '');
  const [selectedSector, setSelectedSector] = useState<string>(sector || '');

  const { data: devTrendCountryList } = useFetchDevTrendCountryList();
  const { data: devTrendPublishedDateList } = useFetchDevTrendPublishedDateList();
  const { data: devTrendSectorList } = useFetchDevTrendSectorList();

  const handleApply = () => {
    onDismiss({
      country: selectedCountry || '',
      year: selectedYear || '',
      sector: selectedSector || ''
    });
  };

  return (
    <>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow className="ion-margin-bottom">
            <IonCol>
              <IonSelect
                label="국가"
                labelPlacement="stacked"
                placeholder="모든 국가"
                value={selectedCountry}
                onIonChange={(e) => setSelectedCountry(e.detail.value)}
                interface="action-sheet"
                className="custom-select"
              >
                {devTrendCountryList?.map((item) => {
                  return (
                    <IonSelectOption key={item} value={item}>
                      {item}
                    </IonSelectOption>
                  );
                })}
              </IonSelect>
            </IonCol>
          </IonRow>
          <IonRow className="ion-margin-bottom">
            <IonCol>
              <IonSelect
                label="등록연도"
                labelPlacement="stacked"
                placeholder="모든 등록연도"
                value={selectedYear}
                onIonChange={(e) => setSelectedYear(e.detail.value)}
                interface="action-sheet"
                className={styles.customSelect}
              >
                {devTrendPublishedDateList?.map((item) => {
                  const transformedItem = item?.toString() || '';
                  return (
                    <IonSelectOption key={transformedItem} value={transformedItem}>
                      {transformedItem}
                    </IonSelectOption>
                  );
                })}
              </IonSelect>
            </IonCol>
          </IonRow>
          <IonRow className="ion-margin-bottom">
            <IonCol>
              <IonSelect
                label="분야"
                labelPlacement="stacked"
                placeholder="모든 분야"
                value={selectedSector}
                onIonChange={(e) => setSelectedSector(e.detail.value)}
                interface="action-sheet"
                className="custom-select"
              >
                {devTrendSectorList?.map((item) => {
                  return (
                    <IonSelectOption key={item} value={item}>
                      {item}
                    </IonSelectOption>
                  );
                })}
              </IonSelect>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton expand="block" onClick={handleApply}>
                적용하기
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </>
  );
}
