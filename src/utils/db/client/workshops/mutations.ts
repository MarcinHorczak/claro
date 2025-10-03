import { cookies } from "next/headers";
import { createClient } from "../../server";
import { Workshop } from "./workshops.types";

export const createWorkshop = async (workshopData: {
  name: string;
  short_description: string;
  description: string;
  image_url: string;
  start_date: string;
  end_date: string;
  key: string;
}): Promise<{ data: Workshop | null; error: string | null }> => {
  try {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { data, error } = await supabase
      .from("workshops")
      .insert([workshopData])
      .select()
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

export const updateWorkshop = async (
  id: string,
  workshopData: {
    name?: string;
    short_description?: string;
    description?: string;
    image_url?: string;
    start_date?: string;
    end_date?: string;
    key?: string;
  },
): Promise<{ data: Workshop | null; error: string | null }> => {
  try {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { data, error } = await supabase
      .from("workshops")
      .update(workshopData)
      .eq("id", id)
      .select()
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

export const deleteWorkshop = async (
  id: string,
): Promise<{ success: boolean; error: string | null }> => {
  try {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { error } = await supabase.from("workshops").delete().eq("id", id);

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, error: null };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
};
