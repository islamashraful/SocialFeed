export const pagination = <T>(
  database: T[],
  page: number,
  size: number,
): T[] => {
  const startIndex = (page - 1) * size;
  const endIndex = startIndex + size;
  if (startIndex >= database.length) {
    return [];
  }

  return database.slice(startIndex, endIndex);
};

export const USER_STORIES_PAGE_SIZE = 5;
export const USER_POSTS_PAGE_SIZE = 3;
