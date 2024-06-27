import { Container } from "./styles";
import { Tag } from "../Tag";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";

export function MiniPrev({ data, ...rest }) {
  return (
    <Container>
      <h2>{data.title}</h2>
      <section>
        {data.goodRating.map((goodRating) => (
          <span key={goodRating.star}>
            <IoIosStar />
          </span>
        ))}
        {data.badRating.map((badRating) => (
          <span key={badRating.nostar}>
            <IoIosStarOutline />
          </span>
        ))}
      </section>
      <p>{data.info}</p>
      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  );
}
