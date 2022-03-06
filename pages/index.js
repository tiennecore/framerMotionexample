import Desktop from "../components/dashboard/desktop";

export default function Home() {
    return (
        <div className="container">
            <header>
                <div className="text">
                    <h1>My animation design<br/>
                        Check the animation<br/>
                        Found my code on Github</h1>
                </div>
                <div className="titre">
                    <h1>Framer</h1>
                    <h1 className="gradient-motion">Motion</h1>
                </div>
            </header>
            <Desktop/>
        </div>
    )
}
