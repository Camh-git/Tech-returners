interface ChuckData {
  whalesSaved: number;
  roundHouseKicks: number;
}
const ChuckInfo: React.FC<ChuckData> = ({ whalesSaved, roundHouseKicks }) => {
  // 💡 Note that this component, like the <ChuckCard />, uses an "explicit return"
  // Compare this to <ChuckJoke/> which just returns the JSX directly like this:
  // const ChuckJoke = () => <>... some JSX Here...</>;

  // Instead, this component uses curly braces `{}` and a `return` statement

  // This allows us to write code here to perform some logic before we construct
  // the JSX we want to return

  // If you don't have any particular need to write TypeScript/JavaScript logic
  // in a component, then it's cleaner to use the implicit return style from
  // <ChuckJoke/>

  const someVariable = ""; // 💡 you don't need this to finish this exercise, it's just to demo that JS can go here!

  return (
    <>
      <p>Number of Whales Saved: {whalesSaved}</p>

      <p>Number of Round House Kicks (in the last day): {roundHouseKicks}</p>
    </>
  );
};

export default ChuckInfo;
