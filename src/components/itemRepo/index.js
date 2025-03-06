import React from 'react'
import {ItemContainer} from './styles'

const ItemRepo = ({repo,removeRepo}) => {
  
  const handleRemove = () =>{
    removeRepo(repo.id)
  }
  
  return (
    <ItemContainer >
        <h3>
            {repo.name}
        </h3>
        <p>
            {repo.description === null ? 'Sem descrição' : repo.description}
        </p>
        <a  href={repo.html_url} target='_blank'>Ver Repositório</a>
        <br/>
        <a  href='#' onClick={handleRemove} className='remover' >Remover</a>
        <hr/>
    </ItemContainer>
  )
}

export default ItemRepo