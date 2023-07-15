"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Movie, Videos, Genre, Genre_Movie, Score, Review
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
import requests
from datetime import datetime
import time

api = Blueprint('api', __name__)
ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGYxMDkyNDZkNzUxYmJhYjNmMTQzMGNlYzNmYmU0NCIsInN1YiI6IjY0ODgxODY1ZDJiMjA5MDBjYTIxMTg2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RiM24dMvTMZi652gXFQnpguE7dT8yYex5ZsTaY3OjJw"

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/get-upcoming', methods=['GET'])
def get_upcoming():

    url = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"

    headers = {"accept": "application/json", "Authorization": f"Bearer {ACCESS_TOKEN}"}

    response = requests.get(url, headers=headers)
    data = response.json()
    for movie in data.get("results", []):
        #print(movie.get("title"))
        print(Movie.query.filter_by(id= movie.get("id")).first())
        if not Movie.query.filter_by(id= movie.get("id")).first(): #copiar desde
            print("mensaje")
            new_movie = Movie(
                id= movie.get("id"),
                original_title=movie.get("title"),
                overview=movie.get("overview"),
                poster_path=movie.get("poster_path"),
                release_date=movie.get("release_date"),
                backdrop_path=movie.get("backdrop_path"),
                vote_average=movie.get("vote_average"),
                vote_count=movie.get("vote_count")
            )
            for genre_id in movie.get("genre_ids"):
                genre= Genre.query.get(genre_id)
                print(genre)
                new_movie.genre_movie.append(genre)
                #genre_movie=Genre_Movie(genre_id=genre_id, movie_id=new_movie.id)
                #db.session.add(genre_movie)
                #db.session.commit()
            db.session.add(new_movie)
            db.session.commit()
            print(new_movie)

            get_videos(new_movie.id) #copiar hasta
            
    return jsonify("response_body"), 200

@api.route('/get-top-rated', methods=['GET'])
def get_top_rated():

    url = "https://api.themoviedb.org/3/movie/top_rated"

    headers = {"accept": "application/json", "Authorization": f"Bearer {ACCESS_TOKEN}"}

    response = requests.get(url, headers=headers)
    data = response.json()
    for movie in data.get("results", []):
        print(movie.get("title"))
        if not Movie.query.filter_by(id= movie.get("id")).first(): #copiar desde
            print("mensaje")
            new_movie = Movie(
                id= movie.get("id"),
                original_title=movie.get("title"),
                overview=movie.get("overview"),
                poster_path=movie.get("poster_path"),
                release_date=movie.get("release_date"),
                backdrop_path=movie.get("backdrop_path"),
                vote_average=movie.get("vote_average"),
                vote_count=movie.get("vote_count")
            )
            for genre_id in movie.get("genre_ids"):
                genre= Genre.query.get(genre_id)
                print(genre)
                new_movie.genre_movie.append(genre)
                #genre_movie=Genre_Movie(genre_id=genre_id, movie_id=new_movie.id)
                #db.session.add(genre_movie)
                #db.session.commit()
            db.session.add(new_movie)
            db.session.commit()
            print(new_movie)

            get_videos(new_movie.id) #copiar hasta
        
    return jsonify("response_body"), 200


@api.route('/get-genres', methods=['GET'])
def get_genres():

    url = "https://api.themoviedb.org/3/genre/movie/list"

    headers = {"accept": "application/json", "Authorization": f"Bearer {ACCESS_TOKEN}"}

    response = requests.get(url, headers=headers)
    data = response.json()
    for genre in data.get("genres", []):
        print(genre.get("name"))
        if not Genre.query.filter_by(id= genre.get("id")).first():
            new_genre = Genre(id=genre.get("id"),name=genre.get("name"))
            db.session.add(new_genre)
            db.session.commit()
        
    return jsonify("response_body"), 200


