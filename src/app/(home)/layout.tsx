import Footer from "@/frontend/footer"
import Header from "@/frontend/header"

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}   