(this["webpackJsonpcorona-kirtan"]=this["webpackJsonpcorona-kirtan"]||[]).push([[0],{31:function(t,e,n){t.exports=n(46)},36:function(t,e,n){},37:function(t,e,n){},46:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(13),i=n.n(c),o=(n(36),n(37),n(14)),s=n(15),l=n(29),u=n(30),h=n(28),d=(n(39),n(27)),k=n.n(d),m=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).convertTrackFileToPlaylist=function(t){var e=[];t.tracks.forEach((function(t){var n={};n.name=t.track.name,n.artist=t.track.artist,n.date=t.track.date,n.src=t.track.url,e.push(n)})),a.setState({playlist:e})},a.handleClickPrevious=function(){var t=a.state.currentMusicIndex-1;t<0&&(t=a.state.playlist.length-1),a.setState({currentMusicIndex:t})},a.handleClickNext=function(){var t=a.state.currentMusicIndex+1;t>=a.state.playlist.length&&(t=0),a.setState({currentMusicIndex:t})},a.state={playlist:[],currentMusicIndex:0},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("https://iskconnyc.nyc3.cdn.digitaloceanspaces.com/files.yaml",{mode:"cors"}).then((function(t){return t.text()})).then((function(e){t.convertTrackFileToPlaylist(k.a.parse(e))}))}},{key:"render",value:function(){var t="";return 0!==this.state.playlist.length&&(t=this.state.playlist[this.state.currentMusicIndex].src),r.a.createElement("div",null,r.a.createElement(h.a,{showSkipControls:!0,showJumpControls:!1,autoPlayAfterSrcChange:!0,onClickPrevious:this.handleClickPrevious,onClickNext:this.handleClickNext,onEnded:this.handleClickNext,src:t}))}}]),n}(r.a.Component);var p=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(m,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.03629933.chunk.js.map