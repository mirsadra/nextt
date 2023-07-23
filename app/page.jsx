import Feed from "@components/Feed";
 
const Home = () => {
  return (
    // <div>Home</div>
    // to understand what is w-full, check tailwindcss.com/docs/width
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center"> ChatETH.io <br className="max-md:hidden"/>
        <span className="orange_gradient text-center">AI-powered judgement</span>
      </h1>
      <p className="desc text-center ">  Each day, users can start a chat session with ChatGPT, where they can ask any questions or engage in a conversation. </p>

      <Feed />
    </section>
  )
}

export default Home