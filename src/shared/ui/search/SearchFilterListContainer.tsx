import { IonChip, IonCol, IonGrid, IonIcon, IonLabel, IonRow } from '@ionic/react';
import { closeOutline } from 'ionicons/icons';

type FilterItem = {
  label: string;
  value: string;
  onRemove: () => void;
};

interface SearchFilterListContainerProps {
  filterList: FilterItem[];
}

export default function SearchFilterListContainer({ filterList }: SearchFilterListContainerProps) {
  return (
    <IonGrid className="ion-no-padding">
      <IonRow>
        {filterList.map((item) => (
          <IonCol key={item.label}>
            <IonChip outline color="primary" onClick={item.onRemove}>
              <IonLabel>{item.label}</IonLabel>
              <IonIcon icon={closeOutline} />
            </IonChip>
          </IonCol>
        ))}
      </IonRow>
    </IonGrid>
  );
}
