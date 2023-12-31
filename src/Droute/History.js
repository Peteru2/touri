import Navbar from '../DComponent/Navbar'
import Footer from './footer';
import "./Dashboard.css"
import ogunlola from "../ogunlola.jpg"
function History (){
    return(
        <>
    <Navbar />
   
        <main className=' bg-white container '>
            <h2 className='text-lg p-2 navbg-color text-white  ml-0 my-3'>The brief history of Ogbomoso</h2>
            <div>
                <img src={ogunlola} alt = "ds" className='mb-2'></img>
            </div>
            <section className=' bg-white text-justify '>
                <p className='mb-3'>There are several versions of the legend that surrounds Ogbomoso history, but they all accede to the fact that the town was founded by Olabanjo Ogunlola Ogundiran, a man of Ibariba descent. The most well-known of the legends relates that Ogunlola came to the area now known as Ogbomoso (then a dense jungle) while on a hunting expedition. He stayed under the Ajagbon tree by which the palace is now located.
                </p>
            <p className='mb-3 indent-4'>

                    The town of Ogbomoso lies between Ilorin and Oyo Town in the south western region of Nigeria. The town was founded in the mid-17th century by Ogunlola, a brave hunter of Ibariba descent. History has it that Ogunlola migrated to the present site of Ogbomoso around 1650 in pursuit of his hunting career. He arrived at the site which was then a dense jungle with his wife named Esuu and together they camped beneath an ajagbon tree which can still be seen today near the Soun’s palace. Later on, Ogunlola and his wife built a hut near the tree and settled there permanently.
            </p>
            <p className='mb-3'>
            Shortly after they settled in the jungle, Ogunlola noticed that smoke emit daily from nearby places. He decided to check the places out and to his surprise, he discovered that four other hunters were also dwelling in the jungle. The first hunter was a Nupe elephant hunter named Aale who camped in a place now known as Oke-Elerin (Elephant Hill). The second was an Otta prince named Onisile who left his town because of title dispute, he settled in a place now known as Ijeru. The third hunter was Orisatolu who camped at Isapa and the last hunter settled at Akande which no longer exist. Ogunlola established his dominance over the four hunters with his unmatched hunting skills and the help of his wife, Esuu, who was very good at making tobacco snuff and guinea corn-wine which the hunters liked so much.
            Ogunlola and the hunters formed a society called Alongo with the aims of protecting the settlement from slave raiders, hunting wild animals together, helping one another and so on. The settlement began to expand as people moved in till it became a village. Ogunlola gradually became the head of the new village as his hut became the administrative center where important issues were discussed, and a court where disputes were settled.
            </p>
            <p className='mb-3'>
            The history of Ogbomoso has it that Ogunlola was later imprisoned at Oyo-Ile, the capital of the old Oyo empire, for an alleged crime. While in prison, Ogunlola heard about a warrior named Elemoso who had been terrorising Oyo-Ile. He pleaded with the Alaafin (traditional ruler of Oyo) to let him out of the prison to fight and kill Elemoso. After much persuasion, the Alaafin granted Ogunlola’s request to hunt Elemoso down. Elemoso was a very strong and brave warrior who fought with sword and arrows. Ogunlola was shown Elemoso’s camp. However, it took him some days to study Elemoso’s tactics. One night, Ogunlola crept upon Elemoso’s camp and shot him down with an arrow. He beheaded him and took his head to the Alaafin who was very happy. The Alaafin granted Ogunlola freedom and even persuaded him to stay in Oyo-Ile but Ogunlola refused, he said to the Alaafin: “Ejé kí á ma se óhún” meaning “Let me stay faraway in my land“. This is where the title ‘Soun‘, the traditional ruler of Ogbomoso, was coined from.
            </p>
            <p className='mb-3'>
            Ogunlola returned to his village and was made the paramount leader with the title of Soun. He became the first Soun of Ogbomoso. The settlement was subsequently called “Eyi ti Ogbori Elemoso” meaning “the one who carried Elemoso’s head“. This was shortened to Ogbori Elemoso and later, Ogbomoso which it is called till today. This was how Ogbomoso got it’s name from Ogunlola’s bravery.
            Ogbomoso later rose from its mere village status to a strong town due to the role it subsequently played in the history of Yoruba land.
            </p>
            </section>
        </main>
                

            <Footer />
        </>
    );
}
export default History;