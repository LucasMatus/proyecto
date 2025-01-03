* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    padding: 20px;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  
  .products {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .product {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 200px;
    text-align: center;
  }
  
  .product h3 {
    margin-bottom: 10px;
  }
  
  .product p {
    margin-bottom: 20px;
  }
  
  .add-to-cart {
    background-color: #28a745;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .add-to-cart:hover {
    background-color: #218838;
  }
  
  .cart {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    width: 300px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .cart h2 {
    margin-bottom: 20px;
  }
  
  .cart ul {
    list-style-type: none;
    margin-bottom: 20px;
  }
  
  .cart ul li {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  
  .cart ul li button {
    background-color: #dc3545;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .cart ul li button:hover {
    background-color: #c82333;
  }
  
  #clear-cart {
    background-color: #17a2b8;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  #clear-cart:hover {
    background-color: #138496;
  }
  
