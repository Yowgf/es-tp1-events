"""class event"""

from . import db

class Event(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String())
    description = db.Column(db.String())
    datetime = db.Column(db.DateTime)
    latitude = db.Column(db.Float)
    longitude = db.Column(db.Float)
    category_id = db.Column(db.Integer, db.ForeignKey('category.id'))
    user_id = db.Column( db.Integer, db.ForeignKey('user.id'))

    def __init__(self, name, description, datetime, latitude, longitude, category_id, user_id ):
        self.name = name
        self.description = description
        self.datetime = datetime
        self.latitude = latitude
        self.longitude = longitude
        self.category_id = category_id
        self.user_id = user_id

    def toJSON(self):
         return { 
            "name": self.name,
            "description": self.description,
            "createdAt": self.datetime,
            "latitude": self.latitude,
            "longitude": self.longitude,
            "category": Category.query.filter_by(id=self.category_id).with_entities(Category.name).first(),
            "user": User.query.filter_by(id=self.user_id).with_entities(User.name).first(),
         }
        

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