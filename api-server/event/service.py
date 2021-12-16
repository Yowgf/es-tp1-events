from flask import request, Response

def getAllEvents(sm):
    eventsJSON = sm.getAllEventsJSON()
    return wrapGetResponse(eventsJSON)

def postEvent(sm):
    req = request.args
    if req == None:
        return Response("", status=415)
	
    return Response(sm.postEvent(req), status=200)

# Add 'boilerplate' information to the response
def wrapGetResponse(rawResp):
    wrappedResp = {
        "version": "v0.0.1",
        "events_list": rawResp,
    }
    return wrappedResp
