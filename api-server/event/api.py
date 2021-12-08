from flask import Blueprint, abort, request
from flask import current_app as app

from .service import getAllEvents, postEvent

bp = Blueprint("event", __name__, url_prefix="/event")

@bp.route("/", methods=["GET", "POST"])
def root():
    if request.method == "GET":
        return getAllEvents(app.sm)
    elif request.method == "POST":
        return postEvent(app.sm)
