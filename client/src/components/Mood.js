import React, { Component } from "react";

class Mood extends Component {
  render() {
    return (
      <div className='mood'>
        <h3>How's Your Mood?</h3>
        <img
          className='mood__smiley-face'
          src='/images/unhappy.png'
          alt='unhappy'
        />
        <img className='mood__smiley-face' src='/images/sad.png' alt='sad' />
        <img
          className='mood__smiley-face'
          src='/images/confused.png'
          alt='confused'
        />
        <img
          className='mood__smiley-face'
          src='/images/smiling.png'
          alt='smiling'
        />
        <img
          className='mood__smiley-face'
          src='/images/happy.png'
          alt='happy'
        />
        {/* <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button> */}
      </div>
    );
  }
}

export default Mood;
