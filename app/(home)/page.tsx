"use client"

import useAnimationScroll from "../_hooks/use-animation-scroll"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  ArrowUpRight,
  Database,
  Download,
  MonitorCheck,
  PenTool,
} from "lucide-react"
import Title from "../_components/ui/title"
import SecondTitle from "../_components/ui/second-title"
import { Button } from "../_components/ui/button"
import ButtonGoToDown from "./_components/button-go-to-down"
import Paragraph from "../_components/ui/paragraph"
import { Icon, IconSocialMedia, ListIcons } from "../_components/list-icons"
import FourthTitle from "../_components/ui/fourth-title"
import CardService from "./_components/card-services"
import CarouselProjects from "./_components/carousel-projects"
import CardContactBlog from "./_components/card-contact-blog"
import AccordionFaq from "./_components/accordion-faq"
import AnimateScroll from "../_helpers/animation-scroll"

const HomePage = () => {
  return (
    <>
      <BannerSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactBlogSection />
      <FaqSection />
    </>
  )
}

const BannerSection = () => {
  const { animationsBannerSection } = useAnimationScroll()
  return (
    <AnimateScroll
      triggerId="home-banner-section"
      animations={animationsBannerSection}
    >
      <section
        id="home-banner-section"
        className="flex h-[642px] flex-col justify-between bg-[url('/banners/banner-home-m.webp')] bg-cover bg-center bg-no-repeat md:bg-[url('/banners/banner-home-d.webp')]"
      >
        <div className="mx-auto flex h-full max-w-5xl animate-[animationText_ease-in-out_4s] flex-col items-center justify-center gap-3 px-4 pt-28 md:animate-[animationText_ease-in-out_3s] md:gap-5">
          <Title
            id="title-banner-section"
            content="Transformando Ideias em Soluções Digitais"
          />
          <Paragraph
            id="subtitle-banner-section"
            className="max-w-[700px] text-center"
            content="Desenvolvendo experiências digitais e soluções modernas, com foco na criação de aplicações web de alto desempenho, utilizando as mais recentes tecnologias do mercado."
          />
          <Link
            id="button-banner-section"
            className="mx-auto w-full max-w-[266px]"
            href="/contato"
          >
            <Button
              aria-label="Entrar em contato"
              className="group/edit w-full bg-secondary-blue text-primary-white hover:bg-third-blue"
            >
              Entrar em contato
              <ArrowUpRight className="transition-all duration-300 group-hover/edit:-translate-y-1 group-hover/edit:translate-x-1" />
            </Button>
          </Link>
        </div>
        <ButtonGoToDown />
      </section>
    </AnimateScroll>
  )
}
const AboutSection = () => {
  const { animationsAboutSection } = useAnimationScroll()
  return (
    <AnimateScroll
      triggerId="home-about-section"
      animations={animationsAboutSection}
    >
      <section
        id="home-about-section"
        className="px-4 pb-10 pt-20 md:pb-16 md:pt-32"
      >
        <div className="mx-auto flex max-w-[600px] flex-col items-start gap-10 lg:max-w-6xl lg:flex-row lg:items-center">
          <Image
            id="image-about-section"
            src="/banners/banner-perfil.png"
            alt="Banner do perfil"
            width={0}
            height={0}
            sizes="100vh"
            className="h-auto w-full max-w-[600px] px-6 lg:max-w-[500px]"
            style={{
              filter: "drop-shadow(27px 0px 43px rgba(62, 86, 146, 0.6))",
            }}
          />
          <div className="w-full space-y-4">
            <div className="space-y-1">
              <FourthTitle id="title-about-section" content="Minha Jornada" />
              <SecondTitle
                id="subtitle-about-section"
                content="Combinando técnica e visão para soluções eficazes"
              />
            </div>
            <div className="space-y-2">
              <Paragraph
                id="paragraph1-about-section"
                content="Com grande paixão por tecnologia e foco em soluções inovadoras.
                Tenho ampla experiência em desenvolver aplicações web robustas,
                sou fascinado por novos desafios tecnológicos e sempre busco
                maneiras de inovar e otimizar a performance dos projetos em que
                atuo."
              />
              <Paragraph
                id="paragraph2-about-section"
                content="Com uma sólida experiência em JavaScript e TypeScript, utilizo
                essas linguagens para construir aplicações web dinâmicas e
                eficientes. Minha stack de desenvolvimento inclui bibliotecas e
                frameworks modernos como React.js e Next.js, que me permitem
                criar interfaces intuitivas e responsivas. Utilizo Tailwind CSS
                e Styled Components para estilização, enquanto o Prisma e o
                PostgreSQL garantem uma persistência de dados escalável. Também
                trabalho com Figma para design, Git e GitHub para controle de
                versão, e Node.js para APIs e serviços backend. Estou sempre em
                busca de aprender novas tecnologias e aprimorar minhas
                habilidades, visando oferecer soluções de alta qualidade."
              />
            </div>
            <ListIcons
              id="icons-about-section"
              className="md: flex items-center justify-center gap-1 rounded-md bg-secondary-blue px-10 py-2 md:gap-2"
            >
              <Icon
                className="h-[18px] w-[59px] md:h-[28px] md:w-[90px]"
                srcIcon="/icons/icone-node.svg"
                altIcon="Icone Node.js"
              />
              <Icon
                className="h-[18px] w-[19px] md:h-[28px] md:w-[28px]"
                srcIcon="/icons/icone-js.svg"
                altIcon="Icone Javascrip"
              />
              <Icon
                className="h-[18px] w-[19px] md:h-[28px] md:w-[28px]"
                srcIcon="/icons/icone-ts.svg"
                altIcon="Icone Typescript"
              />
              <Icon
                className="h-[18px] w-[21px] md:h-[28px] md:w-[31px]"
                srcIcon="/icons/icone-react.svg"
                altIcon="Icone React.js"
              />
              <Icon
                className="h-[18px] w-[19px] md:h-[28px] md:w-[28px]"
                srcIcon="/icons/icone-next.svg"
                altIcon="Icone Next.js"
              />
              <Icon
                className="h-[18px] w-[29px] md:h-[28px] md:w-[42px]"
                srcIcon="/icons/icone-docker.svg"
                altIcon="Icone Docker"
              />
              <Icon
                className="h-[18px] w-[16px] md:h-[28px] md:w-[24px]"
                srcIcon="/icons/icone-prisma.svg"
                altIcon="Icone Prisma"
              />
              <Icon
                className="h-[12px] w-[32px] md:h-[22px] md:w-[53px]"
                srcIcon="/icons/icone-styled.svg"
                altIcon="Icone Styled-components"
              />
              <Icon
                className="h-[18px] w-[33px] md:h-[28px] md:w-[48px]"
                srcIcon="/icons/icone-tailwind.svg"
                altIcon="Icone Tailwind css"
              />

              <Icon
                className="h-[18px] w-[15px] md:h-[28px] md:w-[24px]"
                srcIcon="/icons/icone-jest.svg"
                altIcon="Icone Jest"
              />
            </ListIcons>
          </div>
        </div>
      </section>
    </AnimateScroll>
  )
}
const ServicesSection = () => {
  const { animationsServicesSection } = useAnimationScroll()
  return (
    <AnimateScroll
      triggerId="home-services-section"
      animations={animationsServicesSection}
    >
      <section id="home-services-section" className="px-4 py-10 md:py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-10 md:items-center md:gap-14">
          <div className="flex flex-col items-start space-y-1 md:items-center">
            <FourthTitle
              id="title-services-section"
              className="text-center"
              content="Serviços"
            />
            <SecondTitle
              id="subtitle-services-section"
              className="text-center"
              content="Soluções digitais para o seu negócio"
            />
          </div>
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-4 md:gap-6 lg:grid-cols-3">
            <CardService
              id="card1-services-section"
              className="sm:col-start-2 sm:col-end-4 lg:col-start-auto lg:col-end-auto"
              title="UI/UX Design"
              description="Desenvolvo interfaces intuitivas e atraentes que proporcionam a melhor experiência para o usuário. Com foco na usabilidade e na jornada do cliente, garantimos que seu produto seja funcional e fácil de navegar."
            >
              <PenTool size={22} color="#f1f1f1" />
            </CardService>
            <CardService
              id="card2-services-section"
              className="sm:col-start-1 sm:col-end-3 lg:col-start-auto lg:col-end-auto"
              title="Front-end"
              description="Transformo design em código eficiente e responsivo. Utilizo as melhores práticas de desenvolvimento para garantir que seu site tenha uma aparência impecável e desempenho otimizado em todos os dispositivos."
            >
              <MonitorCheck size={22} color="#f1f1f1" />
            </CardService>
            <CardService
              id="card3-services-section"
              className="sm:col-start-3 sm:col-end-5 lg:col-start-auto lg:col-end-auto"
              title="Back-end"
              description="Crio toda a estrutura por trás da aplicação, garantindo segurança, escalabilidade e alta performance. Desenvolvo soluções robustas que suportam as funcionalidades essenciais para o sucesso do projeto."
            >
              <Database size={22} color="#f1f1f1" />
            </CardService>
          </div>
        </div>
      </section>
    </AnimateScroll>
  )
}
const ProjectsSection = () => {
  const { animationsProjectsSection } = useAnimationScroll()
  return (
    <AnimateScroll
      triggerId="home-projects-section"
      animations={animationsProjectsSection}
    >
      <section id="home-projects-section" className="px-4 py-10 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center gap-5 md:gap-5">
            <div className="flex flex-col items-center space-y-1 pb-5 md:pb-10">
              <FourthTitle
                id="title-projects-section"
                content="Projetos em Destaque"
              />
              <SecondTitle
                id="subtitle-projects-section"
                content="Desenvolvendo Soluções Únicas"
              />
            </div>
            <CarouselProjects interval={3000} />
            <Link
              id="button-projects-section"
              className="group/edit w-full max-w-[266px]"
              href="/projetos"
            >
              <Button
                aria-label="Ver todos projetos"
                className="w-full bg-secondary-blue text-primary-white hover:bg-third-blue"
              >
                Ver todos projetos
                <ArrowRight className="transition-all duration-300 group-hover/edit:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </AnimateScroll>
  )
}
const ContactBlogSection = () => {
  const { animationsContactBlogSection } = useAnimationScroll()
  return (
    <AnimateScroll
      triggerId="home-contact-blog-section"
      animations={animationsContactBlogSection}
    >
      <section id="home-contact-blog-section" className="px-4 py-10 md:py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-5 md:flex-row">
          <CardContactBlog
            id="card1-contact-blog-section"
            title="Contato"
            subtitle="Entre em contato para esclarecer dúvidas, solicitar orçamentos ou obter suporte."
          >
            <div className="flex w-full flex-col items-center gap-3 sm:flex-row md:gap-5">
              <Link
                className="group/edit w-full md:max-w-[266px]"
                href="/contato"
              >
                <Button
                  aria-label="Entrar em contato"
                  className="w-full bg-secondary-blue text-primary-white hover:bg-third-blue"
                >
                  Entrar em contato
                  <ArrowUpRight className="transition-all duration-300 group-hover/edit:-translate-y-1 group-hover/edit:translate-x-1" />
                </Button>
              </Link>
              {/* TODO: Anexar currículo */}
              <Link className="w-full md:max-w-[266px]" href="/blog">
                <Button
                  aria-label="Baixar currículo"
                  className="w-full bg-secondary-blue text-primary-white hover:bg-third-blue"
                >
                  Baixar currículo
                  <Download />
                </Button>
              </Link>
            </div>
            <ListIcons className="flex h-6 items-center gap-3">
              <IconSocialMedia
                href="https://www.instagram.com/brunmendonca_/"
                srcIcon="/icons/icone-insta.svg"
                altIcon="Icone Instagra"
              />
              <IconSocialMedia
                href="https://www.linkedin.com/in/devbrunomendonca/"
                srcIcon="/icons/icone-linkdin.svg"
                altIcon="Icone LinkdIn"
              />
              <IconSocialMedia
                href="https://github.com/DevBrunomendonca"
                srcIcon="/icons/icone-github.svg"
                altIcon="Icone Github"
              />
              <IconSocialMedia
                href="https://wa.link/n2kytx"
                srcIcon="/icons/icone-wtpp.svg"
                altIcon="Icone WhatsApp"
              />
              <IconSocialMedia
                href="mailto:devbrunomendonca@gmail.com"
                srcIcon="/icons/icone-email.svg"
                altIcon="Icone Email"
              />
            </ListIcons>
          </CardContactBlog>
          <CardContactBlog
            id="card2-contact-blog-section"
            title="Blog"
            subtitle="Acompanhe dicas e novidades sobre desenvolvimento e tecnologia."
          >
            <Link className="group/edit w-full md:max-w-[266px]" href="/blog">
              <Button
                aria-label="Acessar Blog"
                className="w-full bg-secondary-blue text-primary-white hover:bg-third-blue"
              >
                Acessar blog
                <ArrowRight className="transition-all duration-300 group-hover/edit:translate-x-1" />
              </Button>
            </Link>
          </CardContactBlog>
        </div>
      </section>
    </AnimateScroll>
  )
}
const FaqSection = () => {
  const { animationsFaqSection } = useAnimationScroll()
  return (
    <AnimateScroll
      triggerId="home-faq-section"
      animations={animationsFaqSection}
    >
      <section id="home-faq-section" className="px-4 py-10 md:py-16">
        <div className="mx-auto max-w-6xl space-y-6 md:space-y-10">
          <div className="flex flex-col items-center">
            <FourthTitle id="title-faq-section" content="FAQ" />
            <SecondTitle
              id="subtitle-faq-section"
              content="Perguntas feitas com frequência"
            />
          </div>
          <AccordionFaq />
        </div>
      </section>
    </AnimateScroll>
  )
}
export default HomePage
