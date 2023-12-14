import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div>
        <input
          value={email}
          placeholder="Email"
          onChange={(ev) => setEmail(ev.target.value)}
        />
      </div>
      <div>
        <input
          value={password}
          placeholder="Password"
          onChange={(ev) => setPassword(ev.target.value)}
        />
      </div>
      <div>
        Want to Gossip? <a href="/sign-up">Sign up</a>
      </div>
      <div>
        <input type="button" value={"Log in"} />
      </div>
    </>
  );
}
