import { SquarePurple } from "../../components/Square/style";
import { CityContent } from "./style";
import { useNavigate } from 'react-router-dom';
import sun from "../../assets/sol.png";
import cloud from "../../assets/nuvem.png";
import Login from "../../components/Login";

function City({nome,pais,descricao,image,metadata,link}) {

  const navigateTo = useNavigate({replace:true});

  return (
    <CityContent>
      <p style={{cursor:'pointer'}} onClick={() => navigateTo('/',{ replace: true })}>SOULFUL</p>
      <main>
        <div className="content">
          <h1>
            {nome.toUpperCase()} <br /> <span>{pais.toUpperCase()}</span>
          </h1>
          <p className="fact">{descricao}</p>
          <Login nome={nome} image={image} link={link} metadata={metadata}/>
        </div>
        <div className="code">
          <img src={sun} alt="Sol" id="sun" />
          <SquarePurple>
            <img src={image}/>
          </SquarePurple>
          <img src={cloud} alt="nuvem" id="cloud" />
        </div>
      </main>
    </CityContent>
  );
}

export default City;
