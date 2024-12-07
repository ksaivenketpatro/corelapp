from db_config import get_connection



def fetch_first_five_rows():
    """Fetch the first 5 rows from the specified table."""
    try:
        conn = get_connection()
        cursor = conn.cursor()
        
        table_name = 'Comp_MfgStatus'  # Replace with your table name
        query = f"SELECT TOP 5 * FROM {table_name}"
        cursor.execute(query)
        
        rows = cursor.fetchall()
        print("First 5 rows from the table:")
        for row in rows:
            print(row)
    except Exception as e:
        print("Error fetching data:", e)
    finally:
        if 'cursor' in locals():
            cursor.close()
        if 'conn' in locals():
            conn.close()


if __name__ == '__main__':
    fetch_first_five_rows()
