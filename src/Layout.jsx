// import Footer from "./components/Footer";
import Header from "./components/componentesHeader/Header";

function Layout({ children }) {
    return (
        <>
        <header className="fixed top-0 w-full left-0 h-16">
            <Header />
        </header>
            
            <main className=" h-auto bg-white ">{children}</main>

            {/* <footer className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 p-4 bg-orange-100">
                <Footer />
            </footer> */}
        </>
    );
}

export default Layout;