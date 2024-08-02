import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
    const { user, loginWithRedirect, isAuthenticated, logout} = useAuth0();
    return (
        <header className="bg-white shadow-md p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    {/* <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTBwyXfo9p1M92aajqyI7kRgz1ofu0ZshIrA&s"} alt="Logo" className="h-8 w-8"/> */}
                </div>
                <nav className="hidden md:flex space-x-4">
                    <a href="#" className="text-gray-600 hover:text-green-500">Dashboard</a>
                    <a href="#" className="text-gray-600 hover:text-green-500">GAMES</a>
                </nav>

                <div className="flex items-center space-x-4">
                    <div>
                        {isAuthenticated && <p>Hello, {user.name}</p>}
                    </div>
                    <div className="flex items-center space-x-4">
                        {isAuthenticated ? (
                                <button className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-white hover:text-purple-500" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}> Log Out </button>
                            ) : (
                                <button className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-white hover:text-purple-500" onClick={() => loginWithRedirect()}>Login</button>
                            )
                        }
                        
                        
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
