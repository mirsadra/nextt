import Link from 'next/link';

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left"> <span className="blue_gradient">{type} Post</span> </h1>
      <p className="desc text-left max-w-md"> {type} and share NFT prompt with ChatGPT, and let your idea run wild with the power of blockchain.</p>
      <form 
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2x1 flex-flex-col gap-7 glassmorphism"
        >
{/* First lable is going to be for the field of the prompt user can write. */}
          <label>
            <span className="font-satoshi font-semibold text-base text-gray-700">
              Your AI prompt
            </span>
            <textarea 
              value={post.prompt}
              onChange={(e) => setPost({ ...post, prompt: e.target.value })}  // we want to update the prompt of the post
              placeholder='Write your prompt here...'
              required
              className="form_textarea"  // let user write
            />
          </label>
{/* Second lable is going to be for the field of the prompt. */}
          <label>
            <span className="font-satoshi font-semibold text-base text-gray-700">
              Tag {' '}
                <span className="font-normal font-sans">(#NFT, #ChatGPT, #idea</span>
            </span> 
            <input  
              value={post.tag}
              onChange={(e) => setPost({ ...post, tag: e.target.value })}  // we want to update the prompt of the post
              placeholder='#tag'
              required
              className="form_input"  // let user write
            />
          </label>
{/* Now we need a button to submit the form. Note that every link require href */}
          <div className="flex-end mx-3 mb-3 gap-4 m-6">
            <Link href="/" className="text-gray-500 text-sm">
              Cancel
            </Link>
            <button type="submit" disabled={submitting} className='px-5 py-1.5 text-sm bg-primary-orange rounded-md text-white'>
              {submitting ? `${type}...` : type}  {/* the button itself check whether we're currently submitting or not. If we're submitting shows type ... */}
            </button>
          </div>
        </form>
    </section>
  )
}

export default Form