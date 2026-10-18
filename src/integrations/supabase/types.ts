export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.18"
  }
  public: {
    Tables: {
      ai_generations: {
        Row: {
          cost_usd: number | null
          created_at: string
          id: string
          model: string
          project_id: string
          prompt: string
          provider: string
          response: string | null
          tokens_in: number | null
          tokens_out: number | null
          type: string
        }
        Insert: {
          cost_usd?: number | null
          created_at?: string
          id?: string
          model: string
          project_id: string
          prompt: string
          provider: string
          response?: string | null
          tokens_in?: number | null
          tokens_out?: number | null
          type: string
        }
        Update: {
          cost_usd?: number | null
          created_at?: string
          id?: string
          model?: string
          project_id?: string
          prompt?: string
          provider?: string
          response?: string | null
          tokens_in?: number | null
          tokens_out?: number | null
          type?: string
        }
        Relationships: [
          {
            foreignKeyName: "ai_generations_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      assets: {
        Row: {
          channels: number | null
          created_at: string
          dhash: string | null
          duration_seconds: number | null
          file_size_bytes: number | null
          filename: string
          fps: number | null
          height: number | null
          id: string
          is_favorite: boolean
          kind: string
          metadata: Json
          origin: string
          project_id: string
          sample_rate: number | null
          storage_path: string
          width: number | null
        }
        Insert: {
          channels?: number | null
          created_at?: string
          dhash?: string | null
          duration_seconds?: number | null
          file_size_bytes?: number | null
          filename: string
          fps?: number | null
          height?: number | null
          id?: string
          is_favorite?: boolean
          kind: string
          metadata?: Json
          origin?: string
          project_id: string
          sample_rate?: number | null
          storage_path: string
          width?: number | null
        }
        Update: {
          channels?: number | null
          created_at?: string
          dhash?: string | null
          duration_seconds?: number | null
          file_size_bytes?: number | null
          filename?: string
          fps?: number | null
          height?: number | null
          id?: string
          is_favorite?: boolean
          kind?: string
          metadata?: Json
          origin?: string
          project_id?: string
          sample_rate?: number | null
          storage_path?: string
          width?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "assets_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          gemini_api_key_enc: string | null
          id: string
          name: string | null
          openai_api_key_enc: string | null
          preferences: Json
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          gemini_api_key_enc?: string | null
          id: string
          name?: string | null
          openai_api_key_enc?: string | null
          preferences?: Json
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          gemini_api_key_enc?: string | null
          id?: string
          name?: string | null
          openai_api_key_enc?: string | null
          preferences?: Json
          updated_at?: string
        }
        Relationships: []
      }
      projects: {
        Row: {
          aspect_ratio: string
          config: Json
          created_at: string
          id: string
          idea: string | null
          mode_id: string
          name: string
          outline: Json | null
          reference_text: string | null
          script: string | null
          status: string
          style_bible: string | null
          target_platforms: string[]
          text_model: string
          text_provider: string
          tts_style_prompt: string | null
          tts_voice: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          aspect_ratio?: string
          config?: Json
          created_at?: string
          id?: string
          idea?: string | null
          mode_id?: string
          name: string
          outline?: Json | null
          reference_text?: string | null
          script?: string | null
          status?: string
          style_bible?: string | null
          target_platforms?: string[]
          text_model?: string
          text_provider?: string
          tts_style_prompt?: string | null
          tts_voice?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          aspect_ratio?: string
          config?: Json
          created_at?: string
          id?: string
          idea?: string | null
          mode_id?: string
          name?: string
          outline?: Json | null
          reference_text?: string | null
          script?: string | null
          status?: string
          style_bible?: string | null
          target_platforms?: string[]
          text_model?: string
          text_provider?: string
          tts_style_prompt?: string | null
          tts_voice?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "projects_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      renders: {
        Row: {
          completed_at: string | null
          created_at: string
          error_message: string | null
          id: string
          kind: string
          output_asset_id: string | null
          platform: string | null
          progress: number
          project_id: string
          started_at: string | null
          status: string
          timeline_snapshot: Json
        }
        Insert: {
          completed_at?: string | null
          created_at?: string
          error_message?: string | null
          id?: string
          kind?: string
          output_asset_id?: string | null
          platform?: string | null
          progress?: number
          project_id: string
          started_at?: string | null
          status?: string
          timeline_snapshot: Json
        }
        Update: {
          completed_at?: string | null
          created_at?: string
          error_message?: string | null
          id?: string
          kind?: string
          output_asset_id?: string | null
          platform?: string | null
          progress?: number
          project_id?: string
          started_at?: string | null
          status?: string
          timeline_snapshot?: Json
        }
        Relationships: [
          {
            foreignKeyName: "renders_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      scenes: {
        Row: {
          animation_type: string | null
          audio_asset_id: string | null
          audio_duration: number | null
          audio_start: number | null
          created_at: string
          generated_in_flow: boolean
          id: string
          image_asset_id: string | null
          image_prompt: string | null
          media_type: string
          metadata: Json
          narration_text: string
          order_index: number
          project_id: string
          section_index: number | null
          transition_in: string | null
          updated_at: string
          video_asset_id: string | null
          video_prompt: string | null
        }
        Insert: {
          animation_type?: string | null
          audio_asset_id?: string | null
          audio_duration?: number | null
          audio_start?: number | null
          created_at?: string
          generated_in_flow?: boolean
          id?: string
          image_asset_id?: string | null
          image_prompt?: string | null
          media_type?: string
          metadata?: Json
          narration_text: string
          order_index: number
          project_id: string
          section_index?: number | null
          transition_in?: string | null
          updated_at?: string
          video_asset_id?: string | null
          video_prompt?: string | null
        }
        Update: {
          animation_type?: string | null
          audio_asset_id?: string | null
          audio_duration?: number | null
          audio_start?: number | null
          created_at?: string
          generated_in_flow?: boolean
          id?: string
          image_asset_id?: string | null
          image_prompt?: string | null
          media_type?: string
          metadata?: Json
          narration_text?: string
          order_index?: number
          project_id?: string
          section_index?: number | null
          transition_in?: string | null
          updated_at?: string
          video_asset_id?: string | null
          video_prompt?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "scenes_audio_asset_id_fkey"
            columns: ["audio_asset_id"]
            isOneToOne: false
            referencedRelation: "assets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "scenes_image_asset_id_fkey"
            columns: ["image_asset_id"]
            isOneToOne: false
            referencedRelation: "assets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "scenes_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "scenes_video_asset_id_fkey"
            columns: ["video_asset_id"]
            isOneToOne: false
            referencedRelation: "assets"
            referencedColumns: ["id"]
          },
        ]
      }
      tiktok_accounts: {
        Row: {
          avatar_url: string | null
          created_at: string
          display_name: string | null
          id: string
          postzen_account_id: string | null
          status: string
          updated_at: string
          user_id: string
          username: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          display_name?: string | null
          id?: string
          postzen_account_id?: string | null
          status?: string
          updated_at?: string
          user_id: string
          username: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          display_name?: string | null
          id?: string
          postzen_account_id?: string | null
          status?: string
          updated_at?: string
          user_id?: string
          username?: string
        }
        Relationships: [
          {
            foreignKeyName: "tiktok_accounts_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      tiktok_posts: {
        Row: {
          account_id: string
          caption: string
          comments: number
          created_at: string
          error_message: string | null
          id: string
          likes: number
          postzen_post_id: string | null
          scheduled_at: string
          shares: number
          status: string
          updated_at: string
          user_id: string
          video_url: string
          views: number
        }
        Insert: {
          account_id: string
          caption?: string
          comments?: number
          created_at?: string
          error_message?: string | null
          id?: string
          likes?: number
          postzen_post_id?: string | null
          scheduled_at: string
          shares?: number
          status?: string
          updated_at?: string
          user_id: string
          video_url: string
          views?: number
        }
        Update: {
          account_id?: string
          caption?: string
          comments?: number
          created_at?: string
          error_message?: string | null
          id?: string
          likes?: number
          postzen_post_id?: string | null
          scheduled_at?: string
          shares?: number
          status?: string
          updated_at?: string
          user_id?: string
          video_url?: string
          views?: number
        }
        Relationships: [
          {
            foreignKeyName: "tiktok_posts_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "tiktok_accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tiktok_posts_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      owns_project: { Args: { p_project_id: string }; Returns: boolean }
      owns_storage_path: { Args: { p_name: string }; Returns: boolean }
      patch_project_config: {
        Args: { p_patch: Json; p_project_id: string }
        Returns: Json
      }
      reorder_scenes: {
        Args: { p_project_id: string; p_scene_ids: string[] }
        Returns: undefined
      }
      replace_scenes: {
        Args: { p_config_patch?: Json; p_project_id: string; p_scenes: Json }
        Returns: {
          animation_type: string | null
          audio_asset_id: string | null
          audio_duration: number | null
          audio_start: number | null
          created_at: string
          generated_in_flow: boolean
          id: string
          image_asset_id: string | null
          image_prompt: string | null
          media_type: string
          metadata: Json
          narration_text: string
          order_index: number
          project_id: string
          section_index: number | null
          transition_in: string | null
          updated_at: string
          video_asset_id: string | null
          video_prompt: string | null
        }[]
        SetofOptions: {
          from: "*"
          to: "scenes"
          isOneToOne: false
          isSetofReturn: true
        }
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
