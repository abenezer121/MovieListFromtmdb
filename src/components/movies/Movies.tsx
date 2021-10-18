import React, { useEffect, useState }  from 'react'
import MaterialTable from "material-table";

import {MovieDiv} from './movieStyle'

  
function Movies () {



  interface IUser {
    array: Array<string>;
  }

  const [marked , setMarked] = useState<IUser>({array : []})
  const [_, forceUpdate] = React.useReducer((x) => x + 1, 0);

  useEffect(() =>   {
    try{

      var retrievedData = localStorage.getItem("marked");
      var markedLocal = retrievedData !== null ?   JSON.parse(retrievedData) : [];
      let data = marked
      data.array = markedLocal
      setMarked(data)
      forceUpdate()
    }
    catch(err){

    }

  }, []);


  

  function handleHighLight(title: string): void {
    //check if exists
    let data = marked
    if(marked.array.includes(title)){
      data.array = data.array.filter((n) =>{ return  n != title })
      setMarked(data)
    localStorage.setItem("marked", JSON.stringify(data.array))

    }
    else{
      data.array.push(title)
      setMarked(data)
      localStorage.setItem("marked", JSON.stringify(data.array))


    }
    forceUpdate()
  }
  


  return (
    
    <MovieDiv>
      <h4 className="p-4"> { "User Lists"} </h4>
      
      <MaterialTable
        style={{
          color: "#095B59",
          fontFamily: "Roboto, sans-serif",
          fontSize: ".8em",
          border: "1px solid #e5e5e5",
        }}
        title={"All users"}
      options = {{
        search: true,
        rowStyle : rowData =>  {
          if(marked.array.includes(rowData.title)){
            return {backgroundColor : 'yellow'}
          }
          return {}
        }
      }}

        columns={[
          { title: "Icon", field: "backdrop_path" ,  
          render : rowData => (
           
            <img
              style={{ height: 36, borderRadius: '50%' }}
              src={`http://image.tmdb.org/t/p/w500/${rowData.backdrop_path}`}
           />
          )
        }
          ,
          { title: "Name", field: "title"  
        },
          { title: "rating", field: "vote_average" 
        },
          { title: "year", field: "release_date" 
   
        },
         {
           title : "Star" , field : "star" , 
           render: rowData => (
            <span onClick={() => handleHighLight(rowData.title)}> 
            <i  className="material-icons">star</i>
            </span>
           )
         }
          
          
        ]}

       data={query =>
        new Promise((resolve, reject) => {

          //if it is search
          //query.search == ""
          if(query.search){
            let url = `https://api.themoviedb.org/3/search/movie?api_key=2989bbe386534eee1b72aa98b2458d69&language=en-US&page=page=${query.page + 1}&query=${query.search}`
           
            fetch(url)
              .then(response => response.json())
              .then(result => {
                resolve({
                  data: result.results,
                  page: result.page - 1,
                  totalCount: 500,
                })
              })
          }

          else if(query.orderBy){
              

              let url =  `https://api.themoviedb.org/3/discover/movie?api_key=2989bbe386534eee1b72aa98b2458d69&sort_by=${query.orderBy.field+"."+query.orderDirection}&page=${query.page + 1}`
              
            fetch(url)
            .then(response => response.json())
            .then(result => {
              resolve({
                data : result.results,
                page: result.page - 1,
                totalCount: 500,
              })
            })
          }
          
          else{
            let url = `https://api.themoviedb.org/3/discover/movie?api_key=2989bbe386534eee1b72aa98b2458d69&page=${query.page + 1}`
          fetch(url)
            .then(response => response.json())
            .then(result => {
              resolve({
                data: result.results,
                page: result.page - 1,
                totalCount: 500,
              })
            })
          }
          

        })
      }

        
      />
    </MovieDiv>
  );
}

export default Movies;

