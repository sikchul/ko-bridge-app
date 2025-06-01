import { CategoryCardList } from '@features/category';
import { IonPage } from '@ionic/react';
import { ROUTE } from '@shared/constants/route';
import { SharedIonContent } from '@widgets/content/shared-content';
import { SharedHeader } from '@widgets/header/shared-header';
import { type RouteComponentProps } from 'react-router-dom';

interface CategoryListProps extends RouteComponentProps {}

export default function CategoryList({}: CategoryListProps) {
  return (
    <IonPage>
      <SharedHeader title={ROUTE.CATEGORIES.headerTitle} />
      <SharedIonContent>
        <CategoryCardList />
      </SharedIonContent>
    </IonPage>
  );
}
