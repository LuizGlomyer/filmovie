from dotenv import load_dotenv
load_dotenv()

from flask import Flask
from flask_smorest import Api
from flask_sqlalchemy import SQLAlchemy

from blueprints.movies import blp as AccessBlueprint
from blueprints.news import blp as ActionsBlueprint

from db import db


app = Flask(__name__)

app.config["PROPAGATE_EXCEPTIONS"] = True
app.config["API_TITLE"] = "Filmovie back-end"
app.config["API_VERSION"] = "v1"

app.config["OPENAPI_VERSION"] = "3.0.3"
app.config["OPENAPI_URL_PREFIX"] = "/"
app.config["OPENAPI_SWAGGER_UI_PATH"] = "/swagger-ui"
app.config["OPENAPI_SWAGGER_UI_URL"] = "https://cdn.jsdelivr.net/npm/swagger-ui-dist/"

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:postgres@postgres:5432/postgres'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


db.init_app(app)

api = Api(app)




api.register_blueprint(AccessBlueprint)
api.register_blueprint(ActionsBlueprint)