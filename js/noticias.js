// =====================================================================
//  SUPER VIGOR – LISTA DE NOTÍCIAS
//  Para adicionar uma notícia nova: copie um bloco { ... }, cole logo
//  abaixo da linha "const NOTICIAS = [" e troque os textos.
//  A ordem não importa: o site ordena sozinho pela data (mais nova primeiro).
//
//  REGRAS:
//   - Mantenha as crases ` ` em volta dos textos.
//   - Mantenha a vírgula no fim de cada linha e no fim de cada bloco "},".
//   - Data sempre no formato dia/mês/ano: 17/11/2026
//   - Foto: use  imagem: `nome-do-arquivo.jpg`  (arquivo na pasta images)
//     OU, sem foto,  icone: `📈`  e  cor: `azul`  (azul, laranja ou verde)
//   - "fonte", "linkFonte", "tag" e "resumo" são opcionais (pode apagar a linha).
// =====================================================================

const NOTICIAS = [

  {
    titulo: `Arroba do boi gordo sobe R$ 5 em 2 regiões do país, mas mercado trava em SP`,
    data: `17/11/2026`,
    categoria: `Pecuária`,
    imagem: `noticia-boi-gordo-nov26.jpg`,
    texto: [
      `O mercado do boi gordo começou a semana com altas pontuais em algumas regiões do Brasil, impulsionadas pela oferta restrita de animais e pelas escalas de abate curtas. No Pará e em Rondônia, as cotações avançaram R$ 5 por arroba, enquanto São Paulo registrou menor movimentação nas negociações, segundo análise do Cepea.`,
      `No Pará, os negócios com machos ocorreram entre R$ 370 e R$ 380 por arroba, com operações pontuais a R$ 385, e as fêmeas ficaram entre R$ 355 e R$ 360. Em Rondônia, o boi gordo foi comercializado entre R$ 360 e R$ 375 por arroba, com escalas de abate próximas de sete dias.`,
      `Em São Paulo, a maior parte dos negócios ficou entre R$ 390 e R$ 395 por arroba, com operações pontuais a R$ 400. A menor participação de compradores e vendedores, a dificuldade dos frigoríficos em repassar os preços da carne ao consumidor e a demanda enfraquecida limitaram as negociações. A carcaça casada bovina foi negociada à média de R$ 26,92 por quilo, à vista.`,
      `Na reposição, aumentou a oferta de fêmeas, principalmente novilhas e vacas paridas, mas os machos seguem valorizados e o boi magro continua de difícil compra. O cenário mantém os custos de reposição pressionados e exige atenção do pecuarista nas decisões de compra e venda de animais.`,
    ],
    fonte: `Cepea/Esalq`,
  },

  {
    titulo: `Boi gordo: mercado segue travado e virada do semestre deve definir rumo dos preços`,
    data: `22/06/2026`,
    categoria: `Mercado`,
    imagem: `noticia-boi-gordo.jpg`,
    texto: [
      `O mercado físico do boi gordo encerrou a última semana praticamente sem mudanças nos preços. Segundo o Cepea, a baixa liquidez e a cautela de compradores e vendedores mantiveram as negociações lentas, em meio às incertezas do mercado externo e à virada de semestre.`,
      `As escalas de abate ficaram entre 8 e 13 dias. Em Mato Grosso e Mato Grosso do Sul, as negociações oscilaram entre R$ 335 e R$ 340 por arroba. No Rio Grande do Sul, a menor oferta de animais sustentou os preços, com negócios entre R$ 23 e R$ 26 por quilo morto. Na Grande São Paulo, a carcaça casada encerrou a semana a R$ 24,62/kg.`,
      `Para o Cepea, as negociações desta semana serão acompanhadas de perto pelo setor, pois podem indicar a direção dos preços na reta final de junho e na virada do semestre.`,
    ],
    fonte: `Canal Rural`,
    linkFonte: `https://www.canalrural.com.br/pecuaria/boi-gordo-mercado-segue-travado-e-virada-do-semestre-deve-definir-rumo-dos-precos/`,
  },

  {
    titulo: `Boletim do Leite de junho: preço ao produtor registra 4ª alta consecutiva`,
    data: `18/06/2026`,
    categoria: `Pecuária · Leite`,
    imagem: `noticia-leite.jpg`,
    texto: [
      `O preço do leite pago ao produtor subiu em abril/26 pelo quarto mês consecutivo. De acordo com pesquisa do Cepea, a alta foi de 10,4% frente a março, levando a “Média Brasil” a R$ 2,6584/litro. O preço ainda está 7,1% abaixo do registrado em abril/25 em termos reais.`,
      `Em maio, os preços da muçarela e do leite em pó permaneceram estáveis, fechando em R$ 35,10/kg e R$ 30,89/kg respectivamente. Já os preços do UHT recuaram no período.`,
      `As exportações de lácteos avançaram 45,33% em relação a abril, totalizando 5,81 milhões de litros EqL. O Custo Operacional Efetivo (COE) registrou a primeira queda de 2026 em maio, de 1,39%, puxado pelas baixas nos preços de nutrição animal e operações mecanizadas.`,
      `<a href="https://cepea.esalq.usp.br/br/categoria/boletim-do-leite.aspx" target="_blank" rel="noopener" style="color:var(--azul); font-weight:600;">Leia o boletim completo →</a>`,
    ],
    tag: `Leite · Mercado`,
  },

  {
    titulo: `Boi gordo bate recorde nominal em junho de 2026`,
    data: `16/06/2026`,
    categoria: `Mercado · Bovinos`,
    icone: `📈`,
    cor: `azul`,
    texto: [
      `A arroba do boi gordo acumulou alta de 12,8% em relação ao mesmo período do ano anterior, segundo dados do Cepea/Esalq. O preço médio parcial de junho de 2026 chegou a R$ 353,00/arroba, caminhando para o maior patamar nominal da história.`,
      `O mercado futuro, contudo, segue pressionado. Especialistas apontam que o cenário poderia ser ainda melhor para o pecuarista não fosse a pressão dos contratos futuros para os próximos meses.`,
    ],
    tag: `Mercado`,
  },

  {
    titulo: `El Niño em 2026 eleva incertezas para a produção pecuária no Brasil`,
    data: `12/06/2026`,
    categoria: `Pecuária · Clima`,
    imagem: `noticia-elnino.jpg`,
    texto: [
      `A atuação do El Niño em 2026 foi confirmada pela NOAA. Para o Brasil, o fenômeno deve causar choque climático desuniforme: risco de seca no Norte e Nordeste, maiores chuvas no Sul e irregularidade nas chuvas no Centro-Oeste e Sudeste.`,
      `Segundo pesquisadores da Equipe de Pecuária do Cepea/Esalq-USP, os principais pontos de atenção são: disponibilidade de pastagens e água, qualidade das forragens conservadas, ambiência e sanidade animal, e custo da alimentação. Temperaturas elevadas reduzem conforto térmico, pioram conversão alimentar e podem afetar fertilidade e produção de leite.`,
      `Para bovinos de corte, os efeitos tendem a se concentrar em qualidade das pastagens, disponibilidade de água, estresse térmico e aumento dos custos de suplementação. Para a produção leiteira, o impacto aparece de forma combinada sobre produção de volumosos, custo do concentrado e conforto térmico. Para suínos e aves, os maiores impactos ocorrem pelo aumento dos custos da ração e estresse térmico.`,
      `<a href="https://www.cepea.esalq.usp.br/" target="_blank" rel="noopener" style="color:var(--azul); font-weight:600;">Mais informações: cepea.esalq.usp.br</a>`,
    ],
    tag: `Clima · Pecuária`,
  },

  {
    titulo: `Como a suplementação mineral impacta a conversão alimentar`,
    data: `09/06/2026`,
    categoria: `Nutrição · Dicas técnicas`,
    icone: `🔬`,
    cor: `laranja`,
    texto: [
      `A mineralização correta é um dos pilares da nutrição animal eficiente. Quando o animal recebe a quantidade adequada de macro e microminerais, o organismo consegue metabolizar os nutrientes de forma mais eficiente, resultando em melhor ganho de peso com menor consumo de ração.`,
      `Bovinos bem mineralizados também apresentam melhor desempenho reprodutivo, menos problemas sanitários e maior longevidade produtiva — fatores que impactam diretamente a rentabilidade da propriedade.`,
    ],
    tag: `Nutrição`,
  },

  {
    titulo: `Brasil bate novo recorde de exportação de carne bovina em 2026`,
    data: `02/06/2026`,
    categoria: `Agronegócio · Exportação`,
    icone: `🌍`,
    cor: `verde`,
    texto: [
      `O Brasil consolidou sua posição de maior exportador mundial de carne bovina no primeiro semestre de 2026, batendo novos recordes de volume e receita. A expansão dos mercados asiáticos e o dólar favorável foram fatores determinantes nesse resultado.`,
      `Para o pecuarista brasileiro, isso representa uma oportunidade de valorização do rebanho, reforçando a importância de investir em produtividade e qualidade animal.`,
    ],
    tag: `Exportação`,
  },

];