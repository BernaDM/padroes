// sem-abstract-method.ts
class NoAbstractProduct {
    description() {
      return ""; // Subclasses não são obrigadas a implementar
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
  
  console.log(book.description());  // "Livro de programação"
  console.log(shirt.description()); // "Camiseta de desenvolvedor"
  
  