import DotLoader from "./components/Loader"
import SearchPage from "./components/SearchPage"

function App() {

  return (
    <>
      <DotLoader />
      <div className=" flex justify-center items-center min-h-screen">
        <SearchPage />
       </div>
    </>
  )
}

export default App
