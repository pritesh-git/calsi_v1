import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  let firstval=0;
  let optval ='';
  const [ivalue,fvalue] = useState('');

 const numPress=(n)=>{
    fvalue(ivalue+n);
  }
  const optPress=(opt)=>{
    console.log(optval)

    optval=opt;
    firstval=ivalue;
    fvalue('');
    console.log(optval,firstval)
  }
 const rsltPress=()=>{
    console.log(ivalue,",",optval,",",firstval);
  }
  return (
    <div className="d-flex justify-content-center align-items-center bg-success" style={{height:"98vh"}}>
      <div className="h-50 col-md-3 shadow-lg p-3 rounded px-md-4 bg-primary">
       <input type="text" name="vals" value={ivalue} className="w-100 p-3 shadow p-3 mb-3 bg-white rounded" onkeypress="if(isNaN(String.fromCharCode(event.keyCode))) return false;" />
       <div class="btn-group-vertical w-100 p-3 h-75 d-inline-block">
       <div class="btn-group h-25">
          <button type="button" class="btn btn-info m-1 shadow rounded" onClick={()=>{numPress('1')}}>1</button>
          <button type="button" class="btn btn-info m-1 shadow rounded" onClick={()=>{numPress('2')}}>2</button>
          <button type="button" class="btn btn-info m-1 shadow rounded" onClick={()=>{numPress('3')}}>3</button>
          <button type="button" class="btn btn-info m-1 shadow rounded" onClick={()=>{{optPress('*')}}}>*</button>
        </div>
        <div class="btn-group h-25">
          <button type="button" class="btn btn-info m-1 shadow rounded" onClick={()=>{numPress('4')}}>4</button>
          <button type="button" class="btn btn-info m-1 shadow rounded" onClick={()=>{numPress('5')}}>5</button>
          <button type="button" class="btn btn-info m-1 shadow rounded" onClick={()=>{numPress('6')}}>6</button>
          <button type="button" class="btn btn-info m-1 shadow rounded" onClick={()=>{optPress('/')}}>/</button>
        </div>
        <div class="btn-group h-25">
          <button type="button" class="btn btn-info m-1 shadow rounded" onClick={()=>{numPress('7')}}>7</button>
          <button type="button" class="btn btn-info m-1 shadow rounded" onClick={()=>{numPress('8')}}>8</button>
          <button type="button" class="btn btn-info m-1 shadow rounded" onClick={()=>{numPress('9')}}>9</button>
          <button type="button" class="btn btn-info m-1 shadow rounded" onClick={()=>{optPress('-')}}>-</button>
        </div>
        <div class="btn-group h-25">
          <button type="button" class="btn btn-info m-1 shadow rounded" onClick={()=>{numPress('.')}}><h1>.</h1></button>
          <button type="button" class="btn btn-info m-1 shadow rounded" onClick={()=>{numPress('0')}}>0</button>
          <button type="button" class="btn btn-info m-1 shadow rounded" onClick={()=>{rsltPress()}}>=</button>
          <button type="button" class="btn btn-info m-1 shadow rounded" onClick={()=>{optPress('+')}}>+</button>
        </div>
      </div>
     </div>
    </div>
  );
}

export default App;
