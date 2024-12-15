# auth_service.py
from flask import jsonify
from werkzeug.security import generate_password_hash, check_password_hash
import jwt
from datetime import datetime, timedelta
import bcrypt

class AuthService:
    def __init__(self, db_connection, secret_key):
        self.connection = db_connection
        self.secret_key = secret_key

    def register_user(self, data):
        try:
            username = data.get('username')
            password = data.get('password')
            email = data.get('email')

            if not username or not password or not email:
                return jsonify({'error': 'Missing required fields'}), 400

            # Generate a salt and hash the password using bcrypt
            salt = bcrypt.gensalt(rounds=12)
            hashed_password = bcrypt.hashpw(password.encode('utf-8'), salt)

            with self.connection.cursor() as cursor:
                # Check if user exists
                cursor.execute("SELECT * FROM users WHERE username = ? OR email = ?", 
                             (username, email))
                if cursor.fetchone():
                    return jsonify({'error': 'Username or email already exists'}), 409

                # Create new user
                cursor.execute(
                    "INSERT INTO users (username, password, email) VALUES (?, ?, ?)",
                    (username, hashed_password.decode('utf-8'), email)
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
                cursor.execute("SELECT id, username, password, email FROM users WHERE username = ?", (username,))
                row = cursor.fetchone()
                
                if row:
                    # Convert row to dictionary with column names
                    user = {
                        'id': row[0],          # id
                        'username': row[1],     # username
                        'password': row[2],     # password
                        'email': row[3]         # email
                    }

                    if bcrypt.checkpw(password.encode('utf-8'), 
                                    user['password'].encode('utf-8')):
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

    def get_user_profile(self, user_id):
        try:
            with self.connection.cursor() as cursor:
                cursor.execute("SELECT id, username, email FROM users WHERE id = ?", 
                             (user_id,))
                row = cursor.fetchone()
                if row:
                    user = {
                        'id': row[0],
                        'username': row[1],
                        'email': row[2]
                    }
                    return jsonify(user), 200
                return jsonify({'error': 'User not found'}), 404
        except Exception as e:
            print(f"Error fetching user profile: {e}")
            return jsonify({'error': 'Internal Server Error'}), 500