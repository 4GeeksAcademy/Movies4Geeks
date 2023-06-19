from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    name = db.Column(db.String(120), unique=False, nullable=False)
    last_name = db.Column(db.String(120), unique=False, nullable=False)
    nickname = db.Column(db.String(120), unique=True, nullable=False)
    birthday = db.Column(db.String(80), unique=False, nullable=True)
    avatar = db.Column(db.String(80), unique=False, nullable=True)


    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "last_name": self.last_name,
            "nickname": self.nickname,
            "email": self.email,
            "birthday": self.birthday,
            "avatar": self.avatar
            # do not serialize the password, its a security breach
        }
    
class Movie(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    original_title = db.Column(db.String(120), unique=False, nullable=False)
    overview = db.Column(db.String(600), unique=False, nullable=False)
    poster_path = db.Column(db.String(120), unique=False, nullable=False)
    release_date = db.Column(db.String(120), unique=False, nullable=False)
    backdrop_path = db.Column(db.String(120), unique=False, nullable=False)
    gender_ids = db.Column(db.Integer, unique=False, nullable=False) # -----------------Preguntar Marcos
    trailer = db.Column(db.String(120), unique=False, nullable=False) # -----------------Preguntar Marcos
    image = db.Column(db.String(120), unique=False, nullable=False) # -----------------Preguntar Marcos

    def __repr__(self):
        return f'<Movie {self.original_title}>'

    def serialize(self):
        return {
            "id": self.id,
            "original_title": self.original_title,
            "poster_path": self.poster_path,
            "release_date": self.release_date,
            "backdrop_path": self.backdrop_path,
            "gender_ids": self.gender_ids,
            "trailer": self.trailer,
            "image": self.image
        }
    
class Score(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    value = db.Column(db.Integer, unique=False, nullable=False)
    movie_id = db.Column(db.Integer, db.ForeignKey('movie.id'))
    review_id = db.Column(db.Integer, db.ForeignKey('review.id'))
    

    def __repr__(self):
        return f'<Score {self.value}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "value": self.value,
            "movie_id": self.movie_id,
            "review_id": self.review_id
        }
    
class Review(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    movie_id = db.Column(db.Integer, db.ForeignKey('movie.id'))
    title = db.Column(db.String(120), unique=False, nullable=False)
    text = db.Column(db.String(1200), unique=False, nullable=False)

    

    def __repr__(self):
        return f'<Score {self.value}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "title": self.title,
            "text": self.text,
        }
    
class Like(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    review_id = db.Column(db.Integer, db.ForeignKey('review.id'))
    like = db.Column(db.Integer, unique=False, nullable=False)

    def __repr__(self):
        return f'<Like {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "review": self.review,
            "like": self.like,
        }