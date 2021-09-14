import './index.css';

export default function GenreToggle(props) {
    const { genresList } = props;

    // const genreItems = genresList.map((genreName, genreIndex) => (
    //     <li key={"genre_" + genreIndex.toString()} onClick={selectItem}>{genreName}</li>
    // ));
    
    const genreItems = genresList.map((genreName, genreIndex) => (
        <li key={genreIndex.toString()}>
            <input type="radio" name="genres" id={"genres_"+genreIndex} />
            <label htmlFor={"genres_"+genreIndex}>{genreName}</label>
        </li>
    ));

    return (<div style={{ width: "100%" }}>
        <ul className="genresList">
            <li key="default">
                <input type="radio" name="genres" id="genres_default" />
                <label htmlFor="genres_default">All</label>
            </li>
            {genreItems}
        </ul>

    </div>);
}