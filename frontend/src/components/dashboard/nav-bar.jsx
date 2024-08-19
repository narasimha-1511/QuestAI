import React from 'react'
import { Link } from 'react-router-dom'
import notification from '../../assets/icons/notifications.svg'
import logout from '../../assets/icons/logout.svg'
import { useAuth } from '../../context/auth-context'
import { useLocation } from 'react-router-dom'

const NavBar = () => {
    const { logout:Logout } = useAuth();
    const location = useLocation();
    
    const getBreadcrumbs = () => {
        const pathnames = location.pathname.split('/');
        pathnames.unshift();
        return pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(1, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            return (
                <span key={name}>
                    {index > 0 && " / "}
                    {isLast ? (
                        <span className="text-gray-500">{name}</span>
                    ) : (
                        <Link to={routeTo} className="text-blue-500 hover:underline">
                            {name}
                        </Link>
                    )}
                </span>
            );
        });
    };

    return (
        <div className='flex flex-col justify-between px-14 pt-8'>
            <div className='flex justify-between items-center'>
                <h1 className='text-xl font-bold '>
                <Link to="/" className="text-blue-500 hover:underline">Home</Link>
                {getBreadcrumbs()}</h1>
                <div className='flex items-center justify-center gap-4 '>
                    <button className='rounded-full border border-gray-300 p-2'>
                    <img src={notification} alt='notification' className='w-5 h-5' />
                    </button>
                    <button className='rounded-full border border-gray-300 p-2' onClick={Logout}>
                    <img src={logout} alt='logout' className='w-5 h-5' />
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default NavBar