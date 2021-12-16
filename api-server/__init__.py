from flask import Flask
from flask_sqlalchemy import SQLAlchemy

def create_app():
    app = Flask(__name__)

    from . import event
    from .event.storageManager.storageManager import storageManager
    from .event.storageManager.event import db
    
    app.logger.warning('Creating app')

    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql+psycopg2://postgres:12345@localhost/tp_es'
    db.init_app(app)
    with app.app_context():
        db.create_all()

    app.register_blueprint(event.bp)
    app.sm = storageManager()

    app.logger.warning("Done creating app")

    return app



