const result = document.querySelector('.result')

const fetchProduct = async () => {
  result.innerHTML = `<h2>Loading...</h2>`
  try {
    const id = window.location.search
    const { data } = await axios.get(`/api/complete${id}`)
    const { name, desc, image, price } = data.fields
    const { url } = image[0]

    const product = `<h1 class="title">${name}</h1>
  <article class="product">
    <img class="product-img"
    src=${url}
    alt=${name}
    />
    <div class="product-info">
      <h5 class="title">${name}</h5>
      <h5 class="price">$${price}</h5>
      <p class="desc">${desc}</p>
    </div>
  </article>`
    result.innerHTML = product
  } catch (error) {
    result.innerHTML = `<h2>${error.response.data}</h2>`
  }
}

fetchProduct()
