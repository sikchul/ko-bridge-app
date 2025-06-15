import { IonButton, IonIcon } from '@ionic/react';
import { filterCircleOutline } from 'ionicons/icons';

import styles from './SearchFilterIconButton.module.scss';

interface SearchFilterIconButtonProps {
  handleFilter: () => void;
}

export default function SearchFilterIconButton({ handleFilter }: SearchFilterIconButtonProps) {
  return (
    <IonButton fill="clear" className={styles['search-filter-icon-button']} onClick={handleFilter}>
      <IonIcon icon={filterCircleOutline} className={styles['search-filter-icon']} />
    </IonButton>
  );
}
