import "./App.css";

// import composants
import Prenom from "./Components/Prenom";
import Nom from "./Components/Nom/";

// déclaration des variables
const classe = [
  {
    name: "NameToto",
    firstname: "firstnameToto",
  },
  {
    name: "NameTata",
    firstname: "firstnameTata",
  },
  {
    name: "NameTiti",
    firstname: "firstnameTiti",
  },
];

function App() {
  return (
    <div className="App">
      Ma classe:
      <div className="containerClasse">
        {/* On utilise un map pour faire une boucle sur la variable classe */}
        {/* Le map va donc passer en revue le tableau classe et renvoyer les données
        de chaque élève  */}
        {classe.map((eleve) => {
          return (
            // Pour chaque élève, on va donc appeler nos composants
            // Nom et Prénom à qui on va donner des props
            <div className="containerEleve">
              Élève :
              <Prenom propsFirstname={eleve.firstname} />
              <Nom propsName={eleve.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
