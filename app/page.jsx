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



/* 
**Server Side Rendering (SSR)**

```javascript
async function Page ({params}) {
	const res = await fetch(
		`https://.../data/${params.id}`,
		{ cache: 'no-store'}
	);
	const data = await res.json();

	return ( 
		<div className="grid grid-cols-6 gap-x-6 gap-y-3">
			<div className=".....">
				<h1 className="truncate text-2x1 font-medium capitalize text-gray-200">
					{data.title}
				</h1>
				<p className="font-medium text-gray-500">{data.body}</p>
	);
}
```

In this example, we have and async function, Page, where we try to fetch some data from the JSON placeholder API. 
Specifically, It is a dynamic page because we get the ID (params.**id**) through the params of the page.
With `cache: 'no-store'`, we simply say: "Hey, don't store it, just display it somewhere".
*/