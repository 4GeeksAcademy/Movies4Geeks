from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from werkzeug.security import check_password_hash


api = Blueprint("api", __name__)


@api.route("/hello", methods=["POST", "GET"])
def handle_hello():
    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


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
    return jsonify({"token": token}), 200


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
    if user is None:
        return jsonify({"message": "User not found"}), 404
    else:
        return jsonify(message="Welcome, {}".format(user.name)), 200



