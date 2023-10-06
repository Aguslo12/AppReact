import './App.css'
import Testimonio from './components/Testimonio'

function App() {
  

  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>PERSONAJES JUJUTSU KAISEN</h1>
        <Testimonio
        nombre={'Kento Nanami'}
        cargo={'Ex-Oficinista'}
        imagen='https://i1.sndcdn.com/artworks-L5WCAmYFgzh41B1I-QP1ZSA-t500x500.jpg'
        pershover='https://photo.cosplayfu.com/character/mini/284130_285921.jpg'
        testimonio={'Fue un chamán de primer grado, antiguo alumno del Colegio Técnico de Magia Metropolitana de Tokio y compañero de Yu Haibara.'}/>
        <Testimonio
        nombre={'Satoru Gojo'}
        cargo={'Profesor'}
        imagen='https://anime.atsit.in/es/wp-content/uploads/2023/01/las-30-mejores-citas-de-satoru-gojo-de-jujutsu-kaisen.jpg'
        pershover='https://i.pinimg.com/originals/b3/9d/91/b39d91e8378ae7daa424e2ed3ca4fcfa.png'
        testimonio={'Como único miembro y cabeza del Clan Gojo, es descendiente del chamán y espíritu vengativo, Sugawara-no-Michizan, y heredero de la Técnica de Maldición Ilimitada y el poder de los seis ojos.'}/>
        <Testimonio
        nombre={'Yuji Itadori'}
        cargo={'Hechicero 1er año'}
        imagen='https://pm1.aminoapps.com/7892/a7f34c5a030203099a40da220c87349cfe808054r1-736-736v2_uhq.jpg'
        pershover='https://i.pinimg.com/originals/19/18/1b/19181b608eeea43b3fea5450347270d3.png'
        testimonio={'Itadori es un adolescente musculoso y alto, llegando a medir 173 centímetros. En las ilustraciones del manga, su cabello es puntiagudo de marrón claro'}/>
      </div>
    </div>  
  )
}

export default App
