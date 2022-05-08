import styled from "styled-components";
import { COLORS } from "~constants/index";
import { ResponsiveType } from "~src/types/components";

export const WrapperHeader = styled.div<ResponsiveType>`
  padding: 15px;
  background: white;
  border-radius: 4px;
  display: flex;
  flex-direction: ${(props) => (props.isMobile ? "column" : "row")};
  justify-content: space-between;

  > div > p {
    margin-bottom: 0px;
    font-size: 12px;
    color: grey;
  }

  > div > h4 {
    color: ${COLORS.RED};
  }

  > div:nth-child(2) {
    display: flex;
    flex-direction: ${(props) => (props.isMobile ? "column" : "row")};
    margin-top: ${(props) => (props.isMobile ? "10px" : "0px")};

    align-items: center;
    gap: 8px;

    > div {
      width: 100%;
    }
  }
`;

export const WrapperData = styled.div<ResponsiveType>`
  display: ${(props) => (props.isMobile ? "contents" : "flex")};
  flex-direction: ${(props) => (props.isMobile ? "column" : "row")};
  gap: 10px;
  width: fit-content;

  > div {
    margin-top: 8px;
  }
}
`;
