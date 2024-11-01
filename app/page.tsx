import HeroCarousel from "@/components/HeroCarousel"
import Searchbar from "@/components/Searchbar"
import Image from "next/image"
const Home = () => {
  return (
    <>

  <section className=" px-6 md:px-20 py-24">
    <div className="flex max-xl:flex-col gap-16">
      <div className=" flex flex-col justify-center">
        <p className="small-text">
          Bom Preço Shopping Começa Aqui:
          <Image
            src="/assets/icons/arrow-right.svg"
            alt="flecha-direito"
            width={16}
            height={16}
          />
          </p>

          <h1 className="head-text">
          Comparação de preços é na 
    
            <span className="text-primary"> Preço Sábio</span>
          </h1>
          <p className="mt-6">
            Descubra os Melhores Preços em Poucos Cliques.
            Buscas avançadas e análise de preços para você 
            comparar de maneira rápida e eficiente.
          </p>

          <Searchbar/>
        </div>

        <HeroCarousel/> 
      </div>
     
  </section>
  
  <section className="tredding-section">
      <h2 className="section-text">Têndencias</h2>

      <div className="flex flex-wrap gap-x-8 gap-y-16">
        {['Apple Iphone 16','Livros', 'Notebook'].map
        ((product) => (
          <div>{product}</div>
        ))}

      </div>
  </section>

    </>
  )
}

export default Home
