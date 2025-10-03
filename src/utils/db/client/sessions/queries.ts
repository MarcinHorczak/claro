import { cookies } from "next/headers";
import { getActiveFilter } from "@utils/environment";
import { createClient } from "../../server";
import { Session, SessionCategory } from "./sessions.types";

type GetSessionCategoriesResponse =
  | { data: SessionCategory[]; error: null }
  | { data: null; error: string };

export const getSessionCategories =
  async (): Promise<GetSessionCategoriesResponse> => {
    try {
      const cookieStore = cookies();
      const supabase = createClient(cookieStore);
      const activeFilter = getActiveFilter();

      let query = supabase
        .from("session_categories")
        .select(
          `
        *,
        sessions (*)
      `,
        )
        .order("created_at", { ascending: false });

      // Apply active filter to categories if in production
      if (Object.keys(activeFilter).length > 0) {
        query = query.eq("active", activeFilter.active);
      }

      const { data, error } = await query;

      if (error) {
        return { data: null, error: error.message };
      }

      // Filter sessions within categories if in production
      let filteredData = data as SessionCategory[];
      if (Object.keys(activeFilter).length > 0) {
        filteredData = filteredData.map((category) => ({
          ...category,
          sessions:
            category.sessions?.filter((session) => session.active) || [],
        }));
      }

      return { data: filteredData, error: null };
    } catch (error) {
      return {
        data: null,
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  };

export const getSession = async (key: string) => {
  try {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const activeFilter = getActiveFilter();

    let query = supabase.from("sessions").select("*").eq("key", key);

    // Apply active filter if in production
    if (Object.keys(activeFilter).length > 0) {
      query = query.eq("active", activeFilter.active);
    }

    const { data, error } = await query.single();

    if (error) {
      return { data: null, error: error.message };
    }

    return { data: data as Session, error: null };
  } catch (error) {
    return {
      data: null,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
};
