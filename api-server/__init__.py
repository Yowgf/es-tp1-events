from flask import Flask

def create_app():
    app = Flask(__name__)

    from . import event

    app.logger.warning('Creating app')

    app.register_blueprint(event.bp)

    app.logger.warning("Done creating app")

    return app
