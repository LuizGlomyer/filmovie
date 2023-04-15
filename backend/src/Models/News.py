from db import db
from marshmallow import Schema, fields

class News(db.Model):
    __tablename__ = 'news'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String)
    subtitle = db.Column(db.String)
    content = db.Column(db.String)
    image_uri = db.Column(db.String)
    author = db.Column(db.String)
    date = db.Column(db.String)

class NewsSchema(Schema):
    id = fields.Int()
    title = fields.Str()
    subtitle = fields.Str()
    content = fields.Str()
    image_uri = fields.Str()
    author = fields.Str()
    date = fields.Str()

class CreateNewsSchema(Schema):
    title = fields.Str()
    subtitle = fields.Str()
    content = fields.Str()
    image_uri = fields.Str()
    author = fields.Str()
    date = fields.Str()