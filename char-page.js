import RandomChar from "../randomChar/RandomChar";
import CharInfo from "../charInfo/CharInfo"; 
import CharList from "../charList/CharList";
import decoration from '../../resources/img/vision.png';


const MainPage = () => {
    return (
        <>
            <RandomChar/>
            <div className="char__content">
                <CharList/>
                <CharInfo />
                <img className="bg-decoration" src={decoration} alt="vision"/>
            </div>
        </>
    )
}

export default MainPage;
                
                
                
                