from flask import Flask, jsonify, request
from flask_cors import CORS
from importlib import import_module
from queries import get_component_query

app = Flask(__name__)  # Create Flask application instance
CORS(app)  # Enable Cross-Origin Resource Sharing
CORS(app, origins=["http://localhost:3000"])  # Allow requests from this origin

def get_connection_config():
    """
    Prompts the user to select a database configuration file.
    """
    while True:
        print("Select configuration file:")
        print("1. db_config")
        print("2. db_config_sairam")
        choice = input("Enter your choice (1 or 2): ")

        if choice == '1':
            config_file = "db_config"
            break
        elif choice == '2':
            config_file = "db_config_sairam"
            break
        else:
            print("Invalid choice. Please enter 1 or 2.")

    try:
        config_module = import_module(config_file)  # Import the selected configuration module
        print("Database Connected!")
        return config_module.get_connection()  # Get the database connection object
    except ImportError:
        print(f"Error: Configuration file '{config_file}' not found.")
        exit(1)

# Establish the database connection at the start of the application
connection = get_connection_config() 

@app.route('/api/components', methods=['GET'])  # Define a route for handling GET requests to '/api/components'
def get_components():
    try:
        with connection.cursor() as cursor:  # Create a cursor for the current connection
            search_query = request.args.get('search', '')  # Get the search query from the request parameters
            if search_query:
                sql_query = get_component_query(search_query)  # Get the SQL query with search criteria
            else:
                sql_query = get_component_query()  # Get the default SQL query

            cursor.execute(sql_query)  # Execute the SQL query
            components = cursor.fetchall()  # Fetch all rows from the result

            # Convert the fetched data into a list of dictionaries
            columns = [column[0] for column in cursor.description]  # Get column names
            components_list = [dict(zip(columns, row)) for row in components]

            return jsonify(components_list), 200  # Return the data as a JSON response with status code 200

    except Exception as e:
        print(f"Error fetching components: {e}")
        return jsonify({"error": "Internal Server Error"}), 500  # Return an error response

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')  # Start the Flask development server