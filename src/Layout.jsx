import Header from "./components/componentesHeader/Header";

function Layout({ children }) {

    return (
        <>
            <Header />
            
            <main className="h-screen bg-gray-100">
                {children}
            </main>
        </>
    );
}

export default Layout;