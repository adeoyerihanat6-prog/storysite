import { useState, useEffect } from "react";

const PasswordChecker = () => {
const [password, setPassword] = useState("");
const [strength, setStrength] = useState("");
// const [color, setColor] = useState("");
const [bg, setBg] = useState("");

  useEffect(() => {
    if (password.length === 0) {
     setStrength("");
      // setColor("")
      setBg("");                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
      return;
    }
       
      

    if (password.length < 6) {
      setStrength("Weak");
      // setColor("text-red-500");
      setBg("bg-red-500");
    } 
    else if (password.length < 10) {
      setStrength("Medium");
      // setColor("text-yellow-500");
      setBg("bg-yellow-500");
    } else {
      setStrength("Strong");
      // setColor("text-green-500");
      setBg("bg-green-500");
    }
  }, [password]);

  return (
    <div className={`mt-10 p-4 max-w-md mx-auto `}>
      <input type="password" placeholder = "Enter password" className="w-full p-3 border rounded-lg"
        value={password}
        onChange={(e) => setPassword(e.target.value)}/>

      {strength && (
        <p className={`mt-2 font-bold  ${bg}`}>
          Password strength: {strength}
        </p>
      )}
    </div>
  );
};

export default PasswordChecker;
