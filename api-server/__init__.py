from flask import Flask
from flask_sqlalchemy import SQLAlchemy

def create_app():
    app = Flask(__name__)

    from . import event
    from .event.storageManager.storageManager import storageManager

    app.logger.warning('Creating app')

    create_db(app)

    app.register_blueprint(event.bp)
    app.sm = storageManager()

    app.logger.warning("Done creating app")

    return app

def create_db(app):
    # TODO: colocar modelos em arquivo separado
    # TODO: colocar senha nas variáveis de ambiente

    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql+psycopg2://postgres:12345@localhost/tp_es'
    db = SQLAlchemy(app)

    class Event(db.Model):
        id = db.Column(db.Integer, primary_key=True)
        name = db.Column(db.String())
        description = db.Column(db.String())
        datetime = db.Column(db.DateTime)
        latitude = db.Column(db.Float)
        longitude = db.Column(db.Float)
        category_id = db.Column(db.Integer, db.ForeignKey('category.id'))
        user_id = db.Column( db.Integer, db.ForeignKey('user.id'))

        def __init__(name, description, datetime, latitude, longitude, category_id, user_id ):
            self.name = name
            self.description = description
            self.datetime = datetime
            self.latitude = latitude
            self.longitude = longitude
            self.category_id = category
            self.user_id = user_id
            

    class Category(db.Model):
        id = db.Column(db.Integer, primary_key=True)
        name = db.Column(db.String())
        events = db.relationship("Event")

        def __init__(name):
            self.name = name

    class User(db.Model):
        id = db.Column(db.Integer, primary_key=True)
        name = db.Column(db.String())
        events = db.relationship("Event")

        def __init__(name):
            self.name = name

    db.create_all()
    print(User.query.all())
    # category = Category('crime')
    # user = User('leonel')
    # event = Event('meu crime', 'esse é o meu crime', '10:10 10-10-2010', -1, -1, 1, 1)


