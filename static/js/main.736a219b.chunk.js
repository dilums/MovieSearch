(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,t,a){e.exports=a(84)},46:function(e,t,a){},48:function(e,t,a){},70:function(e,t,a){},72:function(e,t,a){},74:function(e,t,a){},76:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(32),l=a.n(r),o=a(87),i=a(9),s=(a(46),a(2)),m=a(3),u=a(5),p=a(4),d=a(6),h=a(85),v=(a(48),a(16)),b=a(88),E=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={term:""},a.onChange=function(e){return a.setState(Object(v.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault(),a.props.history.push("/search?q=".concat(a.state.term))},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.term;return c.a.createElement("form",{className:"my-2 my-lg-0 ml-auto",onSubmit:this.onSubmit},c.a.createElement("div",{className:"search-container"},c.a.createElement("span",null,c.a.createElement("i",{className:"fas fa-search"})),c.a.createElement("input",{className:"mr-sm-2 inpt-search",type:"search",placeholder:"Search for a movie","aria-label":"Search",value:e,name:"term",onChange:this.onChange})))}}]),t}(n.Component),g=Object(b.a)(E),f=c.a.createElement("svg",{height:"24",viewBox:"0 0 192 192",width:"24"},c.a.createElement("path",{d:"m192 96c0-53.019531-42.980469-96-96-96s-96 42.980469-96 96 42.980469 96 96 96h96v-16h-43c26.839844-17.769531 42.988281-47.808594 43-80zm-48.976562 64.722656c-10.722657 7.789063-25.734376 5.414063-33.523438-5.3125-7.789062-10.722656-5.414062-25.730468 5.308594-33.523437 10.726562-7.789063 25.734375-5.414063 33.523437 5.3125 7.792969 10.722656 5.414063 25.730469-5.308593 33.523437zm-1.179688-104.851562c12.605469-4.097656 26.144531 2.800781 30.242188 15.40625 4.09375 12.609375-2.804688 26.148437-15.410157 30.242187-12.605469 4.097657-26.144531-2.800781-30.242187-15.40625-4.09375-12.605469 2.804687-26.148437 15.410156-30.242187zm-45.84375-39.871094c13.253906 0 24 10.746094 24 24s-10.746094 24-24 24-24-10.746094-24-24 10.746094-24 24-24zm-76.085938 55.277344c4.097657-12.605469 17.636719-19.503906 30.242188-15.410156 12.605469 4.097656 19.503906 17.636718 15.410156 30.242187-4.097656 12.605469-17.636718 19.503906-30.242187 15.410156s-19.503907-17.632812-15.410157-30.242187zm62.585938 84.132812c-7.789062 10.726563-22.800781 13.101563-33.523438 5.3125-10.722656-7.792968-13.101562-22.800781-5.308593-33.523437 7.789062-10.722657 22.800781-13.101563 33.523437-5.308594 10.722656 7.789063 13.097656 22.796875 5.308594 33.519531zm5.5-59.410156c0-4.417969 3.582031-8 8-8s8 3.582031 8 8-3.582031 8-8 8-8-3.582031-8-8zm0 0"})),O=c.a.createElement("svg",{viewBox:"0 0 56.966 56.966",height:"24",width:"24"},c.a.createElement("path",{d:"M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23 s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92 c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17 s-17-7.626-17-17S14.61,6,23.984,6z"})),y=function(){return c.a.createElement("nav",{className:"navbar navbar-expand-lg fixed-top"},c.a.createElement("div",{className:"container"},c.a.createElement(h.a,{className:"navbar-brand",to:"/"},f," MSearch"),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},O),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},c.a.createElement(g,null))))},j=a(89),N=a(86),x=a(13),_=a.n(x),S=function(e){var t=e.result,a=t.poster_path,n=t.title,r=t.release_date,l=t.id;return c.a.createElement("div",{className:"col-8 mx-auto col-lg-3 text-center my-3"},c.a.createElement("div",{className:"p-3 img-link-container"},c.a.createElement(h.a,{to:"/movie/"+l},c.a.createElement("img",{src:a&&"https://image.tmdb.org/t/p/w500/"+a||"/MovieSearch/images/movie-default.jpg",alt:"",className:"img-fluid img-link-img"}))),c.a.createElement("h5",null,n),c.a.createElement("h5",null,r))},k=(a(70),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.Search("/now_playing")}},{key:"onBtnClick",value:function(e){this.props.Search(e)}},{key:"render",value:function(){var e,t=this.props.search.movies.loading,a=this.props.search.movies.data.results;return e=t?c.a.createElement("p",null,"Loaidng"):void 0===a||0===a.length?c.a.createElement("p",null,"No results"):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-10 mx-auto col-md-6 text-center text-uppercase mb-3"},c.a.createElement("h1",{className:"text-slanted"},"Movies"))),c.a.createElement("div",{className:"row"},a.map(function(e){return c.a.createElement(S,{result:e,key:e.id})}))),c.a.createElement("section",{className:"search-results"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row mb-5"},c.a.createElement("div",{className:"col-lg-8 mx-auto d-flex justify-content-around flex-wrap"},c.a.createElement("button",{className:"btn btn-black text-uppercase m-2",onClick:this.onBtnClick.bind(this,"/now_playing")},"Now Showing"),c.a.createElement("button",{className:"btn btn-black text-uppercase m-2",onClick:this.onBtnClick.bind(this,"/upcoming")},"upcoming"),c.a.createElement("button",{className:"btn btn-black text-uppercase m-2",onClick:this.onBtnClick.bind(this,"/popular")},"popular"),c.a.createElement("button",{className:"btn btn-black text-uppercase m-2",onClick:this.onBtnClick.bind(this,"/top_rated")},"top rated"))),e))}}]),t}(n.Component)),w=Object(b.a)(Object(i.b)(function(e){return{search:e.search}},{Search:function(e){return function(t){t({type:"SEARCH_MOVIES_LOADING"}),_.a.get("https://api.themoviedb.org/3/movie".concat(e,"?api_key=a7b63eebbe05462bc8265651583d5069&language=en-US")).then(function(e){return t({type:"SEARCH_MOVIES_LOADED",payload:e.data})}).catch(function(e){return t({type:"SEARCH_MOVIES_LOADED",payload:[]})})}}})(k)),A=(a(72),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).redirect=function(e){a.props.history.push(e)},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("header",null,c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row header-details d-flex align-items-center justify-content-center"},c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"banner text-center"},c.a.createElement("h1",{className:"text-uppercase w-50 mx-auto"},"Welcome to Movie Search"),c.a.createElement("img",{src:"/images/moviedb.png",className:"img_mdb",alt:""})))))),c.a.createElement(w,null))}}]),t}(n.Component)),C=function(){return c.a.createElement(c.a.Fragment,null,"Nothing Here.........")},M=(a(74),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){this.props.LoadMovie(this.props.id)}},{key:"render",value:function(){var e,t="/MovieSearch/images/cinema.jpg",a=this.props.movies.loading,n=this.props.movies.single,r=n.title,l=n.poster_path,o=n.tagline,i=n.overview,s=n.release_date,m=n.runtime,u=n.revenue,p=n.vote_average,d=n.genres,h=n.backdrop_path;return a?e=c.a.createElement("p",null,"loading"):void 0===r?e=c.a.createElement("p",null,"No matches ! please check your link again"):(h&&(t="https://image.tmdb.org/t/p/original//".concat(h)),e=c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"col-10 mx-auto col-md-4 text-center my-3"},c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500"+l,alt:"",className:"img-fluid"})),c.a.createElement("div",{className:"col-10 mx-auto col-md-8  my-3"},c.a.createElement("h1",{className:"text-center text-uppercase"},r),c.a.createElement("h4",{className:"text-center text-uppercase text-slanted"},o),c.a.createElement("p",null,i),c.a.createElement("div",{className:"d-flex justify-content-around flex-wrap my-4"},d.map(function(e){return c.a.createElement("span",{key:e.id},e.name)})),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-5 d-flex justify-content-between flex-wrap my-3 mx-auto"},c.a.createElement("span",null,"Original Release"),c.a.createElement("span",null,s)),c.a.createElement("div",{className:"col-md-5 d-flex justify-content-between flex-wrap my-3 mx-auto"},c.a.createElement("span",null,"Running Time"),c.a.createElement("span",null,m)),c.a.createElement("div",{className:"col-md-5 d-flex justify-content-between flex-wrap my-3 mx-auto"},c.a.createElement("span",null,"Box Office"),c.a.createElement("span",null,u)),c.a.createElement("div",{className:"col-md-5 d-flex justify-content-between flex-wrap my-3 mx-auto"},c.a.createElement("span",null,"Vote Average"),c.a.createElement("span",null,p)))))),c.a.createElement("section",{style:{background:"url('".concat(t,"')center/cover fixed no-repeat")},className:"movie-hero"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row hero-box align-items-center justify-content-center"},c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"row movie-detalis"},e)))))}}]),t}(n.Component)),L=Object(i.b)(function(e){return{movies:e.movies}},{LoadMovie:function(e){return function(t){t({type:"MOVIES_LOADING"}),_.a.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=a7b63eebbe05462bc8265651583d5069&language=en-US")).then(function(e){return t({type:"MOVIE_LOAD",payload:e.data})}).catch(function(e){return t({type:"MOVIE_LOAD",payload:[]})})}}})(M),D=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.actor,t=e.name,a=e.character,n=e.profile_path,r=e.id;return c.a.createElement("div",{className:"col-5 mx-auto col-md-3 col-lg-2 text-center my-3"},c.a.createElement("div",{className:"p-3 img-link-container"},c.a.createElement(h.a,{to:"/actor/"+r},c.a.createElement("img",{src:n&&"https://image.tmdb.org/t/p/w500/"+n||"/MovieSearch/images/default.jpg",alt:"",className:"img-fluid img-link-img"}))),c.a.createElement("h5",{className:"text-muted text-slanted mt-3"},a),c.a.createElement("h5",null,t))}}]),t}(n.Component),I=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){this.props.LoadActors(this.props.id)}},{key:"render",value:function(){var e,t=this.props.actors.loading,a=this.props.actors.data.cast;return e=t?c.a.createElement("p",null,"loading"):void 0===a?c.a.createElement("p",null,"No cast for this movie"):this.props.actors.data.cast.map(function(e){return c.a.createElement(D,{key:e.id,actor:e})}),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-10 mx-auto col-md-6 text-center text-uppercase my-3"},c.a.createElement("h1",{className:"text-slanted"},"cast"))),c.a.createElement("div",{className:"row"},e))}}]),t}(n.Component),R=Object(i.b)(function(e){return{actors:e.actors}},{LoadActors:function(e){return function(t){t({type:"ACTORS_LOADING"}),_.a.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=a7b63eebbe05462bc8265651583d5069")).then(function(e){return t({type:"ACTORS_LOAD",payload:e.data})}).catch(function(e){return t({type:"ACTORS_LOAD",payload:[]})})}}})(I),V=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(L,{id:this.props.match.params.id}),c.a.createElement(R,{id:this.props.match.params.id}))}}]),t}(n.Component),T=(a(76),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){this.props.LoadActor(this.props.id)}},{key:"render",value:function(){var e,t=this.props.actors.loading,a=this.props.actors.single,n=a.name,r=a.profile_path,l=a.biography,o=a.place_of_birth;return e=t?c.a.createElement("p",null,"loading"):void 0===n?c.a.createElement("p",null,"Sorry, No matches, Please check your link again"):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"row mt-5"},c.a.createElement("div",{className:"col-10 mx-auto col-md-4 text-center my-3"},c.a.createElement("h1",{className:"text-center text-uppercase"},n),c.a.createElement("img",{src:r&&"https://image.tmdb.org/t/p/w500"+r||"/MovieSearch/images/default.jpg",alt:"",className:"img-fluid"}),c.a.createElement("h4",{className:"text-center mt-2"},o))),l?c.a.createElement("div",{className:"row my-5"},c.a.createElement("div",{className:"col-10 mx-auto col-md-6 text-center text-uppercase mb-3"},c.a.createElement("h1",{className:"text-slanted text-uppercase"},"biography")),c.a.createElement("div",{className:"col-10 mx-auto col-md-12 my-3"},c.a.createElement("p",null,l))):null),c.a.createElement("section",{className:"actor-hero"},c.a.createElement("div",{className:"container"},e))}}]),t}(n.Component)),F=Object(i.b)(function(e){return{actors:e.actors}},{LoadActor:function(e){return function(t){t({type:"ACTORS_LOADING"}),_.a.get("https://api.themoviedb.org/3/person/".concat(e,"?api_key=a7b63eebbe05462bc8265651583d5069&language=en-US")).then(function(e){return t({type:"ACTOR_LOAD",payload:e.data})}).catch(function(e){return t({type:"ACTOR_LOAD",payload:[]})})}}})(T),z=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.movie,t=e.title,a=e.character,n=e.poster_path,r=e.release_date,l=e.id;return c.a.createElement("div",{className:"col-8 mx-auto col-md-3 col-lg-2 text-center my-3"},c.a.createElement("div",{className:"p-3 img-link-container"},c.a.createElement(h.a,{to:"/movie/"+l},c.a.createElement("img",{src:n&&"https://image.tmdb.org/t/p/w500/"+n||"/MovieSearch/images/movie-default.jpg",alt:"",className:"img-fluid img-link-img"}))),c.a.createElement("h5",{className:"text-muted text-slanted mt-3"},a),c.a.createElement("h5",null,t),c.a.createElement("h5",null,r))}}]),t}(n.Component),B=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){this.props.LoadMovies(this.props.id)}},{key:"render",value:function(){var e,t=this.props.movies.loading,a=this.props.movies.data.cast;return e=t?c.a.createElement("p",null,"loading"):void 0===a?c.a.createElement("p",null,"No Movies for this actor"):a.map(function(e){return c.a.createElement(z,{key:e.id,movie:e})}),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-10 mx-auto col-md-6 text-center text-uppercase my-4"},c.a.createElement("h1",{className:"text-slanted"},"Movies"))),c.a.createElement("div",{className:"row"},e))}}]),t}(n.Component),G=Object(i.b)(function(e){return{movies:e.movies}},{LoadMovies:function(e){return function(t){t({type:"MOVIES_LOADING"}),_.a.get("https://api.themoviedb.org/3/person/".concat(e,"/movie_credits?api_key=a7b63eebbe05462bc8265651583d5069&language=en-US")).then(function(e){return t({type:"MOVIES_LOAD",payload:e.data})}).catch(function(e){return t({type:"MOVIES_LOAD",payload:[]})})}}})(B),H=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(F,{id:this.props.match.params.id}),c.a.createElement(G,{id:this.props.match.params.id}))}}]),t}(n.Component),q=a(23),U=a.n(q),W=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={search_query:""},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=U.a.parse(this.props.location.search,{ignoreQueryPrefix:!0}).q;this.setState({search_query:e}),this.props.Search(e)}},{key:"render",value:function(){var e,t=this.props.search.movies.loading,a=this.props.search.movies.data.results;return e=t?c.a.createElement("p",null,"Loaidng"):void 0===a||0===a.length?c.a.createElement("p",null,"No results"):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-10 mx-auto col-md-6 text-center text-uppercase mb-3"},c.a.createElement("h1",{className:"text-slanted"},"Movies"))),c.a.createElement("div",{className:"row"},a.map(function(e){return c.a.createElement(S,{result:e,key:e.id})}))),c.a.createElement("section",{className:"search-results"},c.a.createElement("div",{className:"container"},e))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=U.a.parse(e.location.search,{ignoreQueryPrefix:!0}).q;return t.search_query===a?t:(e.Search(a),{search_query:a})}}]),t}(n.Component),P=Object(i.b)(function(e){return{search:e.search}},{Search:function(e){return function(t){t({type:"SEARCH_MOVIES_LOADING"}),_.a.get("https://api.themoviedb.org/3/search/movie?api_key=a7b63eebbe05462bc8265651583d5069&language=en-US&page=1&include_adult=false&query=".concat(e)).then(function(e){return t({type:"SEARCH_MOVIES_LOADED",payload:e.data})}).catch(function(e){return t({type:"SEARCH_MOVIES_LOADED",payload:[]})})}}})(W),J=Object(b.a)(function(){return c.a.createElement(j.a,null,c.a.createElement(N.a,{exact:!0,path:"/",component:A}),c.a.createElement(N.a,{exact:!0,path:"/movie/:id",component:V}),c.a.createElement(N.a,{exact:!0,path:"/actor/:id",component:H}),c.a.createElement(N.a,{exact:!0,path:"/search",component:P}),c.a.createElement(N.a,{exact:!0,path:"/now_playing",component:w}),c.a.createElement(N.a,{exact:!0,path:"/popular",component:w}),c.a.createElement(N.a,{exact:!0,path:"/top_rated",component:w}),c.a.createElement(N.a,{exact:!0,path:"/upcoming",component:w}),c.a.createElement(N.a,{component:C}))}),Q=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(y,null),c.a.createElement(J,null))}}]),t}(n.Component),K=a(15),X=a(36),Y=a(12),Z={data:{},loading:!0,single:{}},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ACTORS_LOAD":return Object(Y.a)({},e,{loading:!1,data:t.payload});case"ACTORS_LOADING":return Object(Y.a)({},e,{loading:!0});case"ACTOR_LOAD":return Object(Y.a)({},e,{loading:!1,single:t.payload});default:return e}},ee={data:{},loading:!0,single:{}},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MOVIES_LOAD":return Object(Y.a)({},e,{loading:!1,data:t.payload});case"MOVIES_LOADING":return Object(Y.a)({},e,{loading:!0});case"MOVIE_LOAD":return Object(Y.a)({},e,{loading:!1,single:t.payload});default:return e}},ae={movies:{loading:!0,data:[]}},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_MOVIES_LOADING":return Object(Y.a)({},e,{movies:Object(Y.a)({},e.movies,{loading:!0})});case"SEARCH_MOVIES_LOADED":return Object(Y.a)({},e,{movies:{data:t.payload,loading:!1}});default:return e}},ce=Object(K.c)({actors:$,movies:te,search:ne}),re=[X.a],le=Object(K.e)(ce,{},Object(K.d)(K.a.apply(void 0,re))),oe=c.a.createElement(i.a,{store:le},c.a.createElement(o.a,null,c.a.createElement(Q,null)));l.a.render(oe,document.getElementById("root"))}},[[37,2,1]]]);
//# sourceMappingURL=main.736a219b.chunk.js.map