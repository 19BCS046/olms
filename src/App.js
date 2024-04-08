import './App.css';
import Body from './component/Body';
import Header from './component/Header';
// import TypesofLoan from './component/TypesofLoan';

const  App=()=> {
  return (
    <div className="  bg-slate-100 h-auto ">
      {/* <img className='h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTCi7Fbw_UydchORSP6mA16jrpLnY4M19_7EYjQbDBV2rEm190w1rv_UxLQw&s" alt="img"></img> */}
     <Header />
      <Body />
      {/* <TypesofLoan /> */}
    </div>
  );
}


export default App;
