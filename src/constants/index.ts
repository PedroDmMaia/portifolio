import project1 from '../assets/projects/project-1.jpg'
import project2 from '../assets/projects/project-2.jpg'
import project3 from '../assets/projects/project-3.jpg'
import project5 from '../assets/projects/project-5.png'

export const experiences = [
  {
    year: '02/2025 - momento',
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
    year: '06/2024 - momento',
    role: 'Desenvolvedor Freelancer',
    company: '',
    description:
      'Como desenvolvedor freelancer, tenho trabalhado em diversos projetos, oferecendo soluções personalizadas para clientes de diferentes setores. Minha principal missão é criar aplicações web completas, escaláveis e eficientes, utilizando as mais recentes tecnologias, como React, TypeScript, Node.js, Prisma, MySQL e PostgreSQL. Meu trabalho abrange desde o desenvolvimento de interfaces ricas e responsivas no front-end até a criação de APIs robustas e integração com bancos de dados no back-end.',
    technologies: ['Reactjs', 'Nextjs', 'Nestjs', 'Nodejs', 'Prisma'],
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
    title: 'Nunes-sport',
    image: project2,
    description:
      'Meu primeiro projeto fullstack, Nunes Sports, é uma aplicação focada na gestão de produtos esportivos. O sistema permite realizar todas as operações CRUD (Criar, Ler, Atualizar e Deletar) de forma eficiente e intuitiva. Desenvolvido com tecnologias modernas, é um exemplo do ciclo completo de desenvolvimento de software, integrando frontend, backend e banco de dados para oferecer uma solução funcional e escalável.',
    technologies: [
      'ReactJs',
      'Tailwind',
      'radixUi',
      'nodeJs',
      'Prisma',
      'Fastify',
      'postgresql',
      'docker',
    ],
    github: 'https://github.com/PedroDmMaia/nunes-frontend',
    url: 'https://lightgrey-dog-921641.hostingersite.com/',
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
