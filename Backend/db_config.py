import pyodbc

def get_connection():
    try:
        connection = pyodbc.connect(
            "DRIVER={ODBC Driver 17 for SQL Server};"
            "SERVER=VENKET-PC;"             # Replace with your server name
            "DATABASE=Comp_DB;"             # Replace with your database name
            "Trusted_Connection=yes;"      # Use Windows Authentication
        )
        return connection
    except Exception as e:
        print("Error connecting to the database:", e)
        raise
