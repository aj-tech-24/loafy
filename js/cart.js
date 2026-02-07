document.addEventListener('DOMContentLoaded', () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  const updateCart = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
    const cartItems = document.getElementById('cart-items');
    if (cartItems) {
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
    }
  };

  const buyNowButton = document.getElementById('buy-now');
  if (buyNowButton) {
    buyNowButton.addEventListener('click', () => {
      const imgSrc = document.getElementById('details-img').src;
      const name = document.getElementById('details-name').textContent;
      const description = document.getElementById('details-description').textContent;
      const price = document.getElementById('details-price').textContent;

      cart.push({ imgSrc, name, description, price });
      updateCart();
      alert('Product added to cart!');
    });
  }

  const cartItems = document.getElementById('cart-items');
  if (cartItems) {
    updateCart();
  }

  const hamburger = document.getElementById('hamburger');
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      document.getElementById('nav').classList.toggle('active');
    });
  }

  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const href = anchor.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();

        const target = document.querySelector(href);
        const main = document.querySelector('main');
        main.style.opacity = '0';

        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth' });
          main.style.opacity = '1';
        }, 200);
      }
    });
  });

  const searchIcon = document.getElementById('search-icon');
  if (searchIcon) {
    searchIcon.addEventListener('click', () => {
      const searchContainer = document.querySelector('.search-container');
      if (searchContainer) {
        searchContainer.classList.toggle('active');
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
          searchInput.focus();
        }
      }
    });
  }

  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase();
      document.querySelectorAll('.product').forEach(product => {
        const name = product.getAttribute('data-name').toLowerCase();
        const description = product.getAttribute('data-description').toLowerCase();
        if (name.includes(query) || description.includes(query)) {
          product.classList.add('show');
        } else {
          product.classList.remove('show');
        }
      });
    });
  }
});