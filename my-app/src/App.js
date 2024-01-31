import React, { useState } from 'react'
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Register from './components/Register'
import Login from './components/Login'
import Signup from './components/Signup'
import Gallery from './components/Gallery'
import Portfolio from './components/Portfolio'
import Header from './components/Header'
import Footer from './components/Footer'
const App = (props) => {
  

  const [show, setShow] = useState(true)

  const [hide, setHide] = useState(!show)
  


  
  return (
    <div>
      {/* <Register /> */}
      
      <BrowserRouter>
      {/* <Header authorize={true}/> */}
      {/* <Header hide={hide}/> */}
        <Routes>
          <Route path='/' element={<Register />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/portfolio' element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App



// import React, { Component } from "react";

// // Import your audio file
// import song from "./Assets/song_1.mp3";
// import song1 from "./Assets/mai_rang_song_2.mp3"
// class App extends Component {
// 	// Create state
// 	state = {

// 		// Get audio file in a variable
// 		audio: new Audio(song),

// 		// Set initial state of song
// 		isPlaying: false,
// 	};

// 	// Main function to handle both play and pause operations
// 	playPause = () => {

// 		// Get state of song
// 		let isPlaying = this.state.isPlaying;

//     let c=0;
    
// 		if (isPlaying) {
// 			// Pause the song if it is playing
// 			this.state.audio.pause();
// 		} else {

// 			// Play the song if it is paused
// 			this.state.audio.play();
// 		}

// 		// Change the state of song
// 		this.setState({ isPlaying: !isPlaying });
// 	};

//   Next =()=>{
//     c
//   }

// 	render() {
// 		return (
// 			<div className="flex flex-col gap-10">
// 				{/* Show state of song on website */}
// 				<p>
// 					{this.state.isPlaying ?
// 						"Song is Playing" :
// 						"Song is Paused"}
// 				</p>

// 				{/* Button to call our main function */}
// 				<button onClick={this.playPause}>
// 					Play | Pause
// 				</button>
//         <button onClick={Next}>Next</button>
// 			</div>
// 		);
// 	}
// }

// export default App;
