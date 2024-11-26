
class SemSingletonDatabaseConnection {
    private connection: string;
  
    constructor() {
      this.connection = "Conexão ao banco de dados";
    }
  
    connect() {
      return this.connection;
    }
  }
  
  
  const dba1 = new SemSingletonDatabaseConnection();
  const dba2 = new SemSingletonDatabaseConnection();
  
  console.log(db1.connect());  
  console.log(db2.connect());  
  console.log(db1 === db2);    
  
 
