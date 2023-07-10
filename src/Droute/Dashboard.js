import Navbar from '../DComponent/Navbar'
import Footer from './footer'
import "./Dashboard.css"
import img from "../Ogbomoso.jpg"
function Dashboard (){
    return(
        <>
    <Navbar />
    <main class="mt-0 mx-auto py-8 h-screen  main-section">
    <div class="text-white text-center my-5 ">
      <h1 class="text-4xl  font-bold mb-4">Explore the Beauty of Ogbomoso</h1>
      <p class="text-black bg-white py-3 mb-6">Discover breathtaking landscapes, vibrant cities, and endless adventures.</p>
      <a href="/" class="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">Plan Your Trip</a>
    </div>
  </main>
        <section className='mx-3 bg-white p-2'>
           <section className='grid md:grid-cols-4 gap-2 mx-'>
               
           <div className='mb-3 '><img src ={img} alt = "imge"></img>
           <a href = "History">Explore</a>
           sdksdj</div>
           <div className='mb-3'><img src ={img} alt = "imge" ></img>sdksdj</div>
           <div className='mb-3'><img src ={img} alt = "imge" ></img>sdksdj</div>
           <div className='mb-3'><img src ={img} alt = "imge"></img>sdksdj</div>


           </section>
           </section>
            <Footer />
        </>
    );
}
export default Dashboard;