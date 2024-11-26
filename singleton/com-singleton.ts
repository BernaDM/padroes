

class DatabaseConnection {
    private static instance: DatabaseConnection;
    private connection: string;
  
    private constructor() {
      this.connection = "Conexão ao banco de dados";
    }
  
    static getInstance() {
      if (!DatabaseConnection.instance) {
        DatabaseConnection.instance = new DatabaseConnection();
      }
      return DatabaseConnection.instance;
    }
  
    connect() {
      return this.connection;
    }
  }
  
  
  const db1 = DatabaseConnection.getInstance();
  const db2 = DatabaseConnection.getInstance();
  
  console.log(db1.connect());  
  console.log(db2.connect());  
  console.log(db1 === db2);  
  