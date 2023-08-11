import Navbar from '../DComponent/Navbar'
import Footer from './footer'
import "./Dashboard.css"

import ImgList from './img'
function Dashboard (){
    return(
        <>
    <Navbar />

    <main class="mt-0  py-8 pt-0 h-screen   main-section ">
    <div class="text-white text-center m-0 pt-5  backdrop-brightness-50 h-screen">
      <h1 class=" text-7xl  font-bold mt-0  mb-4">Explore the Beauty of Ogbomoso</h1>
      <p class="text-white text-2xl py-3 mb-8">Discover breathtaking landscapes, vibrant cities, and endless adventures.</p>
      <a href="/" class="bg-blue-500 text-white font-semibold py-2 px-4 mt-9 rounded hover:bg-blue-600">Plan Your Trip</a>
    </div>
  </main>
        <section className='mx-2 bg-white p-2'>
           <section className='grid md:grid-cols-3 gap-3 px-2  '>
          {ImgList.map((myimg, inde)=>{
            return(
                <a href = "/" className='no-underline hover:underline hover:p-3 ' key={inde}>
                <div className='mb-3 border-b-2 pb-2 '><img src = {myimg.imgLink} className='rounded-lg hover:border-6 ' alt = "imge"></img>
                <h2 className='mt-2'>{myimg.title}</h2>
                <a href = "History text-blue">Explore</a>
               </div>
               </a>
              
             )
        })}
             
         

           </section>
           </section>

            <Footer />
        </>
    );
}
export default Dashboard;