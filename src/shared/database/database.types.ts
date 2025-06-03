export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      country_dev_trends: {
        Row: {
          category: string
          content_1: string
          content_2: string
          content_3: string
          content_4: string
          content_5: string
          country: string
          country_dev_trend_id: number
          country_name: string
          covid19_related: string
          link: string
          office: string
          published_date: string
          region: string
          sector: string
          source: string
          title: string
        }
        Insert: {
          category?: string
          content_1?: string
          content_2?: string
          content_3?: string
          content_4?: string
          content_5?: string
          country?: string
          country_dev_trend_id?: number
          country_name?: string
          covid19_related?: string
          link?: string
          office?: string
          published_date?: string
          region?: string
          sector?: string
          source?: string
          title?: string
        }
        Update: {
          category?: string
          content_1?: string
          content_2?: string
          content_3?: string
          content_4?: string
          content_5?: string
          country?: string
          country_dev_trend_id?: number
          country_name?: string
          covid19_related?: string
          link?: string
          office?: string
          published_date?: string
          region?: string
          sector?: string
          source?: string
          title?: string
        }
        Relationships: []
      }
      devcoop_videos: {
        Row: {
          channel_name: string
          covid19_video_faq: string
          date: string
          description: string
          devcoop_video_id: number
          id: number | null
          is_educational_content: string
          link: string
          related_to_covid19: string
          title: string
        }
        Insert: {
          channel_name?: string
          covid19_video_faq?: string
          date?: string
          description?: string
          devcoop_video_id?: number
          id?: number | null
          is_educational_content?: string
          link?: string
          related_to_covid19?: string
          title?: string
        }
        Update: {
          channel_name?: string
          covid19_video_faq?: string
          date?: string
          description?: string
          devcoop_video_id?: number
          id?: number | null
          is_educational_content?: string
          link?: string
          related_to_covid19?: string
          title?: string
        }
        Relationships: []
      }
      dispatch_agencies: {
        Row: {
          agency_name_en: string
          agency_name_ko: string
          country: string
          dispatch_agency_id: number
        }
        Insert: {
          agency_name_en?: string
          agency_name_ko?: string
          country?: string
          dispatch_agency_id?: number
        }
        Update: {
          agency_name_en?: string
          agency_name_ko?: string
          country?: string
          dispatch_agency_id?: number
        }
        Relationships: []
      }
      global_training: {
        Row: {
          country_name: string
          end_year: number | null
          global_training_id: number
          id: number | null
          note: string
          project_name_en: string
          project_name_ko: string
          project_type: string
          region: string
          start_year: number | null
          training_type: string
        }
        Insert: {
          country_name?: string
          end_year?: number | null
          global_training_id?: number
          id?: number | null
          note?: string
          project_name_en?: string
          project_name_ko?: string
          project_type?: string
          region?: string
          start_year?: number | null
          training_type?: string
        }
        Update: {
          country_name?: string
          end_year?: number | null
          global_training_id?: number
          id?: number | null
          note?: string
          project_name_en?: string
          project_name_ko?: string
          project_type?: string
          region?: string
          start_year?: number | null
          training_type?: string
        }
        Relationships: []
      }
      overseas_offices: {
        Row: {
          address: string
          code: string
          homepage: string
          id: number | null
          note: string
          overseas_office_id: number
          overseas_office_name: string
          region: string
          type: string
        }
        Insert: {
          address?: string
          code?: string
          homepage?: string
          id?: number | null
          note?: string
          overseas_office_id?: number
          overseas_office_name?: string
          region?: string
          type?: string
        }
        Update: {
          address?: string
          code?: string
          homepage?: string
          id?: number | null
          note?: string
          overseas_office_id?: number
          overseas_office_name?: string
          region?: string
          type?: string
        }
        Relationships: []
      }
      volunteer_guides: {
        Row: {
          country: string
          created_date: string
          download_url: string
          file_extension: string
          notice: string
          title: string
          volunteer_guide_id: number
        }
        Insert: {
          country?: string
          created_date?: string
          download_url?: string
          file_extension?: string
          notice?: string
          title?: string
          volunteer_guide_id?: number
        }
        Update: {
          country?: string
          created_date?: string
          download_url?: string
          file_extension?: string
          notice?: string
          title?: string
          volunteer_guide_id?: number
        }
        Relationships: []
      }
    }
    Views: {
      get_dev_trend_country_list_view: {
        Row: {
          country: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
