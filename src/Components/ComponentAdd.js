export default function ComponentAdd(props) {
    console.log("Add " + props.wordP + ",");
    props.setWordsP((currentWords) => [...currentWords, props.wordP]);
    props.setMsgP("Word " + props.wordP + " added.");
    props.setWordP("");
    return null;
  }
 