import DATA from "../../DATA";
const { urls } = DATA;

export default function Demo() {
  const classes = {
    wrapper: "flex justify-center max-w-screen-md",
  };
  return (
    <div className="section-main">
      <iframe width={"100%"} height={"400px"} src={urls.video}></iframe>
    </div>
  );
}
