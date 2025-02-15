import rectangle from '../../assets/menu/Rectangle 22971.png' //Garis bawah untuk menu

const Menu = () => {
    return (
        <div>
            <ul className="flex text-home hp:hidden lg:flex">
                    <li>
                        <div className='flex flex-col group'>
                            <a className="inline-block py-3 pr-9 pl-0 group-hover:text-orange-600" href="#">Semua Kelas</a>
                            <img src={rectangle} alt="rectangle" className="hidden group-hover:block w-[52px] h-[6px]"/>
                        </div>
                    </li>
                    <li>
                        <div className='flex flex-col group'>
                            <a className="inline-block py-3 pr-9 pl-0 group-hover:text-orange-600" href="#">Pemasaran</a>
                            <img src={rectangle} alt='rectangle' className="hidden group-hover:block w-[52px] h-[6px]"/>
                        </div>
                    </li>
                    <li>
                        <div className='flex flex-col group'>
                        <a className="inline-block py-3 pr-9 pl-0 group-hover:text-orange-600" href="#">Desain</a>
                        <img src={rectangle} alt='rectangle' className="hidden group-hover:block w-[52px] h-[6px]"/>
                        </div>
                    </li>
                    <li>
                        <div className='flex flex-col group'>
                        <a className="inline-block py-3 pr-9 pl-0 group-hover:text-orange-600" href="#">Pengembangan Diri</a>
                        <img src={rectangle} alt='rectangle' className="hidden group-hover:block w-[52px] h-[6px]"/>
                        </div>
                    </li>
                <li>
                    <div className='flex flex-col group'>
                    <a className="inline-block py-3 pr-9 pl-0 group-hover:text-orange-600" href="#">Bisnis</a>
                    <img src={rectangle} alt='rectangle' className="hidden group-hover:block w-[52px] h-[6px]"/>
                        </div>
                </li>
            </ul>
        </div>
    );
}

export default Menu;
