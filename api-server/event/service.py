from json import dumps

from .model import event
    
# TODO: here we are mocking a table with all events. In the future, we should get this from an actual database
table = {
	"1234": {
		"title": "Evento 1",
		"datetime": "1990-01-01T23:59:59",
		"event_category": "natural_catastrophe",
		"event_description": "A hurricane just passed by Belo Horizonte!"
	},
	"4321": {
		"title": "Evento 2",
		"datetime": "1990-01-01T23:59:59",
		"event_category": "criminal_incident",
		"event_description": "Someone just stole my wallet while I was eating some acai!"
	},
	"Teste": {
		"title": "Evento 3",
		"datetime": "1990-01-01T23:59:59",
		"event_category": "Car Accident",
		"event_description": "A drunk football player slammed his car against a tree! The Falcons Boulevard is congestionated!"
	},
	"Teste2": {
		"title": "Evento 4",
		"datetime": "1990-01-01T23:59:59",
		"event_category": "Car Accident",
		"event_description": "Some weird fellow decided to jump from his car as he was passing through an intersection and it hit like a lot of cars so like maybe don't pass there. Also you should send me some cash because i kinda like cash and 'i' don't have all that much."
	},
}

def getAllEvents():
    return wrapResponse(table)

# Add 'boilerplate' information to the response
def wrapResponse(table):
    response = {
        "version": "v0.0.1",
        "events_list": table
    }
    return dumps(response)
