from flask import Blueprint
from flask import abort
from flask import request
from .service import getAllEvents

bp = Blueprint("event", __name__, url_prefix="/event")

def postAllEvents():
    return "implement the post please!"

@bp.route("/")
def listAll():
    return getAllEvents()

# TODO: The current implementation is just an example -- aholmquist 2021-10-30
@bp.route("/list/<event_category>", methods=["GET", "POST"])
def list(event_category):
    # Use alias 'all' to request all events
    if event_category == "all":
        if request.method == "GET":
            return getAllEvents()
        # TODO: REMOVE post method for 'all' -- aholmquist 2021-10-31
        elif request.method == "POST":
            return postAllEvents()
    # TODO: Add a way to list all events of a specific category -- aholmqmuist 2021-10-31
    else:
        abort(400)
