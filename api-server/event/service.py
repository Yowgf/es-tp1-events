from json import dumps

from .model import event
    
# TODO: here we are mocking a table with all events. In the future, we should get this from an actual database
table = {
	"1234": {
		"datetime": "1990-01-01T23:59:59",
		"event_category": "natural_catastrophe",
		"event_description": "A hurricane just passed by Belo Horizonte!"
	},
	"4321": {
		"datetime": "1990-01-01T23:59:59",
		"event_category": "criminal_incident",
		"event_description": "Someone just stole my wallet while I was eating some acai!"
	}
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
