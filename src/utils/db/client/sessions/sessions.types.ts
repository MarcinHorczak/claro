export type Session = {
  id: string;
  created_at: string;
  name: string;
  short_description: string;
  image_url: string;
  key: string;
  category_id: string;
  active: boolean;
};

export type SessionCategory = {
  id: string;
  name: string;
  description: string;
  key: string;
  created_at: string;
  updated_at: string;
  sessions?: Session[];
  active: boolean;
};
