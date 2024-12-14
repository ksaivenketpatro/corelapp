# app.py
from flask import Flask, jsonify, request
from flask_cors import CORS
from importlib import import_module
from queries import get_component_query
from auth_service import AuthService
import sys

# Check if config file is provided as argument
if len(sys.argv) != 2 or sys.argv[1] not in ['db_config', 'db_config_sairam']:
    print("Usage: python app.py <db_config|db_config_sairam>")
    sys.exit(1)

app = Flask(__name__)
CORS(app)
CORS(app, origins=["http://localhost:3000"])
app.config['SECRET_KEY'] = 'your-secret-key-here'

def get_connection_config():
    """
    Gets database connection based on command line argument
    """
    try:
        config_module = import_module(sys.argv[1])
        print("Database Connected!")
        return config_module.get_connection()
    except ImportError:
        print(f"Error: Configuration file '{sys.argv[1]}' not found.")
        exit(1)

# Initialize database connection ONCE and pass it to auth service
connection = get_connection_config()
auth_service = AuthService(connection, app.config['SECRET_KEY'])

@app.route('/api/register', methods=['POST'])
def register():
    return auth_service.register_user(request.get_json())

@app.route('/api/login', methods=['POST'])
def login():
    return auth_service.login_user(request.get_json())

@app.route('/api/components', methods=['GET'])
def get_components():
    try:
        with connection.cursor() as cursor:
            search_query = request.args.get('search', '')
            if search_query:
                sql_query = get_component_query(search_query)
            else:
                sql_query = get_component_query()

            cursor.execute(sql_query)
            components = cursor.fetchall()
            columns = [column[0] for column in cursor.description]
            components_list = [dict(zip(columns, row)) for row in components]

            return jsonify(components_list), 200

    except Exception as e:
        print(f"Error fetching components: {e}")
        return jsonify({"error": "Internal Server Error"}), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')