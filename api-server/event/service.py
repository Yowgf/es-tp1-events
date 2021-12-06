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
	"Teste3": {
		"title": "Evento 5",
		"datetime": "1990-01-01T23:59:59",
		"event_category": "Car Accident",
		"event_description": "Some weird fellow decided to jump from his car as he was passing through an intersection and it hit like a lot of cars so like maybe don't pass there. Also you should send me some cash because i kinda like cash and 'i' don't have all that much."
	},
	"Teste4": {
		"title": "Evento 6",
		"datetime": "1990-01-01T23:59:59",
		"event_category": "Car Accident",
		"event_description": "Some weird fellow decided to jump from his car as he was passing through an intersection and it hit like a lot of cars so like maybe don't pass there. Also you should send me some cash because i kinda like cash and 'i' don't have all that much."
	},
	"Teste5": {
		"title": "Evento 7",
		"datetime": "1990-01-01T23:59:59",
		"event_category": "Car Accident",
		"event_description": "Some weird fellow decided to jump from his car as he was passing through an intersection and it hit like a lot of cars so like maybe don't pass there. Also you should send me some cash because i kinda like cash and 'i' don't have all that much."
	},
	"Teste6": {
		"title": "Evento 8",
		"datetime": "1990-01-01T23:59:59",
		"event_category": "Car Accident",
		"event_description": "Some weird fellow decided to jump from his car as he was passing through an intersection and it hit like a lot of cars so like maybe don't pass there. Also you should send me some cash because i kinda like cash and 'i' don't have all that much."
	},
	"Teste7": {
		"title": "Evento 9",
		"datetime": "1990-01-01T23:59:59",
		"event_category": "Car Accident",
		"event_description": "Some weird fellow decided to jump from his car as he was passing through an intersection and it hit like a lot of cars so like maybe don't pass there. Also you should send me some cash because i kinda like cash and 'i' don't have all that much."
	},
	"Teste8": {
		"title": "Evento 10",
		"datetime": "1990-01-01T23:59:59",
		"event_category": "Car Accident",
		"event_description": "Some weird fellow decided to jump from his car as he was passing through an intersection and it hit like a lot of cars so like maybe don't pass there. Also you should send me some cash because i kinda like cash and 'i' don't have all that much."
	},
	"Teste9": {
		"title": "Evento 11",
		"datetime": "1990-01-01T23:59:59",
		"event_category": "Car Accident",
		"event_description": "Some weird fellow decided to jump from his car as he was passing through an intersection and it hit like a lot of cars so like maybe don't pass there. Also you should send me some cash because i kinda like cash and 'i' don't have all that much."
	},
	"Teste10": {
		"title": "Evento 12",
		"datetime": "1990-01-01T23:59:59",
		"event_category": "Car Accident",
		"event_description": "Some weird fellow decided to jump from his car as he was passing through an intersection and it hit like a lot of cars so like maybe don't pass there. Also you should send me some cash because i kinda like cash and 'i' don't have all that much."
	},
	"Teste11": {
		"title": "Evento 13",
		"datetime": "1990-01-01T23:59:59",
		"event_category": "Car Accident",
		"event_description": "Some weird fellow decided to jump from his car as he was passing through an intersection and it hit like a lot of cars so like maybe don't pass there. Also you should send me some cash because i kinda like cash and 'i' don't have all that much."
	},
	"Teste12": {
		"title": "Evento 14",
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
