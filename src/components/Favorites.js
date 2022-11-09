import styled from "styled-components";

const StyledFav = styled.div`
  flex: 1;
  width: 100%;
  padding: 16px;
  margin: 16px;
  overflow: hidden;
  img {
    border-radius: 50%;
  }
  h2{
    margin: 16px 0;
  }
  p{
    margin-top: 16px;
  }
`;
export default function Favorites(props) {
  const favorites = props.favorites;
  return (
    <StyledFav>
      <h2>AluraTubes Favoritos</h2>
      {favorites.map((item, key) => {
        return (
          <div key={key}>
            <a href={item.url}>
              <img src={item.thumb} />
              <p>{item.name}</p>
            </a>
          </div>
        );
      })}
    </StyledFav>
  );
}
