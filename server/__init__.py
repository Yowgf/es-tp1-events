from flask import Flask

def create_app():
    app = Flask(__name__)

    from . import event

    app.register_blueprint(event.bp)

    return app
