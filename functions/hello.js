export const onRequest = (ctx) => {
	console.log("direct hello", ctx.request.url);
	return new Response(
		`
	<h1>/hello.js</h1> 
	<p><b>url: </b> ${ctx.request.url}</p>
	`,
		{
			status: 200,
			headers: {
				"content-type": "text/html",
			},
		}
	);
};
