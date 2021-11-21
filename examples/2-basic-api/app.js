const result = document.querySelector('.result')

const fetchData = async () => {
  try {
    const { data } = await axios.get('/api/basic-api')
    const products = data.map((product) => {
      const {
        id,
        name,
        image: { url },
        price,
      } = product
      return `<article class="product">
        <img
          src=${url}
          alt=${name}
        />
        <div class="info">
          <h5>${name}</h5>
          <h5 class="price">₹ ${price}</h5>
        </div>
      </article>`
    })
    result.innerHTML = products
  } catch (error) {
    console.log(error)
  }
}

fetchData()
