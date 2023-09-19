import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://mhyblvvxbaqxonyhklyn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1oeWJsdnZ4YmFxeG9ueWhrbHluIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQzMjA2MDYsImV4cCI6MjAwOTg5NjYwNn0.VR10o3SIn9MeAXv-OnEtKKt4Syojqem-NFQhzjOmuSI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
