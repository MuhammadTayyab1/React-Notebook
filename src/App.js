import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
 
const divStyle = {
    background:'rgb(248, 235, 246',
    height:'20px',
    width:'30%'
  };

  const divStyle1 = {
    background:'rgb(248, 235, 246',
    height:'50px',
    width:'60%'
  };

class App extends Component {

  downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([document.getElementById('myInput').value], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = this.state.name;
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }
  constructor() {
    super();
    this.state = {
      name: 'React',name:'',data:''
    };
  }

  showFile = () => {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
         var preview = document.getElementById('show-text');
         var file = document.querySelector('input[type=file]').files[0];
         var reader = new FileReader()

         var textFile = /text.*/;

         if (file.type.match(textFile)) {
            reader.onload = function (event) {
               preview.innerHTML = event.target.result;
            }
         } else {
            preview.innerHTML = "<span class='error'>It doesn't seem to be a text file!</span>";
         }
         reader.readAsText(file);

   } else {
      alert("Your browser is too old to support HTML5 File API");
   }
  }

  namesave(myvalue)
  {
    this.setState({
      name:myvalue.target.value
    })
  }

  render() 
  {

    return (
       <div>
         <h2>Notebook</h2>
      <div>
        Your text <br /><textarea style={divStyle1} id="myInput" /> <br />
        File name <br /> <input style={divStyle} onChange={this.namesave.bind(this)} /> <br />
        <button onClick={this.downloadTxtFile}>Save</button>
      </div>
       <hr />

      <div>
        <b>View data</b> <br />
        <input type="file" onChange={this.showFile} />
        <div id="show-text"><br /> <hr /> <br /> </div>
      </div>

      </div>

      
      
    );
  }
}
export default App;