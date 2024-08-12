import ReelsNavBar from "./reelsNavbar"
import Sidemenu from "../components/sidemenu"
function SubChart () {
    return  (
        <>
            <ReelsNavBar/>
            <Sidemenu/>
            <div className="flex justify-center items-center pt-[100px]">
                <input className="border-2 py-[5px] px-[30px] w-[30%] outline-none rounded-md bg-transparent text-white text-[18px] text-center" type="text" placeholder="Search" />
            </div>
            <section className="pl-[300px] pt-[10px] mt-[10px]">
                <div className="charts px-[50px] pt-[10px] pb-[33px]">
                    <div className="flex justify-left items-center">
                        <button className="text-white py-[15px] px-[30px] mr-[90px] text-[20px] bg-transparent border-2 w-[27%] outline-none">TOP 23</button>
                        <div>
                            <div className="text-white bg-[#D9D9D9] mr-[20px] ml-[80px] rounded-xl flex justify-center items-center flex-col text-[19px] mt-[20px] py-[10px] px-[10px]">
                                <p>Daily reward</p>
                                <p>0.185btb</p>
                                <p>$1.89</p>
                            </div>
                            <div className="text-white bg-[#D9D9D9] ml-[80px] mr-[70px] rounded-xl flex justify-center items-center flex-col text-[19px] mt-[20px] py-[10px] px-[10px] w-[60%]">
                                <p>Trending</p>
                                <p>289.9%</p>
                            </div>
                        </div>
                        <div className="text-white bg-[#D9D9D9] rounded-xl flex justify-center items-center flex-col text-[19px] mt-[20px] py-[10px] px-[10px] w-[15%]">
                            <p>Active  listener</p>
                            <p>89K</p>
                        </div>
                        </div>
                        <div className="flex justify-left items-center ml-[20px] mt-[70px]">
                            <img className="w-[2.5%] mr-[20px]" src="/Images/Play (1).png" alt="" />
                            <p className="text-white text-[20px]">The king of tears</p>
                        </div>
                    </div>
                    <div className="text-white grid grid-cols-3 gap-4 text-[19px] mt-[30px]">
                        <h2>Artist: Kelvin</h2>
                        <h2>Categories: Trap</h2>
                        <h2>Price: 0.1860btb<span className="text-[#02DF18]">+4</span></h2>
                    </div>
                    <div className="flex justify-left items-center mt-[20px] text-[19px] text-white">
                        <h2 className="mr-[30px]">Listeners: 89k</h2>
                        <h2>Market caps: $3.5M</h2>
                    </div>
                    <div className="flex justify-center items-center">
                        <a href="/"><button className='text-white border border-white mr-[30px] bg-transparent py-[5px] px-[30px] rounded-md text-[20px]' type='button'>Token Amount</button></a>
                        <a href="/"><button className='text-white bg-[#DE0808] py-[5px] px-[30px] rounded-md text-[20px]' type='button'>Stake</button></a>
                    </div>
                    <div>
                        <div className="grid grid-cols-5 gap-4 mt-[40px] text-white text-[18px] mb-[20px]">
                            <h2>*</h2>
                            <h2>Songs</h2>
                            <h2>Price</h2>
                            <h2>Listeners</h2>
                            <h2>market caps </h2>
                        </div>
                        <div className="grid grid-cols-5 gap-4 text-white text-[19px] mb-[20px]">
                            <img className="w-[25%]" src="/Images/s1.png" alt="" />
                            <p>The wizard</p>
                            <p>0.3450btb<span className="text-[#02DF18]">+12%</span></p>
                            <p>3k</p>
                            <p>$983</p>
                        </div>
                        <div className="grid grid-cols-5 gap-4 text-white text-[19px] mb-[20px]">
                            <img className="w-[25%]" src="/Images/s2.png" alt="" />
                            <p>kings shall not fall</p>
                            <p>0.2450btb<span className="text-[#DE0808]">-5%</span></p>
                            <p>2.8K</p>
                            <p>$567k</p>
                        </div>
                        <div className="grid grid-cols-5 gap-4 text-white text-[19px] mb-[20px]">
                            <img className="w-[25%]" src="/Images/s3.png" alt="" />
                            <p>mystery on thy</p>
                            <p>0.2300btb<span className="text-[#DE0808]">-8%</span></p>
                            <p>2.4K</p>
                            <p>$898k</p>
                        </div>
                        <div className="grid grid-cols-5 gap-4 text-white text-[19px] mb-[20px]">
                            <img className="w-[25%]" src="/Images/s4.png" alt="" />
                            <p>Demon is no</p>
                            <p> 0.1300btb<span className="text-[#02DF18]">+9%</span></p>
                            <p>2K</p>
                            <p>$989k</p>
                        </div>
                    </div>
            </section>
        </>
    )
}
export default SubChart