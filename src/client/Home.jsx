import { Link } from "react-router-dom";


export default function Home(){


return(

<><main>
<section className="hero">
      <div className="hero-content">
        <h1>Buy,sell and smell the best</h1>
        <h2>Find or sell fragnances</h2>
        <Link to={'/Catalog'} className="btn-shop-now">Shop Now</Link>
      </div>
    </section>
    </main>
</>



)

}