@api.route('/get-movies-by-genre', methods=['GET'])
def get_movies_by_genre():

    url = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=27" #27=Horror genre and is sorted by popularity

    headers = {"accept": "application/json", "Authorization": f"Bearer {ACCESS_TOKEN}"}

    response = requests.get(url, headers=headers)
    data = response.json()
    for movie in data.get("results", []):
        print(movie.get("title"))
        if not Movie.query.filter_by(id= movie.get("id")).first(): #copiar desde
            print("mensaje")
            new_movie = Movie(
                id= movie.get("id"),
                original_title=movie.get("title"),
                overview=movie.get("overview"),
                poster_path=movie.get("poster_path"),
                release_date=movie.get("release_date"),
                backdrop_path=movie.get("backdrop_path"),
                vote_average=movie.get("vote_average"),
                vote_count=movie.get("vote_count")
            )
            for genre_id in movie.get("genre_ids"):
                genre= Genre.query.get(genre_id)
                print(genre)
                new_movie.genre_movie.append(genre)
                #genre_movie=Genre_Movie(genre_id=genre_id, movie_id=new_movie.id)
                #db.session.add(genre_movie)
                #db.session.commit()
            db.session.add(new_movie)
            db.session.commit()
            print(new_movie)

            get_videos(new_movie.id) #copiar hasta
        
    return jsonify("response_body"), 200



def get_videos(movie_id):
    
    url = f"https://api.themoviedb.org/3/movie/{movie_id}/videos" #575264 is the id of the movie

    headers = {"accept": "application/json", "Authorization": f"Bearer {ACCESS_TOKEN}"}

    response = requests.get(url, headers=headers)
    data = response.json()
    for videos in data.get("results", []):
        print(videos.get("type"))
        video=Videos(
            name=videos.get("name"),
            key=videos.get("key"),
            type=videos.get("type"),
            site=videos.get("site"),
            movie_id=movie_id
        )
        db.session.add(video)
        db.session.commit()
        
    return jsonify("response_body"), 200

@api.route('/upcoming', methods=['GET'])
def upcoming():
    now = datetime.now().date()
    #print(now)
    movies = Movie.query.all()
    all_movies = list(map(lambda x: x.serialize(), movies))
    upcoming_movies = []
    for movie in all_movies:
        #print(movie.get("release_date"))
        movie_date = movie.get("release_date")
        dateFormatter = "%Y-%m-%d"
        fecha_final=datetime.strptime(movie_date, dateFormatter)
        fecha_date=fecha_final.date()
        #print(now < fecha_date)
        if now < fecha_date:
            upcoming_movies.append(movie)
    #print(upcoming_movies)     
    #return all_upcoming
    return jsonify({"results": upcoming_movies}), 200 
    

@api.route('/top_rated', methods=['GET'])
def top_rated():
    movies = Movie.query.all()
    all_movies = list(map(lambda x: x.serialize(), movies))
    #print(all_movies)
    all_movies_filtered = [movie for movie in all_movies if movie.get("vote_count") >= 10000]
    movies_by_rate = sorted(all_movies_filtered, key=lambda x: (x.get("vote_average") , x.get("vote_count") ), reverse=True)
    #print(movies_by_rate)
    return jsonify({"results": movies_by_rate})


@api.route('/all_movies', methods=['GET'])
def all_movies():
    movies = Movie.query.all()
    all_movies = list(map(lambda x: x.serialize(), movies))
    return jsonify({"results": all_movies})


@api.route('/review', methods=['POST'])
def review():
    data = request.json
    print(data)
    score = data.get("score")
    title = data.get("title")
    text = data.get("text")
    movie_id = data.get("movie_id")
    user_id = data.get("user_id")
    #validar si existe un score con este usuario para esta pelicula
    get_score = Score.query.filter_by(user_id=user_id, movie_id=movie_id).first()
    if get_score:
        return jsonify({"results": "Score existe"}), 400
    #validar si existe un review con este usuario a esta pelicula
    get_review = Review.query.filter_by(user_id=user_id, movie_id=movie_id).first()
    if get_review:
        return jsonify({"results": "review existe"}), 400
    #validar que exista la pelicula
    get_movie = Movie.query.filter_by(id=movie_id).first()
    if not get_movie:
        return jsonify({"results": "no existe la pelicula"}), 400
    #guardar el review
    new_review = Review(
        user_id = user_id,
        movie_id = movie_id,
        title = title,
        text = text
    )
    db.session.add(new_review)
    db.session.commit()
    #guardar el score 
    new_score = Score(
        user_id = user_id,
        value = score,
        movie_id = movie_id,
        review_id = new_review.id
    )
    db.session.add(new_score)
    db.session.commit()
    return jsonify({"results": "review creada con succeso"})


@api.route('/all_movies/<int:movie_id>', methods=['GET'])
def get_movie(movie_id):
    movie = Movie.query.get(movie_id)
    
    if movie:
        movie_detail = movie.serialize()       
        return jsonify({"results": movie_detail})
    
    return jsonify({'mensaje': 'This movie doesn´t exist'})



