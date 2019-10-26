## Erros presentes no projeto


Há um abuso grande quanto ao uso de medidas relativas, como porcentagem ou viewport height/width. Galera, isso não indica necessariamente responsividade, pelo contrário, pode resultar em bugs seríssimos, muito difíceis de resolver. Pessoalmente, evitar colocar height como 100% porque na minha experiência sempre deu muito problema, enquanto width normalmente não. Não há mal nenhum em usar medidas fixas como pixels, porque o CSS suporta muda-las de acordo com o tamanho na tela. Pesquisem sobre media query, usem e abusem pois é uma funcionalidade importantíssima, e deem preferencia a ela ao invés de medidas relativas.
Também há um abuso grande de posicionamento absoluto, os tais "top", "left". É outra função que deve ser usado com cautela, pois causa bugs bem chatos de se resolver, além de contribuir em muito para problemas com responsividade. Ao invés disso busquem se aprofundar com Flexbox https://flexboxfroggy.com/ ou, ao como Bootstrap abstrai bastante a lógica do flex, se aprofundem com o Grid System dele. Também é preferível ajustar padding e margin ao invés de posicionamento absoluto, novamente usando media queries para regular os valores em pixel.
Se atentem a outra coisa: A classe "row" do Bootstrap é intimamente ligada a "container", de modo que uma complementa a outra (Ex: o padding padrão de uma "cancela" a da outra), desse modo, evitem:

Colocar elementos dentro da "container" sem uma "row encapsulando", mesmo que sejam "cols"
Colocar "row"s fora de "container"s
Colocar "col"s fora de "row"s
Por fim, esse link vale a lida https://developers.google.com/web/fundamentals/design-and-ux/responsive

Não esqueçam também que a maior parte das pessoas acessam sites pelo celular atualmente, portanto, o que normalmente se faz é cria-lo pensando no mobile e depois, com a ajuda de media queries e flexbox, adapta-lo a desktop. https://www.hostgator.com.br/blog/mobile-first-o-que-e/


## Estudos

No mais, boa sorte (: o site está lindo, só precisa haver cuidado pois o código que o forma precisa ser tão belo quanto. Portanto, sumarizando, por ordem de importancia, estudem:

Media queries
Grid System
Flexbox
E se possível, sobre posicionamentos (relative, absolute...)