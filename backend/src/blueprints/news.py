from flask.views import MethodView
from flask_smorest import Blueprint
from Models.News import News, NewsSchema, CreateNewsSchema
from db import db

blp = Blueprint("News", "news", description="News published to the system")

news_schema = NewsSchema()

@blp.route("/news/")
class View(MethodView):
    @blp.response(200, NewsSchema(many=True))
    def get(self):
        news = News.query.order_by(News.id.desc()).all()
        result = []
        for new in news:
            result.append(news_schema.dump(new))
        return result
    
    @blp.arguments(CreateNewsSchema)
    @blp.response(200)
    def post(self, item_data):
        row = News(**item_data)
        print(item_data, flush=True)
        
        db.session.add(row)
        db.session.commit()
        db.session.refresh(row)
        return news_schema.dump(row)
