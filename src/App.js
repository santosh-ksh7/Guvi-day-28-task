import './App.css';
import {useState} from "react";
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Card from '@mui/material/Card';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function App() {

  const[cartvalue, setCartvalue] = useState(0);

  let arr = [
      {
        size: "450*300",
        sale: null,
        type: "Fancy Product",
        rating: 0,
        price: "$40.00 - $80.00",
        pricecut: null
      },
    {
      size: "450*300",
        sale: "sale",
        type: "Special Item",
        rating: "5",
        price: "$18.00",
        pricecut: "$20.00"
    },
    {
      size: "450*300",
      sale: "sale",
      type: "Sale Item",
      rating: 0,
      price: "$25.00",
      pricecut: "$50.00"
    },
    {
      size: "450*300",
      sale: "sale",
      type: "Popular Item",
      rating: "5",
      price: "$40.00",
      pricecut: null
    },
    {
      size: "450*300",
        sale: "sale",
        type: "Sale Item",
        rating: 0,
        price: "$50.00",
        pricecut: "25.00"
    },
    {
      size: "450*300",
        sale: null,
        type: "Fancy Item",
        rating: 0,
        price: "$120.00 - $280.00",
        pricecut: null
    },
    {
      size: "450*300",
        sale: "sale",
        type: "Special Item",
        rating: "5",
        price: "$18.00",
        pricecut: "$20.00"
    },
    {
      size: "450*300",
        sale: null,
        type: "Popular Item",
        rating: "5",
        price: "$40.00",
        pricecut: null
    }
  ];

  return (
    <div className="App">
      <Headercomponent cartvalue={cartvalue} />
      <Banner />
      <div className="itemcontainer">
        {arr.map((ele,index) => <Main obj={ele} key={index} cartvalue={cartvalue} setCartvalue={setCartvalue} />)}
      </div>
      <Footr />
    </div>
  );
}

export default App;

function Footr(){
  return <div className='bbb'>Copyright © Your Website 2022</div>
}



function Headercomponent({cartvalue}){

  const[clicked, setClicked] = useState(false)

  const c1 = {
    display: clicked ? "block" : "none",
    position: "absolute",
    left: "645px",
    // backgroundColor: "white",
    top: "47px",
    // color: "black",
    zIndex: 1,
    textAlign: "center"
  }

  return (
    <div className='header'>
      <div className='headercontainer1'>
        <p style={{fontSize: "20px"}}>Strat Bootstrap</p>
        <p>Home</p>
        <p>About</p>
        {/* <p>Shop<select name="" id="">
          <option value="">--select--</option>
          <option value="">All products</option>
          <option value="">Popular items</option>
          <option value="">New arrivals</option>
        </select></p> */}
        <p onClick={()=>setClicked(!clicked)} style={{display: "flex", alignItems: "center", cursor: "pointer", position: "relative"}}>Shop<ArrowDropDownIcon /></p>
        <div style={c1}><p style={{backgroundColor: "white", color: "black"}}>
            <li style={{margin: "5px", listStyle: "none"}}>All products</li>
            <li style={{margin: "5px", listStyle: "none"}}>Popular items</li>
            <li style={{margin: "5px", listStyle: "none"}}>New arrivals</li>
          </p>
        </div>
      </div>
      <Button variant="outlined" startIcon={<ShoppingCartIcon />}>
        Cart {cartvalue}
      </Button>
    </div>
  )
}


function Banner(){
  return (
    <div className='aaa'>
        <h1 style={{color: "white", fontSize: "40px", marginBottom: "5px", marginTop: "0px"}}>Shop in style</h1>
        <p style={{color: "grey", marginTop: "5px", marginBottom: "0px"}}>With this shop hompeage template</p>
    </div>
  )
}

function Main({obj, cartvalue ,setCartvalue}){

  const[cart, setCart]=useState(false)

  const add2cart=()=>{
    setCart(!cart);
    setCartvalue(cartvalue+1);
  }

  const removefromcart=()=>{
    setCart(!cart);
    setCartvalue(cartvalue-1);
  }

  return (
    <Card className="eachitem">
      <div className="highlight">{obj.size}</div>
      {obj.sale==="sale" ? <p style={{position: "absolute", top: "9px", left: "160px", backgroundColor: "black", color: "white", padding: "3px", margin: "0px", fontSize: "7px", borderRadius: "2px"}}>{obj.sale}</p> : null}
      <p><strong>{obj.type}</strong></p>
      {typeof(obj.rating)!= null ? <p>{"🌟".repeat(obj.rating)}</p> : null}
      <p><span style={{textDecoration: "line-through", color: "grey"}}> {obj.pricecut}</span>{obj.price}</p>
      {cart ? <Button className='pos1' variant="outlined" onClick={()=>removefromcart()}>Remove from cart</Button> : <Button className='pos2' variant="outlined" onClick={()=>add2cart()}>Add to cart</Button>}
    </Card>
  )
}


