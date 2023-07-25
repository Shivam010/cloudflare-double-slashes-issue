export const onRequest = (ctx) => {
	console.log("middleware", ctx.request.url);

	if (ctx.request.url.includes("allow")) {
		return ctx.next();
	}

	return new Response(
		`
	<h1>page is secured</h1> 
	<p><b>url: </b> ${ctx.request.url}</p>
	<p><i>*served from _middleware.js</i></p>
	<i>*add '/?allow' to see it (or start with '//secure'  <-- this should not happen</i>
	`,
		{
			status: 200,
			headers: {
				"content-type": "text/html",
			},
		}
	);
};
