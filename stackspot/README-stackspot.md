# StackSpot · Como usar e comparar com o Claude Code

Esta pasta tem os equivalentes StackSpot do set que está em `.claude/`. A ideia é gerar o material nas duas ferramentas com o mesmo contexto e comparar a saída.

## Paridade entre as ferramentas

| Função                          | Claude Code                                            | StackSpot                            |
| ------------------------------- | ------------------------------------------------------ | ------------------------------------ |
| Regras e contexto sempre ativos | `CLAUDE.md` + `Contexto/`                              | Knowledge Source `pet-itau-contexto` |
| Gerar a página                  | skill `gerar-pagina-pet` + comando `/gerar-deck`       | Quick Command `gerar-pagina-pet`     |
| Validar a fonte                 | subagente `validador-fonte` + comando `/validar-fonte` | Quick Command `validar-fonte`        |

## Passo a passo no StackSpot

1. Criar a Knowledge Source `pet-itau-contexto` e adicionar o conteúdo de `CLAUDE.md`, dos arquivos de `Contexto/` e do `dados/planos.json`. Detalhe em `knowledge-source.md`.
2. Se a sua versão indexar PDF, criar a KS `pet-itau-fontes` com os PDFs de `Docs/Pet/`.
3. Criar o Quick Command `gerar-pagina-pet`, anexando a KS. Detalhe em `quick-command-gerar-pagina-pet.md`.
4. Criar o Quick Command `validar-fonte`, anexando a KS. Detalhe em `quick-command-validar-fonte.md`.
5. Rodar `gerar-pagina-pet` e depois `validar-fonte`.

## Roteiro de comparação

1. Rode a geração nas duas ferramentas com o mesmo `storyboard.md` e o mesmo `planos.json`.
2. Rode o validador em cada saída.
3. Compare por critérios objetivos:
   - Fidelidade às fontes: quantos pontos sem fonte o validador apontou.
   - Aderência ao design: cabeçalho laranja sem logo, paleta, tipografia, cards.
   - Responsividade real em desktop, tablet e mobile.
   - Cobertura do storyboard: as 22 seções presentes e na ordem.
   - Compliance: blocos de pode orientar e não prometer, selos de pendência.
4. Use o mesmo validador como régua para os dois, assim a comparação fica justa.

## Observação

A sintaxe e os campos do StackSpot variam por versão. Os arquivos desta pasta trazem a definição em campos do portal e um template YAML para ajustar ao schema da sua versão do StackSpot AI.
