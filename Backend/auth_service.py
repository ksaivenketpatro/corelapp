# auth_service.py
from flask import jsonify
from werkzeug.security import generate_password_hash, check_password_hash
import jwt
from datetime import datetime, timedelta

class AuthService:
    def __init__(self, db_connection, secret_key):
        # Just store the connection passed from app.py
        self.connection = db_connection
        self.secret_key = secret_key

    # Rest of the AuthService class remains the same...
    def register_user(self, data):
        try:
            username = data.get('username')
            password = data.get('password')
            email = data.get('email')

            if not username or not password or not email:
                return jsonify({'error': 'Missing required fields'}), 400

            hashed_password = generate_password_hash(password)

            with self.connection.cursor() as cursor:
                # Check if user exists
                cursor.execute("SELECT * FROM users WHERE username = %s OR email = %s", 
                             (username, email))
                if cursor.fetchone():
                    return jsonify({'error': 'Username or email already exists'}), 409

                # Create new user
                cursor.execute(
                    "INSERT INTO users (username, password, email) VALUES (%s, %s, %s)",
                    (username, hashed_password, email)
                )
                self.connection.commit()

            return jsonify({'message': 'User registered successfully'}), 201

        except Exception as e:
            print(f"Error in registration: {e}")
            return jsonify({'error': 'Internal Server Error'}), 500

    def login_user(self, data):
        try:
            username = data.get('username')
            password = data.get('password')

            if not username or not password:
                return jsonify({'error': 'Missing credentials'}), 400

            with self.connection.cursor() as cursor:
                cursor.execute("SELECT * FROM users WHERE username = %s", (username,))
                user = cursor.fetchone()

                if user and check_password_hash(user['password'], password):
                    token = jwt.encode({
                        'user_id': user['id'],
                        'username': user['username'],
                        'exp': datetime.utcnow() + timedelta(hours=24)
                    }, self.secret_key)

                    return jsonify({
                        'token': token,
                        'user': {
                            'id': user['id'],
                            'username': user['username'],
                            'email': user['email']
                        }
                    }), 200

            return jsonify({'error': 'Invalid credentials'}), 401

        except Exception as e:
            print(f"Error in login: {e}")
            return jsonify({'error': 'Internal Server Error'}), 500

    def verify_token(self, token):
        try:
            if not token:
                return None
            data = jwt.decode(token.split()[1], self.secret_key, algorithms=["HS256"])
            return data['user_id']
        except:
            return None