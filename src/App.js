import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import ImageList from "./components/ImageList";

import {useState} from "react";

const App = () => {

    const [image, setImage] = useState([])
    const handleSubmit = async (term) => {
        const result = await searchImages(term)

        setImage(result)
    }

  return (
      <div>
        <SearchBar onSubmit={handleSubmit} />
          <ImageList image={image} />
      </div>
  )
}

export default App