export const getData = async <T>(
  endpointName: string,
  populate?: string,
): Promise<T[]> => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/${endpointName}?${populate ?? ""}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const json = await response.json();
    return json.data as T[];
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
};
