import { cookies } from "next/headers";
import { getActiveFilter } from "@utils/environment";
import { createClient } from "../../server";
import { Workshop } from "./workshops.types";

type GetWorkshopsResponse =
  | { data: Workshop[]; error: null }
  | { data: null; error: string };

type GetWorkshopResponse =
  | { data: Workshop; error: null }
  | { data: null; error: string };

export const getWorkshops = async (): Promise<GetWorkshopsResponse> => {
  try {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const activeFilter = getActiveFilter();

    let query = supabase.from("workshops").select("*");

    // Apply active filter if in production
    if (Object.keys(activeFilter).length > 0) {
      query = query.eq("active", activeFilter.active);
    }

    const { data, error } = await query;

    if (error) {
      return { data: null, error: error.message };
    }

    return { data: data as Workshop[], error: null };
  } catch (error) {
    return {
      data: null,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
};

export const getWorkshop = async (
  key: string,
): Promise<GetWorkshopResponse> => {
  try {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const activeFilter = getActiveFilter();

    let query = supabase.from("workshops").select("*").eq("key", key);

    // Apply active filter if in production
    if (Object.keys(activeFilter).length > 0) {
      query = query.eq("active", activeFilter.active);
    }

    const { data, error } = await query.single();

    if (error) {
      return { data: null, error: error.message };
    }

    return { data: data as Workshop, error: null };
  } catch (error) {
    return {
      data: null,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
};
