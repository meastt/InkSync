import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const SUPABASE_URL = "https://zflkdyuswpegqabkwlgw.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpmbGtkeXVzd3BlZ3FhYmt3bGd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY5MzAyNDEsImV4cCI6MjA3MjUwNjI0MX0.VyAjSGVjKRWtraecEAFe2kJ3OfGyIRmlN5j_9e7ImBM";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