@api.route('/all_movies/trailer/<int:movie_id>', methods=['GET'])
def get_trailer(movie_id):
    movie = Movie.query.get(movie_id)
    if movie:
        videos = movie.videos
        all_videos = list(map(lambda x: x.serialize(), videos))
        #print(all_videos)
        #return jsonify(all_videos)
        for video in all_videos:
            #print(video)
            if video['type'] == 'Trailer':
                return jsonify({"results": video['key']}) 
    return jsonify({'message': 'This movie doesn´t have trailer'})


@api.route('/all_movies/genres/<int:movie_id>', methods=['GET'])
def get_genres_by_movie_id(movie_id):
    movie = Movie.query.get(movie_id)
    if movie:
        genres = movie.genre_movie
        all_genres = list(map(lambda x: x.serialize(), genres))
        #print(all_genres)
        #return jsonify(all_genres)
        genres_name = []
        for genre in all_genres:
        #     #print(video)
        #     if video['type'] == 'Trailer':
            genres_name.append(genre['name'])
        return jsonify({"results": genres_name}) 
    return jsonify({'message': 'This movie doesn´t have trailer'})


@api.route('/reviews/<int:movie_id>', methods=['GET'])
def get_reviews_by_id(movie_id):
    reviews = Review.query.filter_by(movie_id=movie_id).all()
    reviews_data = [review.serialize() for review in reviews]
    print(reviews_data)
    return jsonify({"results": reviews_data})

def validate_password(password):
    requirements = [
        "At least 8 characters in length",
        "At least one uppercase letter",
        "At least one lowercase letter",
        "At least one digit"
    ]
  
    if len(password) < 8:
        return False, requirements
    if not any(char.isupper() for char in password):
        return False, requirements
    if not any(char.islower() for char in password):
        return False, requirements
    if not any(char.isdigit() for char in password):
        return False, requirements
    return True, []



@api.route("/register", methods=["POST"])
def register():
    data = request.get_json()
    print(data)
    email = data.get("email")
    password = data.get("password")
    name = data.get("name")
    last_name = data.get("last_name")
    nickname = data.get("nickname")
    birthday = data.get("birthday")
    avatar = data.get("avatar")

    if not email or not password:
        return jsonify({"message": "Email and password are required"})
    
    existing_user_email = User.query.filter_by(email=email).first()
    
    if existing_user_email:
        return jsonify({"message": "User with this email already exists"})
    
    existing_user_nickname = User.query.filter_by(nickname=nickname).first()
    
    if existing_user_nickname:
        return jsonify({"message": "Nickname already exists"})
    
    valid_password, requirements = validate_password(password)
    if not valid_password:
        return jsonify({
            "message": "<p className='text-black'> Password must meet the following requirements:</p>",
            "requirements": requirements
        })

    new_user = User(
        email=email,
        password=password,
        name=name,
        last_name=last_name,
        nickname=nickname,
        birthday=birthday,
        avatar=avatar,
    )

    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "User registered successfully"})


@api.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    print(data)
    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({"message": "Email and password are required"}), 400
    user = User.query.filter_by(email=email).first()
    print(user)

    if not user:
        return jsonify({"message": "User doesn't exist"}), 401
    token = create_access_token(identity=user.id)
    print(token)

    if user.password != password:
        return jsonify({"message": "Password incorrect"}), 401

    token = create_access_token(identity=user.id)
    return (
        jsonify(
            {
                "token": token,
                "user": user.serialize(),
            }
        ),
        200,
    )


@api.route("/private", methods=["POST"])
@jwt_required()
def validate_token():
    current_user_id = get_jwt_identity()
    user = User.query.filter_by(id=current_user_id).first()
    
    if user is None:
        raise APIException("User not found", status_code=404)
    
    return jsonify("User authenticated"), 200


@api.route("/private", methods=["GET"])
@jwt_required()
def get_user_info():
    current_user_id = get_jwt_identity()
    user = User.query.filter_by(id=current_user_id).first()
    
    if user is None:
        return jsonify({"message": "User not found"}), 404
    
    return jsonify(message="Welcome, {}".format(user.name)), 200


@api.errorhandler(APIException)
def handle_api_exception(error):
    response = jsonify(error.to_dict())
    response.status_code = error.status_code
    return response

class APIException(Exception):
    def __init__(self, message, status_code):
        super().__init__(message)
        self.status_code = status_code

    def to_dict(self):
        return {
            "message": str(self),
            "status_code": self.status_code
        }
