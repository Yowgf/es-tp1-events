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

    def postEvent(self, req):
        newEvent = Event(
            req["name"], 
            req["description"], 
            req["createdAt"], 
            req["latitude"], 
            req["longitude"], 
            Category.query.filter_by(name=req["category"]).with_entities(Category.id).first()[0],
            User.query.filter_by(name=req["user"]).with_entities(User.id).first()[0]
        )
        db.session.add(newEvent)
        db.session.commit()

    def getEvent(self, eventId):
        return db.session.query(Event).filter_by(id=eventId).first()
    
    def getEventJSON(self, eventId):
        return db.session.query(Event).filter_by(id=eventId).first().toJSON()

