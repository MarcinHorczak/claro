import { cookies } from "next/headers";
import { createClient } from "../../server";
import { Session, SessionCategory } from "./sessions.types";

export const createSessionCategory = async (categoryData: {
  name: string;
  description: string;
  key: string;
}): Promise<{ data: SessionCategory | null; error: string | null }> => {
  try {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { data, error } = await supabase
      .from("session_categories")
      .insert([categoryData])
      .select()
      .single();

    if (error) {
      return { data: null, error: error.message };
    }

    return { data: data as SessionCategory, error: null };
  } catch (error) {
    return {
      data: null,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
};

export const updateSessionCategory = async (
  id: string,
  categoryData: {
    name?: string;
    description?: string;
    key?: string;
  },
): Promise<{ data: SessionCategory | null; error: string | null }> => {
  try {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { data, error } = await supabase
      .from("session_categories")
      .update(categoryData)
      .eq("id", id)
      .select()
      .single();

    if (error) {
      return { data: null, error: error.message };
    }

    return { data: data as SessionCategory, error: null };
  } catch (error) {
    return {
      data: null,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
};

export const deleteSessionCategory = async (
  id: string,
): Promise<{ success: boolean; error: string | null }> => {
  try {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { error } = await supabase
      .from("session_categories")
      .delete()
      .eq("id", id);

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

export const createSession = async (sessionData: {
  name: string;
  short_description: string;
  image_url: string;
  key: string;
  category_id: string;
}): Promise<{ data: Session | null; error: string | null }> => {
  try {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { data, error } = await supabase
      .from("sessions")
      .insert([sessionData])
      .select()
      .single();

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

export const updateSession = async (
  id: string,
  sessionData: {
    name?: string;
    short_description?: string;
    image_url?: string;
    key?: string;
    category_id?: string;
  },
): Promise<{ data: Session | null; error: string | null }> => {
  try {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { data, error } = await supabase
      .from("sessions")
      .update(sessionData)
      .eq("id", id)
      .select()
      .single();

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

export const deleteSession = async (
  id: string,
): Promise<{ success: boolean; error: string | null }> => {
  try {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { error } = await supabase.from("sessions").delete().eq("id", id);

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
