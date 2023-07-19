import './Navigationbar.css';
import navigationImage1 from '../images/landscap1.png' ;
import navigationImage2  from  '../images/landscap2.png' ;



function NavigationBar (){
    return (
<nav>
    <ul className='nav-flex'>
    <li>
    <img alt="" src={navigationImage1} />
        </li>
  <li>
  <img alt="" src={navigationImage2} />
  </li>
    </ul>
    <div>
    <h1>Say Hello to 
          ReactJS
        </h1>
        <p>
        You will learn how to use the most popular frontend library, and become a super Ninja developer.
        </p>

    <button>
    Awsome
    </button>
    </div>


</nav>
    );
}

export default NavigationBar;