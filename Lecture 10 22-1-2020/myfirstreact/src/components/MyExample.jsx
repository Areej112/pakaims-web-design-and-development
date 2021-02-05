import { useState } from "react";

const MyExample = () => {
  const [hobby, setHobby] = useState("Cricket");
  return (
    <div>
      <div>{hobby}</div>
      <input
        type="text"
        value={hobby}
        onChange={(e) => {
          setHobby(e.target.value);
        }}
      />
      <div>{hobby}</div>
    </div>
  );
};

export default MyExample;
