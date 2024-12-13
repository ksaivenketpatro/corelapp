import pyodbc

def get_connection():
    try:
        connection = pyodbc.connect(
            "SERVER=CTLDBSRVR01\\CTLDBSRVR;"             # Replace with your server name
            "DATABASE=Comp_DB;"             # Replace with your database name
            "UID=sa;"            # Replace with your SQL Server username
            "PWD=!@CoreelSql12;"            # Replace with your SQL Server password
        )
        return connection
    except Exception as e:
        print("Error connecting to the database:", e)
        raise
            