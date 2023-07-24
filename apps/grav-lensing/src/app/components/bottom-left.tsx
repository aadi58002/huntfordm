import styled from "@emotion/styled";

export type BottomLeftProps = {
  direction?: "row" | "column";
};

export const BottomLeft = styled.div<BottomLeftProps>`
  position: absolute;
  bottom: 0;
  left: 0;
  padding-bottom: 1em;
  padding-left: 1em;
  margin: 2em;
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  flex-wrap: wrap;
  @media (max-width: 1360px) {
    padding-bottom: 0em;
    width: 50%;
    padding-right: 5em;
  }
  @media (max-width: 810px) {
    padding-bottom: 7em;
    padding-right: 5em;
  }
`;
