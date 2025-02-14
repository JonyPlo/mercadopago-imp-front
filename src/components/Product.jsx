import axios from 'axios'

export const Product = () => {
  // NOTA: Este es solo un ejemplo para ilustrar el objeto de datos del producto.
  // En un entorno de producción real, los datos del producto provendrían de una base de datos o de un servidor.
  const productData = {
    title: 'Hamburguesa',
    quantity: 1,
    price: 1000,
  }

  const createPreference = async () => {
    try {
      const response = await axios.post(
        'http://localhost:3000/create_preference',
        productData
      )
      const { redirectUrl } = response.data
      return redirectUrl
    } catch (error) {
      console.log(error)
    }
  }

  const handleBuy = async () => {
    const url = await createPreference()
    if (url) window.location.href = url
  }

  return (
    <>
      <article className='p-8 bg-slate-800 rounded-xl text-white border border-slate-600'>
        <div className='w-56 rounded-xl overflow-hidden'>
          <img
            src='https://d31npzejelj8v1.cloudfront.net/media/recipemanager/recipe/1687289598_doble-carne.jpg'
            alt='Hamburguesa deliciosa'
          />
        </div>
        <div className='space-y-2 mt-2'>
          <h3 className='text-3xl font-bold'>{productData.title}</h3>
          <p className='text-xl font-semibold mb-2'>${productData.price}</p>
          <button
            className='py-2 w-full bg-emerald-600 rounded-xl'
            onClick={handleBuy}
          >
            Comprar
          </button>
        </div>
      </article>
    </>
  )
}
