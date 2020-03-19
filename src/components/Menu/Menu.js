import React from 'react';
import './Menu.css'

// const Menu = (props) => {
//   const handleClick = (pageName) => {
//
//     props.changePage(pageName);
//   }
//   return (
//     <section className="menu-section">
//       <button
//         className="menu-button clicked"
//         onClick={() => handleClick('local')}
//         >Local</button>
//       <button
//         className="menu-button"
//         onClick={() => handleClick('health')}
//         >Health</button>
//       <button
//         className="menu-button"
//         onClick={() => handleClick('entertainment')}
//         >Entertainment</button>
//       <button
//         className="menu-button"
//         onClick={() => handleClick('science')}
//         >Science</button>
//       <button
//         className="menu-button"
//         onClick={() => handleClick('technology')}
//         >Technology</button>
//     </section>
//   )
// }

class Menu extends React.Component {
  constructor(props) {
    super();
    this.state = {
      activeLink: 'local'
    }
  }
  handleClick = (event) => {
    let allNavButtons = Array.prototype.slice.call(
      event.target.parentNode.children);
    allNavButtons.forEach(button => button.classList.remove('active'));
    event.target.classList.add('active')
    this.props.changePage(event.target.name);
  }
  render() {
    return (
      <section className="menu-section">
        <button
          className="menu-button"
          name='local'
          onClick={event => this.handleClick(event)}
          >Local</button>
        <button
          className="menu-button"
          name='health'
          onClick={event => this.handleClick(event)}
          >Health</button>
        <button
          className="menu-button"
          name='entertainment'
          onClick={event => this.handleClick(event)}
          >Entertainment</button>
        <button
          className="menu-button"
          name='science'
          onClick={event => this.handleClick(event)}
          >Science</button>
        <button
          className="menu-button"
          name='technology'
          onClick={event => this.handleClick(event)}
          >Technology</button>
      </section>
    )
  }
}

export default Menu;
