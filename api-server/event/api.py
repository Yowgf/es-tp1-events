from flask import Blueprint, abort, request
from flask import current_app as app

from .service import getAllEvents, getEvent, postEvent

bp = Blueprint("event", __name__, url_prefix="/event")

@bp.route("/", methods=["GET", "POST"])
def root():
    if request.method == "GET":
        return getAllEvents(app.sm)
    elif request.method == "POST":
        return postEvent(app.sm)

@bp.route("/<event_id>", methods=["GET"])
def get_event_by_id(event_id):
    return getEvent(app.sm, event_id)
    