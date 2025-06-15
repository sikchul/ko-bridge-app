import { IonCol, IonGrid, IonRow } from '@ionic/react';
import type { DefaultComponentProps } from '@shared/types/props';

import type { handleSearchType } from './SearchBar';
import SearchBar from './SearchBar';
import styles from './SearchBarContainer.module.scss';

interface SearchBarContainerProps extends DefaultComponentProps {
  handleSearch: handleSearchType;
}

export default function SearchBarContainer({ children, handleSearch }: SearchBarContainerProps) {
  return (
    <IonGrid className="ion-no-padding">
      <IonRow className="ion-align-items-center">
        <IonCol>
          <SearchBar handleSearch={handleSearch} />
        </IonCol>
        {children && (
          <IonCol size="auto" className={styles.iconCol}>
            {children}
          </IonCol>
        )}
      </IonRow>
    </IonGrid>
  );
}
