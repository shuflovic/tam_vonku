// supabase-config.js
const SUPABASE_URL = 'https://rigsljqkzlnemypqjlbk.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpZ3NsanFremxuZW15cHFqbGJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU2NjI5NTUsImV4cCI6MjA2MTIzODk1NX0.hNdNu9fHGQfdh4WdMFx_SQAVjXvQutBIud3D5CkM9uY';

// Initialize the Supabase client
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);


/*const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);*/
