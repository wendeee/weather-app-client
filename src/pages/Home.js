import NavBar from "../components/NavBar"

export default function Home(){
    return (
        <div className="home--page--div">
        <NavBar />
        <div className="about--div">
       <h1>Explore the weather details of your environ</h1>
       <p>Want to know the weather condition of your city? Find out with just one click.</p>
       <a className="btn--link" href="/City">Get Started</a>
       </div>
        </div>
    )
}