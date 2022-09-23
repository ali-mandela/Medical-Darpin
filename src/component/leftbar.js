import React from 'react'
import '../index.css';
 

function Leftbar() {
  return (<>
  <div className='lbardivmain'>
    <section className='lbarmain'>
        <div className='lbarbody'>
            <h1>Related Category</h1>
            <ul>
                <li> Paracetamol Tablets  </li>
                <li> Paracetamol Syrup  </li>
                <li> Paracetamol Powder  </li>
                <li  className='bcolor'> Acedclofena &emsp;&emsp;&emsp; <i class="fa-solid fa-xmark"></i></li>
                <li> Mangaladrate simethicone Oral Suspension  </li>
                <li > Mefanamic Paracetamol Syrup  </li>
            </ul>

        </div>
        <div className='lbarbody'>
            <h1>Related Brands</h1>
            <ul>
                <li>Cipmol Paracetamol   </li>
                <li>Pandal Paracetamol Tablets  </li>
                <li>Combfian</li>
                <li>Crocin tablets  </li>
                <li>Calpol Paracetamol Tablets </li>
                <li >Sumo Tablet </li>
            </ul>

        </div>
        <div className='lbarbody'>
            <h1>Business Type</h1>
            <ul>
                <li  >Wholesaler   </li>
                <li>Manufacturer </li>
                <li>Retailer</li>
                <li>Exporter  </li> 
            </ul>

        </div>
        <div className='lbarbody'>
            <h1>Stength</h1>
            <ul>
                <li className='bcolor'>500 mg &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<i class="fa-solid fa-xmark"></i></li>
                <li>600 mg</li>
            </ul>

        </div>
        <div className='lbarbody'>
            <h1>Manufacturer</h1>
            <ul>
                <li>Intas Pharmaceutical Ltd</li>
                <li>Alkem Labortories Ltd</li>
            </ul>

        </div>
        <div className='lbarbody'>
            <h1>Prescription/Non Prescription</h1>
            <ul>
                <li>Intas Pharmaceutical Ltd</li>
                <li>Alkem Labortories Ltd</li>
            </ul>

        </div>
    </section>
    </div>
  </> )
}

export default Leftbar