'use client';

import { useState } from 'react';  // so we have to use `use client` at the top of the file.
import { useSession } from 'next-auth/react';  // allow us to know which users are logged in
import { useRouter } from 'next/navigation';  // allow us to redirect the user to the homepage after creating a new prompt.

import Form from 'components/Form';

// This is our Form component. We're going to use it to create a new prompt.
const CreatePrompt = () => {
  const router = useRouter();
  const { data : session } = useSession(); 
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: '',
    tag: '',
  });
  
  const createPrompt = async (e) => {  // we're going to create a new prompt.
    e.preventDefault();  // to make our prompt function (written in Form.jsx) work, we need to prevent the default behavior of the browser while submitting the form to reload.
    setSubmitting(true);  // we're submitting the form, so we set the submitting to true. We use it as kind of loader.
    // Focus on creating our first prompt. We need to send a request to our API to create a new prompt. 
    try {
// API call to create a new prompt. (after it, we will create our own API with a separate backend developer.)
      const response = await fetch('/api/prompt/new', {
        method: 'POST',  // we're sending a POST request to our API.
        body: JSON.stringify({  // we're sending the body of the request as a JSON string.
          prompt: post.prompt,  // we're sending the prompt of the post.
          userId: session?.user.id,  // we're checking if the user is logged in `session?`. If the user is logged in, we're sending the user id.
          tag: post.tag,  // we're sending the tag of the post.
        })
      })

      if(response.ok) {  // if we have a response, we check if the response is ok.
        router.push('/');  // if we have a response, we redirect the user to the homepage.
      }
    } catch (error) {  
      console.log(error);  // if we have an error, we log it to the console.
    } finally {
      setSubmitting(false);  // we're done submitting the form, so we set the submitting to false.
    }
  }
    
    return (
    <Form 
        type="Create"
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={createPrompt}
    />
  )
}

export default CreatePrompt