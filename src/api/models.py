from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(200), unique=False, nullable=False)
    name = db.Column(db.String(120), unique=False, nullable=False)
    last_name = db.Column(db.String(120), unique=False, nullable=False)
    nickname = db.Column(db.String(120), unique=True, nullable=False)
    birthday = db.Column(db.String(80), unique=False, nullable=True)
    avatar = db.Column(db.String(80), unique=False, nullable=True)
    #adding reviews and like
    reviews = db.relationship('Review', backref='user', lazy=True)
    likes = db.relationship('Like', backref='user', lazy=True)


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
            "avatar": self.avatar,
            # do not serialize the password, its a security breach
            #adding reviews and like
            
            
        }

Genre_Movie = db.Table('Genre_Movie',
    db.Column('movie_id', db.Integer, db.ForeignKey('movie.id'), primary_key=True),
    db.Column('genre_id', db.Integer, db.ForeignKey('genre.id'), primary_key=True)                       
)


class Movie(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    original_title = db.Column(db.String(120), unique=False, nullable=False)
    overview = db.Column(db.String(600), unique=False, nullable=False)
    poster_path = db.Column(db.String(120), unique=False, nullable=False)
    release_date = db.Column(db.String(120), unique=False, nullable=False)
    backdrop_path = db.Column(db.String(120), unique=False, nullable=False)
    vote_average = db.Column(db.Float(precision=2), unique=False, nullable=True)
    vote_count = db.Column(db.Integer, unique=False, nullable=True)
    genre_movie = db.relationship('Genre', secondary=Genre_Movie, lazy='subquery',
        backref=db.backref('movies', lazy=True)) 
    videos = db.relationship('Videos', backref='movie', lazy=True) 
    #adding reviews and score
    reviews = db.relationship('Review', backref='movie', lazy=True)
    scores = db.relationship('Score', backref='movie', lazy=True)
    

    def __repr__(self):
        return f'<Movie {self.original_title}>'

    def serialize(self):
        return {
            "id": self.id,
            "original_title": self.original_title,
            "overview": self.overview,
            "poster_path": self.poster_path,
            "release_date": self.release_date,
            "backdrop_path": self.backdrop_path,
            "vote_average": self.vote_average,
            "vote_count": self.vote_count,
            "genres": list(map(lambda x: x.serialize(), self.genre_movie)),
            "videos": list(map(lambda x: x.serialize(), self.videos)),
            #"genre_movie": self.genre_movie,
            #"videos": self.videos,
            #adding reviews and score
            "reviews": list(map(lambda x: x.serialize(), self.reviews)),
            "scores": list(map(lambda x: x.serialize(), self.scores))
        }
    
class Genre(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    #genre_movie = db.relationship('Genre_Movie', backref='genre', lazy=True)
    

    def __repr__(self):
        return f'<Genre {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name           
        }

class Score(db.Model): #-----------------PREGUNTAR MARCOS ---------------------#
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
    title = db.Column(db.String(200), unique=False, nullable=False)
    text = db.Column(db.Text, unique=False, nullable=False)
    #adding likes
    likes = db.relationship('Like', backref='review', lazy=True)

    

    def __repr__(self):
        return f'<Review {self.title}>'

    def serialize(self):
        text_with_br = self.text.replace('\n', '<br>')
        return {
            "id": self.id,
            "user_id": self.user_id,
            "movie_id": self.movie_id,
            "title": self.title,
            "text": text_with_br,
            #adding likes
            "likes": len([like.id for like in self.likes if like.like==1]),
            "dislike": len([like.id for like in self.likes if like.like==0]),
            "is_voted": False, 
            "vote_type": None
           
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
    


    

    
class Videos(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    key = db.Column(db.String(120), unique=False, nullable=False)
    type = db.Column(db.String(120), unique=False, nullable=False)
    site = db.Column(db.String(120), unique=False, nullable=False)
    movie_id = db.Column(db.Integer, db.ForeignKey('movie.id'))
    

    def __repr__(self):
        return f'<Videos {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "key": self.key,
            "type": self.type,
            "site": self.site,           
        }
    


class Message(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(1000), nullable=False)
    sender_name = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), nullable=False) 
   

    def __repr__(self):
        return f'<Message {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "content": self.content,
            "sender_name": self.sender_name,
            "email": self.email,  
        }