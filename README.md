# Calculadoras para Loja de Materiais de Construção

## 📌 Visão Geral
Este repositório contém duas calculadoras práticas para lojas de materiais de construção:
- **Calculadora de Fios Elétricos** - Calcula a metragem necessária de fios para instalações
- **Calculadora de Tinta** - Calcula a quantidade de tinta necessária para pintura de paredes

Ambas as calculadoras são desenvolvidas em HTML, CSS e JavaScript puro, podendo ser facilmente integradas em qualquer site WordPress ou plataforma web.

## ✨ Funcionalidades

### 🔌 Calculadora de Fios Elétricos
- Calcula a metragem de fios considerando:
  - Distância do percurso
  - Quantidade de lâmpadas e tomadas
  - Origem da instalação (quadro de energia ou não)
- Oferece dois modos de cálculo:
  - Circuitos separados (norma técnica)
  - Circuito único (economia de 40%)

### 🎨 Calculadora de Tinta
- Calcula a quantidade de tinta necessária baseada em:
  - Área da parede (altura × largura)
  - Número de demãos (1 ou 2)
- Considera o rendimento padrão de 10m² por litro

## 🛠️ Tecnologias Utilizadas
- HTML5
- CSS3 (com design responsivo)
- JavaScript Vanilla
- Compatível com WordPress (via shortcode ou bloco HTML)

## 📥 Instalação

### Método 1: WordPress (Recomendado)
1. Instale o plugin [Shortcoder](https://wordpress.org/plugins/shortcoder/)
2. Crie um novo shortcode e cole o código da calculadora desejada
3. Use o shortcode `[calculadora_fios]` ou `[calculadora_tinta]` em qualquer página/post

### Método 2: Implementação Direta
1. Copie o código HTML/CSS/JS da calculadora desejada
2. Cole em um bloco HTML personalizado no seu site
3. Publique a página

## 📝 Como Usar

### Calculadora de Fios
1. Informe se a instalação parte do quadro de energia
2. Insira a distância total do percurso
3. Selecione se haverá lâmpadas/tomadas e suas quantidades
4. Clique em "Calcular" para ver os resultados

### Calculadora de Tinta
1. Insira a altura e largura da parede em metros
2. Clique em "Calcular"
3. Veja a quantidade de tinta para 1 ou 2 demãos

## 🌟 Recursos Futuros
- [ ] Integração com catálogo de produtos
- [ ] Cálculo automático de materiais complementares
- [ ] Versão mobile como app PWA

## 🤝 Como Contribuir
1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença
Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

Desenvolvido com ❤️ por Daniel Anderson 
