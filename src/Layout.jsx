// import Footer from "./components/Footer";
import { useState } from "react";
import Header from "./components/componentesHeader/Header";

function Layout({ children }) {

    return (
        <>
        <header className="fixed top-0 w-full left-0 h-16 z-50">
            <Header />
        </header>
            
            <main className="h-screen bg-gray-100">{children}</main>

            {/* <footer className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 p-4 bg-orange-100">
                <Footer />
            </footer> */}
        </>
    );
}

export default Layout;