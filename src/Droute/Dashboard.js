import Navbar from '../DComponent/Navbar'

function Dashboard (){
    return(
        <>
    <Navbar />
    
            <div className="  container mt-4   bg-white rounded-xl shadow border max-sm:m-6 md:m-10 p-8 ">
                    <p className="text-3xl underline text-gray-700 font-bold mb-5">
                        Welcome!
                    </p>
                    <p className="text-gray-500 text-lg">
                       Touri is here so you can explore 
                    </p>
            </div>
        </>
    );
}
export default Dashboard;