from flask import request, Response
from flask import current_app as app

def getAllEvents(sm):
    eventsJSON = sm.getAllEventsJSON()
    return wrapGetResponse(eventsJSON)

def getEvent(sm, eventId):
    eventJSON = sm.getEventJSON(eventId)
    if eventJSON == None:
        return Response("", status=404)
    print(eventJSON, flush=True)
    return eventJSON

def postEvent(sm):
    app.logger.debug("In post handler")
    req = request.json
    app.logger.debug("Trying to post event with req: {}".format(req))
    app.logger.debug("req.user: {}".format(req['user']))
    app.logger.debug("req.name: {}".format(req['name']))
    app.logger.debug("req.category: {}".format(req['category']))
    app.logger.debug("req.description: {}".format(req['description']))
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
