import styled from "styled-components";


export default function Banner(props) {
  const StyledBanner = styled.div`
  width: 100%;
  height: 230px;
  background-image: url(${props.url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  `;
  return (
    <StyledBanner>
    </StyledBanner>
  );
}
