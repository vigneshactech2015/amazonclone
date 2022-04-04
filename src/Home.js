import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
    <img 
    className="home__image"
    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
    alt="image"
    />

    <div className="home__row">
    <Product
    id="12321341"
    title="Amazon echo"
    price={600.96}
    rating={5}
    image="https://i.guim.co.uk/img/media/a152f7c85a4cb9122d49058e0b006f2d0426d171/0_0_4328_2599/master/4328.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=64953f4ad1713279706a82f458359184"
    />
    <Product
    id="12321342"
    title="iphone 13"
    price={1999.99}
    rating={4}
    image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-max-blue-select?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1645552346295"
    />
    </div>


    <div className="home__row">
    <Product
    id="12321343"
    title="Noise headphones"
    price={300.96}
    rating={5}
    image="https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/headphones/noise_cancelling_headphones_700/product_silo_images/Silo_jpg/noise_cancelling_headphones_700_blk_EC_hero.psd/jcr:content/renditions/cq5dam.web.1000.1000.png"
    />
    <Product
    id="12321344"
    title="Sony Television"
    price={900.15}
    rating={3}
    image="https://m.media-amazon.com/images/I/81zeKI1IG9L._SL1500_.jpg"
    />
    <Product
    id="12321345"
    title="adidas shoe"
    price={250.25}
    rating={2}
    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9BduyxCYEZF0LVcwcMvqDmXdzrkQRWN_5WQ&usqp=CAU"
    />
    </div>
    <div className="home__row">
    <Product
    id="12321346"
    title="Wardrobe"
    price={450.96}
    rating={3}
    image="https://ii1.pepperfry.com/media/catalog/product/c/r/1100x1210/crysler-3-door-wardrobe-in-wenge-finish-by-crystal-furnitech-crysler-3-door-wardrobe-in-wenge-finish-qxf9ql.jpg"
    />
    </div>
    </div>
  )
}

export default Home