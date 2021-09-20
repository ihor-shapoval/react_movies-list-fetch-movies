(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},17:function(e,t,i){},18:function(e,t,i){},19:function(e,t,i){},22:function(e,t,i){},23:function(e,t,i){"use strict";i.r(t);var a=i(8),n=i.n(a),s=(i(16),i(11)),c=i(3),r=i(1),l=(i(17),i(18),i(19),i(0)),o=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{src:t.imgUrl,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8",children:t.title})})]}),Object(l.jsxs)("div",{className:"content",children:[t.description,Object(l.jsx)("br",{})]})]})]})},m=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(o,{movie:e},e.imdbId)}))})},d=i(2),j=i.n(d),h=i(6),b=(i(22),i(9)),u=i.n(b),p=function(){var e=Object(h.a)(j.a.mark((function e(t){var i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://www.omdbapi.com/?apikey=85790e93&","t=").concat(t));case 2:if((i=e.sent).ok){e.next=5;break}throw new Error("Failed to load...");case 5:return e.abrupt("return",i.json());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(e){var t=e.addMovie,i=Object(r.useState)(null),a=Object(c.a)(i,2),n=a[0],s=a[1],m=Object(r.useState)(""),d=Object(c.a)(m,2),b=d[0],v=d[1],g=Object(r.useState)(!0),O=Object(c.a)(g,2),f=O[0],w=O[1],x=function(){var e=Object(h.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(b);case 2:if("False"!==(t=e.sent).Response){e.next=7;break}return s(null),w(!1),e.abrupt("return");case 7:w(!0),s({title:t.Title,description:t.Plot,imgUrl:t.Poster,imdbUrl:"https://www.imdb.com/title/".concat(t.imdbID),imdbId:t.imdbID}),v("");case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{className:"find-movie",children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{type:"text",value:b,onChange:function(e){var t=e.target.value;v(t),w(!0)},id:"movie-title",placeholder:"Enter a title to search",className:u()("input",{"is-danger":!f})})}),!f&&Object(l.jsx)("p",{className:"help is-danger",children:"Can't find a movie with such a title"})]}),Object(l.jsxs)("div",{className:"field is-grouped",children:[Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"button",className:"button is-light",onClick:x,children:"Find a movie"})}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"button",className:"button is-primary",onClick:function(){null!==n&&t(n),s(null)},children:"Add to the list"})})]})]}),n&&Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h2",{className:"title",children:"Preview"}),Object(l.jsx)(o,{movie:n})]})]})},g=i(10),O=function(){var e=Object(r.useState)(g),t=Object(c.a)(e,2),i=t[0],a=t[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(m,{movies:i})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(v,{addMovie:function(e){i.find((function(t){return t.imdbId===e.imdbId}))||a([e].concat(Object(s.a)(i)))}})})]})};n.a.render(Object(l.jsx)(O,{}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.10b418c9.chunk.js.map