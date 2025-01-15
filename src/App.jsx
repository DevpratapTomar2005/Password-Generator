import { useState ,useCallback} from "react"; 

function App() {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(8);
  const[containNumbers,setContainNumbers]=useState(true);
  const[containSymbols,setContainSymbols]=useState(true);

  const generatePassword=useCallback(()=>{
    let numbers="0123456789";
    let symbols="@$&_";
    let letters="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let allChars=letters;
    if(containNumbers){
      allChars+=numbers;
    }
    if(containSymbols){
      allChars+=symbols;
    }
    let password="";
    for(let i=0;i<passwordLength;i++){
      let randomIndex=Math.floor(Math.random()*allChars.length);
      password+=allChars[randomIndex];
    }
    setPassword(password);
  },[passwordLength,containNumbers,containSymbols]);

  
  return (
    <>
     <div className="d-flex flex-col bg-blue-200   w-1/2 mx-auto my-48 p-5 rounded-lg" >
      
        <div id="passwordInputBox" className="w-full flex gap-1" >
          <input type="text" id="passwordInput" value={password} placeholder="Your Password" className="border-2  border-blue-700 focus:outline-none rounded px-2 w-full text-blue-600" readOnly/>
          <button className="bg-blue-800 text-white h-10 w-20 flex justify-center text-center gap-1 box-border items-center rounded font-medium text-sm  hover:bg-blue-600" >Copy<img src="./copy.svg" alt="copybtn" /></button>
        </div>
      
      <div className="flex gap-3 flex-row justify-center my-3 ">
        <span>
          <label htmlFor="passwordLength" className="text-sm text-blue-900 font-medium">Password Length {passwordLength}</label>
          <input type="range" id="passwordLength" value={passwordLength} onChange={(e)=>setPasswordLength(e.target.value)} className="h-1 w-20 accent-blue-900 mx-1 align-middle" />
        </span>
        <span>
          <label htmlFor="containNumbers" className="text-sm text-blue-900 font-medium">Contain Numbers</label>
          <input type="checkbox" id="containNumbers" checked={containNumbers} onChange={(e)=>setContainNumbers(!containNumbers)} className="h-5 w-4 mx-1 align-middle font-medium accent-blue-900" />
        </span>
        <span>
          <label htmlFor="containSymbols" className="text-sm text-blue-900 font-medium">Contain Symbols</label>
          <input type="checkbox" id="containSymbols" checked={containSymbols} onChange={(e)=>setContainSymbols(!containSymbols)} className="h-5 w-4 mx-1 align-middle font-medium accent-blue-900" />
        </span>

     </div>
        <div className="flex justify-center">
          <button onClick={generatePassword} className="bg-blue-800 text-white font-bold text-15 p-2 rounded hover:bg-blue-500">Generate Password</button>
        </div>
     </div>
    </>
  );
}

export default App;

