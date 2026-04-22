import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("nay");
  const [password, setPassword] = useState("123");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email: ", email);
    console.log("Password: ", password);
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="border-2 border-emerald-600 rounded-2xl">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              console.log(e.target.value);
            }}
            required
            className="border-2 border-emerald-600 rounded-3xl py-2 px-12 mx-8 mt-20 mb-4 bg-transparent outline-none text-xl"
            type="email"
            placeholder="Enter your Email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="border-2 border-emerald-600 rounded-3xl py-2 px-12 mx-8 bg-transparent outline-none text-xl"
            type="password"
            placeholder="Enter your password"
          />
          <button className="border-2 border-emerald-600 rounded-4xl py-4 px-12 mx-8 mt-12 mb-20 bg-transparent outline-none text-xl">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
