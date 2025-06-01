export const ROUTE = {
  ROOT: { path: '/' },
  HOME: { footerLabel: '홈', value: 'home', path: '/home' },
  CATEGORIES: {
    headerTitle: '카테고리',
    footerLabel: '카테고리',
    value: 'categories',
    path: '/categories'
  },
  CATEGORY_INFO: { path: '/categories/:categoryId' },
  VIDEOS: { headerTitle: '개발협력 영상', footerLabel: '영상', value: 'videos', path: '/videos' },
  COMMUNITIES: {
    headerTitle: '현장 스토리',
    footerLabel: '커뮤니티',
    value: 'communities',
    path: '/communities'
  }
};

export const CATEGORY_KEYS = {
  COUNTRY_DEV_TRENDS: 'country-dev-trends',
  VOLUNTEER_GUIDES: 'volunteer-guides',
  DISPATCH_AGENCIES: 'dispatch-agencies',
  GLOBAL_TRAINING: 'global-training',
  OVERSEAS_OFFICES: 'overseas-offices'
};

export const CATEGORY_INFO_DATA = [
  {
    key: CATEGORY_KEYS.COUNTRY_DEV_TRENDS,
    headerTitle: '개발 협력동향',
    path: '/categories/country-dev-trends'
  },
  {
    key: CATEGORY_KEYS.VOLUNTEER_GUIDES,
    headerTitle: '봉사활동 안내서',
    path: '/categories/volunteer-guides'
  },
  {
    key: CATEGORY_KEYS.DISPATCH_AGENCIES,
    headerTitle: '파견기관 정보',
    path: '/categories/dispatch-agencies'
  },
  {
    key: CATEGORY_KEYS.GLOBAL_TRAINING,
    headerTitle: '연수 프로그램',
    path: '/categories/global-training'
  },
  {
    key: CATEGORY_KEYS.OVERSEAS_OFFICES,
    headerTitle: '해외사무소',
    path: '/categories/overseas-offices'
  }
];
