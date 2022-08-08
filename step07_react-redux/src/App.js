import React, { Component } from 'react';
import './App.css';
import AddNumberRoot from './components/AddNumberRoot';
import DisplayNumberRoot from './components/DisplayNumberRoot';

// 별도 컴포넌트로 분리 -> AddNumber.jsx
// class AddNumber extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Add Number</h1>
//         <input type="button" value= "+"></input>
//         <input type="text" value= "0"></input>
//       </div>
//     );
//   }
// }

// class AddNumberRoot extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Add Number Root</h1>
//         <AddNumber></AddNumber>
//       </div>
//     );
//   }
// }


class App extends Component {
  state = {number:0}
  render() {
    return(
      <div className="App">
        <h1>Root</h1>
        {/* Redux 사용전 */}
        {/* <AddNumberRoot onClick={function(size) {
          this.setState({number:this.state.number + size});
        }.bind(this)}></AddNumberRoot>
        <DisplayNumberRoot number={this.state.number}></DisplayNumberRoot> */}
        <AddNumberRoot></AddNumberRoot>
        <DisplayNumberRoot></DisplayNumberRoot>
      </div>
    );
  }
}

// class DisplayNumber extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Display Number</h1>
//         <input type="text" value="0" readOnly></input>
//       </div>
//     );
//   }
// }

// class DisplayNumberRoot extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Display Number Root</h1>
//         <DisplayNumber></DisplayNumber>
//       </div>
//     );
//   }
// }

export default App;
