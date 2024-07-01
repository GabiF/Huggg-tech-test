export type PaginatedResponse = {
  data: Brand[];
  from: number;
  to: number;
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
  next_page_url: string | null;
  path: string;
  embedded: EmbeddedResponse;
};

export type EmbeddedResponse = {
  products: Product[];
  stores: Store[];
}

export type Brand = {
  id: string;
  created_at: string;
  updated_at: string;
  name: string;
  internal_name: string;
  logo: string;
  colour: string;
  success: string;
  share: string;
  weight: number;
  deleted_at: string | null;
  expiry: number;
  website: string;
  integration_id: number;
  user_id: string;
  email: string | null;
  vat: number;
  faq: string | null;
  description: string;
  redeem: string | null;
  location_text: string;
  map_pin_url: string;
  consolidated: number;
  default_location_description_markdown: string;
  products: string[];
  consolidated_products: string[];
  stores: string[];
  logo_url: string;
};

export type Product = {
  id: string;
  created_at: string;
  updated_at: string;
  brand_id: string;
  description: string;
  campaign: string | null;
  label: string;
  internal_name: string;
  integration: string;
  price: string;
  over_18_offer: number;
  redemption_instructions: string;
  image: string;
  subtitle: string;
  weight: number;
  recipient_description: string;
  tag_group_id: string;
  tag_id: string;
  open_graph_image: string;
  active: number;
  on_app: number;
  on_imessage: number;
  handling_fee: number;
  sale_price: number;
  huggg_tag: string | null;
  vat_voucher_type: string;
  vat: string | null;
  brand_name: string;
  brand_weight: number;
  image_url: string;
  claim_image: string;
  claim_image_url: string;
  imessage_image: string;
  imessage_image_url: string;
  open_graph_image_url: string;
  pivot: {
    brand_id: string;
    price_id: string;
  };
};

export type Store = {
  id: string;
  brand_id: string;
  latitude: string;
  longitude: string;
  website: string | null;
  name: string;
  description: string;
  visible: number;
  description_markdown: string;
  image: string;
  image_url: string;
};