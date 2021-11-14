import './App.css';
import {useState} from "react";
export default function App() {
const products =[{
  picture:"https://adn.damensch.com/wp-content/uploads/2021/04/4-17.jpg",
  productname:"T-Shirt",
  prize:"$30.00-$40.00"
},
{
  picture:"https://www.tshirtloot.com/wp-content/uploads/2016/02/2-b-375x400.png",
  productname:"womens-t-Shirt",
  prize:"$35.00-$45.00"
},
{
  picture:"https://images.ctfassets.net/40akseett7bn/clp_cli_t-shirts_women_image/df9c79b3b1b7f15eae7cc06b1b1daf3a/womens-tshirt.jpg",
  productname:"womens-t-Shirt",
  prize:"$40.00-$50.00"
},
{
  picture:"https://assets.ajio.com/medias/sys_master/root/20210403/D90u/6068b5c27cdb8c1f147a9f12/orchid_blues_beige_tapered_fit_pants_with_button_accent.jpg",
  productname:"pants",
  prize:"$20.00-$40.00"
},{
  picture:"https://cf.shopee.co.th/file/0bbdf6851caba601e3ac934f8702caf9",
  productname:"men-pants",
  prize:"$30.00-$40.00"
},{
  picture:"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2234305/2018/2/23/11519383167302-ether-Men-White-Regular-Fit-Mid-Rise-Clean-Look-Stretchable-Cropped-Jeans-8401519383167069-1.jpg",
  productname:"Men-White-Regular-Fit",
  prize:"$40.00-$50.00"
},{
  picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRslq0_H-wXSYBkc2077qogwZJ27ROHbnULG80OqkocBhpdHdDV8_7Zuy87x98Bb-PxBpw&usqp=CAU",
  productname:"womens-t-Shirt",
  prize:"$20.00-$40.00"
},{
  picture:"https://images.unsplash.com/photo-1554568218-0f1715e72254?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
  productname:"t-Shirt",
  prize:"$30.00-$40.00"
},{
  picture:"https://cdn.notonthehighstreet.com/fs/40/d3/ce04-1a04-45a0-b704-bacae7f3b492/original_interactive-glow-kids-t-shirt-super-green-glow-black.jpg",
  productname:"t-Shirt",
  prize:"$40.00-$60.00"
},{
  picture:"https://i.pinimg.com/originals/85/60/56/8560566c4de595d55105e3fc29a53301.png",
  productname:"glow-kids-t-shirt",
  prize:"$40.00-$60.00"
},{
  picture:"https://aeo.imgix.net/img/app/product/4/492435-4499238.jpg?w=618&auto=format,compress,enhance",
  productname:"graphic-t-Shirt",
  prize:"$50.00-$60.00"
},{
  picture:"https://aeo.imgix.net/img/app/product/4/492438-3679348.jpg?w=618&auto=format",
  productname:"pants",
  prize:"$50.00-$60.00"
}]
 return (
    <div className="App">
 <Title/>
    <Head/>
    <Productlist products={products}/>
    <Foot/>
 </div>
  );
}
function Title(){
  const [shop, setShop] = useState(true);
  const [menu,setMenu] = useState(true);
  const items = {
    display:shop?"none":"block"
  };
  const items1 = {
    display:menu?"none":"block"
  };
  return(
    /* Navigation */
    <nav>
      <div className="home-col">
        <div className="start-menu">
      <h3>Start Bootstrap</h3>
      <div className="menu-icon" onClick={()=>setMenu(!menu)}>
      <img className="menu-icon-img" src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-menu-multimedia-kiranshastry-solid-kiranshastry-1.png" alt="menu-bar"/>
      </div>
      <div className="cart-design">
          <p>🛒cart</p>
          <p className="cart-value">0</p>
        </div>
      </div>
      <div  className="home-col-about" style={items1}>
        <p>Home</p>
        <p>About</p>
        <p className="shop-downwards" onClick={()=>setShop(!shop)}>Shop▼</p>
        <div className="shop-downwards-option" style={items}>
        <p><hr></hr></p>
        <p>All Products</p>
        <p><hr></hr></p>
        <p>Popular Items</p>
        <p>New Arrivals</p>
        </div>
       
      </div>
    </div>
    </nav>
 
   
  );
}
function Head() {
  return (
    <header className="head-head">
      <div className="head-div1">
        <div className="head-div2">
          <h1 className="shop">Shop in style</h1>
          <p className="with">with this shop homepage template</p>
        </div>
      </div>
    </header>
  );
}
function Productlist({products}) {
  return (
    <section className="sec">
       <div className="container-det">
         <div>
           <div className="new-product">
           {products.map(({ picture, productname, prize }) => (<Details
        picture={picture}
        productname={productname}
        prize={prize} />
      ))}
           </div>
         </div>
      </div>
    </section>
  );
}
function Details({ picture, productname, prize }) {
  return (
            <div className="det-poster">
              <img className="tshirt" src={picture} alt={productname} />
              <div className="product-con">
                <div>
                  <h1>{productname}</h1>
                  <div>
                    <div>⭐⭐⭐⭐⭐</div>
                  </div>
                  <p>{prize}</p>
                  <div>
                    <div className="cart-div2">
                      <a className="cart-but" href="#!">Add to cart</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  );
}

function Foot(){
  return(
  <footer className="foot">
    <div className="foot-div">
      <p className="copyright">Copyright © your website 2021</p>
    </div>
  </footer>
  );
}
