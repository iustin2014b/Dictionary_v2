
  export default function ComponentSearch(props) {
    console.log("Search start ");
    function handleInputChange() {
        props.setMsgP("Enter a word!")
    }
    function handleButtonClick() {
      let wordInput = document.getElementById("inputBox").value;
      let isContained = props.wordsP.some((item) => item === wordInput);
      if (!isContained) {
        props.setWordP(wordInput);
        console.log("Not founded");
      } else {
        props.setWordP("");
        console.log("Founded");
        props.setMsgP("Word " + wordInput + " already exist!");
      }
      document.getElementById("inputBox").value = "";
    }
    console.log("Search end ");
    return (
      <div>
        <div className="mainDiv">
          <input
            name="inputBox"
            id="inputBox"
            type="text"
            onChange={handleInputChange}
          />
          <button id="button" onClick={handleButtonClick}>
            Add
          </button>
        </div>
      </div>
    );
  }
  