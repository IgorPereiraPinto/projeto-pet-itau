# StackSpot · Knowledge Source

Equivalente, no StackSpot, ao `CLAUDE.md` mais a pasta `Contexto/`. É a base de conhecimento que os Quick Commands vão consultar.

> Observação: a sintaxe e os campos exatos do StackSpot mudam por versão. Use esta definição como guia. Confirme os nomes de campo e o schema na sua versão do StackSpot AI (portal ou STK CLI) antes de subir.

## Como criar

No StackSpot AI, crie uma Knowledge Source do tipo Custom (ou Snippet, uma por arquivo) e adicione o conteúdo dos arquivos de contexto e dados do projeto.

| Campo     | Valor                                                                                          |
| --------- | ---------------------------------------------------------------------------------------------- |
| Nome      | Pet Itaú · Contexto e Regras                                                                   |
| Slug      | pet-itau-contexto                                                                              |
| Tipo      | Custom                                                                                         |
| Descrição | Regras, governança, identidade visual, storyboard, FAQ e dados estruturados do Plano Pet Itaú. |

## Conteúdo a adicionar

- `CLAUDE.md` (regra de ouro, hierarquia de fontes, design, compliance, pendências).
- `Contexto/briefing.md`
- `Contexto/Identidade_visual.md`
- `Contexto/storyboard.md`
- `Contexto/faq.md`
- `dados/planos.json`

Os PDFs em `Docs/Pet/` são a base oficial. Se a sua versão do StackSpot permitir indexar PDFs em Knowledge Source, adicione-os em uma KS separada chamada `pet-itau-fontes`. Caso contrário, mantenha o `planos.json` como referência primária de números, já que ele foi extraído desses PDFs.

## Regras que a KS deve carregar (resumo)

- Não inventar. O que não estiver nas fontes recebe `[VALIDAR · FONTE OFICIAL]`.
- Hierarquia: PDFs oficiais, depois `planos.json`, depois cards, depois PPT (só conteúdo), depois print (só visual).
- Referência visual é o print, nunca o PowerPoint.
- Cabeçalho laranja `#EC7000` com título branco, sem logotipo do banco.
- Responsivo: desktop, tablet e mobile.
- Imparcialidade entre A.Pet e Petlove: mesma profundidade, cada um com seus diferenciais.
- Separar pode orientar de não prometer. Petlove: a cobertura é o que consta nas Tabelas de Procedimentos e nas Condições Gerais; o que não está listado não faz parte da assistência.
- A.Pet: a limpeza de tártaro é coberta como assistência, com carência de 180 dias; os demais tratamentos odontológicos são excluídos.
- Segmentos: Itaú Agências (IA), Itaú Uniclass (IU) e Itaú Personnalité (IP). Canais: Mobile, Plataforma 360 e 360i.
- Pendências vivas com selo, conforme a lista oficial do `CLAUDE.md`.

## Template YAML (ajustar ao schema da sua versão)

```yaml
schema-version: v3
kind: knowledge-source
metadata:
  name: pet-itau-contexto
  display-name: "Pet Itaú · Contexto e Regras"
  description: "Regras, identidade visual, storyboard, FAQ e dados do Plano Pet Itaú."
spec:
  type: custom
  # adicionar o conteudo dos arquivos de Contexto e de dados/planos.json
```
