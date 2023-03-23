import NavigationBar from "../NavigationBar/NavigationBar"
import Footer from "../Footer/Footer"

export default function Layout({ children }) {
    return(
        <>
        <NavigationBar />
            {children}
        <Footer />
        </>
    )
}