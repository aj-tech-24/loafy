document.addEventListener('DOMContentLoaded', () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  const updateCart = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    let total = 0;
    cart.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.className = 'cart-item';
      itemElement.innerHTML = `
        <img src="${item.imgSrc}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <p class="price">${item.price}</p>
      `;
      cartItems.appendChild(itemElement);
      total += parseFloat(item.price.substring(1)); 
    });

    document.getElementById('cart-total').textContent = `Total: $${total.toFixed(2)}`;
  };

  const toggleNav = () => {
    document.getElementById('nav').classList.toggle('active');
  };

  const handleAnchorClick = (e) => {
    if (this.getAttribute('href').startsWith('#')) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      document.querySelector('main').style.opacity = '0';

      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth' });
        document.querySelector('main').style.opacity = '1';
      }, 200);
    }
  };

  const filterProducts = () => {
    const query = document.getElementById('search-input').value.toLowerCase();
    document.querySelectorAll('.product').forEach(product => {
      const name = product.getAttribute('data-name').toLowerCase();
      const description = product.getAttribute('data-description').toLowerCase();
      if (name.includes(query) || description.includes(query)) {
        product.classList.add('show');
      } else {
        product.classList.remove('show');
      }
    });
  };

  document.getElementById('hamburger').addEventListener('click', toggleNav);

  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', handleAnchorClick);
  });

  document.getElementById('search-icon').addEventListener('click', function() {
    document.querySelector('.search-container').classList.toggle('active');
    document.getElementById('search-input').focus();
  });

  document.getElementById('search-input').addEventListener('input', filterProducts);

  document.querySelectorAll('.product').forEach(product => {
    product.addEventListener('click', showProductDetails);
  });

  document.getElementById('close-details').addEventListener('click', function() {
    document.getElementById('product-details').style.display = 'none';
  });

  if (document.getElementById('buy-now')) {
    document.getElementById('buy-now').addEventListener('click', function() {
      const imgSrc = this.querySelector('img').src;
      const name = this.getAttribute('data-name');
      const description = this.getAttribute('data-description');
      const price = this.querySelector('.price').textContent;
      
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.push({ imgSrc, name, description, price });
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCart();
      alert('Product added to your Cart!');
    });
  }

  if (document.getElementById('cart-items')) {
    updateCart();
  }
});