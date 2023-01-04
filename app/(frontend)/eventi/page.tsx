import CardContainer from "../../../components/CardContainer";

export const revalidate = 60;

export default function page() {
   return (
      <>
         <div className="sezione">
            <h1 className="titoletto">Eventi</h1>
            {/* <div className="flex flex-col md:flex-row gap-4 md:justify-between my-3 md:flex-wrap"> */}
            {/* @ts-ignore */}
            <CardContainer />
            <div className="md:h-[250px] h-[50px]"></div>
         </div>
      </>
   )
}