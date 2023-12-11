import {FaSearch} from 'react-icons/fa';
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to='/'>
        {/*the flex will keep the header in a responsive way*/}
        <h1 className='font-bold text-sm sm: text-xl flex flex-wrap'> 
            <span className='text-slate-500'>Sanhad</span>
            <span className='text-slate-700'>Estate</span>
        </h1>
        </Link>
        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
            {/* set width to 24, if mobile: 64*/}
            {/* mobile is sm. tablet is md*/}
            <input type='text' placeholder='Search...' 

            className='bg-transparent focus:outline-none w-24 sm:w-64'/>
            {/*FaSearch is an icon library*/}
            <FaSearch className='text-slate-600'/>
        </form>
        <ul className='flex gap-4'>
            <Link to='/'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>Home</li>
            </Link>
            <Link to='/about'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>About</li>
            </Link>
            <Link to='/sign-in'>
            <li className='text-slate-700 hover:underline'>Sign in</li>
            </Link>
        </ul>
        </div>
    </header>
  )
}
