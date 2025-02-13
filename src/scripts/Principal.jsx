import Welcome from './Welcome';
import Catalogue from './Catalogue';

function Principal() {
  return (
    <main>
      <Welcome />
      <Catalogue />
      <button  type="button" className='finalizarCompra'>Finalizar Compra</button>
    </main>
    
  );
}

export default Principal;