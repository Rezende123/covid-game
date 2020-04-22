# COVID-GAME

Um jogo educativo onde o usuário busca o vírus, que é invisível, sendo guiado pelo som da água, simbolizando a necessidade da lavagem de mãos, e quando encontra tem uma mensagem educativa.

"Existem muitos mitos e informações erradas sobre o coronavírus sendo compartilhados online – incluindo como o coronavírus se espalha, como se manter seguro e o que fazer se você estiver preocupado com a contaminação pelo vírus. Portanto, é importante ter cuidado ao procurar informações e conselhos.", [UNICEF](https://www.unicef.org/brazil/coronavirus-o-que-voce-precisa-saber).

O covid-19 é um vilão de verdade e você pode ajudar na luta contra ele, se informe, lave as mãos e respeite a quarentena.

## O JOGO

![](./src/assets/gif/CovidGame.gif)

## Instalação

Instalavel via npm em aplicações angular, ele é basicamente uma div que que se adapta a um elemento pai, então pode ser iserido em outras aplicações. Para instalar:
```
npm i covid-game
```
E colocar ele no módulo da sua aplicação:
```
import { CovidGameModule } from './covid-game/covid-game.module';
    ...
    imports: [
        ...
        CovidGameModule,
        ...
    ],
    ...
```