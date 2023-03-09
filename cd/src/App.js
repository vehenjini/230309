import logo from './logo.svg';
import './App.css';
import applelogo from './applelogo.png';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <h1 class="logo">
            <a href="./index.html">
              <img src={applelogo} alt="logo"></img>
            </a>
          </h1>

          <h2 class="visually-hidden">메뉴</h2>
          <ul class="gnb-list">
            <li class="gun-item">
              <a href="./menu1.html">menu1</a>
            </li>
            <li class="gun-item">
              <a href="./menu2.html">menu2</a>
            </li>
            <li class="gun-item">
              <a href="./menu3.html">menu3</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <div class="main-wrapper">
          <section class="background">
            <div class="front-txt">
              <h2 class="front-title">Lorem ipsum dolor sit.</h2>
              <p class="front-content">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum illo repudiandae, accusantium aperiam corrupti id similique,
                fuga veritatis assumenda ad sit voluptas, eligendi expedita repellendus enim fugit consectetur quam. Dolore.
              </p>
              <button class="fornt-btn" type="button" onclick="alert('Hi?')">버튼</button>
            </div>
          </section>

          <section class="top">
            <div class="second-txt">
              <h2>Lorem ipsum dolor sit.</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum illo repudiandae, accusantium aperiam corrupti id similique,
                fuga veritatis assumenda ad sit voluptas, eligendi expedita repellendus enim fugit consectetur quam. Dolore.
              </p>
            </div>
          </section>

          <section class="post-box">
            <div class="post-card">
              <h2>Lorem ipsum dolor sit.</h2>
              <p class="post-card-txt">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum illo repudiandae, accusantium aperiam corrupti id similique,
                fuga veritatis assumenda ad sit voluptas, eligendi expedita repellendus enim fugit consectetur quam. Dolore.
              </p>
            </div>

            <div class="post-card">
              <h2>Lorem ipsum dolor sit.</h2>
              <p class="post-card-txt">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum illo repudiandae, accusantium aperiam corrupti id similique,
                fuga veritatis assumenda ad sit voluptas, eligendi expedita repellendus enim fugit consectetur quam. Dolore.
              </p>
            </div>

            <div class="post-card">
              <h2>Lorem ipsum dolor sit.</h2>
              <p class="post-card-txt">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum illo repudiandae, accusantium aperiam corrupti id similique,
                fuga veritatis assumenda ad sit voluptas, eligendi expedita repellendus enim fugit consectetur quam. Dolore.
              </p>
            </div>
          </section>
        </div>
      </main>

      <footer>
        <div class="global-footer">
          <h3>Contact</h3>
          <ul class="footer-list">
            <li class="footer-item">
              <a href="mailto:tof@nate.com">메일</a>
            </li>
            <li class="footer-item">
              <a href="tel:01046361772">전화</a>
            </li>
            <li class="footer-item">
              <a href="http://www.youtube.com">유튜브</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
