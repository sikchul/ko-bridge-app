export const ROUTE = {
  ROOT: { path: '/' },
  HOME: { footerLabel: '홈', value: 'home', path: '/home' },
  COUNTRIES: {
    headerTitle: '국가 정보',
    footerLabel: '국가별 정보',
    value: 'countries',
    path: '/countries'
  },
  COUNTRY_INFO_ITEMS: { headerTitle: '국가별 정보', path: '/countries/:countryId' },
  COUNTRY_INFO_ITEM_CONTENT: { path: '/countries/:countryId/:infoId' },
  VIDEOS: { headerTitle: '개발협력 영상', footerLabel: '영상', value: 'videos', path: '/videos' },
  COMMUNITIES: {
    headerTitle: '현장 스토리',
    footerLabel: '커뮤니티',
    value: 'communities',
    path: '/communities'
  }
};

export const COUNTRY_INFO_DATA = [{ headerTitle: '개발 협력동향', path: '/country-dev-trends' }];
