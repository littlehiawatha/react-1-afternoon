// // always import the line below if it is 
// import React, {Component} from 'react'
// class TopicBrowser extends Component {
//    constructor(){
//       super()
//       this.state = {
//          // i.e. variable: 0,
//          // i.e. elephant: 2,
//       }
//    }

//    render(){
//       return(
//          <div>
//             Topic Browser!
//          </div>
//       )
//    }
// }

// export default TopicBrowser

// // --------------------------------------------
// import React, {Component} from 'react'

// class TopicBrowser extends Component {
//    constructor(){
//       super();
//       this.state = {
//          something: []
//       }
//    }
//    render(){
//       return (
//          <p> the shakes are so annoying </p>
//       )
//    }
// }

// export default TopicBrowser

// // ------------------------Extra hours Practice ---------------

// // non stateful value.... you use staful components in classes
// import React {Component} from 'react'

// function TopicBowser(){
//    return(
//       <p> whatever text</p>
//    )
// }

// export default TopicBrowser

// // --------------- Stateful Example Again---------

// class TopicBrowser extends Component {
//    constructor () {
//       super()
//       this.state = {

//       }
//    }

//    render(){
//       return(
//          <p> whatever text</p>
//       )
//    }
// }

// export default TopicBrowser

// // ---------info box ---------------------

import Reactimport { Component } from 'react'

class TopicBowser (){

   constructor(){
      super()
      this.state = {
         firstName: 'Michael Scott'

      }
   }

   handleChange (value) => {
      this.state({
         character: value
      })
   }

   render (){
      return (
         <div>
            <input 
               placeholder = {'Enter Name'}
               onChange = {e=>this.handleChange(e.target.value)}
            />
         </div>
      )
   }

}