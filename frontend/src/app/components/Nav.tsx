import Link from 'next/link';
import Image from 'next/image';

const Nav = () => {
  return (
    <header className='bg-gray-900 p-5 text-white'>
      <nav className='flex justify-between items-center'>
        <div className='flex flex-row text-lg font-bold'>
          <Image src='/heartpng.png' alt='' width={30} height={30} className='mr-2'/>
          <Link href='/'>Katya's Gists</Link>
        </div>
        <div className='space-x-4'>
          <Link href='/' className='hover:text-gray-400'>Home</Link>
          <Link href='#about' className='hover:text-gray-400'>About Me</Link>
          <Link href='#posts' className='hover:text-gray-400'>Blog</Link>
          <Link href='#projects' className='hover:text-gray-400'>Projects</Link>
        </div>
      </nav>
    </header>
  );
};

export default Nav;