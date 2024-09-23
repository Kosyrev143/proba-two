import './App.css';
import logo from '../public/logo.svg';
import componentOne from '../public/image-1.svg';
import componentTwo from '../public/image-2.svg';
import componentThree from '../public/image-3.svg';
import componentFour from '../public/image-4.svg';
import componentFive from '../public/image-5.svg';
import backImageOne from '../public/back-image-1.svg';
import backImageTwo from '../public/back-image-2.svg';
import blockBackground from '../public/block-back.svg';
import productImageOne from '../public/product-image-1.svg';
import productImageTwo from '../public/product-image-2.svg';
import productImageThree from '../public/product-image-3.svg';
import componentSix from '../public/image-6.svg';
import componentSeven from '../public/image-7.svg';
import componentEight from '../public/image-8.svg';
import componentNine from '../public/image-9.svg';
import componentTen from '../public/image-10.svg';

function App() {

    return (
        <>
            <header>
                <nav className={"grid-item-menu-one"}>
                    <button>GO BACK</button>
                    <ul>
                        <li>STORY</li>
                        <li>SHOP</li>
                    </ul>
                </nav>
                <div className={"grid-item-brand"}>
                    <img className={"logo"} src={logo} alt={"Логотип"}/>
                </div>
                <nav className={"grid-item-menu-two"}>
                    <ul>
                        <li>CONTACT</li>
                        <li>WHOLESALE</li>
                    </ul>
                    <button>CLONE</button>
                </nav>
            </header>
            <main>
                <div className={"image-one-container"}>
                    <img className={"image-one"} src={componentOne} alt={"Компонент 1"}/>
                </div>
                <div className={"heading-one-container"}>
                    <h1 className={"heading-one"}>
                        THE FIRST HOT<br/>
                        SAUCE MADE FOR<br/>
                        COFFEE
                    </h1>
                </div>
                <div className={"image-two-container"}>
                    <img className={"image-two"} src={componentTwo} alt={"Компонент 2"}/>
                </div>
                <div className={"image-three-container"}>
                    <img className={"image-three"} src={componentThree} alt={"Компонент 3"}/>
                </div>
                <div className={"image-four-container"}>
                    <img className={"image-four"} src={componentFour} alt={"Компонент 4"}/>
                </div>
                <div className={"image-five-container"}>
                    <img className={"image-five"} src={componentFive} alt={"Компонент 5"}/>
                </div>
                <div className={"product-container"}>
                    <div className={"back-images"}>
                        <img className={"back-image-left-1"} src={backImageOne} alt={"Картинка 1 на фон"}/>
                        <img className={"back-image-left-2"} src={backImageTwo} alt={"Картинка 2 на фон"}/>
                        <img className={"back-image-right-2"} src={backImageTwo} alt={"Картинка 2 на фон"}/>
                        <img className={"back-image-right-1"} src={backImageOne} alt={"Картинка 1 на фон"}/>
                    </div>
                    <div className={"block-one-container"}>
                        <img className={"back-image"} src={blockBackground} alt={"background block"}/>
                        {/*<div className={"block-one"}>*/}
                        {/*    <h3 className={"mini-heading-block"}>TANGLY AND TINGLY</h3>*/}
                        {/*    <h2 className={"heading-block"}>LIGHT ROAST BLEND</h2>*/}
                        {/*    <img className={"image-block"} src={productImageOne} alt={"image block 1"}/>*/}
                        {/*</div>*/}
                    </div>
                    <div className={"block-two-container"}>
                        <img className={"back-image"} src={blockBackground} alt={"background block"}/>
                        {/*<div className={"block-one"}>*/}
                        {/*    <h3 className={"mini-heading-block"}>TANGLY AND TINGLY</h3>*/}
                        {/*    <h2 className={"heading-block"}>LIGHT ROAST BLEND</h2>*/}
                        {/*    <img className={"image-block"} src={productImageOne} alt={"image block 1"}/>*/}
                        {/*</div>*/}
                    </div>
                    <div className={"block-three-container"}>
                        <img className={"back-image"} src={blockBackground} alt={"background block"}/>
                        {/*<div className={"block-one"}>*/}
                        {/*    <h3 className={"mini-heading-block"}>TANGLY AND TINGLY</h3>*/}
                        {/*    <h2 className={"heading-block"}>LIGHT ROAST BLEND</h2>*/}
                        {/*    <img className={"image-block"} src={productImageOne} alt={"image block 1"}/>*/}
                        {/*</div>*/}
                    </div>
                </div>
                <div className={"image-six-container"}>
                    <img className={"image-six"} src={componentSix} alt={"Компонент 6"}/>
                </div>
                <div className={"image-seven-container"}>
                    <img className={"image-seven"} src={componentSeven} alt={"Компонент 7"}/>
                </div>
                <div className={"heading-two-container"}>
                    <h1 className={"heading-two"}>
                        THE STORY BEHIND<br/>
                        THE SOUCE
                    </h1>
                </div>
                <div className={"image-eight-container"}>
                    <img className={"image-eight"} src={componentEight} alt={"Компонент 8"}/>
                </div>
                <div className={"image-nine-container"}>
                    <img className={"image-nine"} src={componentNine} alt={"Компонент 9"}/>
                </div>
                <div className={"image-six-container-repeat"}>
                    <img className={"image-six-repeat"} src={componentSix} alt={"Компонент 6"}/>
                </div>
                <div className={"image-ten-container"}>
                    <img className={"image-ten"} src={componentTen} alt={"Компонент 10"}/>
                </div>
            </main>
            <footer>
                <nav className={"grid-item-menu-footer"}>
                    <ul>
                        <li>PRIVACY</li>
                        <li>UJJO LLC, COLUMBUS OH, 43219</li>
                        <li>INSTAGRAM</li>
                    </ul>
                </nav>
            </footer>
        </>
    )
}

export default App
