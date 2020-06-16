import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  const [firstval,newval] =useState('');
  const [optval,newopt] =useState('');
  const [ivalue,fvalue] = useState('');

 const numPress=(n)=>{
    fvalue(ivalue+n);
  }
  const optPress=(opt)=>{
    console.log(ivalue,",",optval,",",firstval);
    if(optval!==''){
     var res = rsltPress(); 
    newopt(opt);
    newval(res);
    fvalue(res);
    } 
    else{
      newopt(opt);
      newval(ivalue);
      fvalue('');
    }
  }
 const rsltPress=()=>{
    // console.log(ivalue,",",optval,",",firstval);
    switch(optval){
      case '+': return parseInt(firstval) + parseInt(ivalue);
      case '-': return parseInt(firstval) - parseInt(ivalue);
      case '/': return parseInt(firstval) / parseInt(ivalue);
      case '*': return parseInt(firstval) + parseInt(ivalue);
      default:  break;
    }    
  }
  return (
    <div className="d-flex justify-content-center align-items-center bg-success" style={{height:"98vh"}}>
      <div className="h-50 col-md-3 shadow-lg p-3 rounded px-md-4 bg-primary">
       <input type="text" name="vals" value={ivalue} className="w-100 p-3 shadow p-3 mb-3 bg-white rounded" onKeyPress={()=>{"if(isNaN(String.fromCharCode(event.keyCode))) return false;"}} readOnly/>
       <div className="btn-group-vertical w-100 p-3 h-75 d-inline-block">
       <div className="btn-group h-25">
          <button type="button" className="btn btn-info m-1 shadow rounded" onClick={()=>{numPress('1')}}>1</button>
          <button type="button" className="btn btn-info m-1 shadow rounded" onClick={()=>{numPress('2')}}>2</button>
          <button type="button" className="btn btn-info m-1 shadow rounded" onClick={()=>{numPress('3')}}>3</button>
          <button type="button" className="btn btn-info m-1 shadow rounded" onClick={()=>{optPress('*')}}>*</button>
        </div>
        <div className="btn-group h-25">
          <button type="button" className="btn btn-info m-1 shadow rounded" onClick={()=>{numPress('4')}}>4</button>
          <button type="button" className="btn btn-info m-1 shadow rounded" onClick={()=>{numPress('5')}}>5</button>
          <button type="button" className="btn btn-info m-1 shadow rounded" onClick={()=>{numPress('6')}}>6</button>
          <button type="button" className="btn btn-info m-1 shadow rounded" onClick={()=>{optPress('/')}}>/</button>
        </div>
        <div className="btn-group h-25">
          <button type="button" className="btn btn-info m-1 shadow rounded" onClick={()=>{numPress('7')}}>7</button>
          <button type="button" className="btn btn-info m-1 shadow rounded" onClick={()=>{numPress('8')}}>8</button>
          <button type="button" className="btn btn-info m-1 shadow rounded" onClick={()=>{numPress('9')}}>9</button>
          <button type="button" className="btn btn-info m-1 shadow rounded" onClick={()=>{optPress('-')}}>-</button>
        </div>
        <div className="btn-group h-25">
          <button type="button" className="btn btn-info m-1 shadow rounded" onClick={()=>{numPress('.')}}><h1>.</h1></button>
          <button type="button" className="btn btn-info m-1 shadow rounded" onClick={()=>{numPress('0')}}>0</button>
          <button type="button" className="btn btn-info m-1 shadow rounded" onClick={()=>{rsltPress()}}>=</button>
          <button type="button" className="btn btn-info m-1 shadow rounded" onClick={()=>{optPress('+')}}>+</button>
        </div>
      </div>
     </div>
    </div>
  );
}

export default App;
