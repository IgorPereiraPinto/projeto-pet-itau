# Identidade visual · Plano Pet Itaú

Este arquivo define o visual do material. O StackSpot deve seguir estas regras para gerar o `index.html`, o `styles.css` e o `script.js`.

## Diretriz de referência visual (obrigatória)

1. A referência visual é o print das páginas comerciais do Itaú. Replique dele o cabeçalho laranja, o texto branco no cabeçalho, a família e os tamanhos de fonte, os cards arredondados, os checks laranja e o estilo limpo.
2. O PowerPoint de origem NÃO é referência visual. Use o PPT apenas como fonte de conteúdo. Ignore o visual dele.
3. Estilo geral: premium, moderno e corporativo.

## Cabeçalho fixo (todos os slides ou seções)

- Faixa superior de largura total em laranja Itaú `#EC7000`.
- Título em branco `#FFFFFF`, sans-serif bold, alinhado à esquerda.
- Sem logotipo nem ícone do banco. A faixa laranja é o único elemento de marca.

## Paleta

| Uso | Cor |
|---|---|
| Laranja Itaú (cabeçalho, ícones, checks, destaques) | `#EC7000` |
| Laranja forte (realce, hover) | `#D26100` |
| Fundo de conteúdo | `#FFFFFF` |
| Fundo de seção e cards | `#F5F7FA` |
| Texto primário | `#1A1A1A` |
| Texto secundário | `#4A5568` |
| Texto muted e legendas | `#6B7280` |
| Azul consultivo (selos de orientação) | `#003B7A` |
| Verde "pode orientar" | texto `#1F5F3A` sobre `#E7F4EC` |
| Vermelho "não prometer" | texto `#C53030` sobre `#FEF2F2` |
| Âmbar "atenção, em atualização, pendente" | texto `#B45309` sobre `#FFF7E6` |

Dominância: o laranja domina o cabeçalho e os destaques. O branco e o cinza claro dominam o conteúdo. Azul, verde, vermelho e âmbar são pontuais, só em selos e caixas de orientação.

## Tipografia

- Família sans-serif humanista. Fonte institucional do Itaú se disponível, com fallback Inter, Source Sans 3 ou Segoe UI e Arial.
- Tamanhos de referência (desktop): título 36 a 44 bold, subtítulo 20 a 24 bold, corpo 14 a 16, legenda 10 a 12 muted.
- No mobile, reduzir proporcionalmente com unidades relativas (rem, clamp).
- Sem linhas decorativas sob títulos. Sem barras ou listras laterais decorativas.

## Componentes

- Cards arredondados (raio 12 a 16), sombra suave, fundo branco ou `#F5F7FA`.
- Checks em laranja `#EC7000` nas listas de cobertura, como no print.
- Ícones em círculos laranja-claro ao lado dos cabeçalhos de bloco.
- Selos: âmbar para "Atualização Março/2026" e pendências, verde para "pode orientar", vermelho para "não prometer".
- Tabela comparativa com cabeçalho de coluna colorido, leitura fácil, que vira blocos empilhados no mobile.

## Imagens e ícones

- Imagens realistas e temáticas de pets (cães e gatos) em fundo branco ou claro, no estilo do print.
- Ícones temáticos e realistas: pata, estetoscópio veterinário, clínica, celular, escudo, documento e nota fiscal, calendário, microchip, cofrinho, lupa, seringa, coração.
- Não usar personagens, marcas de terceiros ou o logotipo do banco.

## Responsividade (obrigatória)

- O material precisa funcionar bem em desktop, tablet e mobile.
- Grid fluido. Cards e colunas empilham em telas menores.
- Tipografia e espaçamentos em unidades relativas (rem, em, clamp, %).
- Imagens responsivas com `max-width: 100%`.
- Tabelas comparativas com rolagem horizontal ou reorganização em blocos no mobile.
- Navegação por seções acessível em qualquer largura.
- Testar em três larguras de referência: aproximadamente 1280px (desktop), 768px (tablet) e 380px (mobile).

## Animações e movimento (efeito landing page)

O material deve ter movimento de landing page premium, sutil e com propósito, que complementa o design sem competir com o conteúdo. Performance e acessibilidade vêm primeiro.

### Princípios
- Movimento com propósito, nunca decorativo em excesso. O material é consultivo e corporativo.
- Animar apenas `transform` e `opacity` para manter 60fps. Não animar propriedades de layout.
- Durações curtas, de 150 a 400 ms. Easing suave, ease-out ou cubic-bezier de saída.
- Respeitar `prefers-reduced-motion`. Quando ativo, desligar as animações e mostrar o conteúdo estático.

### Efeitos sugeridos
- Hero animado: entrada suave do título e da imagem do pet, com fade e leve slide. Parallax discreto no hero, reduzido no mobile.
- Scroll reveal: seções e cards surgem ao entrar na viewport, com fade-up. Stagger leve nos grupos de cards.
- Microinterações: hover nos cards com leve elevação e sombra. Botões e abas com transição suave. Checks de cobertura que aparecem em sequência.
- Contadores animados: preços e números, como o limite anual de 200 vezes a mensalidade, com count-up ao entrar na viewport.
- Transições suaves entre seções ou abas, sem cortes bruscos.
- Ícones temáticos com leve animação de entrada, sem loop infinito que distraia.
- Imagens com lazy load e leve zoom no hover.
- Selos de pendência e de atualização com pulso muito sutil, só para chamar atenção sem exagero.

### Restrições
- Não usar animação chamativa nos blocos de compliance (pode orientar e não prometer). Ali o movimento é mínimo, para não banalizar o aviso.
- Não usar animações longas, piscantes ou que atrasem a leitura.
- Sem dependência de biblioteca pesada. Preferir CSS (`transition`, `@keyframes`) mais `IntersectionObserver` no `script.js` para scroll reveal e count-up. Se usar lib, que seja leve e com fallback.
- No mobile, manter as animações, mas reduzir parallax e movimentos intensos.

### Técnica
- Scroll reveal e count-up via `IntersectionObserver`.
- Estados de animação com classes CSS (por exemplo `is-visible`), aplicadas pelo `script.js`.
- Guardar uma media query `@media (prefers-reduced-motion: reduce)` que zera transições e animações.

## O que evitar

- Não usar o visual do PowerPoint.
- Não usar barras ou listras decorativas além do cabeçalho.
- Não usar linhas sob títulos.
- Não centralizar blocos de texto longos.
- Não usar fundo bege ou creme. Fundo branco ou da paleta.
- Não deixar texto estourando o card. Ajustar tamanho ou container.
