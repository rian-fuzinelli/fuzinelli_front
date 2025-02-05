import React from 'react'
import ProjectCards from './sub/ProjectCards'

const Projects = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20'>
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
            My Projects
        </h1>
        <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
        <ProjectCards
          src="/IAntropology.png"
          title="IAntropology"
          description="Interface criada cujo alvo é uma agência de inteligência artificial para práticas de NextJs e Front-End."
        />
        <ProjectCards
          src="/robotkill.png"
          title="Interactive Website Cards"
          description="Jogo lúdico realizado em Python com o PyGame com o objetivo de adquirir maiores conhecimentos de lógica de programação."
        />
        <ProjectCards
          src="/SpaceWebsite.png"
          title="Portfolio"
          description="Portfolio usado como referência do canal do YouTube WebChainDev para estudo de NextJs em Front-End."
        />
        </div>
    </div>
  )
}

export default Projects