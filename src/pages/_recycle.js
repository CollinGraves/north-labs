import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

<section id="one" className="tiles">
    <article style={{backgroundImage: `url(${pic01})`}}>
        <header className="major">
            <h3>Aliquam</h3>
            <p>Ipsum dolor sit amet</p>
        </header>
        <Link to="/landing" className="link primary"></Link>
    </article>
    <article style={{backgroundImage: `url(${pic02})`}}>
        <header className="major">
            <h3>Tempus</h3>
            <p>feugiat amet tempus</p>
        </header>
        <Link to="/landing" className="link primary"></Link>
    </article>
    <article style={{backgroundImage: `url(${pic03})`}}>
        <header className="major">
            <h3>Magna</h3>
            <p>Lorem etiam nullam</p>
        </header>
        <Link to="/landing" className="link primary"></Link>
    </article>
    <article style={{backgroundImage: `url(${pic04})`}}>
        <header className="major">
            <h3>Ipsum</h3>
            <p>Nisl sed aliquam</p>
        </header>
        <Link to="/landing" className="link primary"></Link>
    </article>
    <article style={{backgroundImage: `url(${pic05})`}}>
        <header className="major">
            <h3>Consequat</h3>
            <p>Ipsum dolor sit amet</p>
        </header>
        <Link to="/landing" className="link primary"></Link>
    </article>
    <article style={{backgroundImage: `url(${pic06})`}}>
        <header className="major">
            <h3>Etiam</h3>
            <p>Feugiat amet tempus</p>
        </header>
        <Link to="/landing" className="link primary"></Link>
    </article>
</section>

<ul className="actions">
    <li><a href="https://s3.amazonaws.com/northlabs-assets/North+Labs+One-Pager.pdf" className="button next scrolly">Get Started</a></li>
</ul>