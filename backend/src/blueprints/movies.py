from flask.views import MethodView
from flask_smorest import Blueprint
from Models.Movies import Movies, MoviesSchema, CreateMovieSchema
from db import db

blp = Blueprint("Movies", "movies", description="Movie data of the application")

movies_schema = MoviesSchema()

@blp.route("/movies/")
class View(MethodView):
    @blp.response(200, MoviesSchema(many=True))
    def get(self):
        news = Movies.query.order_by(Movies.title).all()        
        result = []
        for new in news:
            result.append(movies_schema.dump(new))
        return result
    
    @blp.arguments(CreateMovieSchema)
    @blp.response(200)
    def post(self, item_data):
        row = Movies(**item_data)
        print(item_data, flush=True)

        db.session.add(row)
        db.session.commit()
        db.session.refresh(row)
        return movies_schema.dump(row)
