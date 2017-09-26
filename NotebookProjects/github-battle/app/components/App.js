var React = require('react');
var Popular = require('./Popular');
class App extends React.Component {
  render() {
    return (
      <div className="container"> 
      <Popular />
       </div>
    )
  }
}
//render popular component 

// export App component so another file can import it.,..index.js
module.exports = App;