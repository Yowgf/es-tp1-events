import os

from flask import Flask
from flask_sqlalchemy import SQLAlchemy

def create_app():
    app = Flask(__name__)

    from . import event
    from .event.storageManager.storageManager import storageManager
    from .event.storageManager.event import db
    
    app.logger.info('Creating app')

    username = os.getenv("TPES_USERNAME", "postgres")
    password = os.getenv("TPES_PASSWORD", "12345")
    host = os.getenv("TPES_HOST", "localhost")
    port = os.getenv("TPES_PORT", "5432")
    database = os.getenv("TPES_DATABASE", "tp_es")

    connStr = 'postgresql+psycopg2://{}:{}@{}:{}/{}'.format(username, password, host, port, database)
    app.config['SQLALCHEMY_DATABASE_URI'] = connStr
    db.init_app(app)
    with app.app_context():
        db.create_all()

    app.register_blueprint(event.bp)
    app.sm = storageManager()

    app.logger.info("Done creating app")

    return app
