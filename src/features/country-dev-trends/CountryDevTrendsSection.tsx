import { useFetchDevTrendListInfinite } from '@entities/country-dev-trends/hooks';
import { IonCol, IonGrid, IonLabel, IonRow } from '@ionic/react';
import type { CountryDevTrendDB } from '@shared/api/supabase';
import useModal from '@shared/hooks/useModal';
import type { handleSearchType } from '@shared/ui/search/SearchBar';
import SearchBarContainer from '@shared/ui/search/SearchBarContainer';
import SearchFilterIconButton from '@shared/ui/search/SearchFilterIconButton';
import SearchFilterListContainer from '@shared/ui/search/SearchFilterListContainer';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useHistory, useLocation } from 'react-router-dom';

import CountryDevTrendsContainer from './CountryDevTrendsContainer';
import CountryDevTrendsDetailModal from './CountryDevTrendsDetailModal';
import type { FilterParams } from './CountryDevTrendsFilterModal';
import CountryDevTrendsFilterModal from './CountryDevTrendsFilterModal';

export default function CountryDevTrendsSection() {
  const triggetRef = useRef(false);
  const { replace } = useHistory();
  const { pathname, search } = useLocation();

  const query = useMemo(() => new URLSearchParams(search), [search]);
  const [appliedSearchTerm, setAppliedSearchTerm] = useState((query.get('q') as string) || '');
  const [selectedItem, setSelectedItem] = useState<CountryDevTrendDB | null>(null);

  const searchParams = useMemo(() => {
    const params: Record<string, string> = {};
    if (appliedSearchTerm) {
      params.searchTerm = appliedSearchTerm;
    }
    if (query.get('country')) {
      params.country = query.get('country') as string;
    }
    if (query.get('year')) {
      params.year = query.get('year') as string;
    }
    if (query.get('sector')) {
      params.sector = query.get('sector') as string;
    }
    return params;
  }, [appliedSearchTerm, query]);

  const {
    data: devTrendList,
    isLoading: isDevTrendListLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage
  } = useFetchDevTrendListInfinite(searchParams);

  const devTrendItems = useMemo(
    () => devTrendList?.pages.flatMap((page) => page.items) ?? [],
    [devTrendList]
  );
  const totalCount = useMemo(() => devTrendList?.pages[0]?.totalCount ?? 0, [devTrendList]);

  const { ref: inViewRef, inView } = useInView({
    threshold: 0.8
  });

  const filterList = useMemo(() => {
    const list = [];
    if (query.get('country')) {
      list.push({
        label: '국가',
        value: query.get('country') || '',
        onRemove: () => {
          const params = new URLSearchParams();
          if (appliedSearchTerm) {
            params.append('q', appliedSearchTerm);
          }
          if (query.get('year')) {
            params.append('year', query.get('year') as string);
          }
          if (query.get('sector')) {
            params.append('sector', query.get('sector') as string);
          }
          replace({
            pathname,
            search: params.toString()
          });
        }
      });
    }
    if (query.get('year')) {
      list.push({
        label: '연도',
        value: query.get('year') || '',
        onRemove: () => {
          const params = new URLSearchParams();
          if (appliedSearchTerm) {
            params.append('q', appliedSearchTerm);
          }
          if (query.get('country')) {
            params.append('country', query.get('country') as string);
          }
          if (query.get('sector')) {
            params.append('sector', query.get('sector') as string);
          }
          replace({
            pathname,
            search: params.toString()
          });
        }
      });
    }
    if (query.get('sector')) {
      list.push({
        label: '분야',
        value: query.get('sector') || '',
        onRemove: () => {
          const params = new URLSearchParams();
          if (appliedSearchTerm) {
            params.append('q', appliedSearchTerm);
          }
          if (query.get('year')) {
            params.append('year', query.get('year') as string);
          }
          replace({
            pathname,
            search: params.toString()
          });
        }
      });
    }
    return list;
  }, [query, appliedSearchTerm, replace, pathname]);

  const { present: presentDetailModal, dismiss: dismissDetailModal } = useModal(
    CountryDevTrendsDetailModal,
    {
      selectedItem,
      onDismiss: () => {
        dismissDetailModal();
        setSelectedItem(null);
      }
    }
  );

  const { present: presentFilterModal, dismiss: dismissFilterModal } = useModal(
    CountryDevTrendsFilterModal,
    {
      country: (query.get('country') as string) || '',
      year: (query.get('year') as string) || '',
      sector: (query.get('sector') as string) || '',
      onDismiss: ({ country, year, sector }: FilterParams) => {
        const params = new URLSearchParams();

        if (appliedSearchTerm) {
          params.append('q', appliedSearchTerm);
        }
        if (country) {
          params.append('country', country);
        }
        if (year) {
          params.append('year', year);
        }
        if (sector) {
          params.append('sector', sector);
        }

        replace({
          pathname,
          search: params.toString()
        });
        dismissFilterModal();
      }
    }
  );

  const handleSearchSubmit: handleSearchType = (value) => {
    const params = new URLSearchParams();

    if (value) {
      params.append('q', value);
    }
    if (query.get('country')) {
      params.append('country', query.get('country') as string);
    }
    if (query.get('year')) {
      params.append('year', query.get('year') as string);
    }
    if (query.get('sector')) {
      params.append('sector', query.get('sector') as string);
    }

    replace({
      pathname,
      search: params.toString()
    });
  };

  const handleFilterClick = () => {
    presentFilterModal({
      breakpoints: [0, 0.5],
      initialBreakpoint: 0.5,
      backdropBreakpoint: 0
    });
  };

  const handleItemClick = (item: CountryDevTrendDB) => {
    setSelectedItem(item);
    presentDetailModal({
      breakpoints: [0, 1],
      initialBreakpoint: 1,
      backdropBreakpoint: 0
    });
  };

  useEffect(() => {
    if (!inView) {
      triggetRef.current = false;
      return;
    }

    if (inView && !isFetchingNextPage && hasNextPage && !triggetRef.current) {
      triggetRef.current = true;
      fetchNextPage();
    }
  }, [inView, isFetchingNextPage, hasNextPage, fetchNextPage]);

  useEffect(() => {
    setAppliedSearchTerm(query.get('q') as string);
  }, [query]);

  return (
    <>
      <SearchBarContainer handleSearch={handleSearchSubmit}>
        <SearchFilterIconButton handleFilter={handleFilterClick} />
      </SearchBarContainer>
      {filterList.length > 0 && <SearchFilterListContainer filterList={filterList} />}
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonLabel>{`총 ${totalCount} 건의 검색 결과가 있습니다.`}</IonLabel>
          </IonCol>
        </IonRow>
      </IonGrid>
      <CountryDevTrendsContainer
        devTrendItems={devTrendItems}
        isDevTrendListLoading={isDevTrendListLoading}
        isFetchingNextPage={isFetchingNextPage}
        inViewRef={inViewRef}
        handleItemClick={handleItemClick}
      />
    </>
  );
}
