import { createClient } from '@supabase/supabase-js'
    
// Initialize 
const supabaseUrl = 'https://azoaiwcbblmvaguduwjb.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxODU2NzgzNywiZXhwIjoxOTM0MTQzODM3fQ.XFKpuxfZ1n1V8XI-l-p2dYery72-1aGq4ztbo7ZH30c'
const supabase = createClient(supabaseUrl, supabaseKey)

// Create a new user
const { user, error } = await supabase.auth.signUp({
  email: 'example@email.com',
  password: 'example-password',
})
    
let { user, error } = await supabase.auth.signIn({
     email: 'someone@email.com',
     password: 'ZlurZLOGUcmJBRdisWTk'
   })

   let { user, error } = await supabase.auth.signIn({
     provider: 'github'
   })

   let { data, error } = await supabase.auth.api.resetPasswordForEmail(email)
   const { user, error } = await supabase.auth.update({
     email: "new@email.com",
     password: "new-password",
     data: { hello: 'world' }
   })

   let { error } = await supabase.auth.signOut()