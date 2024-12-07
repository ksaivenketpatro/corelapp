from flask import Flask, jsonify, request
from flask_cors import CORS
from db_config import get_connection
from queries import get_component_query  # Import the query from queries file

app = Flask(__name__)
CORS(app)
CORS(app, origins=["http://localhost:3000"])

@app.route('/api/components', methods=['GET'])
def get_components():
    try:
        search_query = request.args.get('search', '')  # Get the search query from the request
        connection = get_connection()
        cursor = connection.cursor()

        # If search query is provided, update the query with LIKE condition
        if search_query:
            sql_query = get_component_query(search_query)
        else:
            sql_query = get_component_query()  # Use the default query if no search term

        cursor.execute(sql_query)
        components = cursor.fetchall()

        # Convert each row into a dictionary
        columns = [column[0] for column in cursor.description]  # Get column names
        components_list = [dict(zip(columns, row)) for row in components]

        return jsonify(components_list), 200  # Return the components in the response

    except Exception as e:
        print(f"Error fetching components: {e}")
        return jsonify({"error": "Internal Server Error"}), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
