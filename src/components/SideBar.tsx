import { AutoSizer, List, ListRowRenderer } from "react-virtualized";
import { Button } from "./Button";

interface SideBarProps {
  handleClickButton: (id: number) => void;
  genres: Array<{
    id: number;
    name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
    title: string;
  }>;
  selectedGenreId: number;
}

export function SideBar({
  handleClickButton,
  genres,
  selectedGenreId,
}: SideBarProps) {
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    const genre = genres[index];
    return (
      <div key={key} style={style}>
        <Button
          key={genre.id}
          title={genre.title}
          iconName={genre.name}
          onClick={() => handleClickButton(genre.id)}
          selected={selectedGenreId === genre.id}
        />
      </div>
    );
  };

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        <AutoSizer>
          {({ height, width }) => {
            console.log(height);
            console.log(width);
            return (
              <List
                height={800}
                rowCount={genres.length}
                rowHeight={80}
                rowRenderer={rowRenderer}
                width={width}
              />
            );
          }}
        </AutoSizer>

        {/* {props.genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => props.handleClickButton(genre.id)}
            selected={props.selectedGenreId === genre.id}
          />
        ))} */}
      </div>
    </nav>
  );
}
