from ..utils.ID import ID
from .event.event import event

class storageManager:
    def __init__(self):
        # Map of event ids to events
        self.events = {}

    def getSampleEventsJSON():
        return [
            event(
                "1990-01-01T23:59:59",
                "natural_catastrophe",
                "A hurricane just passed by Belo Horizonte!",
            ).toJSON(),
            event(
                "1990-01-01T23:59:59",
                "criminal_incident",
                "Someone just stole my wallet while I was eating some acai!",
            ).toJSON(),
        ]

    def getAllEvents(self):
        return [e for e in self.events.values()]

    def getAllEventsJSON(self):
        return [e.toJSON() for e in self.events.values()]

    # TODO: in the future, we probably want to store a row in a database -aholmquist 2021-12-05
    def postEvent(self, req):
        newEventId = ID.findNotIn(self.events)
        self.events[newEventId] = event(req["createdAt"], req["title"], req["category"], req["description"])
