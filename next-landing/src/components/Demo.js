import DATA from "../DATA";
const { urls } = DATA;

export default function Demo() {
  const classes = {
    wrapper: "flex justify-center max-w-screen-md",
  };
  return (
    <section id="demo" className={classes.wrapper}>
      <iframe width={"100%"} height={"400px"} src={urls.video}></iframe>
    </section>
  );
}
