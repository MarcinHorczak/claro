/**
 * Check if the application is running in production environment
 */
export const isProduction = (): boolean => {
  return process.env.NODE_ENV === "production";
};

/**
 * Check if the application is running in development environment
 */
export const isDevelopment = (): boolean => {
  return process.env.NODE_ENV === "development";
};

/**
 * Get active filter condition based on environment
 * In production: only active items
 * In development: all items
 */
export const getActiveFilter = () => {
  return isDevelopment() ? {} : { active: true };
};
