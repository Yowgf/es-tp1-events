from flask import Blueprint
from flask import abort
from .service import getAllEvents

bp = Blueprint("event", __name__, url_prefix="/event")

# TODO: The current implementation is just an example -- aholmquist 2021-10-30
@bp.route("/list/<event_category>", methods=["GET"])
def list(event_category):
    # Use alias 'all' to request all events
    if event_category == "all":
        return getAllEvents()
    else:
        abort(400)
