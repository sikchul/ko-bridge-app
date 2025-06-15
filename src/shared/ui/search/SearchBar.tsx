import { IonSearchbar } from '@ionic/react';

import styles from './SearchBar.module.scss';

export type handleSearchType = (value: string | null | undefined) => void;

interface SearchBarProps {
  handleSearch?: handleSearchType;
}

export default function SearchBar({ handleSearch }: SearchBarProps) {
  return (
    <IonSearchbar
      placeholder="검색어를 입력해주세요."
      animated={true}
      showCancelButton="never"
      showClearButton="always"
      inputMode="search"
      className={`${styles['search-bar']} ion-no-padding`}
      onIonChange={(e) => {
        if (handleSearch) {
          handleSearch(e.detail.value);
        }
      }}
      onIonClear={() => {
        if (handleSearch) {
          handleSearch(null);
        }
      }}
    />
  );
}
