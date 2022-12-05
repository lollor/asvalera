import CardContainer from "../../components/CardContainer";

export default function page() {
   return (
      <>
         <div className="sezione">
            <h1 className="titoletto">Eventi</h1>
            {/* <div className="flex flex-col md:flex-row gap-4 md:justify-between my-3 md:flex-wrap"> */}
            <CardContainer />
         </div>
      </>
   )
}