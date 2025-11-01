import React from 'react'
import { useSelector } from 'react-redux'
import CollectionItem from './CollectionItem';
import SectionTitle from './SectionTitle';

const CollectionItems = () => {
  const collectionItems=useSelector((state)=>state.collectionState.collectionItems);

  return (
    <div className='px-10 max-w-7xl mx-auto  py-10  '>

      <SectionTitle text='Collections'/>
      {collectionItems<1&& <p className='text-lg'>No items in collections</p>}
      <div className="gap-6 my-10  grid  grid-cols-2">
           {collectionItems.map((item)=>{

        return(

          <CollectionItem  key={item.collectionID} collectionItem={item}/>
        )
      })}

      </div>

    </div>
  )
}

export default CollectionItems
