
import React, { Component, useState } from "react";
import { IoPlaySharp } from "react-icons/io5";
import { IoPauseOutline } from "react-icons/io5";
import {motion} from "framer-motion"
// Import your audio file
import song from "../Assets/song_1.mp3"

class App extends Component {
  // Create state
  state = {

    // Get audio file in a variable
    audio: new Audio(song),

    // Set initial state of song
    isPlaying: false,
  };

  // Main function to handle both play and pause operations
  playPause = () => {

    // Get state of song
    let isPlaying = this.state.isPlaying;

    if (isPlaying) {
      // Pause the song if it is playing
      this.state.audio.pause();
    } else {

      // Play the song if it is paused
      this.state.audio.play();
    }

    // Change the state of song
    this.setState({ isPlaying: !isPlaying });
  };

  render() {
    // const [btnClk, setBtnClk] = useState(0)
    return (
      <motion.div 
      // initial={{y:-200, opacity:0}}
      // animate={{y:0, opacity:1}}
      // transition={{delay:2}}
      
      className="flex ml-5 absolute mt-[70vh] flex-col justify-start items-center h-[8rem] gap-4 bg-transparent w-[6rem] -rotate-90">
        {/* Show state of song on website */}
        <p className="text-2xl font-semibold cursor-pointer">
          {/* {this.state.isPlaying ?
            <IoPauseOutline color='black' size={30} /> :
            <IoPlaySharp color='black' size={30} />} */}
            AUDIO
        </p>

        {/* Button to call our main function */}
        <motion.button 
          initial={{y:-200}}
          animate={{y:0}}
          transition={{delay:2}}
          
        onClick={this.playPause} className="flex items-center justify-center w-12 h-12 rotate-90 bg-black rounded-full">
          {/* Play | Pause */}
          {this.state.isPlaying ?
            <IoPauseOutline color='white' size={20} /> :
            <IoPlaySharp color='white' size={20} />}
        </motion.button>
      </motion.div>
    );
  }
}

export default App;