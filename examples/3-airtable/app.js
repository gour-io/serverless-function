const result = document.querySelector('.result')

const fetchProducts = async () => {
  try {
    const { data } = await axios.get('/api/complete')
    // console.log(data)
    const products = data
      .map((product) => {
        const { id, name, url, price } = product
        return `<a href="product.html?id=${id}">
        <article class="product">
          <img
            src=${url}
            alt=${name}
          />
          <div class="info">
            <h5>${name}</h5>
            <h5 class="price">₹ ${price}</h5>
          </div>
        </article></a>`
      })
      .join('')
    result.innerHTML = products
  } catch (error) {
    result.innerHTML = `<h4>There was an error</h4>`
  }
}

fetchProducts()
