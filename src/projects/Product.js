import "./pp.css"

const Product = ({ name, ram, price, profile, cart, setcart }) => {
    // Add the product to the cart
    const add = () => {
      // Check if the product is already in the cart
      if (!cart.some(item => item.name === name)) {
        setcart([...cart, { name, ram, price, profile }]);
      }
    };
  
    // Remove the product from the cart
    const remove = () => {
      setcart(cart.filter((item) => item.name !== name));
    };
  
    return (
      <div className="product-card">
        <div className="pro">
          <img src={profile} alt={name} />
        </div>
        <div className="detail">
          <h3>{name}</h3>
          <p>RAM: {ram}</p>
          <p>Price: ${price}</p>
          {cart.some((item) => item.name === name) ? (
            <button className="btn-re" onClick={remove}>
              Remove from cart
            </button>
          ) : (
            <button className="btn-add" onClick={add}>
              Add to cart
            </button>
          )}
        </div>
      </div>
    );
  };

export default Product
