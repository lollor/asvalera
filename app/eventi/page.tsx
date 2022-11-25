import Card from "../../components/Card";

export default function page() {
   return (
      <>
          <div className="sezione">
              <h1 className="titoletto">News</h1>
              <div className="flex flex-col md:flex-row gap-4 md:justify-between my-3 md:flex-wrap">
                  <Card img={"/files/torneo.jpg"} title={"VIII Torneo"}/>
                  <Card img={"/files/openday.jpg"} title={"Open day"}/>
                  <Card img={"/files/torneo.jpg"} title={"VIII Torneo"}/>
              </div>
          </div>
      </>
  )
}