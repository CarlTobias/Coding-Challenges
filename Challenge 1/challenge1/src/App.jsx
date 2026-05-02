import "./App.css";

const CATS = [
  {
    name: "Fluffikins",
    breed: "Orange tabby",
    url: "https://placekitten.com/800/600",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    age: 8,
  },
  {
    name: "Blizzard",
    breed: "Calico",
    url: "https://placekitten.com/800/600",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    age: 7,
  },
  {
    name: "Garfield",
    breed: "Maine coon",
    url: "https://placekitten.com/800/600",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    age: 4,
  },
  {
    name: "Vanilla",
    breed: "Siberian",
    url: "https://placekitten.com/800/600",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    age: 1,
  },
  {
    name: "Savannah",
    breed: "Scottish fold",
    url: "https://placekitten.com/800/600",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    age: 10,
  },
  {
    name: "Sudoku",
    breed: "Munchkin",
    url: "https://placekitten.com/800/600",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    age: 2,
  },
  {
    name: "Brownie",
    breed: "Ragdoll",
    url: "https://placekitten.com/800/600",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    age: 9,
  },
  {
    name: "Ms Aloof",
    breed: "British Shorthair",
    url: "https://placekitten.com/800/600",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    age: 4,
  },
  {
    name: "Winnie",
    breed: "Sphynx",
    url: "https://placekitten.com/800/600",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    age: 7,
  },
  {
    name: "Puffins",
    breed: "Bengal",
    url: "https://placekitten.com/800/600",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    age: 6,
  },
];

function CatCard({ cat }) {
  return (
    <div className="catCard">
      <div className="catImage">
        <img src={cat.url} />
      </div>

      <div className="cardHeader">
        <h1>{cat.name}</h1>
        <div className="breedAge">
          <h2>{cat.breed}</h2>
          <p>•</p>
          <h2>{cat.age} {cat.age === 1 ? "year" : "years"}</h2>
        </div>
      </div>

      <div className="catDesc">
        <h3>{cat.description}</h3>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <div className="cardGroup">
        {CATS.map((cat) => (
          <CatCard key={cat.name} cat={cat} />
        ))}
      </div>
    </>
  );
}

export default App;
