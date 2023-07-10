import Navbar from '../DComponent/Navbar'
import Footer from './footer';

function About (){
    return(
        <>
    <Navbar />
    
                    <main className="container mx-auto py-8">
                    <h1 className="text-4xl font-bold mb-4">Explore the Beauty of Ogbomoso</h1>
                    <p className="text-gray-700 mb-6">Discover breathtaking landscapes, vibrant cities, and endless adventures.</p>
                    <a href="/" className="bg-blue-400 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">Plan Your Trip</a>
                </main>

               <Footer />
        </>
    );
}
export default About;