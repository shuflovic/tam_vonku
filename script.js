const SUPABASE_URL = 'https://rigsljqkzlnemypqjlbk.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpZ3NsanFremxuZW15cHFqbGJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU2NjI5NTUsImV4cCI6MjA2MTIzODk1NX0.hNdNu9fHGQfdh4WdMFx_SQAVjXvQutBIud3D5CkM9uY';
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// days on the road part
    // Set the start date of the journey
    const startDate = new Date('2024-01-28'); // YYYY-MM-DD format is best for consistency

    // Get the current date
    const currentDate = new Date();

    // Calculate the difference in milliseconds
    const timeDiff = currentDate.getTime() - startDate.getTime() +1;

    // Convert milliseconds to days
    // 1 day = 24 hours * 60 minutes * 60 seconds * 1000 milliseconds
    const daysOnRoad = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    // Display the number of days in the HTML element
    document.getElementById('daysOnRoad').textContent = daysOnRoad;
