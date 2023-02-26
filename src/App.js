import './App.css';
import python from "./images/python.png"
import react from "./images/react.png"
import shop from "./images/shop.png"
import triangle from "./images/triangle.png"
import mask from "./images/mask.png"
import rect from "./images/rects.png"

function App() {
  return (

    <>
      <div className='head'>
        <p>Projects</p>
      </div>

      <div className='projectsdiv'>

        <div className='project' id='project1' >
          <img className='pythonimg' src={python}></img>
          <p className='name'>python projects</p>
          <p className='desc'>collection of python codes i've written</p>
          <a className='anchor' href='https://github.com/irakli182/my-projects' target='_blank'>
            <button className='button'>CLICK</button>
          </a>
        </div>

        <div className='project' id='project6' >
          <img id='rect' className='pythonimg' src={rect}></img>
          <p className='name'>Portfolio</p>
          <p className='desc'>My personal portfolio i've built using reactJS</p>
          <a className='anchor' href='https://portfolio-irakli182.vercel.app/' target='_blank'>
            <button className='button'>CLICK</button>
          </a>
        </div>

        <div className='project' id='project3'>
          <img className='shopimg' src={shop}></img>
          <p className='name'>commerce website</p>
          <p className='desc'>HTML and CSS markup i've written for a company selling product</p>
          <a className='anchor' href='https://irakli182.github.io/' target='_blank'>
            <button className='button'>CLICK</button>
          </a>
        </div>
      </div>


      
      <div className='projectsdiv1'>

        <div className='project' id='project4' >
          <img className='pythonimg' src={triangle}></img>
          <p className='name'>Matrix Inversion</p>
          <p className='desc'>Matrix inversion tool I've written with detailed explanation</p>
          <a className='anchor' href='https://cramers.vercel.app/' target='_blank'>
            <button className='button'>CLICK</button>
          </a>
        </div>

        <div className='project' id='project5' >
          <img id='onimask' className='pythonimg' src={mask}></img>
          <p className='name'>Tic Tac Toe</p>
          <p className='desc'>Impossible to win Tic Tac Toe game i've written using javascript</p>
          <a className='anchor' href='https://tictactoe-irakli.vercel.app/' target='_blank'>
            <button className='button'>CLICK</button>
          </a>
        </div>

        <div className='project' id='project2'>
          <img className='reactimg' src={react}></img>
          <p className='name'>Caesar's cipher</p>
          <p className='desc'>Encription and Decription tool website i've writting using reactJS</p>
          <a className='anchor' href='https://react-caesar.vercel.app/' target='_blank'>
            <button className='button'>CLICK</button>
          </a>
        </div>

      
      </div>


        <div className='projectsdiv2'>

        <div className='project' id='project7' >
          <img className='pythonimg' src={react}></img>
          <p className='name'>Second portfolio</p>
          <p className='desc'>My other personal portfolio i've built using reactJS</p>
          <a className='anchor' href='https://portf2-irakli182.vercel.app/' target='_blank'>
            <button className='button'>CLICK</button>
          </a>
        </div>



      </div>

    </>
  );
}

export default App;
