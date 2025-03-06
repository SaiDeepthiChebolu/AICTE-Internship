import React from 'react'

const Home = () => {
  return (
    <div>
   <img src="rv.jpg" className="img-fluid w-100 pt-1" alt="..."/ >
     <div className="row row-cols-1 row-cols-md-2 g-4 m-2">
  <div className="col">
    <div className="card">
      <img src="/veg.webp" className="card-img-top" alt="..." height={300}/>
      <div className="card-body">
        <h5 className="card-title">Vegetarian Recipes</h5>
        <p className="card-text">Vegetarian cuisine is incredibly diverse and flavorful, offering a wide range of options for every taste and preference. From hearty stews and curries to light salads and appetizers, there's something for everyone to enjoy.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="/non-veg.jpg" className="card-img-top" alt="..." height={300}/ >
      <div className="card-body">
        <h5 className="card-title">Non-Vegetarian Recipes</h5>
        <p className="card-text">Non-vegetarian recipes celebrate the rich and diverse flavors of meat, poultry, and seafood. These dishes often feature succulent cuts of meat cooked to perfection, infused with aromatic spices, and paired with complementary ingredients.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="/egg.jpeg" className="card-img-top" alt="..." height={300}/ >
      <div className="card-body">
        <h5 className="card-title">Egg Recipes</h5>
        <p className="card-text">Egg recipes are a celebration of versatility and simplicity.  From the humble fried egg to the elegant soufflé, eggs offer a blank canvas for culinary creativity.Eggs are truly a kitchen staple, offering endless possibilities for delicious and satisfying meals.  </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="/indo-chinese.webp" className="card-img-top" alt="..." height={300}/>
      <div className="card-body">
        <h5 className="card-title">Indo-Chinese Recipes</h5>
        <p className="card-text">Indo-Chinese cuisine is a vibrant and exciting fusion, a delicious marriage of Indian spices and Chinese cooking techniques.It's a culinary adventure that takes the familiar flavors of Indian street food and gives them a tantalizing twist.  </p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Home;