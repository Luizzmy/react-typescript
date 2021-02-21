import logo from './logo.svg';
import './App.css';
import Message from './Message'

function App() {

  //TypeScript basic type definitions:
  // let firstValue : string = "Manny"
  // let firstValue : number = 34
  // let firstValue : boolean = true
  // let firstValue : number[] = [34, 45]
  // let firstValue : Array <string> = ["34", "Manny"]

  //TypeScript complex type definitions:
  // let tuple : [string, number] = ["MAnny", 65]
  // enum Codes {first=1, second=2}
      //enum requires the first letter to be capital letter and its used to initialize 
      //an assignment of values, can be initilized as before or left empty and add valued later
  //let firstNAme: any = 3
      //Should be avoided cause this makes Typescript kinda useless
  // const warning=(): void =>{
  //   console.log("warning!")
  // }
      //void is used for functions that do not return anything like the one above

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* The value {firstNAme} is of {typeof firstNAme} type!  */}
          <Message message="Esta es una prueba de un mensaje simple"/>
        </p>
      </header>
    </div>
  );
}

export default App;
