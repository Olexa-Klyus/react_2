import SubChild2_1 from "./SubChild2_1/SubChild2_1";
import SubChild2_2 from "./SubChild2_2/SubChild2_2";

const Child2 = ({setNumber}) => {

    return (
        <div>
            <br/>
            <SubChild2_1/>
            <SubChild2_2 setNumber={setNumber}/>
        </div>
    );
};

export default Child2;