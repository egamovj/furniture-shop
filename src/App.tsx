import Header from "./components/Header"
import Products from "./components/Products"
import Why from "./components/Why"

const App = () => {
  return (
    <div className="w-full flex flex-col">
      <Header />
      <Why />
      <Products />
    </div>
  )
}

export default App
