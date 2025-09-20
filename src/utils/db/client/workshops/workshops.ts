import { createClient } from "@/utils/db/server";
import { cookies } from "next/headers";
import { Workshop } from "./workshops.types";

type GetWorkshopsResponse =
  | {
      data: Workshop[];
      error: null;
    }
  | {
      data: null;
      error: string;
    };

const TABLE_NAME = "workshops";

export const getWorkshops = async (): Promise<GetWorkshopsResponse> => {
  try {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { data, error } = await supabase.from(TABLE_NAME).select("*");

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

type GetWorkshopResponse =
  | {
      data: Workshop;
      error: null;
    }
  | {
      data: null;
      error: string;
    };

export const getWorkshop = async (
  key: string,
): Promise<GetWorkshopResponse> => {
  try {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { data, error } = await supabase
      .from(TABLE_NAME)
      .select("*")
      .eq("key", key)
      .single();

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
