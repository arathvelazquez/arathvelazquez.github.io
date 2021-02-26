import { Component } from 'react';

class Button extends Component {
  
  render() {
    return (
      <div className="flex mt-3">
        <a href="shared/FS_ArathVelazquez_CV.pdf" target="tab" className="m-auto border-2 border-primary hover:text-primary hover:border-white text-white font-extrabold uppercase p-2 text-sm outline-none">Download CV</a>
      </div>
    )
  }
}

export default Button;