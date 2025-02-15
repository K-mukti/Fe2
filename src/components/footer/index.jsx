import logo from '../../assets/nav/logo-videobelajar.png';

//icon di Footer
import footer1 from '../../assets/footer-photos/1.png';
import footer2 from '../../assets/footer-photos/2.png';
import footer3 from '../../assets/footer-photos/3.png';
import footer4 from '../../assets/footer-photos/4.png';

const Footer = () => {

    return (
        <div className="container">
            <div className='flex w-full gap-5 flex-col'>
                <div className="flex lg:justify-between lg:gap-[100px] lg:flex-row hp:flex-col hp:gap-5">
                    <div className="flex flex-col gap-4">
                        <div className="flex">
                            <img src={logo} alt="logo-videobelajar" className='object-cover object-right w-55 cursor-pointer'/>
                        </div>
                    
                            <div className='flex flex-col gap-3'>
                                <p className='text-hfooter'>Gali Potensi Anda Melalui Pembelajaran<br/> Video di hariesok.id!</p>
                                <p className='text-banner text-slate-900'>Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
                                <p className='text-banner text-slate-900'>+62-877-7123-1234</p>
                            </div>
                
                    </div>
                    <div className="flex lg:gap-12 lg:flex-row hp:flex-col hp:gap-2">
                            <ul class='flex flex-col lg:gap-[15px]'>
                                <li>
                                    <div className='flex justify-between cursor-pointer'>
                                        <a href="#" className='text-hfooter'>Kategori</a>
                                        <a href='#'className='text-home lg:hidden hp:block hp:text-[24px]'> {'>'} </a>
                                    </div>
                                </li>
                                <li>
                                    <a href="#" className='text-home hp:hidden lg:block'>Digital & Teknologi</a>
                                </li>
                                <li>
                                    <a href="#" className='text-home hp:hidden lg:block'>Pemasaran</a>
                                </li>
                                <li>
                                    <a href="#" className='text-home hp:hidden lg:block'>Manajemen Bisnis</a>
                                </li>
                                <li>
                                    <a href="#" className='text-home hp:hidden lg:block'>Pengembangan Diri</a>
                                </li>
                                <li>
                                    <a href="#" className='text-home hp:hidden lg:block'>Desain</a>
                                </li>
                            </ul>
                            <ul class='flex flex-col lg:gap-[15px]'>
                                <li>
                                <div className='flex justify-between cursor-pointer'>
                                    <a href="#" className='text-hfooter'>Perusahaan</a>
                                    <a href='#'className='text-home lg:hidden hp:block hp:text-[24px]'> {'>'} </a>
                                </div>
                                </li>
                                <li>
                                    <a href="#" className='text-home hp:hidden lg:block'>Tentang Kami</a>
                                </li>
                                <li>
                                    <a href="#" className='text-home hp:hidden lg:block'>FAQ</a>
                                </li>
                                <li>
                                    <a href="#" className='text-home hp:hidden lg:block'>Kebijakan Privasi</a>
                                </li>
                                <li>
                                    <a href="#" className='text-home hp:hidden lg:block'>Ketentuan Layanan</a>
                                </li>
                                <li>
                                    <a href="#" className='text-home hp:hidden lg:block'>Bantuan</a>
                                </li>
                            </ul> 
                            <ul class='flex flex-col lg:gap-[15px]'>
                                <li>
                                    <div className='flex justify-between cursor-pointer'>
                                        <a href="#" className='text-hfooter' >Komunitas</a>
                                        <a href='#'className='text-home lg:hidden hp:block hp:text-[24px]'> {'>'} </a>
                                    </div>
                                </li>
                                <li>
                                    <a href="#" className='text-home hp:hidden lg:block'>Tips Sukses</a>
                                </li>
                                <li>
                                    <a href="#" className='text-home hp:hidden lg:block'>Blog</a>
                                </li>        
                            </ul>   
                    </div>
                </div>
                <div></div>
                <div className='flex lg:justify-between hp:flex-col-reverse lg:flex-row hp:gap-3'>
                    <p className='text-home'>@2023 Gerobak Sayur All Rights Reserved.</p>
                    <div className='flex gap-[15px]'>
                        <img src={footer1} alt='' className='cursor-pointer'/>
                        <img src={footer2} alt='' className='cursor-pointer'/>
                        <img src={footer3} alt='' className='cursor-pointer'/>
                        <img src={footer4} alt='' className='cursor-pointer'/>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Footer;