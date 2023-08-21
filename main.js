const searchInput = document.querySelector('#search-input');
const products = document.querySelectorAll('.product');

searchInput.addEventListener('keyup', filterProducts);

function filterProducts() {
  const searchText = searchInput.value.toLowerCase();

  products.forEach((product) => {
    const name = product.querySelector('h2').textContent.toLowerCase();

    let shouldShow = true;

    if (searchText && !name.includes(searchText)) {
      shouldShow = false;
    }

    if (shouldShow) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}
