from ..utils.ID import ID
from .event.event import Event, User, Category
from .event import db

class storageManager:
    def __init__(self):
        pass

    def getAllEvents(self):
        return db.session.query(Event).all()

    def getAllEventsJSON(self):
        return [e.toJSON() for e in db.session.query(Event).all()]

    # TODO: we should validate the request data -aholmquist 2022-01-09
    def postEvent(self, req):
        newEvent = Event(
            req["name"], 
            req["description"], 
            req["createdAt"], 
            req["latitude"], 
            req["longitude"], 
            req["category"],
            req["user"],
        )
        db.session.add(newEvent)
        db.session.commit()

    def getEvent(self, eventId):
        return db.session.query(Event).filter_by(id=eventId).first()
    
    def getEventJSON(self, eventId):
        event = db.session.query(Event).filter_by(id=eventId).first()
        if event != None:
            event = event.toJSON()
        return event
