from flask import Flask

def create_app():
    app = Flask(__name__)

    from . import event
    from .event.storageManager.storageManager import storageManager

    app.logger.warning('Creating app')

    app.register_blueprint(event.bp)
    app.sm = storageManager()

    app.logger.warning("Done creating app")

    return app
