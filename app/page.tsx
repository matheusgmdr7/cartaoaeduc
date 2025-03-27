"use client"

import { Check, Star, Dumbbell, Heart, Stethoscope, ShoppingBag, GraduationCap, Menu, X } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useMobile } from "@/hooks/use-mobile"

export default function BenefitsCardPage() {
  const isMobile = useMobile()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Função para rolar suavemente até uma seção
  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      // Adiciona um pequeno offset para considerar o header fixo
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })

      // Fechar o menu móvel após clicar
      if (isMobile) {
        setMobileMenuOpen(false)
      }
    }
  }

  // Configurar os links de âncora para usar rolagem suave
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]')

      if (anchor) {
        e.preventDefault()
        const targetId = anchor.getAttribute("href")?.substring(1)
        if (targetId) {
          scrollToSection(targetId)
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)

    return () => {
      document.removeEventListener("click", handleAnchorClick)
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-blue-navy-50 to-white">
      <header className="sticky top-0 z-40 w-full backdrop-blur-lg bg-white/80 border-b border-blue-navy-100">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center">
              <img
                src="https://i.ibb.co/mr40xW7W/Captura-de-Tela-2025-03-01-a-s-00-56-14-removebg-preview.png"
                alt="Logo Cartão Aeduc"
                className="h-8 w-auto"
              />
            </div>
            <span className="inline-block font-bold bg-clip-text text-transparent bg-blue-gradient">Cartão Aeduc</span>
          </Link>

          {isMobile ? (
            <div className="flex items-center">
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Menu">
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          ) : (
            <nav className="flex items-center space-x-1">
              <Button
                variant="ghost"
                size="sm"
                className="text-blue-navy-700 hover:text-blue-navy-900 hover:bg-blue-navy-50"
                onClick={() => scrollToSection("benefits")}
              >
                Benefícios
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-blue-navy-700 hover:text-blue-navy-900 hover:bg-blue-navy-50"
                onClick={() => scrollToSection("pricing")}
              >
                Planos
              </Button>
              <Button
                size="sm"
                className="bg-blue-gradient hover:opacity-90 transition-all"
                onClick={() => scrollToSection("pricing")}
              >
                Assinar Agora
              </Button>
            </nav>
          )}
        </div>

        {/* Menu móvel */}
        {isMobile && mobileMenuOpen && (
          <div className="absolute w-full bg-white shadow-lg py-4 px-6 flex flex-col space-y-3 border-b border-blue-navy-100">
            <Button
              variant="ghost"
              className="justify-start text-blue-navy-700 hover:text-blue-navy-900 hover:bg-blue-navy-50"
              onClick={() => scrollToSection("benefits")}
            >
              Benefícios
            </Button>
            <Button
              variant="ghost"
              className="justify-start text-blue-navy-700 hover:text-blue-navy-900 hover:bg-blue-navy-50"
              onClick={() => scrollToSection("pricing")}
            >
              Planos
            </Button>
            <Button
              className="bg-blue-gradient hover:opacity-90 transition-all"
              onClick={() => scrollToSection("pricing")}
            >
              Assinar Agora
            </Button>
          </div>
        )}
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-hero-pattern relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-gradient opacity-95"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-navy-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-navy-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2 max-w-3xl">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white drop-shadow-sm">
                  Cartão Aeduc{" "}
                  <span className="text-blue-navy-100 block sm:inline">Seu Cartão de Benefícios Premium</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-blue-navy-100 text-base md:text-lg lg:text-xl">
                  Acesso ao GymPass(wellhub), Seguros, Plano odontológico, Consultas com psicólogos, Assitência
                  Jurídica, descontos em farmácias, sorteios, programas de vantagens e muito mais ...
                </p>
              </div>
              <div className="mt-8">
                <Button
                  className="px-4 sm:px-8 bg-white text-blue-navy-900 hover:bg-blue-navy-50 shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => scrollToSection("pricing")}
                >
                  Comece Agora
                </Button>
              </div>

              <div className="mt-12 w-full max-w-md mx-auto relative">
                <div className="absolute inset-0 bg-blue-navy-900 rounded-3xl blur-xl opacity-30"></div>
                <div className="relative rounded-3xl shadow-2xl overflow-hidden transform hover:-translate-y-1 transition-all duration-300 border-2 border-white">
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src="https://i.ibb.co/c990Bfm/AEDUC-7.png"
                      alt="Cartão de Benefícios AEDUC"
                      className="w-full h-auto object-contain"
                      style={{ maxWidth: "100%", display: "block" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" className="w-full py-16 md:py-20 bg-white relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-blue-navy-50 to-white"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <div className="inline-block rounded-full bg-blue-navy-100 px-3 py-1 text-sm text-blue-navy-900 mb-4">
                Benefícios Exclusivos
              </div>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl text-blue-navy-950">
                Vantagens Que Transformam Sua Vida
              </h2>
              <p className="max-w-[85%] text-muted-foreground text-sm md:text-base lg:text-lg">
                Nosso cartão oferece vantagens que vão transformar sua experiência de cuidados com a saúde, compras e
                lazer.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:max-w-6xl xl:gap-8 mt-12 md:mt-16">
              {/* Card 1: GymPass */}
              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="absolute h-1 inset-x-0 top-0 bg-blue-gradient"></div>
                <CardHeader className="pb-0">
                  <div className="w-12 h-12 rounded-2xl bg-blue-navy-50 flex items-center justify-center mb-5 group-hover:bg-blue-navy-100 transition-colors">
                    <Dumbbell className="h-6 w-6 text-blue-navy-900" />
                  </div>
                  <CardTitle className="text-xl text-blue-navy-950">GymPass (wellhub)</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-muted-foreground text-sm">
                    Acesso a uma ampla rede de academias e programas para cuidados com a saúde física e mental.
                  </p>
                </CardContent>
              </Card>

              {/* Card 2: Seguro de Vida */}
              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="absolute h-1 inset-x-0 top-0 bg-blue-gradient"></div>
                <CardHeader className="pb-0">
                  <div className="w-12 h-12 rounded-2xl bg-blue-navy-50 flex items-center justify-center mb-5 group-hover:bg-blue-navy-100 transition-colors">
                    <Heart className="h-6 w-6 text-blue-navy-900" />
                  </div>
                  <CardTitle className="text-xl text-blue-navy-950">Seguro de Vida</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-muted-foreground text-sm">
                    Parceria com a Unimed Seguros: cobertura de R$10.000 para vida, acidentes pessoais, invalidez
                    permanente e R$7.000 para assistência funeral.
                  </p>
                </CardContent>
              </Card>

              {/* Card 3: Plano Odontológico */}
              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="absolute h-1 inset-x-0 top-0 bg-blue-gradient"></div>
                <CardHeader className="pb-0">
                  <div className="w-12 h-12 rounded-2xl bg-blue-navy-50 flex items-center justify-center mb-5 group-hover:bg-blue-navy-100 transition-colors">
                    <Star className="h-6 w-6 text-blue-navy-900" />
                  </div>
                  <CardTitle className="text-xl text-blue-navy-950">Plano Odontológico</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-muted-foreground text-sm">
                    Fornecido pela Unimed Seguros, com abrangência nacional, ampla rede credenciada e serviços como
                    urgência, radiografia panorâmica, tratamento de canal e coroa unitária.
                  </p>
                </CardContent>
              </Card>

              {/* Card 4: Telemedicina */}
              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="absolute h-1 inset-x-0 top-0 bg-blue-gradient"></div>
                <CardHeader className="pb-0">
                  <div className="w-12 h-12 rounded-2xl bg-blue-navy-50 flex items-center justify-center mb-5 group-hover:bg-blue-navy-100 transition-colors">
                    <Stethoscope className="h-6 w-6 text-blue-navy-900" />
                  </div>
                  <CardTitle className="text-xl text-blue-navy-950">Telemedicina</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-muted-foreground text-sm">
                    Pronto Atendimento Digital com clínicos gerais, 24 horas por dia, 7 dias por semana. Inclui
                    atendimentos psicológicos.
                  </p>
                </CardContent>
              </Card>

              {/* Card 5: Descontos em Lojas Parceiras */}
              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="absolute h-1 inset-x-0 top-0 bg-blue-gradient"></div>
                <CardHeader className="pb-0">
                  <div className="w-12 h-12 rounded-2xl bg-blue-navy-50 flex items-center justify-center mb-5 group-hover:bg-blue-navy-100 transition-colors">
                    <ShoppingBag className="h-6 w-6 text-blue-navy-900" />
                  </div>
                  <CardTitle className="text-xl text-blue-navy-950">Descontos em Lojas</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-muted-foreground text-sm">
                    Oferecido pela Unimed Seguros, descontos em ampla rede de farmácias e lojas parceiras em todo o
                    Brasil.
                  </p>
                </CardContent>
              </Card>

              {/* Card 6: Assistência Jurídica */}
              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="absolute h-1 inset-x-0 top-0 bg-blue-gradient"></div>
                <CardHeader className="pb-0">
                  <div className="w-12 h-12 rounded-2xl bg-blue-navy-50 flex items-center justify-center mb-5 group-hover:bg-blue-navy-100 transition-colors">
                    <GraduationCap className="h-6 w-6 text-blue-navy-900" />
                  </div>
                  <CardTitle className="text-xl text-blue-navy-950">Assistência Jurídica</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-muted-foreground text-sm">
                    Assistência jurídica oferecida pelo setor jurídico da Aeduc exclusivamente para os seus associados.
                  </p>
                </CardContent>
              </Card>

              {/* Card 7: Plano Pet */}
              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="absolute h-1 inset-x-0 top-0 bg-blue-gradient"></div>
                <CardHeader className="pb-0">
                  <div className="w-12 h-12 rounded-2xl bg-blue-navy-50 flex items-center justify-center mb-5 group-hover:bg-blue-navy-100 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-blue-navy-900"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
                      <path d="M8 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
                      <path d="M16 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
                      <path d="M16 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
                      <path d="M12 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
                    </svg>
                  </div>
                  <CardTitle className="text-xl text-blue-navy-950">Plano Pet</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-muted-foreground text-sm">
                    Cobertura para seus animais de estimação, incluindo consultas veterinárias e vacinas.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-16 md:py-24 bg-blue-navy-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-pattern opacity-100"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <div className="inline-block rounded-full bg-blue-navy-100 px-3 py-1 text-sm text-blue-navy-900 mb-4">
                Nossos Planos
              </div>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl text-blue-navy-950">
                Escolha o Plano Ideal para Você
              </h2>
              <p className="max-w-[85%] text-muted-foreground text-sm md:text-base lg:text-lg">
                Temos opções que se adaptam às suas necessidades e orçamento.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12 mt-12 md:mt-16">
              {/* Plano Básico */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-navy-200 to-blue-navy-300 rounded-3xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                <Card className="relative h-full flex flex-col border-none shadow-lg bg-white overflow-hidden group-hover:shadow-2xl transition-all duration-300">
                  <CardHeader className="flex flex-col items-center justify-center space-y-2 pb-6 pt-8">
                    <CardTitle className="text-2xl font-bold text-blue-navy-950">Plano Básico</CardTitle>
                    <CardDescription className="text-center">Ideal para iniciantes</CardDescription>
                    <div className="flex items-baseline justify-center mt-4">
                      <span className="text-4xl md:text-5xl font-bold text-blue-navy-900">R$44,90</span>
                      <span className="text-muted-foreground ml-2">/mês</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-4 px-4 sm:px-8">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-blue-navy-50 p-1">
                        <Check className="h-4 w-4 text-blue-navy-900" />
                      </div>
                      <span className="text-sm">Plano Odontológico</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-blue-navy-50 p-1">
                        <Check className="h-4 w-4 text-blue-navy-900" />
                      </div>
                      <span className="text-sm">Seguro de Vida</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-blue-navy-50 p-1">
                        <Check className="h-4 w-4 text-blue-navy-900" />
                      </div>
                      <span className="text-sm">Assistência Funeral</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-blue-navy-50 p-1">
                        <Check className="h-4 w-4 text-blue-navy-900" />
                      </div>
                      <span className="text-sm">Assistência Jurídica</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-blue-navy-50 p-1">
                        <Check className="h-4 w-4 text-blue-navy-900" />
                      </div>
                      <span className="text-sm">Telemedicina com Psicólogo</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-blue-navy-50 p-1">
                        <Check className="h-4 w-4 text-blue-navy-900" />
                      </div>
                      <span className="text-sm">Desconto em lojas parceiras</span>
                    </div>
                  </CardContent>
                  <CardFooter className="mt-auto pt-6 px-4 sm:px-8 pb-8">
                    <a
                      href="https://pay.kiwify.com.br/xUby83J"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button className="w-full bg-white text-blue-navy-900 border border-blue-navy-200 hover:bg-blue-navy-50 hover:border-blue-navy-300 transition-all">
                        Assinar Agora
                      </Button>
                    </a>
                  </CardFooter>
                </Card>
              </div>

              {/* Plano Premium */}
              <div className="relative group md:-mt-4">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-navy-400 to-blue-navy-500 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
                <Card className="relative h-full flex flex-col border-none shadow-xl bg-white overflow-hidden group-hover:shadow-2xl transition-all duration-300">
                  <div className="absolute inset-x-0 top-0 h-1.5 bg-blue-gradient"></div>
                  <div className="absolute top-0 inset-x-0 flex justify-center">
                    <div className="rounded-b-xl bg-blue-gradient px-4 py-1 text-xs font-medium text-white shadow-lg">
                      MAIS POPULAR
                    </div>
                  </div>
                  <CardHeader className="flex flex-col items-center justify-center space-y-2 pb-6 pt-12">
                    <CardTitle className="text-2xl font-bold text-blue-navy-950">Plano Premium</CardTitle>
                    <CardDescription className="text-center">Para quem busca mais vantagens</CardDescription>
                    <div className="flex items-baseline justify-center mt-4">
                      <span className="text-4xl md:text-5xl font-bold text-blue-navy-900">R$99,90</span>
                      <span className="text-muted-foreground ml-2">/mês</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-4 px-4 sm:px-8">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-blue-navy-50 p-1">
                        <Check className="h-4 w-4 text-blue-navy-900" />
                      </div>
                      <span className="text-sm">Plano Starter do WellHub</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-blue-navy-50 p-1">
                        <Check className="h-4 w-4 text-blue-navy-900" />
                      </div>
                      <span className="text-sm">+ de 2.600 academias e studios</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-blue-navy-50 p-1">
                        <Check className="h-4 w-4 text-blue-navy-900" />
                      </div>
                      <span className="text-sm">42 Apps de bem-estar</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-blue-navy-50 p-1">
                        <Check className="h-4 w-4 text-blue-navy-900" />
                      </div>
                      <span className="text-sm">Treinos on-line e ao vivo</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-blue-navy-50 p-1">
                        <Check className="h-4 w-4 text-blue-navy-900" />
                      </div>
                      <span className="text-sm">Plano Pet</span>
                    </div>
                  </CardContent>
                  <CardFooter className="mt-auto pt-6 px-4 sm:px-8 pb-8">
                    <a
                      href="https://pay.kiwify.com.br/IkLvyZf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button className="w-full bg-blue-gradient hover:opacity-90 transition-all shadow-lg">
                        Assinar Agora
                      </Button>
                    </a>
                  </CardFooter>
                </Card>
              </div>

              {/* Plano VIP */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-navy-200 to-blue-navy-300 rounded-3xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                <Card className="relative h-full flex flex-col border-none shadow-lg bg-white overflow-hidden group-hover:shadow-2xl transition-all duration-300">
                  <CardHeader className="flex flex-col items-center justify-center space-y-2 pb-6 pt-8">
                    <CardTitle className="text-2xl font-bold text-blue-navy-950">Plano VIP</CardTitle>
                    <CardDescription className="text-center">Experiência completa</CardDescription>
                    <div className="flex items-baseline justify-center mt-4">
                      <span className="text-4xl md:text-5xl font-bold text-blue-navy-900">R$149,90</span>
                      <span className="text-muted-foreground ml-2">/mês</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-4 px-4 sm:px-8">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-blue-navy-50 p-1">
                        <Check className="h-4 w-4 text-blue-navy-900" />
                      </div>
                      <span className="text-sm">Plano Starter do WellHub</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-blue-navy-50 p-1">
                        <Check className="h-4 w-4 text-blue-navy-900" />
                      </div>
                      <span className="text-sm">+ de 2.600 academias e studios</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-blue-navy-50 p-1">
                        <Check className="h-4 w-4 text-blue-navy-900" />
                      </div>
                      <span className="text-sm">42 Apps de bem-estar</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-blue-navy-50 p-1">
                        <Check className="h-4 w-4 text-blue-navy-900" />
                      </div>
                      <span className="text-sm">Treinos on-line e ao vivo</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-blue-navy-50 p-1">
                        <Check className="h-4 w-4 text-blue-navy-900" />
                      </div>
                      <span className="text-sm">Plano Pet</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-blue-navy-50 p-1">
                        <Check className="h-4 w-4 text-blue-navy-900" />
                      </div>
                      <span className="text-sm">Plano Odontológico</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-blue-navy-50 p-1">
                        <Check className="h-4 w-4 text-blue-navy-900" />
                      </div>
                      <span className="text-sm">Seguro de Vida</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-blue-navy-50 p-1">
                        <Check className="h-4 w-4 text-blue-navy-900" />
                      </div>
                      <span className="text-sm">Assistência Funeral</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-blue-navy-50 p-1">
                        <Check className="h-4 w-4 text-blue-navy-900" />
                      </div>
                      <span className="text-sm">Assistência Jurídica</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-blue-navy-50 p-1">
                        <Check className="h-4 w-4 text-blue-navy-900" />
                      </div>
                      <span className="text-sm">Telemedicina com Psicólogo</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-blue-navy-50 p-1">
                        <Check className="h-4 w-4 text-blue-navy-900" />
                      </div>
                      <span className="text-sm">Desconto em lojas parceiras</span>
                    </div>
                  </CardContent>
                  <CardFooter className="mt-auto pt-6 px-4 sm:px-8 pb-8">
                    <a
                      href="https://pay.kiwify.com.br/O6T6UHT"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button className="w-full bg-white text-blue-navy-900 border border-blue-navy-200 hover:bg-blue-navy-50 hover:border-blue-navy-300 transition-all">
                        Assinar Agora
                      </Button>
                    </a>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-blue-gradient relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-navy-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-navy-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-white">
                  Pronto para Começar?
                </h2>
                <p className="mx-auto max-w-[700px] text-blue-navy-100 text-sm md:text-base lg:text-lg">
                  Junte-se a milhares de clientes satisfeitos e comece a aproveitar todos os benefícios hoje mesmo.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2 mt-8">
                <Button
                  className="w-full bg-white text-blue-navy-900 hover:bg-blue-navy-50 shadow-lg hover:shadow-xl transition-all duration-300"
                  size="lg"
                  onClick={() => scrollToSection("pricing")}
                >
                  Assine Agora
                </Button>
                <p className="text-xs text-blue-navy-200">Sem taxas ocultas. Cancele a qualquer momento.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t border-blue-navy-100 py-6 bg-white">
        <div className="container">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <img
                src="https://i.ibb.co/mr40xW7W/Captura-de-Tela-2025-03-01-a-s-00-56-14-removebg-preview.png"
                alt="Logo Cartão Aeduc"
                className="h-8 w-auto"
              />
              <span className="inline-block font-bold bg-clip-text text-transparent bg-blue-gradient">
                Cartão Aeduc
              </span>
            </div>
            <p className="text-center text-sm text-muted-foreground">
              © 2025 Cartão Aeduc. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

