import axios from 'axios';

const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_BASE_URL;

export async function signIn({ email, password }) {
  const res = await axios.post(`${strapiUrl}/api/auth/local`, {
    identifier: email,
    password,
  });
  return res.data;
}

export async function resetPassword({email}){
// Request API.
if( "" === email ){
    return {data:{ error: "Please enter valid email address!" }}
}
const response = await axios
  .post(`${strapiUrl}/api/auth/forgot-password`, {
    email: email, // user's email
  })
    
    return response.data;
}