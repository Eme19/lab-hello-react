// import FooterImage from './FooterImage';
import  './Footer.css'
import footer1 from '../images/landscap3.png' ;
import footer2  from  '../images/landscap4.png' ;
import footer3  from  '../images/landscap5.png' ;
import footer4  from  '../images/landscap6.png' ;

function Footer () {

    return (
        <footer>
            <div>
            <img alt="" src={footer1} />
                <h2>Declarative</h2>
                <p className=' footer-paragraph-style'> React make it painlessto create interactive Uls.
                </p>
             
            </div>
             
             <div>
             <img alt="" src={footer2} />
             <h2>Components</h2>
             <p className=' footer-paragraph-style'>Build encapsulated components that manage their state.</p>
             </div>
              
              <div>
              <img alt="" src={footer3} />
              <h2>Single-Way</h2>
              <p className='footer-paragraph-style'>a set immutable values are passed to the components.</p>
              </div>
              
              <div>
              <img alt="" src={footer4} />
              <h2  className='footer-paragraph'>JSX</h2>
              <p className=' footer-paragraph-style'>Statically typed designed to run on modern browsers.</p>
              </div>
               
        </footer>
    )

// const allfooterImage = [
//     {Imageheading: "Declarative", footerURL: footer1},
//      {Imageheading: "Components", footerURL:  footer2},
//      {Imageheading: "Single-Way", footerURL:  footer3},
//      {Imageheading: "JSX", footerURL:  footer4},
// ]
//     return (
//     <div> 
//    {allfooterImage.map(footerImg => {
//     return <FooterImage footerItem={footerImg}/>
//    })}


//     </div>


//     );
 }

export default Footer;


