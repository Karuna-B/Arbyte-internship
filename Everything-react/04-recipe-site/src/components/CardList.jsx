// export const recipes = [
//   {
//     id: 1,
//     name: "Local Momo",
//     image: "https://i.ytimg.com/vi/tLh0GR8UhU8/sddefault.jpg",
//     tag: "Best Food Ever",
//     numberOfMinutes: 90,
//   },
//   {
//     id: 2,
//     name: "Local Sekuwa",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOKW8x5gYakoK3T0B0pVvBZjp6hFkxpPusFQ&s",
//     tag: "Savories",
//     numberOfMinutes: 100,
//   },
//   {
//     id: 3,
//     name: "Pizza",
//     image:
//       "https://cdn.loveandlemons.com/wp-content/uploads/2023/02/vegetarian-pizza-500x500.jpg",
//     tag: "Continental",
//     numberOfMinutes: 50,
//   },
//   {
//     id: 4,
//     name: "Spaghetti",
//     image:
//       "https://www.thecookierookie.com/wp-content/uploads/2023/07/featured-baked-spaghetti-recipe-500x500.jpg",
//     tag: "Italian",
//     numberOfMinutes: 30,
//   },
// ];

import Card from "./Card";

function CardList({ recipes }) {
  return (
    <section className="cards">
      {recipes.map((recipe) => (
        <Card key={recipe.id} recipe={recipe} />
      ))}
    </section>
  );
  
}

export default CardList;
