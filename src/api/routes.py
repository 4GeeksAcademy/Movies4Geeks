from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Movie, Videos, Genre, Genre_Movie
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from werkzeug.security import check_password_hash

import requests
from datetime import datetime
import time


ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGYxMDkyNDZkNzUxYmJhYjNmMTQzMGNlYzNmYmU0NCIsInN1YiI6IjY0ODgxODY1ZDJiMjA5MDBjYTIxMTg2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RiM24dMvTMZi652gXFQnpguE7dT8yYex5ZsTaY3OjJw"
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity

api = Blueprint('api', __name__)

<<<<<<< HEAD
api = Blueprint("api", __name__)


@api.route("/hello", methods=["POST", "GET"])
=======
@api.route('/hello', methods=['POST', 'GET'])
>>>>>>> 6694a87 (prueba)
def handle_hello():
    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }
    return jsonify(response_body), 200

<<<<<<< HEAD

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
    existing_user = User.query.filter_by(email=email).first()
    if existing_user:
        return jsonify({"message": "User already exists"})

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
    if user is None:
        return jsonify({"message": "User doesn't exist"}), 401

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
    data = request.json

    current_user_id = get_jwt_identity()
    print(current_user_id)

    user = User.query.filter_by(id=current_user_id).first()
    if user is None:
        raise APIException("User not found", status_code=404)
    print(user)

    return jsonify("User authenticated"), 200


@api.route("/private", methods=["GET"])
@jwt_required()
def get_user_info():
    current_user_id = get_jwt_identity()
    user = User.query.filter_by(id=current_user_id).first()
    data = []
    if user is None:
        return jsonify({"message": "User not found"}), 404
    else:
        return jsonify(message="Welcome, {}".format(user.name)), 200
=======
   
>>>>>>> 6694a87 (prueba)
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
    print(now)
    movies = Movie.query.all()
    all_movies = list(map(lambda x: x.serialize(), movies))
    upcoming_movies = []
    for movie in all_movies:
        print(movie.get("release_date"))
        movie_date = movie.get("release_date")
        dateFormatter = "%Y-%m-%d"
        fecha_final=datetime.strptime(movie_date, dateFormatter)
        fecha_date=fecha_final.date()
        print(now < fecha_date)
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
<<<<<<< HEAD
=======
@api.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    print(data)
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({"message": "Email and password are required"})

    user = User.query.filter_by(email=email).first()

    if not user:
        return jsonify({"message": "Email and password incorrect"})

   # token = create_access_token(identity=user.id)
    return jsonify({"message": "Holaaaa"})

@api.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    name = data.get('name')
    last_name = data.get('last_name')
    nickname = data.get('nickname')
    birthday = data.get('birthday')
    avatar = data.get('avatar')

    if not email or not password:
        return jsonify({"message": "Email and password are required"})

    existing_user = User.query.filter_by(email=email).first()
    if existing_user:
        return jsonify({"message": "User already exists"})

    new_user = User(
        email=email,
        password=password,
        name=name,
        last_name=last_name,
        nickname=nickname,
        birthday=birthday,
        avatar=avatar
    )

    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "User registered successfully"})

@api.route('/protected', methods=['GET'])
@jwt_required
def protected():
    current_user_id = get_jwt_identity()
    return jsonify({"message": f"Protected endpoint. User ID: {current_user_id}"})
>>>>>>> 6694a87 (prueba)
