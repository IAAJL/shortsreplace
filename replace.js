document.addEventListener("yt-navigate-start",function(event)
{
	let burl = event.target.baseURI;
	let newurl = uricheck(burl);
	if(newurl!==null)
	{
		history.back();
		location=newurl;
	}
});


let uri=uricheck(location.href);
if(uri!==null)
{
	location=uri;
}

function uricheck(url)
{
	if(url.includes("/shorts/"))
	{
		url=url.replace("shorts/","watch?v=");
		return url;
	}
	else
		return null;
}
