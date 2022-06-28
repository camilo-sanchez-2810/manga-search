import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import useFecth from "../hooks/useFetch";
import MangaCardComponent from "./mangaCardComponent";
const OPTIONS = {
  methods: 'GET', 
  headers: {
    Accept: 'application/vnd.api+json', 
    'Content-Type': 'application/vnd.api+json'
  }
};
const MangaListComponent = ({manga}) => {
  const [url, changeUrl] = useState(`https://kitsu.io/api/edge/manga?filter[text]=${manga}`)
  const {fetchData, loading} = useFecth(url, OPTIONS);
  useEffect(()=>{
    changeUrl(`https://kitsu.io/api/edge/manga?filter[text]=${manga}`)
  },[manga])
  console.log(fetchData);
  console.log(loading);
  return (
    <Row>
      {!loading ? 
        <h2>loading...</h2> :
        fetchData.data.length === 0 ?
          <h2>No results</h2> :
          <MangaCardComponent />
      }
    </Row>
  );
}
export default MangaListComponent;