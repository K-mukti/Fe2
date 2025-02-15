const Banner = (props) => {
    {/* Untuk banner yang di atas */}
    return (
        <div className='relative bg-[url(src/assets/banner/banner-01.jpeg)] bg-cover bg-center rounded-[10px] h-[400px] w-full'>
            {/* untuk menggelapkan background */}
            <div className='absolute inset-0 bg-black opacity-70 rounded-[10px]'></div> 
            <div className='relative flex flex-col w-full justify-center items-center text-center lg:px-[140px] lg:py-[20px] hp:px-5 hp:py-5 sm:px-6 sm:py-10'>
                <div className='flex flex-col lg:gap-3 hp:gap-6 sm:gap-4'>
                    <h1>{props.header}</h1>
                    <p className='text-banner'>
                        {props.desc}
                    </p>
                </div>
                <div className="flex w-full justify-center items-center lg:py-[10px] lg:px-[26px] lg:gap-2 hp:py-7 hp:px-[5x]">
                    <button className="btn-banner text-button">{props.button}</button>
                </div>
            </div>
        </div>
    );
}
const BannerCTA = (props) => {

    return (   
            <div className='relative flex items-center justify-center bg-[url(src/assets/banner/banner-02.jpeg)] bg-cover bg-center rounded-[10px] h-[400px] w-full'>
                {/* untuk menggelapkan background */}
                <div className='absolute inset-0 bg-black opacity-70 rounded-[10px]'></div>
                    <div className='relative flex flex-col w-[525px] justify-center rounded gap-10 lg:mb-3 hp:py-0 hp:px-5'>
                        <div className='flex flex-col gap-1 '>
                            <p className='text-hbanner text-center'>{props.title}</p>
                            <h3 class='text-center text-white'>{props.header}</h3>
                            <p className='text-banner'>{props.desc}</p>
                        </div>
                        <div className='lg:relative hp:flex hp:flex-col hp:gap-4'>
                            <div className="lg:h-[58px]">
                                <input type="text" class="lg:h-full lg:focus:shadow lg:focus:outline-none lg:py-2 lg:pl-8 lg:pr-2 lg:gap-5 hp:text-center lg:text-left" placeholder="Masukkan Emailmu"/>
                            </div>
                            <div class="lg:absolute lg:top-2 lg:right-2 lg:w-[132px] lg:h-[42px]">
                                <button class="btn-cta lg:h-full hp:h-10 hover:bg-red-600">Subscribe</button>
                            </div>
                        </div>
                    </div>
            </div> 
    )
}

export default Banner;
export { BannerCTA };