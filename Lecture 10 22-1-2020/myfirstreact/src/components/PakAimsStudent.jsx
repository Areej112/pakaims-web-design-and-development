const PakAimsStudent = (props) => {
  return (
    <div>
      <h1>Hello {props.name}</h1>
      <p>My Hobby is Web Development</p>
      <button
        onClick={() => {
          props.onDisturbMe(props.name);
        }}
      >
        Dont Disturb Me
      </button>
    </div>
  );
};

export default PakAimsStudent;
