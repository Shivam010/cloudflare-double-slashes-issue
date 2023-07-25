export const onRequest = (ctx) => {
	console.log(
		"/secure/hello.js – should only be printed with allow keyword",
		ctx.request.url
	);
	return new Response(
		`
	<h1>/secure/hello.js</h1> 
	<p><b>url: </b> ${ctx.request.url}</p>
	<i>*should only be returned with allow keyword</i>
	`,
		{
			status: 200,
			headers: {
				"content-type": "text/html",
			},
		}
	);
};
