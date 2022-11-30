import { GifItem } from './GifItem';
import { useFetchGifs } from '../Hooks/useFetchGifs';


export const GifsGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category );


  return (
    <>
        {
          isLoading && ( <h2>Cargando...</h2>)
        }
        <h3>{ category }</h3>
        <div className="card-grid">
          {
            images.map( (image) => 
              (
                <GifItem
                 key={ image.id }
                 { ...image }
                 />
              )
            )
          }
        </div>
    </>
  )
}
