import './homePage.scss';

function HomePage() {
    return (
        <div className="homePage">
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className="title">
                        Find Real Estate & Get Your Dream Place
                    </h1>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Nulla voluptates tempora enim quasi eius iste? Sed ad 
                        omnis sapiente nostrum qui veniam cupiditate numquam 
                        vitae amet consequuntur placeat, quia alias.
                    </p>
                </div>
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    );
}

export default HomePage;