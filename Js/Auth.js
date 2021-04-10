
  import { createClient } from '@supabase/supabase-js'
  
  // Initialize the service
  const supabaseUrl = 'https://nctaawyqicaukelfjxia.supabase.co'
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNTAzMDk3MywiZXhwIjoxOTMwNjA2OTczfQ.qSO194rJNd2Pq2PJMM0NQ0fgfDNMHYAN2CXQFHtTScw'
  const supabase = createClient(supabaseUrl, supabaseKey)
  
  const { error, data } = await supabase.auth.signUp({
    email: 'example@email.com',
    password: 'example-password',
  })

  const { error, data } = await supabase.auth.signIn({
    email: 'example@email.com',
    password: 'example-password',
  })
  