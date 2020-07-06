module.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=28)}([function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat.app},function(t,e){t.exports=flarum.core.compat["utils/string"]},function(t,e){t.exports=flarum.core.compat["components/CommentPost"]},function(t,e){t.exports=flarum.core.compat["helpers/username"]},function(t,e){t.exports=flarum.core.compat["components/PostPreview"]},function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e){t.exports=flarum.core.compat["components/Notification"]},function(t,e){t.exports=flarum.core.compat["utils/extract"]},function(t,e){t.exports=flarum.core.compat["utils/extractText"]},function(t,e){t.exports=flarum.core.compat["components/NotificationGrid"]},function(t,e){t.exports=flarum.core.compat["components/LoadingIndicator"]},function(t,e){t.exports=flarum.core.compat.Model},function(t,e){t.exports=flarum.core.compat["models/Post"]},function(t,e){t.exports=flarum.core.compat["helpers/punctuateSeries"]},function(t,e){t.exports=flarum.core.compat["helpers/icon"]},function(t,e){t.exports=flarum.core.compat["utils/DiscussionControls"]},function(t,e,n){!function(){var e=["direction","boxSizing","width","height","overflowX","overflowY","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","borderStyle","paddingTop","paddingRight","paddingBottom","paddingLeft","fontStyle","fontVariant","fontWeight","fontStretch","fontSize","fontSizeAdjust","lineHeight","fontFamily","textAlign","textTransform","textIndent","textDecoration","letterSpacing","wordSpacing","tabSize","MozTabSize"],n="undefined"!=typeof window,o=n&&null!=window.mozInnerScreenX;function r(t,r,i){if(!n)throw new Error("textarea-caret-position#getCaretCoordinates should only be called in a browser");var s=i&&i.debug||!1;if(s){var a=document.querySelector("#input-textarea-caret-position-mirror-div");a&&a.parentNode.removeChild(a)}var u=document.createElement("div");u.id="input-textarea-caret-position-mirror-div",document.body.appendChild(u);var c=u.style,p=window.getComputedStyle?window.getComputedStyle(t):t.currentStyle,f="INPUT"===t.nodeName;c.whiteSpace="pre-wrap",f||(c.wordWrap="break-word"),c.position="absolute",s||(c.visibility="hidden"),e.forEach((function(t){f&&"lineHeight"===t?c.lineHeight=p.height:c[t]=p[t]})),o?t.scrollHeight>parseInt(p.height)&&(c.overflowY="scroll"):c.overflow="hidden",u.textContent=t.value.substring(0,r),f&&(u.textContent=u.textContent.replace(/\s/g," "));var l=document.createElement("span");l.textContent=t.value.substring(r)||".",u.appendChild(l);var d={top:l.offsetTop+parseInt(p.borderTopWidth),left:l.offsetLeft+parseInt(p.borderLeftWidth),height:parseInt(p.lineHeight)};return s?l.style.backgroundColor="#aaa":document.body.removeChild(u),d}void 0!==t.exports?t.exports=r:n&&(window.getCaretCoordinates=r)}()},function(t,e){t.exports=flarum.core.compat["components/ComposerBody"]},function(t,e){t.exports=flarum.core.compat["components/TextEditor"]},function(t,e){t.exports=flarum.core.compat["components/TextEditorButton"]},function(t,e){t.exports=flarum.core.compat["helpers/avatar"]},function(t,e){t.exports=flarum.core.compat["helpers/highlight"]},function(t,e){t.exports=flarum.core.compat["utils/KeyboardNavigatable"]},function(t,e){t.exports=flarum.core.compat.Component},function(t,e){t.exports=flarum.core.compat["components/UserPage"]},function(t,e){t.exports=flarum.core.compat["components/LinkButton"]},function(t,e){t.exports=flarum.core.compat["components/PostsUserPage"]},function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(1),i=n.n(r),s=n(10),a=n.n(s),u=n(2),c=n(3),p=n.n(c),f=n(5),l=n.n(f),d=n(11),h=n.n(d);var v=n(12),g=n.n(v),b=n(13),y=n.n(b),w=n(14),x=n.n(w),C=n(4),P=n.n(C),T=n(15),S=n.n(T);var _=n(6),j=n.n(_),B=n(16),M=n.n(B);function O(t,e,n){var o=t.user(),r="@"+(o?o.username():t.number())+"#"+t.id()+" ";e.content()||(e.props.originalContent=r);var i=e.editor.getSelectionRange()[0],s=e.editor.value().slice(0,i),a=0==s.length?0:3-s.match(/(\n{0,2})$/)[0].length;e.editor.insertAtCursor(Array(a).join("\n")+(n?"[quote"+(o?"=@"+o.username():"")+"]"+r+n.trim().replace(/\n/g,"\n ")+"[/quote]\n\n":r))}function k(t,e){var n=app.composer.component;n&&n.props.post&&n.props.post.discussion()===t.discussion()?O(t,n,e):M.a.replyAction.call(t.discussion()).then((function(n){return O(t,n,e)}))}function A(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var I=n(8),W=n.n(I),H=function(t){function e(){return t.apply(this,arguments)||this}A(e,t);var n=e.prototype;return n.view=function(){var e=this,n=W()(this.props,"post"),o=W()(this.props,"content");return this.props.className="Button PostQuoteButton",this.props.icon="fas fa-quote-left",this.props.children=app.translator.trans("flarum-mentions.forum.post.quote_button"),this.props.onclick=function(){e.hide(),k(n,o)},this.props.onmousedown=function(t){return t.stopPropagation()},t.prototype.view.call(this)},n.config=function(t){t||$(document).on("mousedown",this.hide.bind(this))},n.show=function(t,e){var n=this.$().show(),o=n.offsetParent().offset();n.css("left",t-o.left).css("top",e-o.top)},n.showStart=function(t,e){var n=this.$();this.show(t,$(window).scrollTop()+e-n.outerHeight()-5)},n.showEnd=function(t,e){var n=this.$();this.show(t-n.outerWidth(),$(window).scrollTop()+e+5)},n.hide=function(){this.$().hide()},e}(j.a);function N(){Object(o.extend)(p.a.prototype,"config",(function(t,e){var n=this.props.post;if(!(e||n.isHidden()||app.session.user&&!n.discussion().canReply())){var o=this.$(".Post-body"),r=$('<div class="Post-quoteButtonContainer"></div>'),i=function(t){setTimeout((function(){var e=function(t){var e=window.getSelection();if(e.rangeCount){var n=e.getRangeAt(0),o=n.commonAncestorContainer;if(t[0]===o||$.contains(t[0],o)){var r=$("<div>").append(n.cloneContents());return r.find("img.emoji, img.emoticon").replaceWith((function(){return this.alt})),r.find("img").replaceWith((function(){return"[img]"+this.src+"[/img]"})),r.find("a").replaceWith((function(){return"[url="+this.href+"]"+this.innerText+"[/url]"})),r.text()}}return""}(o);if(e){var i=new H({post:n,content:e});m.render(r[0],i.render());var s=window.getSelection().getRangeAt(0).getClientRects(),a=s[0];if(t.clientY<a.bottom&&t.clientX-a.right<a.left-t.clientX)i.showStart(a.left,a.top);else{var u=s[s.length-1];i.showEnd(u.right,u.bottom)}}}),1)};this.$().after(r).on("mouseup",i),"ontouchstart"in window&&document.addEventListener("selectionchange",i,!1)}}))}var E=n(17),D=n.n(E),L=n(18),R=n.n(L),q=n(19),z=n.n(q),U=n(20),J=n.n(U),X=n(21),Y=n.n(X),V=n(22),F=n.n(V),G=n(23),K=n.n(G),Q=n(24),Z=function(t){function e(){return t.apply(this,arguments)||this}A(e,t);var n=e.prototype;return n.init=function(){this.active=!1,this.index=0,this.keyWasJustPressed=!1},n.view=function(){return m("ul",{className:"Dropdown-menu MentionsDropdown"},this.props.items.map((function(t){return m("li",null,t)})))},n.show=function(t,e){this.$().show().css({left:t+"px",top:e+"px"}),this.active=!0},n.hide=function(){this.$().hide(),this.active=!1},n.navigate=function(t){var e=this;this.keyWasJustPressed=!0,this.setIndex(this.index+t,!0),clearTimeout(this.keyWasJustPressedTimeout),this.keyWasJustPressedTimeout=setTimeout((function(){return e.keyWasJustPressed=!1}),500)},n.complete=function(){this.$("li").eq(this.index).find("button").click()},n.setIndex=function(t,e){if(!this.keyWasJustPressed||e){var n=this.$(),o=n.find("li"),r=t;r<0?r=o.length-1:r>=o.length&&(r=0),this.index=r;var i=o.removeClass("active").eq(r).addClass("active");if(e){var s,a=n.scrollTop(),u=n.offset().top,c=u+n.outerHeight(),p=i.offset().top,f=p+i.outerHeight();p<u?s=a-u+p-parseInt(n.css("padding-top"),10):f>c&&(s=a-c+f+parseInt(n.css("padding-bottom"),10)),void 0!==s&&n.stop(!0).animate({scrollTop:s},100)}}},e}(n.n(Q).a);function tt(){Object(o.extend)(R.a.prototype,"config",(function(t,e){if(!e){var n,o,r,i=this,s=$('<div class="ComposerBody-mentionsDropdownContainer"></div>'),a=new Z({items:[]}),c=this.$("textarea").wrap('<div class="ComposerBody-mentionsWrapper"></div>'),p=[];this.navigator=new K.a,this.navigator.when((function(){return a.active})).onUp((function(){return a.navigate(-1)})).onDown((function(){return a.navigate(1)})).onSelect(a.complete.bind(a)).onCancel(a.hide.bind(a)).bindTo(c),c.after(s).on("click keyup input",(function(t){var e=this;if(-1===[9,13,27,40,38,37,39].indexOf(t.which)){var f=this.selectionStart;if(!(this.selectionEnd-f>0)){var l=this.value;n=0;for(var d=f-1;d>=f-30;d--){if("@"===l.substr(d,1)){n=d+1;break}}if(a.hide(),a.active=!1,n){o=l.substring(n,f).toLowerCase();var h=function(t,e,r,s){void 0===s&&(s="");var u=P()(t);return o&&(u.children[0]=F()(u.children[0],o)),m("button",{className:"PostPreview "+s,onclick:function(){return function(t){var e=t+" ",o=n-1+e.length,r=i.content();i.editor.setValue(r.substring(0,n-1)+e+r.substr(c[0].selectionStart)),i.editor.setSelectionRange(o,o),a.hide()}(e)},onmouseenter:function(){a.setIndex($(this).parent().index())}},m("span",{className:"PostPreview-content"},Y()(t),u," "," ",r))},v=function(t){return[t.username(),t.displayName()].some((function(t){return t.toLowerCase().substr(0,o.length)===o}))},g=function(){var t=[];o&&app.store.all("users").forEach((function(e){v(e)&&t.push(h(e,"@"+e.username(),"","MentionsDropdown-user"))}));var r=i.props.post,c=r&&r.discussion()||i.props.discussion;if(c&&c.posts().filter((function(t){return t&&"comment"===t.contentType()&&(!r||t.number()<r.number())})).sort((function(t,e){return e.createdAt()-t.createdAt()})).filter((function(t){var e=t.user();return e&&v(e)})).splice(0,5).forEach((function(e){var n=e.user();t.push(h(n,"@"+n.username()+"#"+e.id(),[app.translator.trans("flarum-mentions.forum.composer.reply_to_post_text",{number:e.number()})," — ",Object(u.truncate)(e.contentPlain(),200)],"MentionsDropdown-post"))})),t.length){a.props.items=t,m.render(s[0],a.render()),a.show();var p=D()(e,n),f=a.$().outerWidth(),l=a.$().outerHeight(),d=a.$().offsetParent(),g=p.left,b=p.top-e.scrollTop+15;b+l>d.height()&&(b=p.top-e.scrollTop-l-15),g+f>d.width()&&(g=d.width()-f),a.show(g,b)}else a.active=!1,a.hide()};a.active=!0,g(),a.setIndex(0),a.$().scrollTop(0),clearTimeout(r),o&&(r=setTimeout((function(){var t=o.toLowerCase();-1===p.indexOf(t)&&(app.store.find("users",{filter:{q:o},page:{limit:5}}).then((function(){a.active&&g()})),p.push(t))}),250))}}}}))}})),Object(o.extend)(z.a.prototype,"toolbarItems",(function(t){var e=this;t.add("mention",m(J.a,{onclick:function(){return e.insertAtCursor("@")},icon:"fas fa-at"},app.translator.trans("flarum-mentions.forum.composer.mention_tooltip")))}))}var et=n(7),nt=n.n(et),ot=function(t){function e(){return t.apply(this,arguments)||this}A(e,t);var n=e.prototype;return n.icon=function(){return"fas fa-reply"},n.href=function(){var t=this.props.notification,e=t.subject(),n=t.content();return app.route.discussion(e.discussion(),n&&n.replyNumber)},n.content=function(){var t=this.props.notification.fromUser();return app.translator.transChoice("flarum-mentions.forum.notifications.post_mentioned_text",1,{user:t})},n.excerpt=function(){return Object(u.truncate)(this.props.notification.subject().contentPlain(),200)},e}(nt.a),rt=function(t){function e(){return t.apply(this,arguments)||this}A(e,t);var n=e.prototype;return n.icon=function(){return"fas fa-at"},n.href=function(){var t=this.props.notification.subject();return app.route.discussion(t.discussion(),t.number())},n.content=function(){var t=this.props.notification.fromUser();return app.translator.trans("flarum-mentions.forum.notifications.user_mentioned_text",{user:t})},n.excerpt=function(){return Object(u.truncate)(this.props.notification.subject().contentPlain(),200)},e}(nt.a),it=n(25),st=n.n(it),at=n(26),ut=n.n(at),ct=n(27),pt=function(t){function e(){return t.apply(this,arguments)||this}return A(e,t),e.prototype.loadResults=function(t){return app.store.find("posts",{filter:{type:"comment",mentioned:this.user.id()},page:{offset:t,limit:this.loadLimit},sort:"-createdAt"})},e}(n.n(ct).a),ft=n(9),lt=n.n(ft);function dt(t){var e=app.store.getBy("users","username",t.getAttribute("username"));if(e)return t.setAttribute("id",e.id()),t.setAttribute("displayname",lt()(P()(e))),!0}function mt(t){var e=app.store.getById("posts",t.getAttribute("id"));if(e)return t.setAttribute("discussionid",e.discussion().id()),t.setAttribute("number",e.number()),t.setAttribute("displayname",lt()(P()(e.user()))),!0}i.a.initializers.add("flarum-mentions",(function(){Object(o.extend)(p.a.prototype,"config",(function(){var t=this.props.post.contentHtml();if(t!==this.oldPostContentHtml&&!this.isEditing()){this.oldPostContentHtml=t;var e=this.props.post,n=this.$();this.$(".UserMention, .PostMention").each((function(){m.route.call(this,this,!1,{},{attrs:{href:this.getAttribute("href")}})})),this.$(".PostMention").each((function(){var t,o=$(this),r=o.data("id"),i=$('<ul class="Dropdown-menu PostMention-preview fade"/>');n.append(i);var s=function(){return $('.PostStream-item[data-id="'+r+'"]')},a=function(){var t=s(),a=!1;if(t.length){var u=t.offset().top,c=window.pageYOffset;u>c&&u+t.height()<c+$(window).height()&&(t.addClass("pulsate"),a=!0)}if(!a){var p=function(){var t=i.outerHeight(!0),e=0;o.offset().top-t<$(window).scrollTop()+$("#header").outerHeight()?e+=o.outerHeight(!0):e-=t,i.show().css("top",o.offset().top-n.offset().top+e).css("left",o.offsetParent().offset().left-n.offset().left).css("max-width",o.offsetParent().width())},f=function(t){var n=t.discussion();m.render(i[0],[n!==e.discussion()?m("li",null,m("span",{className:"PostMention-preview-discussion"},n.title())):"",m("li",null,l.a.component({post:t}))]),p()},d=app.store.getById("posts",r);d&&d.discussion()?f(d):(m.render(i[0],h.a.component()),app.store.find("posts",r).then(f),p()),setTimeout((function(){return i.off("transitionend").addClass("in")}))}},u=function(){s().removeClass("pulsate"),i.hasClass("in")&&i.removeClass("in").one("transitionend",(function(){return i.hide()}))};o.on("touchstart",(function(t){return t.preventDefault()})),o.add(i).hover((function(){clearTimeout(t),t=setTimeout(a,250)}),(function(){clearTimeout(t),s().removeClass("pulsate"),t=setTimeout(u,250)})).on("touchend",(function(t){a(),t.stopPropagation()})),$(document).on("touchend",u)}))}})),y.a.prototype.mentionedBy=g.a.hasMany("mentionedBy"),Object(o.extend)(p.a.prototype,"footerItems",(function(t){var e=this,n=this.props.post,o=n.mentionedBy();if(o&&o.length){if(1===o.length&&o[0].number()===n.number()+1)return;var r=function(){e.$(".Post-mentionedBy-preview").removeClass("in").one("transitionend",(function(){$(this).hide()}))},i=[],s=o.sort((function(t){return t.user()===app.session.user?-1:0})).filter((function(t){var e=t.user();if(-1===i.indexOf(e))return i.push(e),!0})),a=s.length>4,u=s.slice(0,a?3:4).map((function(t){var e=t.user();return m("a",{href:app.route.post(t),config:m.route,onclick:r,"data-number":t.number()},app.session.user===e?app.translator.trans("flarum-mentions.forum.post.you_text"):P()(e))}));if(a){var c=s.length-u.length;u.push(app.translator.transChoice("flarum-mentions.forum.post.others_text",c,{count:c}))}t.add("replies",m("div",{className:"Post-mentionedBy",config:function(t,e){if(!e){var n,i=$(t),s=$('<ul class="Dropdown-menu Post-mentionedBy-preview fade"/>');i.append(s),i.children().hover((function(){clearTimeout(n),n=setTimeout((function(){!s.hasClass("in")&&s.is(":visible")||(m.render(s[0],o.map((function(t){return m("li",{"data-number":t.number()},l.a.component({post:t,onclick:r}))}))),s.show(),setTimeout((function(){return s.off("transitionend").addClass("in")})))}),500)}),(function(){clearTimeout(n),n=setTimeout(r,250)})),i.find(".Post-mentionedBy-summary a").hover((function(){s.find('[data-number="'+$(this).data("number")+'"]').addClass("active")}),(function(){s.find("[data-number]").removeClass("active")}))}}},m("span",{className:"Post-mentionedBy-summary"},S()("fas fa-reply"),app.translator.transChoice("flarum-mentions.forum.post.mentioned_by"+(s[0].user()===app.session.user?"_self":"")+"_text",u.length,{count:u.length,users:x()(u)}))))}})),Object(o.extend)(p.a.prototype,"actionItems",(function(t){var e=this.props.post;e.isHidden()||app.session.user&&!e.discussion().canReply()||t.add("reply",j.a.component({className:"Button Button--link",children:app.translator.trans("flarum-mentions.forum.post.reply_link"),onclick:function(){return k(e)}}))})),N(),tt(),i.a.notificationComponents.postMentioned=ot,i.a.notificationComponents.userMentioned=rt,Object(o.extend)(a.a.prototype,"notificationTypes",(function(t){t.add("postMentioned",{name:"postMentioned",icon:"fas fa-reply",label:i.a.translator.trans("flarum-mentions.forum.settings.notify_post_mentioned_label")}),t.add("userMentioned",{name:"userMentioned",icon:"fas fa-at",label:i.a.translator.trans("flarum-mentions.forum.settings.notify_user_mentioned_label")})})),i.a.routes["user.mentions"]={path:"/u/:username/mentions",component:pt.component()},Object(o.extend)(st.a.prototype,"navItems",(function(t){var e=this.user;t.add("mentions",ut.a.component({href:i.a.route("user.mentions",{username:e.username()}),name:"mentions",children:[i.a.translator.trans("flarum-mentions.forum.user.mentions_link")],icon:"fas fa-at"}),80)})),u.getPlainContent.removeSelectors.push("a.PostMention")})),n.d(e,"filterUserMentions",(function(){return dt})),n.d(e,"filterPostMentions",(function(){return mt}))}]);
//# sourceMappingURL=forum.js.map