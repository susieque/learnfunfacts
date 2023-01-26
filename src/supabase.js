import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gjvjdpmdfjmobqqajlyg.supabase.co';
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdqdmpkcG1kZmptb2JxcWFqbHlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM2NTM3NjUsImV4cCI6MTk4OTIyOTc2NX0.07wW5tmXsdMYrQ2lvKlju486wl5IhEx6LRLChJuJKOI';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
