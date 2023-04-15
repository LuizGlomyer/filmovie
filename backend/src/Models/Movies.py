from db import db
from marshmallow import Schema, fields

class Movies(db.Model):
    __tablename__ = 'movies'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String)
    genre = db.Column(db.String)
    synopsis = db.Column(db.String)
    director = db.Column(db.String)
    movie_cover_uri = db.Column(db.String)
    background_image_uri = db.Column(db.String)
    trailer_uri = db.Column(db.String)


class MoviesSchema(Schema):
    id = fields.Int()
    title = fields.Str()
    genre = fields.Str()
    synopsis = fields.Str()
    director = fields.Str()
    movie_cover_uri = fields.Str()
    background_image_uri = fields.Str()
    trailer_uri = fields.Str()


class CreateMovieSchema(Schema):
    title = fields.Str()
    genre = fields.Str()
    synopsis = fields.Str()
    director = fields.Str()
    movie_cover_uri = fields.Str()
    background_image_uri = fields.Str()
    trailer_uri = fields.Str()