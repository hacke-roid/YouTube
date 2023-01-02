import SearchBar from "./components/SearchBar";
import "./App.css";
import searchVideo from "./api";
import VideoList from "./components/VideoList";

function App() {

    const handleSubmit = async(term) => {
        const response = await searchVideo.get("/search",{
            params: {
                q: term
            }
        })
        console.log(response);
        
    }

    return(
        <div className="container">
            <SearchBar onSubmit={handleSubmit}/>
            <VideoList/>
        </div>
    )
};

export default App;