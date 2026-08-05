
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://vmjzevxzquaphfrspuom.supabase.co'
const supabaseKey = 'sb_publishable_HaBOW1DwGdDgOUksM7K77w_P2V9J1xJ'
export const supabase = createClient(supabaseUrl, supabaseKey)