import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm"

function App() {  

  const { order, addItem, removeItem, tip, setTip } = useOrder();

  return (
    <>
      <header
        className="
          bg-teal-400
          py-5
        "
      >
        <h1
          className="
            text-center
            text-4xl
            font-black
          "
        >
          Calculadora de Propinas y consumos
        </h1>
      </header>

      <main
        className="
          max-w-7xl
          mx-auto
          py-20
          // Crea 2 columnas 
          grid 
          md:grid-cols-2
        "
      >

        <div
          className="
            p-5
          "
        >
          <h2
            className="
              font-black
              text-4xl
            "
          >
            Menú
          </h2>
            <div
              className="
                space-y-3
                mt-10
              ">
              {menuItems.map( item => (
                
                <MenuItem
                  key={item.id}
                  item ={item}
                  addItem={addItem}
                />

              ))}
            </div>
        </div>

        <div
          className="
            border border-dashed
            border-slate-300
            p-5
            rounded-lg
            space-y-10"
        >
          <OrderContents 
            order = { order }
            removeItem = { removeItem }
          />

          { /*Formulario de propinas*/}
          <TipPercentageForm
            setTip = { setTip }
          />

          <OrderTotals
            order = { order }
            tip = { tip }
            
          />
        </div>
      
      </main>
    </>
  )
}

export default App
