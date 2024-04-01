import styled from "@emotion/styled";
import theme from "@/app/theme_emotion";

const SmallBlueBorder = () => {
  return (
    <section className="small-golden-container">
      <FilterInstruction>
      Topic Filter: Explore Articles by Subject
     
      </FilterInstruction>
    </section>
  );
};

export default SmallBlueBorder;

const FilterInstruction = styled.h1`
background-color: blue;

`
