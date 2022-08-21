//what is the difference between windows.onload and Document.onload?

Widows.onload
	-> it gets fired when the document's window is ready for presentation.
	-> this event is fires at start.
	   it can take a while to fire, when mutiple external resources have yet to be requested, parsed and loaded.

// Document.onload

	-> document.onload sires when the dom tree is completed.
	-> This event fires once all the content is downloaded  
