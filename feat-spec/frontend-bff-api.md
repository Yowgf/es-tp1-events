### This document describes the workflow from the frontend to the service implementations of our project

The frontend is powered by React, a powerful javascript library to render the
components of a page following an event-based logic---when the component mounts,
do this; when the user clicks this button, do that, etc. Coupled with other
libraries / transpilers, we are able to produce an 100% javascript-based
frontend application.

The frontend neets to connect to what is called the BFF (backend from the
frontend). The BFF abstracts out all communication with the API server.

The full data flow is as follows:

frontend (user produces a request) -> BFF -> API server


The API server must produce a _response_ according to the service requested. In
our case, for example, if the user requests to see a listing of all the events,
the API server is the one responsible for comming up with a JSON response with
that listing. It would look like this:

```
{
	"version": "v0.0.1",
	"events_list": [
		"<event_identifier>": {
			"datetime": "1990-01-01T23:59:59",
			"event_category": "natural_catastrophe",
			"event_description": "A hurricane just passed by Belo Horizonte!"
		},
		"<event_identifier>": {
			"datetime": "1990-01-01T23:59:59",
			"event_category": "criminal_incident",
			"event_description": "Someone just stole my wallet while I was eating some acai!"
		}
	]
}
```

The BFF receives this response, and gives it back to the frontend. It can do any
pre-processing necessary before sending it to the frontend, such as filtering
only the "events_list" object from the JSON response.

Finally, the frontend decides how to render that list, and that is it!
