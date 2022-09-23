import React from 'react'
import '../index.css'

function Navbar() {
    return ( <> 
    <section className="mainnavbar">
        <div className='navbar'>
            <span className='logo'></span>
            <h1>Medical Darpan</h1>
            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>Distributors</li>
                <li>Manufacturers</li>
                <li>About us</li>
                <li>Blog</li>
            </ul>
            <div className='login'>
            <span>Login  &emsp;</span>
        <span><i class="fa-2x fa-solid fa-circle-user"></i> </span>
            </div>
        </div>
        
 </section>
 <section className='header'>
    <h6> Medical Darpan &gt; Search &gt; <span>FabiFlu Tablet</span></h6>
    <form>
        <span><i class=" fa-solid fa-magnifying-glass"></i></span>
        <input placeholder={"Paracetamol"} ></input>
        <button type={"mandela"} placeholder={"Search"}>Search</button>
    </form>
    
 </section>
 <section>
 <div className='headerbody'>
        <h2>Paracetamol  <p>  (128 products) </p>  </h2>
        <span>Aceclofenac <i class="fa-solid fa-xmark"></i></span>
        <span>500 mg  <i class="fa-solid fa-xmark"></i></span>
        <p>Remove all</p>

    </div>
 </section>
  </>)
}

export default Navbar