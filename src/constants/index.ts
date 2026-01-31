import project1 from '../assets/projects/project-1.jpg'
import project2 from '../assets/projects/project-2.png'
import project3 from '../assets/projects/project-3.jpg'
import project5 from '../assets/projects/project-5.png'

export const experiences = [
  {
    year: '10/2025 - atual',
    role: 'Desenvolvedor full stack',
    company: 'Koru',
    description:
      'Como Desenvolvedor Full Stack, sou responsável pela manutenção e evolução de uma plataforma interna corporativa, atuando tanto no desenvolvimento de novas funcionalidades quanto na melhoria contínua do sistema. Busco garantir performance, segurança e escalabilidade, contribuindo para soluções estáveis, eficientes e alinhadas às necessidades do negócio e dos usuários.',
    technologies: [
      'Angular',
      'Nestjs',
      'Postgresql',
      'Docker',
    ],
  },
  {
    year: '02/2025 - 10/2025',
    role: 'Desenvolvedor front end',
    company: 'Studio 9 SI',
    description:
      'Como Desenvolvedor Front-end, sou responsável pela criação de interfaces interativas e responsivas, garantindo uma experiência de usuário(UX) intuitiva e acessível.Utilizo boas práticas de performance para otimizar carregamento, eficiência de requisições e renderização, além de implementar técnicas de SEO para melhorar a visibilidade da aplicação.Meu foco é entregar produtos funcionais, escaláveis e alinhados ',
    technologies: [
      'Reactjs',
      'Angular',
      'Tailwind',
      'Bootstrap',
      'Zustand',
      'Cypress',
      'Wordpress',
    ],
  },
  {
    year: '05/2024 - 08/2024',
    role: 'Estagiário de TI',
    company: 'Digital Lz',
    description:
      'Na área de TI, cuido da manutenção de máquinas e servidores da empresa, além de atender aos chamados enviados ao longo do dia. Anteriormente, dediquei grande parte do meu tempo a um projeto interno estratégico, no qual fui responsável por implementar um chat com funcionamento em tempo real, permitindo que os usuários se comunicassem com outros setores de acordo com suas permissões, melhorando significativamente a comunicação interna. Também otimizei as requisições no front-end utilizando React Query, garantindo uma experiência mais eficiente e fluida para os usuários. Além disso, trabalhei para otimizar a gestão de metas dos operadores e garantir um controle mais eficiente das informações de cada colaborador dentro da empresa.',
    technologies: ['Reactjs', 'Nodejs', 'Fastify', 'Prisma', 'Docker'],
  },
]

export const projects = [
  {
    title: 'Souta Soluções',
    image: project1,
    description:
      'Projeto desenvolvido com o foco de atrair possiveis clientes para a Souta SoluçõesUma plataforma focada em ajudar pessoas a regularizar suas finanças e limpar seus nomes no mercado. Desenvolvida para facilitar negociações de dívidas, oferecer suporte personalizado e promover a educação financeira, a solução utiliza tecnologia moderna para transformar a saúde financeira de seus usuários de forma simples e eficiente.',
    technologies: ['ReactJs', 'Tailwind', 'Axios', 'Zod', 'Hook Form'],
    url: 'https://soutasolucoes.com',
  },
  {
    title: 'Predator Win',
    image: project2,
    description:
      'Projeto frontend desenvolvido para uma casa de apostas online, com o objetivo de proporcionar uma experiência de usuário(UX) intuitiva e agradável, utilizando tecnologias modernas e seguindo as melhores práticas de desenvolvimento.',
    technologies: [
      'ReactJs',
      'Tailwind',
      'radixUi',
    ],
    github: 'https://github.com/PedroDmMaia/predator',
    url: 'https://predator-khaki.vercel.app/',
  },
  {
    title: 'Sl Start Up',
    image: project3,
    description:
      'Um sistema de gerenciamento de Recursos Humanos desenvolvido com NestJS e Prisma, seguindo os princípios de DDD (Domain-Driven Design) e TDD (Test-Driven Development). O projeto foi projetado para oferecer funcionalidades robustas, como gerenciamento de usuários, controle de setores e permissões, além de priorizar escalabilidade, organização e manutenibilidade do código.',
    technologies: ['NestJs', 'Zod', 'Prisma', 'Docker', 'postgreSql'],
    github: 'https://github.com/PedroDmMaia/sl-startup-api',
    url: '',
  },
  {
    title: 'Belga Advocacia e consultoria',
    image: project5,
    description:
      'Projeto desenvolvido para um cliente com o objetivo de fortalecer a presença digital da empresa e apoiar a gestão comercial. A landing page foi pensada para apresentar os serviços de forma clara e estratégica, facilitando a captação de leads e o contato com potenciais clientes interessados nas soluções oferecidas.',
    technologies: ['ReactJs', 'Tailwind', 'Axios', 'Zod', 'Hook Form'],
    url: 'https://belgaadvconsultoria.com.br/',
  },
]
