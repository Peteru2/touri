import Navbar from '../DComponent/Navbar'
import Footer from './footer';
import "./Dashboard.css"
function History (){
    return(
        <>
    <Navbar />
        <main className=' bg-white m-3 p-2 lg:container '>
            <h2 className='text-lg p-2 navbg-color text-white  ml-0 my-3'>The brief history of Ogbomoso</h2>
            <section className=' bg-white '>
            <p className='mb-3'>There are several versions of the legend that surrounds Ogbomoso history, but they all accede to the fact that the town was founded by Olabanjo Ogunlola Ogundiran, a man of Ibariba descent. The most well-known of the legends relates that Ogunlola came to the area now known as Ogbomoso (then a dense jungle) while on a hunting expedition. He stayed under the Ajagbon tree by which the palace is now located.
            </p>
            <p className='mb-3'>
            Initially, there was no sign of human life around them, and Ogunlola and his wife, Esuu, were living all alone. They were later joined by Lorungbekun (Olorun gbo ekun; God heard my cry). Olorungbekun is not human; it is a mound of clay that was personified. Since they were all alone and Ogunlola was a hot-tempered man, Lorungbekun was Esuu’s device to escape his wrath anytime it was roused against her. Both husband and wife agreed that whenever Ogunlola wanted to beat up Esuu, if she could escape and embrace the mound, he must spare her, no matter what it was she had done. Lorungbekun is still in Ogbomoso palace today and it is said that Soun’s wives still take refuge in it whenever the king’s anger toward them seems unappeasable.
            </p>
            <p className='mb-3'>
            After some time, Ogunlola discovered other hunters nearby. They were Aale (whose domain was in what is now Oke-elerin), Onsile (he dwelt in what is now Ijeru), Orisatolu (he dwelt in today’s Isapa) and Akande. Together with these four hunters, Ogunlola formed the Alongo Society so that they could be of assistance to one another.  He was the head of the society and had the final say.
            </p>
            </section>
        </main>
                

            <Footer />
        </>
    );
}
export default History;