import React from 'react';
import GameCard from '../../cards/GameCard';

function FilteredList({data, filter}) {
  return (
    <div>    
    {data
        .filter(({ name  }) =>
            name.includes(filter.toLocaleLowerCase())
        )
        .slice(0, 8)
        .map((game) => (
            <GameCard 
                slug={game.slug}
                key={game.id} 
                name={game.name}
                released={game.released}
                background_image={game.background_image}
                rating={game.rating}
                description={game.description}
            />
        ))}
        </div>
  )
}

export default FilteredList