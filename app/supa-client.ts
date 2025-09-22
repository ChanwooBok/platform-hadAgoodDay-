import type { Database as SupabaseDatabase } from "./../database.types";
import type { MergeDeep, SetFieldType, SetNonNullable } from "type-fest";
import { createClient } from "@supabase/supabase-js";

type Database = MergeDeep<
  SupabaseDatabase,
  {
    public: {
      Views: {
        community_post_list_view: {
          Row: SetFieldType<
            SetNonNullable<
              SupabaseDatabase["public"]["Views"]["community_post_list_view"]["Row"]
            >,
            "author_avatar",
            string | null
          >;
        };
        product_overview_view: {
          Row: SetNonNullable<
            SupabaseDatabase["public"]["Views"]["product_overview_view"]["Row"]
          >;
        };
        gpt_ideas_view: {
          Row: SetNonNullable<
            SupabaseDatabase["public"]["Views"]["gpt_ideas_view"]["Row"]
          >;
        };
      };
    };
  }
>;

// <--- When fetching data from server --->
// const client = createClient<Database>(
//   process.env.SUPABASE_URL!,
//   process.env.SUPABASE_ANON_KEY!
// );

// <--- When fetching data from browser --->
const client = createClient<Database>(
  "https://rsqebvmczjuvgpmosqut.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzcWVidm1jemp1dmdwbW9zcXV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI3MjExMTcsImV4cCI6MjA2ODI5NzExN30.H-M6yWFag9mOOzKM8r23W7mY4p6ESulHrBZtKRiAP9c"
);

export default client;
