import { IonButton, IonChip, IonCol, IonGrid, IonIcon, IonRow, IonLabel } from '@ionic/react';
import type { CountryDevTrendDB } from '@shared/api/supabase';
import {
  CardSubtitle,
  CardTitle,
  CardHeader,
  CardBox,
  CardContent,
  CardItem,
  CardList
} from '@shared/ui/card';
import { CardListSkeleton } from '@shared/ui/skeleton';
import { chevronExpandOutline } from 'ionicons/icons';

import styles from './CountryDevTrendsContainer.module.scss';

interface CountryDevTrendsContainerProps {
  devTrendItems: CountryDevTrendDB[];
  isDevTrendListLoading: boolean;
  isFetchingNextPage: boolean;
  inViewRef: (node?: Element | null) => void;
  handleItemClick: (item: CountryDevTrendDB) => void;
}

export default function CountryDevTrendsContainer({
  devTrendItems,
  isDevTrendListLoading,
  isFetchingNextPage,
  inViewRef,
  handleItemClick
}: CountryDevTrendsContainerProps) {
  if (isDevTrendListLoading) {
    return <CardListSkeleton />;
  }

  return (
    <IonGrid className="ion-no-padding">
      <IonRow>
        <IonCol>
          <CardList lines="none" className="ion-no-padding">
            {devTrendItems.map((item, index) => {
              const {
                country = '',
                country_name = '',
                sector = '',
                published_date = '-',
                source = '-'
              } = item;
              const isLast = index === devTrendItems.length - 1;
              return (
                <CardItem key={item.country_dev_trend_id}>
                  <CardBox
                    ref={isLast && !isFetchingNextPage ? inViewRef : null}
                    onClick={() => handleItemClick(item)}
                  >
                    <CardHeader>
                      <IonGrid>
                        <IonRow>
                          <IonCol>
                            <IonChip>{country || country_name}</IonChip>
                          </IonCol>
                          <IonCol>
                            <IonChip>{sector}</IonChip>
                          </IonCol>
                        </IonRow>
                      </IonGrid>
                      <CardTitle>{item.title}</CardTitle>
                      <CardSubtitle>{`${source} | ${published_date}`}</CardSubtitle>
                    </CardHeader>
                    <CardContent>
                      <div className={styles['card-content-inner-wrapper']}>
                        <IonLabel>{item.content_1}</IonLabel>
                        <IonLabel>{item.content_2}</IonLabel>
                        <IonLabel>{item.content_3}</IonLabel>
                        <IonLabel>{item.content_4}</IonLabel>
                        <IonLabel>{item.content_5}</IonLabel>
                        <div className={styles['wrapper-inner-bottom-bar']} />
                      </div>
                    </CardContent>
                    <IonGrid>
                      <IonRow>
                        <IonCol>
                          <IonButton
                            expand="block"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleItemClick(item);
                            }}
                          >
                            <IonIcon
                              slot="start"
                              ios={chevronExpandOutline}
                              md={chevronExpandOutline}
                            />
                            자세히 보기
                          </IonButton>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </CardBox>
                </CardItem>
              );
            })}
          </CardList>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
}
