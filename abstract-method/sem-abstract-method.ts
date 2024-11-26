
class NoAbstractProduct {
    description() {
      return ""; 
    }
  }
  
  class NoAbstractBook extends NoAbstractProduct {
    description() {
      return "Livro de programação";
    }
  }
  
  class NoAbstractShirt extends NoAbstractProduct {
    description() {
      return "Camiseta de desenvolvedor";
    }
  }
  
  // Teste
  const livro = new NoAbstractBook();
  const camiseta = new NoAbstractShirt();
  
  console.log(book.description());  
  console.log(shirt.description()); 
  
  
