import rate from '../../assets/rate/Rating.png';

const Card = (props) => {
    return (
            <div className="container group">
                <div className="flex items-center justify-center overflow-hidden lg:aspect-[384/full] hp:aspect-[320/full] border rounded-[10px] lg:p-5 hp:p-4 cursor-pointer group-hover:bg-slate-100">
                    <div className='flex flex-col sm:gap-3 hp:gap-2 '>
                        <div className='flex hp:flex-row lg:flex-col hp:gap-3'>
                            <div className="lg:w-full hp:w-[125px] h-full rounded-[10px]">
                                <img src={props.image} alt="card" className='lg:w-full lg:h-full hp:h-[82px] hp:w-[82px] rounded-[10px] object-cover'/>
                            </div>
                            <div className='hp:flex hp:flex-col hp:gap-2'>
                                <div className='grid gap-2'>
                                    <h6>Big 4 Auditor Financial Analyst</h6>
                                    <p className='text-home lg:line-clamp-2 lg:group-hover:line-clamp-none hp:hidden'>
                                    Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik
                                    </p>
                                </div>
                                <div className='flex gap-[10px] w-full'>
                                    <img className='rounded-[10px] lg:w-10 lg:h-10 hp:h-9 hp:w-9' src={props.ava} alt="ava"/>
                                    <div className='flex flex-col text-left'>
                                        <p className='text-author'>Jenny Ortega</p>
                                        <div className='flex gap-1'>
                                            <p className='text-job'>Senior Accountant</p> 
                                            <p className='text-job hp:hidden lg:block'>di</p>                                   
                                            <p className='text-office hp:hidden lg:block'>Gojek</p>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between lg:w-full'>
                            <div className='flex gap-2 items-center'>
                                <img className='' src={rate} alt="rating" width='90px' height='18px'/>
                                <p className='text-job'>3.5 (86)</p>
                            </div>
                                <h4>Rp 300K</h4>
                        </div>  
                    </div>
                </div>
            </div>
    )
}

export default Card;