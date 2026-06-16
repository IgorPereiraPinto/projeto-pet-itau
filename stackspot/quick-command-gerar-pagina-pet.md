# StackSpot · Quick Command: gerar-pagina-pet

Equivalente, no StackSpot, à skill `gerar-pagina-pet` e ao comando `/gerar-deck`.

> A sintaxe exata varia por versão do StackSpot. Confirme os campos no portal ou no STK CLI antes de subir.

## Definição (campos do portal)

| Campo             | Valor                                                                                 |
| ----------------- | ------------------------------------------------------------------------------------- |
| Nome              | gerar-pagina-pet                                                                      |
| Slug              | gerar-pagina-pet                                                                      |
| Descrição         | Gera a página web responsiva do Plano Pet Itaú a partir do contexto e do planos.json. |
| Knowledge Sources | pet-itau-contexto (e pet-itau-fontes, se existir)                                     |
| Entrada           | opcional: nome da seção ou slide a gerar. Vazio gera a página completa.               |

## Instrução do comando (prompt)

Você gera o material consultivo do Plano Pet Itaú em página web responsiva, com `index.html`, `styles.css` e `script.js`.

Use a Knowledge Source pet-itau-contexto como fonte de regras, identidade visual, storyboard e dados. Siga sem exceção:

- Não invente. Todo número vem do planos.json. O que não tiver fonte recebe o selo `[VALIDAR · FONTE OFICIAL]`.
- A referência visual é o print, nunca o PowerPoint.
- Cabeçalho fixo laranja `#EC7000` com título branco, sem logotipo do banco.
- Paleta, tipografia e componentes conforme a identidade visual.
- Responsivo de verdade: desktop, tablet e mobile. Grid fluido, unidades relativas, cards e tabelas que reorganizam no mobile.
- As 22 seções do storyboard, na mesma ordem, com os mesmos títulos e subtítulos. Cada seção com id estável no padrão `slide-NN-tema`.
- Imparcialidade e equilíbrio entre A.Pet e Petlove: mesma profundidade, cada um com seus diferenciais.
- Selos para as pendências vivas e para a atualização Março/2026.
- Blocos de pode orientar (verde) e não prometer (vermelho).
- A cobertura da Petlove é o que consta nas Tabelas de Procedimentos e nas Condições Gerais; o que não está listado não faz parte da assistência.
- A.Pet: a limpeza de tártaro é coberta como assistência, com carência de 180 dias; os demais tratamentos odontológicos são excluídos. Não prometer cobertura odontológica ampla no A.Pet.
- Segmentos IA, IU e IP, planos por segmento, canais (Mobile, Plataforma 360, 360i) e plano de incentivo conforme o briefing e o planos.json.

Se a entrada trouxer uma seção específica, gere ou atualize apenas ela. Caso contrário, gere a página completa. Ao final, recomende rodar o Quick Command validar-fonte.

## Template YAML (ajustar ao schema da sua versão)

```yaml
schema-version: v3
kind: quick-command
metadata:
  name: gerar-pagina-pet
  display-name: "Gerar página Pet Itaú"
  description: "Gera a página web responsiva do Plano Pet Itaú."
spec:
  receive-type: text
  knowledge-sources:
    - pet-itau-contexto
  steps:
    - type: LLMGeneration
      prompt: |
        (cole aqui a instrução do comando acima)
```
