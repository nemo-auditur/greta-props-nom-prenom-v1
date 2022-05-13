import "./index.css";

//props permet de récupérer l'élément envoyé par App.js
// lorsque le composant Prenom est appelé.
const Prenom = (props) => {
  return (
    <div className="styleName">
      {/* 
            Pour utiliser la props reçue,
            on doit utiliser le mot props,
            suivi d'un "." et du nom de la props
            envoyée dans App.js au composant Prenom
            */}
      Nom : {props.propsFirstname}
    </div>
  );
};

export default Prenom;
