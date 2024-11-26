

abstract class AbstractProduct {
    abstract description(): string; 
  }
  
  class AbstractBook extends AbstractProduct {
    description() {
      return "Livro de programação";
    }
  }
  
  class AbstractShirt extends AbstractProduct {
    description() {
      return "Camiseta de desenvolvedor";
    }
  }
  
  
  const book = new AbstractBook();
  const shirt = new AbstractShirt();
  
  console.log(book.description());  
  console.log(shirt.description()); 
  
  