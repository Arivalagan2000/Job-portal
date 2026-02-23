/**
 * Application Configuration
 */

export const APP_CONFIG = {
  // API Configuration
  API: {
    // Set to 'mock' to use local mock data, 'live' to use JSONFakery API
    MODE: 'live' as 'mock' | 'live',
    BASE_URL: 'https://jsonfakery.com/jobs',
  },

  // Pagination Configuration
  PAGINATION: {
    ITEMS_PER_PAGE: 12,
    // Use 'standard' for regular pagination, 'infinite' for infinite scroll API
    TYPE: 'standard' as 'standard' | 'infinite',
  },

  // Feature Flags
  FEATURES: {
    ENABLE_DARK_MODE: true,
    ENABLE_CSV_EXPORT: true,
    ENABLE_PDF_EXPORT: true,
    ENABLE_INFINITE_SCROLL: true,
    ENABLE_FILTERS: true,
    ENABLE_SORTING: true,
  },

  // UI Configuration
  UI: {
    SHOW_SKELETON_LOADING: true,
    DEFAULT_VIEW_MODE: 'grid' as 'grid' | 'list',
  },
};

/**
 * Helper function to check if app is in development mode
 */
export const isDevelopment = () => {
  return import.meta.env.DEV;
};

/**
 * Helper function to get API mode
 */
export const getAPIMode = () => {
  return APP_CONFIG.API.MODE;
};

/**
 * Helper function to check if using live API
 */
export const isLiveAPI = () => {
  return APP_CONFIG.API.MODE === 'live';
};
