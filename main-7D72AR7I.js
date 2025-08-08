import{a as Je}from"./chunk-A33N7LZ2.js";import{$a as Kr,A as K,Ab as et,B as we,Bb as ot,C as so,Cb as rt,D as Sr,Da as Oe,Db as tt,E as Br,Ea as H,Eb as it,F as Mr,Fb as go,G as P,Ga as zr,Gb as nt,Ha as Ar,Hb as at,I as co,Ia as Pr,Ib as lt,J as Tr,Ja as Ie,Jb as st,Ka as Vo,Kb as ct,L as $r,La as Vr,Ma as he,Na as Hr,Pa as Or,Qa as Wr,R as Fr,Ra as Xe,Sa as Nr,Ta as Qr,U as uo,Ua as jr,V as Ve,Xa as qr,Za as mo,_a as We,a as fr,ab as Gr,b as A,bb as re,c as _e,cb as Ur,d as D,e as be,f as Fe,fa as Rr,g as br,gb as Zr,ha as Er,ia as zo,ib as Yr,j as M,k as Ro,ka as V,l as hr,m as vr,o as yr,oa as Ao,p as kr,pa as Po,q as Eo,r as xr,rb as po,s as _r,sa as Lr,ta as Dr,u as Cr,v as Ce,vb as Se,w as wr,wb as Ne,x as Ir,xb as Re,yb as Xr,z as lo,za as He,zb as Jr}from"./chunk-N54YMLIK.js";import{c as Pe,d as ce,f as q,g as Ye,h as de,i as Lo,k as Do}from"./chunk-F2X3VGZZ.js";import{$b as Ae,A as Go,Ab as T,E as Uo,Eb as I,Fb as d,Gb as cr,Hb as dr,Ib as ao,K as Zo,Kb as E,La as $o,Lb as B,Ma as fe,Mb as v,N as Yo,Nb as y,O as io,Oa as s,P as F,Q as le,Qb as Ue,Ra as ir,Rb as b,S as Xo,Sa as qe,Sb as X,Ta as Q,Tb as Ze,U as De,Ua as nr,V as k,Vb as J,W as Jo,Wb as ee,Xb as oe,Yb as j,Za as C,Zb as Te,_a as se,_b as L,a as h,aa as g,b as _,ba as f,bb as ne,bc as ur,ca as ye,da as no,db as m,dc as mr,ea as N,f as Qo,ga as er,hb as ar,hc as pr,ia as or,ic as gr,j as je,k as jo,ka as U,kb as x,la as To,lb as a,lc as $e,mb as lr,nb as sr,o as qo,oa as Me,ob as Z,pb as Y,qa as ge,qb as ze,r as Ko,rb as Fo,sb as Ke,tb as Ge,tc as R,ub as l,uc as ke,va as rr,vb as c,wb as p,wc as S,xb as O,xc as xe,ya as tr,yb as W,z as Le,zb as ae}from"./chunk-6ZUVEJ7B.js";var pn="@",gn=(()=>{class e{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=k(er);loadingSchedulerFn=k(fn,{optional:!0});_engine;constructor(o,r,t,n,u){this.doc=o,this.delegate=r,this.zone=t,this.animationType=n,this.moduleImpl=u}ngOnDestroy(){this._engine?.flush()}loadImpl(){let o=()=>this.moduleImpl??import("./chunk-IC4ZYSHG.js").then(t=>t),r;return this.loadingSchedulerFn?r=this.loadingSchedulerFn(o):r=o(),r.catch(t=>{throw new Yo(5300,!1)}).then(({\u0275createEngine:t,\u0275AnimationRendererFactory:n})=>{this._engine=t(this.animationType,this.doc);let u=new n(this.delegate,this._engine,this.zone);return this.delegate=u,u})}createRenderer(o,r){let t=this.delegate.createRenderer(o,r);if(t.\u0275type===0)return t;typeof t.throwOnSyntheticProps=="boolean"&&(t.throwOnSyntheticProps=!1);let n=new Ho(t);return r?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(u=>{let w=u.createRenderer(o,r);n.use(w),this.scheduler??=this.injector.get(or,null,{optional:!0}),this.scheduler?.notify(10)}).catch(u=>{n.use(t)}),n}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(o){this._engine?.flush(),this.delegate.componentReplaced?.(o)}static \u0275fac=function(r){nr()};static \u0275prov=F({token:e,factory:e.\u0275fac})}return e})(),Ho=class{delegate;replay=[];\u0275type=1;constructor(i){this.delegate=i}use(i){if(this.delegate=i,this.replay!==null){for(let o of this.replay)o(i);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(i,o){return this.delegate.createElement(i,o)}createComment(i){return this.delegate.createComment(i)}createText(i){return this.delegate.createText(i)}get destroyNode(){return this.delegate.destroyNode}appendChild(i,o){this.delegate.appendChild(i,o)}insertBefore(i,o,r,t){this.delegate.insertBefore(i,o,r,t)}removeChild(i,o,r){this.delegate.removeChild(i,o,r)}selectRootElement(i,o){return this.delegate.selectRootElement(i,o)}parentNode(i){return this.delegate.parentNode(i)}nextSibling(i){return this.delegate.nextSibling(i)}setAttribute(i,o,r,t){this.delegate.setAttribute(i,o,r,t)}removeAttribute(i,o,r){this.delegate.removeAttribute(i,o,r)}addClass(i,o){this.delegate.addClass(i,o)}removeClass(i,o){this.delegate.removeClass(i,o)}setStyle(i,o,r,t){this.delegate.setStyle(i,o,r,t)}removeStyle(i,o,r){this.delegate.removeStyle(i,o,r)}setProperty(i,o,r){this.shouldReplay(o)&&this.replay.push(t=>t.setProperty(i,o,r)),this.delegate.setProperty(i,o,r)}setValue(i,o){this.delegate.setValue(i,o)}listen(i,o,r,t){return this.shouldReplay(o)&&this.replay.push(n=>n.listen(i,o,r,t)),this.delegate.listen(i,o,r,t)}shouldReplay(i){return this.replay!==null&&i.startsWith(pn)}},fn=new Xo("");function dt(e="animations"){return tr("NgAsyncAnimations"),Jo([{provide:ir,useFactory:(i,o,r)=>new gn(i,o,r,e),deps:[fr,hr,To]},{provide:rr,useValue:e==="noop"?"NoopAnimations":"BrowserAnimations"}])}var z=class e{_config={primary:"indigo",surface:null,darkTheme:!1,menuMode:"static",menuTheme:"light",topbarTheme:"white",menuProfilePosition:"start"};_state={staticMenuDesktopInactive:!1,overlayMenuActive:!1,configSidebarVisible:!1,staticMenuMobileActive:!1,menuHoverActive:!1,rightMenuActive:!1,topbarMenuActive:!1,sidebarActive:!1,anchored:!1,activeMenuItem:null,overlaySubmenuActive:!1,menuProfileActive:!1};layoutConfig=ge(this._config);layoutState=ge(this._state);configUpdate=new je;overlayOpen=new je;menuSource=new je;resetSource=new je;menuSource$=this.menuSource.asObservable();resetSource$=this.resetSource.asObservable();configUpdate$=this.configUpdate.asObservable();overlayOpen$=this.overlayOpen.asObservable();isSidebarActive=S(()=>this.layoutState().overlayMenuActive||this.layoutState().staticMenuMobileActive);isDarkTheme=S(()=>this.layoutConfig().darkTheme);isOverlay=S(()=>this.layoutConfig().menuMode==="overlay");isSlim=S(()=>this.layoutConfig().menuMode==="slim");isSlimPlus=S(()=>this.layoutConfig().menuMode==="slim-plus");isHorizontal=S(()=>this.layoutConfig().menuMode==="horizontal");transitionComplete=ge(!1);isSidebarStateChanged=S(()=>{let i=this.layoutConfig();return i.menuMode==="horizontal"||i.menuMode==="slim"||i.menuMode==="slim-plus"});initialized=!1;constructor(){xe(()=>{this.layoutConfig()&&this.onConfigUpdate()}),xe(()=>{let i=this.layoutConfig();if(!this.initialized||!i){this.initialized=!0;return}this.handleDarkModeTransition(i)}),xe(()=>{this.isSidebarStateChanged()&&this.reset()})}handleDarkModeTransition(i){document.startViewTransition?this.startViewTransition(i):(this.toggleDarkMode(i),this.onTransitionEnd())}startViewTransition(i){document.startViewTransition(()=>{this.toggleDarkMode(i)}).ready.then(()=>{this.onTransitionEnd()}).catch(()=>{})}toggleDarkMode(i){(i||this.layoutConfig()).darkTheme?document.documentElement.classList.add("app-dark"):document.documentElement.classList.remove("app-dark")}onTransitionEnd(){this.transitionComplete.set(!0),setTimeout(()=>{this.transitionComplete.set(!1)})}onMenuToggle(){this.isOverlay()&&(this.layoutState.update(i=>_(h({},i),{overlayMenuActive:!this.layoutState().overlayMenuActive})),this.layoutState().overlayMenuActive&&this.overlayOpen.next(null)),this.isDesktop()?this.layoutState.update(i=>_(h({},i),{staticMenuDesktopInactive:!this.layoutState().staticMenuDesktopInactive})):(this.layoutState.update(i=>_(h({},i),{staticMenuMobileActive:!this.layoutState().staticMenuMobileActive})),this.layoutState().staticMenuMobileActive&&this.overlayOpen.next(null))}onMenuProfileToggle(){this.layoutState.update(i=>_(h({},i),{menuProfileActive:!i.menuProfileActive}))}openRightMenu(){this.layoutState.update(i=>_(h({},i),{rightMenuActive:!0}))}isDesktop(){return window.innerWidth>991}isMobile(){return!this.isDesktop()}onConfigUpdate(){this._config=h({},this.layoutConfig()),this.configUpdate.next(this.layoutConfig())}onMenuStateChange(i){this.menuSource.next(i)}reset(){this.resetSource.next(!0)}onOverlaySubmenuOpen(){this.overlayOpen.next(null)}hideConfigSidebar(){this.layoutState.update(i=>_(h({},i),{configSidebarVisible:!1}))}static \u0275fac=function(o){return new(o||e)};static \u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"})};var mt=(()=>{class e extends Nr{static \u0275fac=(()=>{let o;return function(t){return(o||(o=N(e)))(t||e)}})();static \u0275cmp=C({type:e,selectors:[["BarsIcon"]],features:[ne],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M13.3226 3.6129H0.677419C0.497757 3.6129 0.325452 3.54152 0.198411 3.41448C0.0713707 3.28744 0 3.11514 0 2.93548C0 2.75581 0.0713707 2.58351 0.198411 2.45647C0.325452 2.32943 0.497757 2.25806 0.677419 2.25806H13.3226C13.5022 2.25806 13.6745 2.32943 13.8016 2.45647C13.9286 2.58351 14 2.75581 14 2.93548C14 3.11514 13.9286 3.28744 13.8016 3.41448C13.6745 3.54152 13.5022 3.6129 13.3226 3.6129ZM13.3226 7.67741H0.677419C0.497757 7.67741 0.325452 7.60604 0.198411 7.479C0.0713707 7.35196 0 7.17965 0 6.99999C0 6.82033 0.0713707 6.64802 0.198411 6.52098C0.325452 6.39394 0.497757 6.32257 0.677419 6.32257H13.3226C13.5022 6.32257 13.6745 6.39394 13.8016 6.52098C13.9286 6.64802 14 6.82033 14 6.99999C14 7.17965 13.9286 7.35196 13.8016 7.479C13.6745 7.60604 13.5022 7.67741 13.3226 7.67741ZM0.677419 11.7419H13.3226C13.5022 11.7419 13.6745 11.6706 13.8016 11.5435C13.9286 11.4165 14 11.2442 14 11.0645C14 10.8848 13.9286 10.7125 13.8016 10.5855C13.6745 10.4585 13.5022 10.3871 13.3226 10.3871H0.677419C0.497757 10.3871 0.325452 10.4585 0.198411 10.5855C0.0713707 10.7125 0 10.8848 0 11.0645C0 11.2442 0.0713707 11.4165 0.198411 11.5435C0.325452 11.6706 0.497757 11.7419 0.677419 11.7419Z","fill","currentColor"]],template:function(r,t){r&1&&(ye(),l(0,"svg",0),p(1,"path",1),c()),r&2&&(Y(t.getClassNames()),x("aria-label",t.ariaLabel)("aria-hidden",t.ariaHidden)("role",t.role))},encapsulation:2})}return e})();var bn=["app-footer",""],fo=class e{Year=new Date().getFullYear();_layoutService=k(z);static \u0275fac=function(o){return new(o||e)};static \u0275cmp=C({type:e,selectors:[["","app-footer",""]],attrs:bn,decls:4,vars:2,consts:[[1,"layout-footer"],[1,"h-10","w-auto",3,"src"],["href","#","target","_blank","rel","noopener noreferrer",1,"text-primary","font-bold","hover:underline"]],template:function(o,r){o&1&&(l(0,"div",0),p(1,"img",1),l(2,"a",2),b(3),c()()),o&2&&(s(),ao("src",r._layoutService.isDarkTheme()?"assets/images/Logo-Quanta-Blanco.png":"assets/images/Logo-Quanta-principal.png",fe),s(2),Ze("QUANTA ",r.Year," "))},dependencies:[re],encapsulation:2})};var pt=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=se({type:e});static \u0275inj=le({})}return e})();var hn=["menubar"],vn=e=>({"max-height":e,overflow:"auto"}),yn=(e,i)=>({"p-megamenu-root-list":e,"p-megamenu-submenu":i}),bt=e=>({"p-megamenu-item-link":!0,"p-disabled":e}),kn=()=>({exact:!1}),xn=e=>({$implicit:e});function _n(e,i){if(e&1&&(l(0,"li",8),b(1),c()),e&2){let o=d(2);Z(o.getItemProp(o.submenu,"style")),a("ngClass",o.getSubmenuHeaderClass(o.submenu)),s(),Ze(" ",o.getItemLabel(o.submenu)," ")}}function Cn(e,i){if(e&1&&p(0,"li",11),e&2){let o=d().$implicit,r=d(2);Z(r.getItemProp(o,"style")),a("ngClass",r.getSeparatorItemClass(o)),x("id",r.getItemId(o))("data-pc-section","separator")}}function wn(e,i){if(e&1&&p(0,"span",22),e&2){let o=d(4).$implicit,r=d(2);a("ngClass",r.getItemProp(o,"icon"))("ngStyle",r.getItemProp(o,"iconStyle")),x("data-pc-section","icon")("tabindex",-1)}}function In(e,i){if(e&1&&(l(0,"span",23),b(1),c()),e&2){let o=d(4).$implicit,r=d(2);x("data-pc-section","label"),s(),Ze(" ",r.getItemLabel(o)," ")}}function Sn(e,i){if(e&1&&p(0,"span",24),e&2){let o=d(4).$implicit,r=d(2);a("innerHTML",r.getItemLabel(o),$o),x("data-pc-section","label")}}function Bn(e,i){if(e&1&&p(0,"p-badge",25),e&2){let o=d(4).$implicit,r=d(2);a("styleClass",r.getItemProp(o,"badgeStyleClass"))("value",r.getItemProp(o,"badge"))}}function Mn(e,i){e&1&&p(0,"AngleDownIcon",27),e&2&&(a("ngClass","p-megamenu-submenu-icon"),x("data-pc-section","submenuicon")("aria-hidden",!0))}function Tn(e,i){e&1&&p(0,"AngleRightIcon",27),e&2&&(a("ngClass","p-megamenu-submenu-icon"),x("data-pc-section","submenuicon")("aria-hidden",!0))}function $n(e,i){if(e&1&&m(0,Tn,1,3,"AngleRightIcon",28),e&2){let o=d(8);a("ngIf",o.orientation==="vertical")}}function Fn(e,i){if(e&1&&(O(0),m(1,Mn,1,3,"AngleDownIcon",27)(2,$n,1,1,"AngleRightIcon",27),W()),e&2){let o=d(7);s(),ze(o.orientation==="horizontal"||o.mobileActive?1:2)}}function Rn(e,i){}function En(e,i){e&1&&m(0,Rn,0,0,"ng-template",29),e&2&&a("data-pc-section","submenuicon")("aria-hidden",!0)}function Ln(e,i){if(e&1&&(O(0),m(1,Fn,3,1,"ng-container",14)(2,En,1,2,null,26),W()),e&2){let o=d(6);s(),a("ngIf",!o.megaMenu.submenuIconTemplate&&!o.megaMenu._submenuIconTemplate),s(),a("ngTemplateOutlet",o.megaMenu.submenuIconTemplate||o.megaMenu._submenuIconTemplate)}}function Dn(e,i){if(e&1&&(l(0,"a",18),m(1,wn,1,4,"span",19)(2,In,2,2,"span",20)(3,Sn,1,2,"ng-template",null,2,$e)(5,Bn,1,2,"p-badge",21)(6,Ln,3,2,"ng-container",14),c()),e&2){let o=Ue(4),r=d(3).$implicit,t=d(2);a("target",t.getItemProp(r,"target"))("ngClass",L(11,bt,t.getItemProp(r,"disabled"))),x("href",t.getItemProp(r,"url"),fe)("data-automationid",t.getItemProp(r,"automationId"))("data-pc-section","action")("tabindex",-1),s(),a("ngIf",t.getItemProp(r,"icon")),s(),a("ngIf",t.getItemProp(r,"escape"))("ngIfElse",o),s(3),a("ngIf",t.getItemProp(r,"badge")),s(),a("ngIf",t.isItemGroup(r))}}function zn(e,i){if(e&1&&p(0,"span",22),e&2){let o=d(4).$implicit,r=d(2);a("ngClass",r.getItemProp(o,"icon"))("ngStyle",r.getItemProp(o,"iconStyle")),x("data-pc-section","icon")("tabindex",-1)}}function An(e,i){if(e&1&&(l(0,"span",23),b(1),c()),e&2){let o=d(4).$implicit,r=d(2);s(),X(r.getItemLabel(o))}}function Pn(e,i){if(e&1&&p(0,"span",24),e&2){let o=d(4).$implicit,r=d(2);a("innerHTML",r.getItemLabel(o),$o),x("data-pc-section","label")}}function Vn(e,i){if(e&1&&p(0,"p-badge",25),e&2){let o=d(4).$implicit,r=d(2);a("styleClass",r.getItemProp(o,"badgeStyleClass"))("value",r.getItemProp(o,"badge"))}}function Hn(e,i){e&1&&p(0,"AngleDownIcon",32),e&2&&(a("styleClass","p-megamenu-submenu-icon"),x("data-pc-section","submenuicon")("aria-hidden",!0))}function On(e,i){e&1&&p(0,"AngleRightIcon",32),e&2&&(a("styleClass","p-megamenu-submenu-icon"),x("data-pc-section","submenuicon")("aria-hidden",!0))}function Wn(e,i){if(e&1&&(O(0),m(1,Hn,1,3,"AngleDownIcon",31)(2,On,1,3,"AngleRightIcon",31),W()),e&2){let o=d(7);s(),a("ngIf",o.orientation==="horizontal"),s(),a("ngIf",o.orientation==="vertical")}}function Nn(e,i){}function Qn(e,i){e&1&&m(0,Nn,0,0,"ng-template",29),e&2&&a("data-pc-section","submenuicon")("aria-hidden",!0)}function jn(e,i){if(e&1&&(O(0),m(1,Wn,3,2,"ng-container",14)(2,Qn,1,2,null,26),W()),e&2){let o=d(6);s(),a("ngIf",!o.megaMenu.submenuIconTemplate&&!o.megaMenu._submenuIconTemplate),s(),a("ngTemplateOutlet",o.megaMenu.submenuIconTemplate||o.megaMenu._submenuIconTemplate)}}function qn(e,i){if(e&1&&(l(0,"a",30),m(1,zn,1,4,"span",19)(2,An,2,1,"span",20)(3,Pn,1,2,"ng-template",null,3,$e)(5,Vn,1,2,"p-badge",21)(6,jn,3,2,"ng-container",14),c()),e&2){let o=Ue(4),r=d(3).$implicit,t=d(2);a("routerLink",t.getItemProp(r,"routerLink"))("queryParams",t.getItemProp(r,"queryParams"))("routerLinkActive","p-megamenu-item-link-active")("routerLinkActiveOptions",t.getItemProp(r,"routerLinkActiveOptions")||Te(20,kn))("target",t.getItemProp(r,"target"))("ngClass",L(21,bt,t.getItemProp(r,"disabled")))("fragment",t.getItemProp(r,"fragment"))("queryParamsHandling",t.getItemProp(r,"queryParamsHandling"))("preserveFragment",t.getItemProp(r,"preserveFragment"))("skipLocationChange",t.getItemProp(r,"skipLocationChange"))("replaceUrl",t.getItemProp(r,"replaceUrl"))("state",t.getItemProp(r,"state")),x("data-automationid",t.getItemProp(r,"automationId"))("tabindex",-1)("data-pc-section","action"),s(),a("ngIf",t.getItemProp(r,"icon")),s(),a("ngIf",t.getItemProp(r,"escape"))("ngIfElse",o),s(3),a("ngIf",t.getItemProp(r,"badge")),s(),a("ngIf",t.isItemGroup(r))}}function Kn(e,i){if(e&1&&(O(0),m(1,Dn,7,13,"a",16)(2,qn,7,23,"a",17),W()),e&2){let o=d(2).$implicit,r=d(2);s(),a("ngIf",!r.getItemProp(o,"routerLink")),s(),a("ngIf",r.getItemProp(o,"routerLink"))}}function Gn(e,i){}function Un(e,i){e&1&&m(0,Gn,0,0,"ng-template")}function Zn(e,i){if(e&1&&(O(0),m(1,Un,1,0,null,33),W()),e&2){let o=d(2).$implicit,r=d(2);s(),a("ngTemplateOutlet",r.itemTemplate)("ngTemplateOutletContext",L(2,xn,o.item))}}function Yn(e,i){if(e&1){let o=T();l(0,"p-megamenu-sub",38),I("itemClick",function(t){g(o);let n=d(6);return f(n.itemClick.emit(t))})("itemMouseEnter",function(t){g(o);let n=d(6);return f(n.onItemMouseEnter(t))}),c()}if(e&2){let o=i.$implicit,r=d(6);a("id",r.getSubListId(o))("submenu",o)("items",o.items)("itemTemplate",r.itemTemplate)("mobileActive",r.mobileActive)("menuId",r.menuId)("focusedItemId",r.focusedItemId)("level",r.level+1)("root",!1)}}function Xn(e,i){if(e&1&&(l(0,"div",27),m(1,Yn,1,9,"p-megamenu-sub",37),c()),e&2){let o=i.$implicit,r=d(3).$implicit,t=d(2);a("ngClass",t.getColumnClass(r)),s(),a("ngForOf",o)}}function Jn(e,i){if(e&1&&(l(0,"div",34)(1,"div",35),m(2,Xn,2,2,"div",36),c()()),e&2){let o=d(2).$implicit;x("data-pc-section","panel"),s(),x("data-pc-section","grid"),s(),a("ngForOf",o.items)}}function ea(e,i){if(e&1){let o=T();l(0,"li",12,1)(2,"div",13),I("click",function(t){g(o);let n=d().$implicit,u=d(2);return f(u.onItemClick(t,n))})("mouseenter",function(t){g(o);let n=d().$implicit,u=d(2);return f(u.onItemMouseEnter({$event:t,processedItem:n}))}),m(3,Kn,3,2,"ng-container",14)(4,Zn,2,4,"ng-container",14),c(),m(5,Jn,3,3,"div",15),c()}if(e&2){let o=d(),r=o.$implicit,t=o.index,n=d(2);Y(n.getItemProp(r,"styleClass")),a("ngStyle",n.getItemProp(r,"style"))("ngClass",n.getItemClass(r))("tooltipOptions",n.getItemProp(r,"tooltipOptions")),x("id",n.getItemId(r))("data-pc-section","menuitem")("data-p-highlight",n.isItemActive(r))("data-p-focused",n.isItemFocused(r))("data-p-disabled",n.isItemDisabled(r))("aria-label",n.getItemLabel(r))("aria-disabled",n.isItemDisabled(r)||void 0)("aria-haspopup",n.isItemGroup(r)&&!n.getItemProp(r,"to")?"menu":void 0)("aria-expanded",n.isItemGroup(r)?n.isItemActive(r):void 0)("aria-level",n.level+1)("aria-setsize",n.getAriaSetSize())("aria-posinset",n.getAriaPosInset(t)),s(2),x("data-pc-section","content"),s(),a("ngIf",!n.itemTemplate),s(),a("ngIf",n.itemTemplate),s(),a("ngIf",n.isItemVisible(r)&&n.isItemGroup(r))}}function oa(e,i){if(e&1&&m(0,Cn,1,5,"li",9)(1,ea,6,21,"li",10),e&2){let o=i.$implicit,r=d(2);a("ngIf",r.isItemVisible(o)&&r.getItemProp(o,"separator")),s(),a("ngIf",r.isItemVisible(o)&&!r.getItemProp(o,"separator"))}}function ra(e,i){if(e&1){let o=T();l(0,"ul",5,0),I("keydown",function(t){g(o);let n=d();return f(n.menuKeydown.emit(t))})("focus",function(t){g(o);let n=d();return f(n.menuFocus.emit(t))})("blur",function(t){g(o);let n=d();return f(n.menuBlur.emit(t))}),m(2,_n,2,4,"li",6)(3,oa,2,2,"ng-template",7),c()}if(e&2){let o=d();Z(L(11,vn,o.scrollHeight)),a("ngClass",Ae(13,yn,o.root,!o.root))("tabindex",o.tabindex),x("role",o.root?"menubar":"menu")("id",o.id)("aria-orientation",o.orientation)("aria-activedescendant",o.focusedItemId)("data-pc-section",o.root?"root":"submenu"),s(2),a("ngIf",o.submenu),s(),a("ngForOf",o.items)}}var ta=["start"],ia=["end"],na=["menuicon"],aa=["submenuicon"],la=["item"],sa=["button"],ca=["buttonicon"],da=["menubutton"],ua=["rootmenu"],ma=["container"],pa=e=>({flexDirection:e}),ga=(e,i,o,r)=>({"p-megamenu p-component":!0,"p-megamenu-mobile":e,"p-megamenu-mobile-active":i,"p-megamenu-horizontal":o,"p-megamenu-vertical":r});function fa(e,i){e&1&&ae(0)}function ba(e,i){if(e&1&&(l(0,"div",9),m(1,fa,1,0,"ng-container",6),c()),e&2){let o=d();s(),a("ngTemplateOutlet",o.startTemplate||o._startTemplate)}}function ha(e,i){e&1&&p(0,"BarsIcon")}function va(e,i){}function ya(e,i){e&1&&m(0,va,0,0,"ng-template")}function ka(e,i){if(e&1){let o=T();l(0,"a",11,2),I("click",function(t){g(o);let n=d(2);return f(n.menuButtonClick(t))})("keydown",function(t){g(o);let n=d(2);return f(n.menuButtonKeydown(t))}),m(2,ha,1,0,"BarsIcon",5)(3,ya,1,0,null,6),c()}if(e&2){let o=d(2);x("aria-haspopup",!!(o.model.length&&o.model.length>0))("aria-expanded",o.mobileActive)("aria-controls",o.id)("aria-label",o.config.translation.aria.navigation),s(2),a("ngIf",!o.buttonIconTemplate&&!o._buttonIconTemplate),s(),a("ngTemplateOutlet",o.buttonIconTemplate||o._buttonIconTemplate)}}function xa(e,i){if(e&1&&(O(0),m(1,ka,4,6,"a",10),W()),e&2){let o=d();s(),a("ngIf",o.model&&o.model.length>0)}}function _a(e,i){e&1&&ae(0)}function Ca(e,i){e&1&&ae(0)}function wa(e,i){if(e&1&&(l(0,"div",12),m(1,Ca,1,0,"ng-container",6),c()),e&2){let o=d();s(),a("ngTemplateOutlet",o.endTemplate||o._endTemplate)}}var Ia=({dt:e})=>`
.p-megamenu {
    position: relative;
    display: flex;
    align-items: center;
    background: ${e("megamenu.background")};
    border: 1px solid ${e("megamenu.border.color")};
    border-radius: ${e("megamenu.border.radius")};
    color: ${e("megamenu.color")};
    gap: ${e("megamenu.gap")};
}

.p-megamenu-start,
.p-megamenu-end {
    display: flex;
    align-items: center;
}

.p-megamenu-root-list {
    margin: 0;
    padding: 0;
    list-style: none;
    outline: 0 none;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: ${e("megamenu.gap")};
}

.p-megamenu-root-list > .p-megamenu-item > .p-menumega-item-content {
    border-radius: ${e("megamenu.base.item.border.radius")};
}

.p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content > .p-megamenu-item-link {
    padding: ${e("megamenu.base.item.padding")};
}

.p-megamenu-item-content {
    transition: background ${e("megamenu.transition.duration")}, color ${e("megamenu.transition.duration")};
    border-radius: ${e("megamenu.item.border.radius")};
    color: ${e("megamenu.item.color")};
}

.p-megamenu-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: ${e("megamenu.item.padding")};
    gap: ${e("megamenu.item.gap")};
    user-select: none;
    outline: 0 none;
}

.p-megamenu-item-label {
    line-height: 1;
}

.p-megamenu-item-icon {
    color: ${e("megamenu.item.icon.color")};
}

.p-megamenu-submenu-icon {
    color: ${e("megamenu.submenu.icon.color")};
    font-size: ${e("megamenu.submenu.icon.size")};
    width: ${e("megamenu.submenu.icon.size")};
    height: ${e("megamenu.submenu.icon.size")};
}

.p-megamenu-item.p-focus > .p-megamenu-item-content {
    color: ${e("megamenu.item.focus.color")};
    background: ${e("megamenu.item.focus.background")};
}

.p-megamenu-item.p-focus > .p-megamenu-item-content .p-megamenu-item-icon {
    color: ${e("megamenu.item.icon.focus.color")};
}

.p-megamenu-item.p-focus > .p-megamenu-item-content .p-megamenu-submenu-icon {
    color: ${e("megamenu.submenu.icon.focus.color")};
}

.p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover {
    color: ${e("megamenu.item.focus.color")};
    background: ${e("megamenu.item.focus.background")};
}

.p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover .p-megamenu-item-icon {
    color: ${e("megamenu.item.icon.focus.color")};
}

.p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover .p-megamenu-submenu-icon {
    color: ${e("megamenu.submenu.icon.focus.color")};
}

.p-megamenu-item-active > .p-megamenu-item-content {
    color: ${e("megamenu.item.active.color")};
    background: ${e("megamenu.item.active.background")};
}

.p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-item-icon {
    color: ${e("megamenu.item.icon.active.color")};
}

.p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-submenu-icon {
    color: ${e("megamenu.submenu.icon.active.color")};
}

.p-megamenu-overlay {
    display: none;
    position: absolute;
    width: auto;
    z-index: 1;
    left: 0;
    min-width: 100%;
    padding: ${e("megamenu.overlay.padding")};
    background: ${e("megamenu.overlay.background")};
    color: ${e("megamenu.overlay.color")};
    border: 1px solid ${e("megamenu.overlay.border.color")};
    border-radius: ${e("megamenu.overlay.border.radius")};
    box-shadow: ${e("megamenu.overlay.shadow")};
}

.p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-overlay {
    display: block;
}

.p-megamenu-submenu {
    margin: 0;
    list-style: none;
    padding: ${e("megamenu.submenu.padding")};
    min-width: 12.5rem;
    display: flex;
    flex-direction: column;
    gap: ${e("megamenu.submenu.gap")}
}

.p-megamenu-submenu-label {
    padding: ${e("megamenu.submenu.label.padding")};
    color: ${e("megamenu.submenu.label.color")};
    font-weight: ${e("megamenu.submenu.label.font.weight")};
    background: ${e("megamenu.submenu.label.background")};
}

.p-megamenu-separator {
    border-top: 1px solid ${e("megamenu.separator.border.color")};
}

.p-megamenu-horizontal {
    align-items: center;
    padding: ${e("megamenu.horizontal.orientation.padding")};
}

.p-megamenu-horizontal .p-megamenu-root-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: ${e("megamenu.horizontal.orientation.gap")};
}

.p-megamenu-horizontal .p-megamenu-end {
    margin-left: auto;
    align-self: center;
}

.p-megamenu-vertical {
    display: inline-flex;
    min-width: 12.5rem;
    flex-direction: column;
    align-items: stretch;
    padding: ${e("megamenu.vertical.orientation.padding")};
}

.p-megamenu-vertical .p-megamenu-root-list {
    align-items: stretch;
    flex-direction: column;
    gap: ${e("megamenu.vertical.orientation.gap")};
}

.p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-overlay {
    left: 100%;
    top: 0;
}

.p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item-active >.p-megamenu-overlay:dir(rtl) {
    left: auto;
    right: 100%;
}

.p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon {
    margin-left: auto;
}

.p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
    transform: rotate(180deg);
}

.p-megamenu-grid {
    display: flex;
}

.p-megamenu-col-2,
.p-megamenu-col-3,
.p-megamenu-col-4,
.p-megamenu-col-6,
.p-megamenu-col-12 {
    flex: 0 0 auto;
    padding: ${e("megamenu.overlay.gap")};
}

.p-megamenu-col-2 {
    width: 16.6667%;
}

.p-megamenu-col-3 {
    width: 25%;
}

.p-megamenu-col-4 {
    width: 33.3333%;
}

.p-megamenu-col-6 {
    width: 50%;
}

.p-megamenu-col-12 {
    width: 100%;
}

.p-megamenu-button {
    display: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: ${e("megamenu.mobile.button.size")};
    height: ${e("megamenu.mobile.button.size")};
    position: relative;
    color: ${e("megamenu.mobile.button.color")};
    border: 0 none;
    background: transparent;
    border-radius: ${e("megamenu.mobile.button.border.radius")};
    transition: background ${e("megamenu.transition.duration")}, color ${e("megamenu.transition.duration")}, outline-color ${e("megamenu.transition.duration")}, ox-shadow ${e("megamenu.transition.duration")};
    outline-color: transparent;
}

.p-megamenu-button:hover {
    color: ${e("megamenu.mobile.button.hover.color")};
    background: ${e("megamenu.mobile.button.hover.background")};
}

.p-megamenu-button:focus-visible {
    box-shadow: ${e("megamenu.mobile.button.focus.ring.shadow")};
    outline: ${e("megamenu.mobile.button.focus.ring.width")} ${e("megamenu.mobile.button.focus.ring.style")} ${e("megamenu.mobile.button.focus.ring.color")};
    outline-offset: ${e("megamenu.mobile.button.focus.ring.offset")};
}

.p-megamenu-mobile {
    display: flex;
}

.p-megamenu-mobile .p-megamenu-button {
    display: flex;
}

.p-megamenu-mobile .p-megamenu-root-list {
    position: absolute;
    display: none;
    flex-direction: column;
    top: 100%;
    left: 0;
    z-index: 1;
    width: 100%;
    padding: ${e("megamenu.submenu.padding")};
    gap: ${e("megamenu.submenu.gap")};
    background: ${e("megamenu.overlay.background")};
    border: 1px solid ${e("megamenu.overlay.border.color")};
    box-shadow: ${e("megamenu.overlay.shadow")};
}

.p-megamenu-mobile-active .p-megamenu-root-list {
    display: block;
}

.p-megamenu-mobile .p-megamenu-root-list .p-megamenu-item {
    width: 100%;
    position: static;
}

.p-megamenu-mobile .p-megamenu-overlay {
    position: static;
    border: 0 none;
    border-radius: 0;
    box-shadow: none;
}

.p-megamenu-mobile .p-megamenu-grid {
    flex-wrap: wrap;
    overflow: auto;
    max-height: 90%;
}

.p-megamenu-mobile .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon {
    margin-left: auto;
    transition: transform 0.2s;
}

.p-megamenu-mobile .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
}

.p-megamenu-mobile .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-submenu-icon {
    transform: rotate(-180deg);
}

/* For PrimeNG */
.p-megamenu-submenu-icon.p-iconwrapper {
    margin-left: auto;
}
`;var Sa={root:({instance:e})=>["p-megamenu p-component",{"p-megamenu-mobile":e.queryMatches,"p-megamenu-mobile-active":e.mobileActive,"p-megamenu-horizontal":e.horizontal,"p-megamenu-vertical":e.vertical}],start:"p-megamenu-start",button:"p-megamenu-button",rootList:"p-megamenu-root-list",submenuLabel:({instance:e,processedItem:i})=>["p-megamenu-submenu-label",{"p-disabled":e.isItemDisabled(i)}],item:({instance:e,processedItem:i})=>["p-megamenu-item",{"p-megamenu-item-active":e.isItemActive(i),"p-focus":e.isItemFocused(i),"p-disabled":e.isItemDisabled(i)}],itemContent:"p-megamenu-item-content",itemLink:"p-megamenu-item-link",itemIcon:"p-megamenu-item-icon",itemLabel:"p-megamenu-item-label",submenuIcon:"p-megamenu-submenu-icon",overlay:"p-megamenu-overlay",grid:"p-megamenu-grid",column:({instance:e,processedItem:i})=>{let o=e.isItemGroup(i)?i.items.length:0,r;if(e.$parentInstance.queryMatches)r="p-megamenu-col-12";else switch(o){case 2:r="p-megamenu-col-6";break;case 3:r="p-megamenu-col-4";break;case 4:r="p-megamenu-col-3";break;case 6:r="p-megamenu-col-2";break;default:r="p-megamenu-col-12";break}return r},submenu:"p-megamenu-submenu",separator:"p-megamenu-separator",end:"p-megamenu-end"},gt=(()=>{class e extends Ie{name="megamenu";theme=Ia;classes=Sa;static \u0275fac=(()=>{let o;return function(t){return(o||(o=N(e)))(t||e)}})();static \u0275prov=F({token:e,factory:e.\u0275fac})}return e})();var Ba=(()=>{class e extends he{id;items;itemTemplate;menuId;ariaLabel;ariaLabelledBy;level=0;focusedItemId;disabled=!1;orientation;activeItem;submenu;queryMatches=!1;mobileActive=!1;scrollHeight;tabindex=0;root=!1;itemClick=new U;itemMouseEnter=new U;menuFocus=new U;menuBlur=new U;menuKeydown=new U;menubarViewChild;megaMenu=k(io(()=>ht));onItemClick(o,r){this.getItemProp(r,"command",{originalEvent:o,item:r.item}),this.itemClick.emit({originalEvent:o,processedItem:r,isFocus:!0})}getItemProp(o,r,t=null){return o&&o.item?Po(o.item[r],t):void 0}getItemId(o){return o.item&&o.item?.id?o.item.id:`${this.menuId}_${o.key}`}getSubListId(o){return`${this.getItemId(o)}_list`}getItemClass(o){return _(h({},this.getItemProp(o,"class")),{"p-megamenu-item":!0,"p-megamenu-item-active":this.isItemActive(o),"p-focus":this.isItemFocused(o),"p-disabled":this.isItemDisabled(o)})}getItemLabel(o){return this.getItemProp(o,"label")}getSeparatorItemClass(o){return _(h({},this.getItemProp(o,"class")),{"p-megamenu-separator":!0})}getColumnClass(o){let r=this.isItemGroup(o)?o.items.length:0,t;if(this.queryMatches)t="p-megamenu-col-12";else switch(r){case 2:t="p-megamenu-col-6";break;case 3:t="p-megamenu-col-4";break;case 4:t="p-megamenu-col-3";break;case 6:t="p-megamenu-col-2";break;default:t="p-megamenu-col-12";break}return t}getSubmenuHeaderClass(o){return h({"p-megamenu-submenu-label":!0,"p-disabled":this.isItemDisabled(o)},this.getItemProp(o,"class"))}isSubmenuVisible(o){return this.submenu&&!this.root?this.isItemVisible(o):!0}isItemVisible(o){return this.getItemProp(o,"visible")!==!1}isItemActive(o){return V(this.activeItem)?this.activeItem.key===o.key:!1}isItemDisabled(o){return this.getItemProp(o,"disabled")}isItemFocused(o){return this.focusedItemId===this.getItemId(o)}isItemGroup(o){return V(o.items)}getAriaSetSize(){return this.items.filter(o=>this.isItemVisible(o)&&!this.getItemProp(o,"separator")).length}getAriaPosInset(o){return o-this.items.slice(0,o).filter(r=>this.isItemVisible(r)&&this.getItemProp(r,"separator")).length+1}onItemMouseEnter(o){let{event:r,processedItem:t}=o;this.itemMouseEnter.emit({originalEvent:r,processedItem:t})}static \u0275fac=(()=>{let o;return function(t){return(o||(o=N(e)))(t||e)}})();static \u0275cmp=C({type:e,selectors:[["p-megaMenuSub"],["p-megamenu-sub"]],viewQuery:function(r,t){if(r&1&&B(hn,7),r&2){let n;v(n=y())&&(t.menubarViewChild=n.first)}},inputs:{id:"id",items:"items",itemTemplate:"itemTemplate",menuId:"menuId",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",level:[2,"level","level",ke],focusedItemId:"focusedItemId",disabled:[2,"disabled","disabled",R],orientation:"orientation",activeItem:"activeItem",submenu:"submenu",queryMatches:[2,"queryMatches","queryMatches",R],mobileActive:[2,"mobileActive","mobileActive",R],scrollHeight:"scrollHeight",tabindex:[2,"tabindex","tabindex",ke],root:[2,"root","root",R]},outputs:{itemClick:"itemClick",itemMouseEnter:"itemMouseEnter",menuFocus:"menuFocus",menuBlur:"menuBlur",menuKeydown:"menuKeydown"},features:[ne],decls:1,vars:1,consts:[["menubar",""],["listItem",""],["htmlLabel",""],["htmlRouteLabel",""],[3,"ngClass","style","tabindex","keydown","focus","blur",4,"ngIf"],[3,"keydown","focus","blur","ngClass","tabindex"],["role","presentation",3,"ngClass","style",4,"ngIf"],["ngFor","",3,"ngForOf"],["role","presentation",3,"ngClass"],["role","separator",3,"style","ngClass",4,"ngIf"],["role","menuitem","pTooltip","",3,"ngStyle","ngClass","class","tooltipOptions",4,"ngIf"],["role","separator",3,"ngClass"],["role","menuitem","pTooltip","",3,"ngStyle","ngClass","tooltipOptions"],[1,"p-megamenu-item-content",3,"click","mouseenter"],[4,"ngIf"],["class","p-megamenu-overlay",4,"ngIf"],["pRipple","",3,"target","ngClass",4,"ngIf"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","ngClass","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state",4,"ngIf"],["pRipple","",3,"target","ngClass"],["class","p-megamenu-item-icon",3,"ngClass","ngStyle",4,"ngIf"],["class","p-megamenu-item-label",4,"ngIf","ngIfElse"],[3,"styleClass","value",4,"ngIf"],[1,"p-megamenu-item-icon",3,"ngClass","ngStyle"],[1,"p-megamenu-item-label"],[1,"p-megamenu-item-label",3,"innerHTML"],[3,"styleClass","value"],[4,"ngTemplateOutlet"],[3,"ngClass"],[3,"ngClass",4,"ngIf"],[3,"data-pc-section","aria-hidden"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","ngClass","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state"],[3,"styleClass",4,"ngIf"],[3,"styleClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-megamenu-overlay"],[1,"p-megamenu-grid"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"id","submenu","items","itemTemplate","mobileActive","menuId","focusedItemId","level","root","itemClick","itemMouseEnter",4,"ngFor","ngForOf"],[3,"itemClick","itemMouseEnter","id","submenu","items","itemTemplate","mobileActive","menuId","focusedItemId","level","root"]],template:function(r,t){r&1&&m(0,ra,4,16,"ul",4),r&2&&a("ngIf",t.isSubmenuVisible(t.submenu))},dependencies:[e,M,A,_e,D,Fe,be,P,we,so,mo,Re,Ne,Qr,jr,Xe,Wr,H],encapsulation:2})}return e})(),ht=(()=>{class e extends he{set model(o){this._model=o,this._processedItems=this.createProcessedItems(this._model||[])}get model(){return this._model}style;styleClass;orientation="horizontal";id;ariaLabel;ariaLabelledBy;breakpoint="960px";scrollHeight="20rem";disabled=!1;tabindex=0;startTemplate;endTemplate;menuIconTemplate;submenuIconTemplate;itemTemplate;buttonTemplate;buttonIconTemplate;templates;menubuttonViewChild;rootmenu;container;_startTemplate;_endTemplate;_menuIconTemplate;_submenuIconTemplate;_itemTemplate;_buttonTemplate;_buttonIconTemplate;outsideClickListener;resizeListener;dirty=!1;focused=!1;activeItem=ge(null);focusedItemInfo=ge({index:-1,level:0,parentKey:"",item:null});searchValue="";searchTimeout;_processedItems;_model;_componentStyle=k(gt);matchMediaListener;query;queryMatches=!1;mobileActive=!1;get visibleItems(){let o=V(this.activeItem())?this.activeItem():null;return o?o.items.reduce((r,t)=>(t.forEach(n=>{n.items.forEach(u=>{r.push(u)})}),r),[]):this.processedItems}get processedItems(){return(!this._processedItems||!this._processedItems.length)&&(this._processedItems=this.createProcessedItems(this.model||[])),this._processedItems}get focusedItemId(){let o=this.focusedItemInfo();return o?.item&&o.item?.id?o.item.id:V(o.key)?`${this.id}_${o.key}`:null}constructor(){super(),xe(()=>{let o=this.activeItem();V(o)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())})}ngOnInit(){super.ngOnInit(),this.bindMatchMediaListener(),this.id=this.id||Dr("pn_id_")}ngAfterContentInit(){this.templates?.forEach(o=>{switch(o.getType()){case"start":this._startTemplate=o.template;break;case"end":this._endTemplate=o.template;break;case"menuicon":this._menuIconTemplate=o.template;break;case"submenuicon":this._submenuIconTemplate=o.template;break;case"item":this._itemTemplate=o.template;break;case"button":this._buttonTemplate=o.template;break;case"buttonicon":this._buttonIconTemplate=o.template;break;default:this._itemTemplate=o.template;break}})}bindMatchMediaListener(){if(Ro(this.platformId)&&!this.matchMediaListener){let o=window.matchMedia(`(max-width: ${this.breakpoint})`);this.query=o,this.queryMatches=o.matches,this.matchMediaListener=()=>{this.queryMatches=o.matches,this.mobileActive=!1,this.cd.markForCheck()},o.addEventListener("change",this.matchMediaListener)}}unbindMatchMediaListener(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)}createProcessedItems(o,r=0,t={},n="",u){let w=[];return o&&o.forEach((G,ue)=>{let me=(n!==""?n+"_":"")+(u!==void 0?u+"_":"")+ue,pe={item:G,index:ue,level:r,key:me,parent:t,parentKey:n,columnIndex:u!==void 0?u:t.columnIndex!==void 0?t.columnIndex:ue};pe.items=r===0&&G.items&&G.items.length>0?G.items.map((ve,to)=>this.createProcessedItems(ve,r+1,pe,me,to)):this.createProcessedItems(G.items,r+1,pe,me),w.push(pe)}),w}getItemProp(o,r){return o?Po(o[r]):void 0}onItemClick(o){let{originalEvent:r,processedItem:t}=o,n=this.isProcessedItemGroup(t),u=zo(t.parent);if(this.isSelected(t)){let{index:G,key:ue,parentKey:me,item:pe}=t;this.activeItem.set(null),this.focusedItemInfo.set({index:G,key:ue,parentKey:me,item:pe}),this.dirty=!u,this.mobileActive||Ve(this.rootmenu?.menubarViewChild?.nativeElement,{preventScroll:!0})}else n?this.onItemChange(o):this.hide(r)}onItemMouseEnter(o){!this.mobileActive&&this.dirty&&this.onItemChange(o)}menuButtonClick(o){this.toggle(o)}menuButtonKeydown(o){(o.code==="Enter"||o.code==="NumpadEnter"||o.code==="Space")&&this.menuButtonClick(o)}toggle(o){this.mobileActive?(this.mobileActive=!1,Se.clear(this.rootmenu.el.nativeElement),this.hide()):(this.mobileActive=!0,Se.set("menu",this.rootmenu.el.nativeElement,this.config.zIndex.menu),setTimeout(()=>{this.show()},0)),this.bindOutsideClickListener(),o.preventDefault()}show(){this.focusedItemInfo.set({index:this.findFirstFocusedItemIndex(),level:0,parentKey:""}),Ve(this.rootmenu?.el.nativeElement)}scrollInView(o=-1){let r=o!==-1?`${this.id}_${o}`:this.focusedItemId,t;r===null&&this.queryMatches?t=this.menubuttonViewChild.nativeElement:t=uo(this.rootmenu?.menubarViewChild?.nativeElement,`li[id="${r}"]`),t&&t.scrollIntoView&&t.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})}onItemChange(o){let{processedItem:r,isFocus:t}=o;if(zo(r))return;let{index:n,key:u,parentKey:w,items:G,item:ue}=r,me=V(G);me&&this.activeItem.set(r),this.focusedItemInfo.set({index:n,key:u,parentKey:w,item:ue}),me&&(this.dirty=!0),t&&Ve(this.rootmenu?.menubarViewChild?.nativeElement)}hide(o,r){this.mobileActive&&(this.mobileActive=!1,setTimeout(()=>{Ve(this.menubuttonViewChild?.nativeElement),this.scrollInView()},100)),this.activeItem.set(null),this.focusedItemInfo.set({index:-1,key:"",parentKey:"",item:null}),r&&Ve(this.rootmenu?.menubarViewChild?.nativeElement),this.dirty=!1}onMenuFocus(o){if(this.focused=!0,this.focusedItemInfo().index===-1){let r=this.findFirstFocusedItemIndex(),t=this.findVisibleItem(r);this.focusedItemInfo.set({index:r,key:t.key,parentKey:t.parentKey,item:t.item})}}onMenuBlur(o){this.focused=!1,this.focusedItemInfo.set({index:-1,level:0,parentKey:"",item:null}),this.searchValue="",this.dirty=!1}onKeyDown(o){let r=o.metaKey||o.ctrlKey;switch(o.code){case"ArrowDown":this.onArrowDownKey(o);break;case"ArrowUp":this.onArrowUpKey(o);break;case"ArrowLeft":this.onArrowLeftKey(o);break;case"ArrowRight":this.onArrowRightKey(o);break;case"Home":this.onHomeKey(o);break;case"End":this.onEndKey(o);break;case"Space":this.onSpaceKey(o);break;case"Enter":this.onEnterKey(o);break;case"Escape":this.onEscapeKey(o);break;case"Tab":this.onTabKey(o);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!r&&Lr(o.key)&&this.searchItems(o,o.key);break}}findFirstFocusedItemIndex(){let o=this.findSelectedItemIndex();return o<0?this.findFirstItemIndex():o}findFirstItemIndex(){return this.visibleItems.findIndex(o=>this.isValidItem(o))}findSelectedItemIndex(){return this.visibleItems.findIndex(o=>this.isValidSelectedItem(o))}isProcessedItemGroup(o){return o&&V(o.items)}isSelected(o){return V(this.activeItem())?this.activeItem().key===o.key:!1}isValidSelectedItem(o){return this.isValidItem(o)&&this.isSelected(o)}isValidItem(o){return!!o&&!this.isItemDisabled(o.item)&&!this.isItemSeparator(o.item)}isItemDisabled(o){return this.getItemProp(o,"disabled")}isItemSeparator(o){return this.getItemProp(o,"separator")}isItemMatched(o){return this.isValidItem(o)&&this.getProccessedItemLabel(o).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase())}isProccessedItemGroup(o){return o&&V(o.items)}searchItems(o,r){this.searchValue=(this.searchValue||"")+r;let t=-1,n=!1;return this.focusedItemInfo().index!==-1?(t=this.visibleItems.slice(this.focusedItemInfo().index).findIndex(u=>this.isItemMatched(u)),t=t===-1?this.visibleItems.slice(0,this.focusedItemInfo().index).findIndex(u=>this.isItemMatched(u)):t+this.focusedItemInfo().index):t=this.visibleItems.findIndex(u=>this.isItemMatched(u)),t!==-1&&(n=!0),t===-1&&this.focusedItemInfo().index===-1&&(t=this.findFirstFocusedItemIndex()),t!==-1&&this.changeFocusedItemInfo(o,t),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),n}getProccessedItemLabel(o){return o?this.getItemLabel(o.item):void 0}getItemLabel(o){return this.getItemProp(o,"label")}changeFocusedItemInfo(o,r){let t=this.findVisibleItem(r);if(V(t)){let{key:n,parentKey:u,item:w}=t;this.focusedItemInfo.set({index:r,key:n||"",parentKey:u,item:w})}this.scrollInView()}onArrowDownKey(o){if(this.orientation==="horizontal")if(V(this.activeItem())&&this.activeItem().key===this.focusedItemInfo().key){let{key:t,item:n}=this.activeItem();this.focusedItemInfo.set({index:-1,key:"",parentKey:t,item:n})}else{let t=this.findVisibleItem(this.focusedItemInfo().index);if(this.isProccessedItemGroup(t)){let{parentKey:u,key:w,item:G}=t;this.onItemChange({originalEvent:o,processedItem:t}),this.focusedItemInfo.set({index:-1,key:w,parentKey:u,item:G}),this.searchValue=""}}let r=this.focusedItemInfo().index!==-1?this.findNextItemIndex(this.focusedItemInfo().index):this.findFirstFocusedItemIndex();this.changeFocusedItemInfo(o,r),o.preventDefault()}onArrowRightKey(o){let r=this.findVisibleItem(this.focusedItemInfo().index);if(this.isProccessedItemGroup(r)){if(this.orientation==="vertical")if(V(this.activeItem())&&this.activeItem().key===r.key)this.focusedItemInfo.set({index:-1,key:"",parentKey:this.activeItem().key,item:r.item});else{let u=this.findVisibleItem(this.focusedItemInfo().index);this.isProccessedItemGroup(u)&&(this.onItemChange({originalEvent:o,processedItem:u}),this.focusedItemInfo.set({index:-1,key:u.key,parentKey:u.parentKey,item:u.item}),this.searchValue="")}let n=this.focusedItemInfo().index!==-1?this.findNextItemIndex(this.focusedItemInfo().index):this.findFirstFocusedItemIndex();this.changeFocusedItemInfo(o,n)}else{let n=r.columnIndex+1,u=this.visibleItems.findIndex(w=>w.columnIndex===n);u!==-1&&this.changeFocusedItemInfo(o,u)}o.preventDefault()}onArrowUpKey(o){if(o.altKey&&this.orientation==="horizontal"){if(this.focusedItemInfo().index!==-1){let r=this.findVisibleItem(this.focusedItemInfo().index);!this.isProccessedItemGroup(r)&&V(this.activeItem)&&(this.focusedItemInfo().index===0?(this.focusedItemInfo.set({index:this.activeItem().index,key:this.activeItem().key,parentKey:this.activeItem().parentKey,item:r.item}),this.activeItem.set(null)):this.changeFocusedItemInfo(o,this.findFirstItemIndex()))}o.preventDefault()}else{let r=this.focusedItemInfo().index!==-1?this.findPrevItemIndex(this.focusedItemInfo().index):this.findLastFocusedItemIndex();this.changeFocusedItemInfo(o,r),o.preventDefault()}}onArrowLeftKey(o){let r=this.findVisibleItem(this.focusedItemInfo().index);if(this.isProccessedItemGroup(r)){if(this.orientation==="horizontal"){let n=this.focusedItemInfo().index!==-1?this.findPrevItemIndex(this.focusedItemInfo().index):this.findLastFocusedItemIndex();this.changeFocusedItemInfo(o,n)}}else{this.orientation==="vertical"&&V(this.activeItem())&&r.columnIndex===0&&(this.focusedItemInfo.set({index:this.activeItem().index,key:this.activeItem().key,parentKey:this.activeItem().parentKey,item:r.item}),this.activeItem.set(null));let n=r.columnIndex-1,u=this.visibleItems.findIndex(w=>w.columnIndex===n);u!==-1&&this.changeFocusedItemInfo(o,u)}o.preventDefault()}onHomeKey(o){this.changeFocusedItemInfo(o,this.findFirstItemIndex()),o.preventDefault()}onEndKey(o){this.changeFocusedItemInfo(o,this.findLastItemIndex()),o.preventDefault()}onSpaceKey(o){this.onEnterKey(o)}onEscapeKey(o){V(this.activeItem())&&(this.focusedItemInfo.set({index:this.activeItem().index,key:this.activeItem().key,item:this.activeItem().item}),this.activeItem.set(null)),o.preventDefault()}onTabKey(o){if(this.focusedItemInfo().index!==-1){let r=this.findVisibleItem(this.focusedItemInfo().index);!this.isProccessedItemGroup(r)&&this.onItemChange({originalEvent:o,processedItem:r})}this.hide()}onEnterKey(o){if(this.focusedItemInfo().index!==-1){let r=uo(this.rootmenu?.el?.nativeElement,`li[id="${`${this.focusedItemId}`}"]`),t=r&&uo(r,'a[data-pc-section="action"]');t?t.click():r&&r.click();let n=this.visibleItems[this.focusedItemInfo().index];!this.isProccessedItemGroup(n)&&this.changeFocusedItemInfo(o,this.findFirstFocusedItemIndex())}o.preventDefault()}findVisibleItem(o){return V(this.visibleItems)?this.visibleItems[o]:null}findLastFocusedItemIndex(){let o=this.findSelectedItemIndex();return o<0?this.findLastItemIndex():o}findLastItemIndex(){return Ao(this.visibleItems,o=>this.isValidItem(o))}findPrevItemIndex(o){let r=o>0?Ao(this.visibleItems.slice(0,o),t=>this.isValidItem(t)):-1;return r>-1?r:o}findNextItemIndex(o){let r=o<this.visibleItems.length-1?this.visibleItems.slice(o+1).findIndex(t=>this.isValidItem(t)):-1;return r>-1?r+o+1:o}bindResizeListener(){this.resizeListener||(this.resizeListener=o=>{Rr()||this.hide(o,!0),this.mobileActive=!1},window.addEventListener("resize",this.resizeListener))}bindOutsideClickListener(){Ro(this.platformId)&&(this.outsideClickListener||(this.outsideClickListener=this.renderer.listen(this.document,"click",o=>{this.container?.nativeElement!==o.target&&!this.container?.nativeElement.contains(o.target)&&this.hide()})))}unbindOutsideClickListener(){this.outsideClickListener&&(this.outsideClickListener(),this.outsideClickListener=null)}unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}ngOnDestroy(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener(),super.ngOnDestroy()}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=C({type:e,selectors:[["p-megaMenu"],["p-megamenu"],["p-mega-menu"]],contentQueries:function(r,t,n){if(r&1&&(E(n,ta,4),E(n,ia,4),E(n,na,4),E(n,aa,4),E(n,la,4),E(n,sa,4),E(n,ca,4),E(n,Oe,4)),r&2){let u;v(u=y())&&(t.startTemplate=u.first),v(u=y())&&(t.endTemplate=u.first),v(u=y())&&(t.menuIconTemplate=u.first),v(u=y())&&(t.submenuIconTemplate=u.first),v(u=y())&&(t.itemTemplate=u.first),v(u=y())&&(t.buttonTemplate=u.first),v(u=y())&&(t.buttonIconTemplate=u.first),v(u=y())&&(t.templates=u)}},viewQuery:function(r,t){if(r&1&&(B(da,5),B(ua,5),B(ma,5)),r&2){let n;v(n=y())&&(t.menubuttonViewChild=n.first),v(n=y())&&(t.rootmenu=n.first),v(n=y())&&(t.container=n.first)}},inputs:{model:"model",style:"style",styleClass:"styleClass",orientation:"orientation",id:"id",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",breakpoint:"breakpoint",scrollHeight:"scrollHeight",disabled:[2,"disabled","disabled",R],tabindex:[2,"tabindex","tabindex",ke]},features:[j([gt]),ne],decls:8,vars:36,consts:[["container",""],["rootmenu",""],["menubutton",""],[3,"ngClass","ngStyle"],["class","p-megamenu-start",4,"ngIf"],[4,"ngIf"],[4,"ngTemplateOutlet"],[3,"itemClick","menuFocus","menuBlur","menuKeydown","itemMouseEnter","itemTemplate","items","menuId","root","orientation","ariaLabel","disabled","tabindex","activeItem","level","ariaLabelledBy","focusedItemId","mobileActive","queryMatches","scrollHeight"],["class","p-megamenu-end",4,"ngIf"],[1,"p-megamenu-start"],["role","button","tabindex","0","class","p-megamenu-button",3,"click","keydown",4,"ngIf"],["role","button","tabindex","0",1,"p-megamenu-button",3,"click","keydown"],[1,"p-megamenu-end"]],template:function(r,t){if(r&1){let n=T();l(0,"div",3,0),m(2,ba,2,1,"div",4)(3,xa,2,1,"ng-container",5)(4,_a,1,0,"ng-container",6),l(5,"p-megamenu-sub",7,1),I("itemClick",function(w){return g(n),f(t.onItemClick(w))})("menuFocus",function(w){return g(n),f(t.onMenuFocus(w))})("menuBlur",function(w){return g(n),f(t.onMenuBlur(w))})("menuKeydown",function(w){return g(n),f(t.onKeyDown(w))})("itemMouseEnter",function(w){return g(n),f(t.onItemMouseEnter(w))}),c(),m(7,wa,2,1,"div",8),c()}r&2&&(Z(L(29,pa,t.orientation=="vertical"&&t.queryMatches?"row":"")),Y(t.styleClass),a("ngClass",ur(31,ga,t.queryMatches,t.mobileActive,t.orientation=="horizontal",t.orientation=="vertical"))("ngStyle",t.style),x("data-pc-section","root")("data-pc-name","megamenu")("id",t.id),s(2),a("ngIf",t.startTemplate||t._startTemplate),s(),a("ngIf",!t.buttonTemplate&&!t._buttonTemplate),s(),a("ngTemplateOutlet",t.buttonTemplate||t._buttonTemplate),s(),a("itemTemplate",t.itemTemplate||t._itemTemplate)("items",t.processedItems)("menuId",t.id)("root",!0)("orientation",t.orientation)("ariaLabel",t.ariaLabel)("disabled",t.disabled)("tabindex",t.disabled?-1:t.tabindex)("activeItem",t.activeItem())("level",0)("ariaLabelledBy",t.ariaLabelledBy)("focusedItemId",t.focused?t.focusedItemId:void 0)("mobileActive",t.mobileActive)("queryMatches",t.queryMatches)("scrollHeight",t.scrollHeight),x("id",t.id+"_list"),s(2),a("ngIf",t.endTemplate||t._endTemplate))},dependencies:[M,A,D,Fe,be,P,Ba,Re,mt,Xe,H],encapsulation:2,changeDetection:0})}return e})(),vt=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=se({type:e});static \u0275inj=le({imports:[ht,H,H]})}return e})();var Ma=["searchInput"],Ta=["menuButton"],$a=["mobileMenuButton"],Fa=["app-header",""];function Ra(e,i){if(e&1&&p(0,"img",8),e&2){let o,r,t=d(2);a("src",(o=t.companyStore.company())==null?null:o.logoUrl,fe)("alt",(r=t.companyStore.company())==null?null:r.companyName)}}function Ea(e,i){if(e&1&&(l(0,"div"),m(1,Ra,1,2,"img",7),l(2,"h1"),b(3),c()()),e&2){let o,r,t=d();s(),a("ngIf",(o=t.companyStore.company())==null?null:o.logoUrl),s(2),X((r=t.companyStore.company())==null?null:r.companyName)}}var eo=class e{_layoutService=k(z);searchInput;menuButton;mobileMenuButton;items;companyStore=k(Je);constructor(){}toggleDarkMode(){this._layoutService.layoutConfig.update(i=>_(h({},i),{darkTheme:!i.darkTheme}))}onMenuButtonClick(){this._layoutService.onMenuToggle()}onRightMenuButtonClick(){this._layoutService.openRightMenu()}toggleConfigSidebar(){let i=this._layoutService.layoutState();this._layoutService.isSidebarActive()&&(i.overlayMenuActive=!1,i.overlaySubmenuActive=!1,i.staticMenuMobileActive=!1,i.menuHoverActive=!1,i.configSidebarVisible=!1),i.configSidebarVisible=!i.configSidebarVisible,this._layoutService.layoutState.set(h({},i))}focusSearchInput(){setTimeout(()=>{this.searchInput.nativeElement.focus()},150)}onTopbarMenuToggle(){this._layoutService.layoutState.update(i=>_(h({},i),{topbarMenuActive:!i.topbarMenuActive}))}static \u0275fac=function(o){return new(o||e)};static \u0275cmp=C({type:e,selectors:[["","app-header",""]],viewQuery:function(o,r){if(o&1&&(B(Ma,5),B(Ta,5),B($a,5)),o&2){let t;v(t=y())&&(r.searchInput=t.first),v(t=y())&&(r.menuButton=t.first),v(t=y())&&(r.mobileMenuButton=t.first)}},hostAttrs:[1,"layout-topbar"],features:[j([z])],attrs:Fa,decls:7,vars:2,consts:[[1,"layout-topbar-start"],["routerLink","/",1,"layout-topbar-logo"],["alt","Quanta Logo",1,"layout-topbar-logo-image","h-10","w-auto",3,"src"],[1,"layout-topbar-end"],[1,"layout-topbar-actions-start"],[1,"layout-topbar-actions-end"],[4,"ngIf"],[3,"src","alt",4,"ngIf"],[3,"src","alt"]],template:function(o,r){o&1&&(l(0,"div",0)(1,"a",1),p(2,"img",2),c()(),l(3,"div",3),p(4,"div",4),l(5,"div",5),m(6,Ea,4,2,"div",6),c()()),o&2&&(s(2),ao("src",r._layoutService.isDarkTheme()?"assets/images/Logo-Quanta-Blanco.png":"assets/images/Logo-Quanta-principal.png",fe),s(4),a("ngIf",r.companyStore.company()))},dependencies:[P,we,M,D,pt,po,re,vt,Xe],styles:["[_nghost-%COMP%]     .p-overlaybadge .p-badge{outline-width:0px}"]})};var La=["app-menu-profile",""],Da=(e,i)=>({"pi-angle-down":e,"pi-angle-up":i}),za=()=>["/documentation"],Aa=()=>["/auth/login2"];function Pa(e,i){if(e&1&&(l(0,"ul")(1,"li",5)(2,"button",6),p(3,"i",7),l(4,"span"),b(5,"Perfil"),c()()(),l(6,"li",8)(7,"button",9),p(8,"i",10),l(9,"span"),b(10,"Cerrar sesi\xF3n"),c()()()()),e&2){let o=d();a("@menu",o.isHorizontal()?"overlay":"inline"),s(),a("tooltipDisabled",o.isTooltipDisabled()),s(),a("routerLink",Te(5,za)),s(4),a("tooltipDisabled",o.isTooltipDisabled())("routerLink",Te(6,Aa))}}var bo=class e{_layoutService=k(z);renderer=k(qe);el=k(Me);isHorizontal=S(()=>this._layoutService.isHorizontal()&&this._layoutService.isDesktop());menuProfileActive=S(()=>this._layoutService.layoutState().menuProfileActive);menuProfilePosition=S(()=>this._layoutService.layoutConfig().menuProfilePosition);isTooltipDisabled=S(()=>!this._layoutService.isSlim());subscription;outsideClickListener;constructor(){this.subscription=this._layoutService.overlayOpen$.subscribe(()=>{this.isHorizontal()&&this.menuProfileActive()&&this._layoutService.layoutState.update(i=>_(h({},i),{menuProfileActive:!1}))}),xe(()=>{this.isHorizontal()&&this.menuProfileActive()&&!this.outsideClickListener&&this.bindOutsideClickListener(),!this.menuProfileActive()&&this.isHorizontal()&&this.unbindOutsideClickListener()})}bindOutsideClickListener(){this.isHorizontal()&&(this.outsideClickListener=this.renderer.listen(document,"click",i=>{this.menuProfileActive()&&!(this.el.nativeElement.isSameNode(i.target)||this.el.nativeElement.contains(i.target))&&this._layoutService.layoutState.update(r=>_(h({},r),{menuProfileActive:!1}))}))}unbindOutsideClickListener(){this.outsideClickListener&&(this.outsideClickListener(),this.outsideClickListener=null)}ngOnDestroy(){this.subscription.unsubscribe(),this.unbindOutsideClickListener()}toggleMenu(){this._layoutService.onMenuProfileToggle()}static \u0275fac=function(o){return new(o||e)};static \u0275cmp=C({type:e,selectors:[["","app-menu-profile",""]],hostAttrs:[1,"layout-menu-profile"],attrs:La,decls:9,vars:6,consts:[["pTooltip","Profile",3,"click","tooltipDisabled"],["src","/assets/images/avatar.png","alt","avatar",2,"width","32px","height","32px"],[1,"text-start"],[1,"layout-menu-profile-toggler","pi","pi-fw",3,"ngClass"],[4,"ngIf"],["pTooltip","Profile",3,"tooltipDisabled"],[3,"routerLink"],[1,"pi","pi-file-o","pi-fw"],["pTooltip","Logout",3,"tooltipDisabled","routerLink"],[1,"p-link"],[1,"pi","pi-power-off","pi-fw"]],template:function(o,r){o&1&&(l(0,"button",0),I("click",function(){return r.toggleMenu()}),p(1,"img",1),l(2,"span",2)(3,"strong"),b(4,"Amy Elsner"),c(),l(5,"small"),b(6,"Webmaster"),c()(),p(7,"i",3),c(),m(8,Pa,11,7,"ul",4)),o&2&&(a("tooltipDisabled",r.isTooltipDisabled()),s(7),a("ngClass",Ae(3,Da,r.menuProfilePosition()==="start"||r.isHorizontal(),r.menuProfilePosition()==="end"&&!r.isHorizontal())),s(),a("ngIf",r.menuProfileActive()))},dependencies:[M,A,D,Re,Ne,re,P,we],encapsulation:2,data:{animation:[Pe("menu",[de("void => inline",[q({height:0}),ce("400ms cubic-bezier(0.86, 0, 0.07, 1)",q({opacity:1,height:"*"}))]),de("inline => void",[ce("400ms cubic-bezier(0.86, 0, 0.07, 1)",q({opacity:0,height:"0"}))]),de("void => overlay",[q({opacity:0,transform:"scaleY(0.8)"}),ce(".12s cubic-bezier(0, 0, 0.2, 1)")]),de("overlay => void",[ce(".1s linear",q({opacity:0}))])])]}})};var Va=["submenu"],Ha=["app-menuitem",""],Oa=()=>({paths:"exact",queryParams:"ignored",matrixParams:"ignored",fragment:"ignored"});function Wa(e,i){if(e&1&&(l(0,"div",5)(1,"span"),b(2),c(),p(3,"i",6),c()),e&2){let o=d();s(2),X(o.item.label)}}function Na(e,i){e&1&&p(0,"i",11)}function Qa(e,i){if(e&1){let o=T();l(0,"a",7),I("click",function(t){g(o);let n=d();return f(n.itemClick(t))})("mouseenter",function(){g(o);let t=d();return f(t.onMouseEnter())}),p(1,"i",8),l(2,"span",9),b(3),c(),m(4,Na,1,0,"i",10),c()}if(e&2){let o=d();a("ngClass",o.item.class)("pTooltip",o.item.label)("tooltipDisabled",!(o.isSlim()&&o.root&&!o.active)),x("href",o.item.url,fe)("target",o.item.target),s(),a("ngClass",o.item.icon),s(2),X(o.item.label),s(),a("ngIf",o.item.items)}}function ja(e,i){e&1&&p(0,"i",11)}function qa(e,i){if(e&1){let o=T();l(0,"a",12),I("click",function(t){g(o);let n=d();return f(n.itemClick(t))})("mouseenter",function(){g(o);let t=d();return f(t.onMouseEnter())}),p(1,"i",8),l(2,"span",9),b(3),c(),m(4,ja,1,0,"i",10),c()}if(e&2){let o=d();a("ngClass",o.item.class)("routerLink",o.item.routerLink)("routerLinkActiveOptions",o.item.routerLinkActiveOptions||Te(16,Oa))("fragment",o.item.fragment)("queryParamsHandling",o.item.queryParamsHandling)("preserveFragment",o.item.preserveFragment)("skipLocationChange",o.item.skipLocationChange)("replaceUrl",o.item.replaceUrl)("state",o.item.state)("queryParams",o.item.queryParams)("pTooltip",o.item.label)("tooltipDisabled",!(o.isSlim()&&o.root)),x("target",o.item.target),s(),a("ngClass",o.item.icon),s(2),X(o.item.label),s(),a("ngIf",o.item.items)}}function Ka(e,i){if(e&1&&p(0,"li",14),e&2){let o=i.$implicit,r=i.index,t=d(2);Y(o.badgeClass),a("item",o)("index",r)("parentKey",t.key)}}function Ga(e,i){if(e&1){let o=T();l(0,"ul",null,0),I("@children.done",function(t){g(o);let n=d();return f(n.onSubmenuAnimated(t))}),m(2,Ka,1,5,"ng-template",13),c()}if(e&2){let o=d();a("@children",o.submenuAnimation),s(2),a("ngForOf",o.item.items)}}var ho=class e{constructor(i,o){this.layoutService=i;this.router=o;this.menuSourceSubscription=this.layoutService.menuSource$.subscribe(r=>{Promise.resolve(null).then(()=>{r.routeEvent?this.active=!!(r.key===this.key||r.key.startsWith(this.key+"-")):r.key!==this.key&&!r.key.startsWith(this.key+"-")&&(this.active=!1)})}),this.menuResetSubscription=this.layoutService.resetSource$.subscribe(()=>{this.active=!1}),this.router.events.pipe(Le(r=>r instanceof Ce)).subscribe(r=>{this.isSlimPlus()||this.isSlim()||this.isHorizontal()?this.active=!1:this.item.routerLink&&this.updateActiveStateFromRoute()})}item;index;root;parentKey;submenu;get activeClass(){return this.active}active=!1;menuSourceSubscription;menuResetSubscription;key="";get submenuAnimation(){return this.layoutService.isDesktop()&&(this.layoutService.isHorizontal()||this.layoutService.isSlim()||this.layoutService.isSlimPlus())?this.active?"visible":"hidden":this.root||this.active?"expanded":"collapsed"}isSlim=S(()=>this.layoutService.isSlim());isSlimPlus=S(()=>this.layoutService.isSlimPlus());isHorizontal=S(()=>this.layoutService.isHorizontal());get isDesktop(){return this.layoutService.isDesktop()}get isMobile(){return this.layoutService.isMobile()}ngOnInit(){this.key=this.parentKey?this.parentKey+"-"+this.index:String(this.index),!(this.isSlimPlus()||this.isSlim()||this.isHorizontal())&&this.item.routerLink&&this.updateActiveStateFromRoute()}ngAfterViewChecked(){this.root&&this.active&&this.isDesktop&&(this.isHorizontal()||this.isSlim()||this.isSlimPlus())&&this.calculatePosition(this.submenu?.nativeElement,this.submenu?.nativeElement.parentElement)}updateActiveStateFromRoute(){this.router.isActive(this.item.routerLink[0],{paths:"exact",queryParams:"ignored",matrixParams:"ignored",fragment:"ignored"})&&this.layoutService.onMenuStateChange({key:this.key,routeEvent:!0})}onSubmenuAnimated(i){if(i.toState==="visible"&&this.isDesktop&&(this.isHorizontal()||this.isSlim()||this.isSlimPlus())){let o=i.element,r=o.parentElement;this.calculatePosition(o,r)}}calculatePosition(i,o){if(i){let{left:r,top:t}=o.getBoundingClientRect(),[n,u]=[window.innerWidth,window.innerHeight],[w,G]=[i.offsetWidth,i.offsetHeight],ue=Hr.calculateScrollbarWidth(),pe=document.querySelector(".layout-topbar")?.offsetHeight||0;if(i.style.top="",i.style.left="",this.layoutService.isHorizontal()){let ve=r+w+ue;i.style.left=n<ve?`${r-(ve-n)}px`:`${r}px`}else if(this.layoutService.isSlim()||this.layoutService.isSlimPlus()){let ve=t-pe,to=ve+G+pe;i.style.top=u<to?`${ve-(to-u)}px`:`${ve}px`}}}itemClick(i){if(this.item.disabled){i.preventDefault();return}(this.root&&this.isSlim()||this.isHorizontal()||this.isSlimPlus())&&this.layoutService.layoutState.update(o=>_(h({},o),{menuHoverActive:!o.menuHoverActive})),this.item.command&&this.item.command({originalEvent:i,item:this.item}),this.item.items?(this.active=!this.active,this.root&&this.active&&(this.isSlim()||this.isHorizontal()||this.isSlimPlus())&&this.layoutService.onOverlaySubmenuOpen()):(this.layoutService.isMobile()&&this.layoutService.layoutState.update(o=>_(h({},o),{staticMenuMobileActive:!1})),(this.isSlim()||this.isHorizontal()||this.isSlimPlus())&&(this.layoutService.reset(),this.layoutService.layoutState.update(o=>_(h({},o),{menuHoverActive:!1})))),this.layoutService.onMenuStateChange({key:this.key})}onMouseEnter(){this.root&&(this.isSlim()||this.isHorizontal()||this.isSlimPlus())&&this.layoutService.isDesktop()&&this.layoutService.layoutState().menuHoverActive&&(this.active=!0,this.layoutService.onMenuStateChange({key:this.key}))}ngOnDestroy(){this.menuSourceSubscription&&this.menuSourceSubscription.unsubscribe(),this.menuResetSubscription&&this.menuResetSubscription.unsubscribe()}static \u0275fac=function(o){return new(o||e)(Q(z),Q(K))};static \u0275cmp=C({type:e,selectors:[["","app-menuitem",""]],viewQuery:function(o,r){if(o&1&&B(Va,5),o&2){let t;v(t=y())&&(r.submenu=t.first)}},hostVars:4,hostBindings:function(o,r){o&2&&sr("layout-root-menuitem",r.root)("active-menuitem",r.activeClass)},inputs:{item:"item",index:"index",root:"root",parentKey:"parentKey"},attrs:Ha,decls:5,vars:4,consts:[["submenu",""],["class","layout-menuitem-root-text",4,"ngIf"],["tabindex","0","pRipple","",3,"ngClass","pTooltip","tooltipDisabled","click","mouseenter",4,"ngIf"],["routerLinkActive","active-route","tabindex","0","pRipple","",3,"ngClass","routerLink","routerLinkActiveOptions","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","queryParams","pTooltip","tooltipDisabled","click","mouseenter",4,"ngIf"],[4,"ngIf"],[1,"layout-menuitem-root-text"],[1,"layout-menuitem-root-icon","pi","pi-fw","pi-ellipsis-h"],["tabindex","0","pRipple","",3,"click","mouseenter","ngClass","pTooltip","tooltipDisabled"],[1,"layout-menuitem-icon",3,"ngClass"],[1,"layout-menuitem-text"],["class","pi pi-fw pi-angle-down layout-submenu-toggler",4,"ngIf"],[1,"pi","pi-fw","pi-angle-down","layout-submenu-toggler"],["routerLinkActive","active-route","tabindex","0","pRipple","",3,"click","mouseenter","ngClass","routerLink","routerLinkActiveOptions","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","queryParams","pTooltip","tooltipDisabled"],["ngFor","",3,"ngForOf"],["app-menuitem","",3,"item","index","parentKey"]],template:function(o,r){o&1&&(O(0),m(1,Wa,4,1,"div",1)(2,Qa,5,8,"a",2)(3,qa,5,17,"a",3)(4,Ga,3,2,"ul",4),W()),o&2&&(s(),a("ngIf",r.root&&r.item.visible!==!1),s(),a("ngIf",(!r.item.routerLink||r.item.items)&&r.item.visible!==!1),s(),a("ngIf",r.item.routerLink&&!r.item.items&&r.item.visible!==!1),s(),a("ngIf",r.item.items&&r.item.visible!==!1))},dependencies:[e,M,A,_e,D,P,we,so,We,mo,Re,Ne],encapsulation:2,data:{animation:[Pe("children",[Ye("collapsed",q({height:"0"})),Ye("expanded",q({height:"*"})),Ye("hidden",q({display:"none"})),Ye("visible",q({display:"block"})),de("collapsed <=> expanded",ce("400ms cubic-bezier(0.86, 0, 0.07, 1)"))])]}})};var Qe=class e{constructor(i){this.http=i}baseUrl=`${tt.apiUrl}sys/menu`;getMenu(){return this.http.get(this.baseUrl)}static \u0275fac=function(o){return new(o||e)(De(kr))};static \u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"})};var Za={Menu:[],query:""},Oo=Jr(ot(Za),et((e,i=k(Qe),o=k(He))=>({loadMenu:it(Qo(Zo(()=>i.getMenu().pipe(rt({next:r=>{Xr(e,{Menu:r.data})},error:()=>{}})))))})));var Ya=["menuContainer"];function Xa(e,i){if(e&1&&p(0,"li",5),e&2){let o=d(),r=o.$implicit,t=o.index;a("item",r)("index",t)("root",!0)}}function Ja(e,i){e&1&&p(0,"li",6)}function el(e,i){if(e&1&&(O(0),m(1,Xa,1,3,"li",3)(2,Ja,1,0,"li",4),W()),e&2){let o=i.$implicit;s(),a("ngIf",!o.separator),s(),a("ngIf",o.separator)}}var oo=class e{constructor(i){this.menuService=i}el=k(Me);menuStore=k(Oo);menuContainer;ngOnInit(){this.menuStore.loadMenu()}static \u0275fac=function(o){return new(o||e)(Q(Qe))};static \u0275cmp=C({type:e,selectors:[["app-menu"],["","app-menu",""]],viewQuery:function(o,r){if(o&1&&B(Ya,5),o&2){let t;v(t=y())&&(r.menuContainer=t.first)}},features:[j([Oo])],decls:3,vars:1,consts:[["menuContainer",""],[1,"layout-menu"],[4,"ngFor","ngForOf"],["app-menuitem","",3,"item","index","root",4,"ngIf"],["class","menu-separator",4,"ngIf"],["app-menuitem","",3,"item","index","root"],[1,"menu-separator"]],template:function(o,r){o&1&&(l(0,"ul",1,0),m(2,el,3,2,"ng-container",2),c()),o&2&&(s(2),a("ngForOf",r.menuStore.Menu()))},dependencies:[M,_e,D,ho,P],encapsulation:2})};var ol=["menuProfileStart"],rl=["menuProfileEnd"],tl=["menuContainer"],il=["app-sidebar",""];function nl(e,i){e&1&&p(0,"div",20,1)}function al(e,i){e&1&&p(0,"div",20,2)}var ro=class e{el=k(Me);_layoutService=k(z);appMenu;menuProfileStart;menuProfileEnd;menuContainer;overlayMenuActive=S(()=>this._layoutService.layoutState().overlayMenuActive);menuProfilePosition=S(()=>this._layoutService.layoutConfig().menuProfilePosition);anchored=S(()=>this._layoutService.layoutState().anchored);timeout;resetOverlay(){this.overlayMenuActive()&&this._layoutService.layoutState.update(i=>_(h({},i),{overlayMenuActive:!1}))}onMouseEnter(){this.anchored()||(this.timeout&&(clearTimeout(this.timeout),this.timeout=null),this._layoutService.layoutState.update(i=>_(h({},i),{sidebarActive:!0})))}onMouseLeave(){this.anchored()||this.timeout||(this.timeout=setTimeout(()=>this._layoutService.layoutState.update(i=>_(h({},i),{sidebarActive:!1})),300))}anchor(){this._layoutService.layoutState.update(i=>_(h({},i),{anchored:!i.anchored}))}ngOnDestroy(){this.resetOverlay()}static \u0275fac=function(o){return new(o||e)};static \u0275cmp=C({type:e,selectors:[["","app-sidebar",""]],viewQuery:function(o,r){if(o&1&&(B(oo,5),B(ol,5),B(rl,5),B(tl,5)),o&2){let t;v(t=y())&&(r.appMenu=t.first),v(t=y())&&(r.menuProfileStart=t.first),v(t=y())&&(r.menuProfileEnd=t.first),v(t=y())&&(r.menuContainer=t.first)}},attrs:il,decls:19,vars:2,consts:[["menuContainer",""],["menuProfileStart",""],["menuProfileEnd",""],[1,"layout-sidebar",3,"mouseenter","mouseleave"],[1,"layout-sidebar-top"],["href","/"],["width","167","height","32","viewBox","0 0 167 32","fill","none","xmlns","http://www.w3.org/2000/svg",1,"layout-sidebar-logo"],["d","M76.5469 5.25V20.7812C76.5365 22.3125 76.1979 23.6458 75.5312 24.7812C74.8646 25.9167 73.9219 26.7917 72.7031 27.4062C71.4948 28.0104 70.1042 28.3125 68.5312 28.3125C66.1354 28.3125 64.2135 27.6615 62.7656 26.3594C61.3281 25.0469 60.5833 23.2344 60.5312 20.9219V5.25H62.4375V20.6406C62.4375 22.5573 62.9844 24.0469 64.0781 25.1094C65.1719 26.1615 66.6562 26.6875 68.5312 26.6875C70.4062 26.6875 71.8854 26.1562 72.9688 25.0938C74.0625 24.0312 74.6094 22.5521 74.6094 20.6562V5.25H76.5469Z","fill","var(--topbar-item-text-color)"],["d","M83.8438 26.375H95.0781V28H81.9062V5.25H83.8438V26.375Z","fill","var(--topbar-item-text-color)"],["d","M109.906 6.89062H102.109V28H100.188V6.89062H92.4062V5.25H109.906V6.89062Z","fill","var(--topbar-item-text-color)"],["d","M115.938 28H114.016V5.25H115.938V28Z","fill","var(--topbar-item-text-color)"],["d","M124.672 5.25L133.062 25.3281L141.484 5.25H144.047V28H142.125V18.0938L142.281 7.9375L133.812 28H132.328L123.891 8.01562L124.047 18.0312V28H122.125V5.25H124.672Z","fill","var(--topbar-item-text-color)"],["d","M162.375 21.625H152.047L149.703 28H147.688L156.297 5.25H158.125L166.734 28H164.734L162.375 21.625ZM152.641 19.9844H161.766L157.203 7.59375L152.641 19.9844Z","fill","var(--topbar-item-text-color)"],["fill-rule","evenodd","clip-rule","evenodd","d","M39.9709 8.57017C39.9112 8.42729 39.7717 8.33484 39.617 8.33484H37.5093L38.657 6.95037C38.752 6.83653 38.7711 6.67837 38.7083 6.54466C38.6455 6.41095 38.5106 6.32537 38.362 6.32537H15.2326L8.67361 0.10518C8.54643 -0.0147766 8.35336 -0.0346421 8.20625 0.0585729L4.52643 2.36221L4.52336 2.36526L4.51953 2.36679L0.17315 5.21978C0.162424 5.22666 0.157061 5.23735 0.147101 5.24576C0.125649 5.26257 0.107261 5.28091 0.0904059 5.30154C0.0750829 5.31987 0.0628245 5.33821 0.0513322 5.35884C0.0390738 5.381 0.0306461 5.40316 0.0229846 5.42684C0.015323 5.45129 0.0107261 5.47574 0.00766152 5.50172C0.00689537 5.51471 0 5.5254 0 5.53916C0 5.55138 0.00536306 5.56055 0.00689537 5.57278C0.00919382 5.59799 0.0145569 5.62168 0.0222184 5.64689C0.0298799 5.6721 0.0383076 5.69579 0.0513322 5.71948C0.0566952 5.72941 0.0574614 5.74011 0.0635906 5.75004C0.0689537 5.75844 0.0789137 5.7615 0.0850429 5.76914C0.111858 5.80352 0.14327 5.83179 0.180046 5.85471C0.193836 5.86312 0.204563 5.87382 0.218353 5.88069C0.268919 5.90514 0.324082 5.92119 0.383842 5.92119H5.61743L6.79883 8.86052L6.80036 8.86281V8.8651L14.4864 27.2292L9.94925 31.3353C9.83203 31.4415 9.79219 31.608 9.84965 31.7555C9.90635 31.903 10.0489 32 10.2067 32H16.7389C16.7895 32 16.8393 31.9893 16.886 31.9702C16.9327 31.9511 16.9749 31.9228 17.0101 31.8877L20.444 28.4502C20.4486 28.4555 20.4501 28.4624 20.4555 28.4678L23.707 31.8808C23.7798 31.958 23.8756 31.9794 23.9867 32C29.8899 31.9671 38.8462 31.9373 39.2676 31.9809C39.3074 31.9939 39.348 32 39.3886 32C39.5197 32 39.6476 31.9335 39.7189 31.8182C39.9403 31.459 39.9387 31.4552 28.6265 20.2603L39.8874 8.98888C39.9977 8.87733 40.0299 8.71305 39.9709 8.57017ZM37.5483 7.08867L36.5163 8.33484H17.3518L16.0379 7.08867H37.5483ZM8.36178 0.862361L16.2409 8.33484H7.41329L5.20447 2.83898L8.36178 0.862361ZM1.66178 5.15636L4.54864 3.2615L5.3102 5.15636H1.66178ZM21.0102 27.9406C21.0002 27.9299 20.9864 27.9253 20.9757 27.9169L23.7201 25.1701V30.7844L21.0102 27.9406ZM38.5045 31.213C37.058 31.1916 33.464 31.1825 24.4862 31.2321V24.6513C24.4862 24.581 24.4617 24.5183 24.4288 24.461L28.0864 20.7997C31.6934 24.3701 36.7998 29.4519 38.5045 31.213ZM16.8722 30.9425L7.72894 9.0989H36.6006C36.6282 9.10501 36.6558 9.11342 36.6834 9.11342C36.7056 9.11342 36.7263 9.10272 36.7485 9.0989H38.6945L16.8722 30.9425Z","fill","var(--topbar-item-text-color)"],["width","41","height","32","viewBox","0 0 41 32","fill","none","xmlns","http://www.w3.org/2000/svg",1,"layout-sidebar-logo-slim"],["fill-rule","evenodd","clip-rule","evenodd","d","M40.7209 8.57017C40.6612 8.42729 40.5217 8.33484 40.367 8.33484H38.2593L39.407 6.95037C39.502 6.83653 39.5211 6.67837 39.4583 6.54466C39.3955 6.41095 39.2606 6.32537 39.112 6.32537H15.9826L9.42361 0.10518C9.29643 -0.0147766 9.10336 -0.0346421 8.95625 0.0585729L5.27643 2.36221L5.27336 2.36526L5.26953 2.36679L0.92315 5.21978C0.912424 5.22666 0.907061 5.23735 0.897101 5.24576C0.875649 5.26257 0.857261 5.28091 0.840406 5.30154C0.825083 5.31987 0.812825 5.33821 0.801332 5.35884C0.789074 5.381 0.780646 5.40316 0.772985 5.42684C0.765323 5.45129 0.760726 5.47574 0.757662 5.50172C0.756895 5.51471 0.75 5.5254 0.75 5.53916C0.75 5.55138 0.755363 5.56055 0.756895 5.57278C0.759194 5.59799 0.764557 5.62168 0.772218 5.64689C0.77988 5.6721 0.788308 5.69579 0.801332 5.71948C0.806695 5.72941 0.807461 5.74011 0.813591 5.75004C0.818954 5.75844 0.828914 5.7615 0.835043 5.76914C0.861858 5.80352 0.89327 5.83179 0.930046 5.85471C0.943836 5.86312 0.954563 5.87382 0.968353 5.88069C1.01892 5.90514 1.07408 5.92119 1.13384 5.92119H6.36743L7.54883 8.86052L7.55036 8.86281V8.8651L15.2364 27.2292L10.6993 31.3353C10.582 31.4415 10.5422 31.608 10.5997 31.7555C10.6564 31.903 10.7989 32 10.9567 32H17.4889C17.5395 32 17.5893 31.9893 17.636 31.9702C17.6827 31.9511 17.7249 31.9228 17.7601 31.8877L21.194 28.4502C21.1986 28.4555 21.2001 28.4624 21.2055 28.4678L24.457 31.8808C24.5298 31.958 24.6256 31.9794 24.7367 32C30.6399 31.9671 39.5962 31.9373 40.0176 31.9809C40.0574 31.9939 40.098 32 40.1386 32C40.2697 32 40.3976 31.9335 40.4689 31.8182C40.6903 31.459 40.6887 31.4552 29.3765 20.2603L40.6374 8.98888C40.7477 8.87733 40.7799 8.71305 40.7209 8.57017ZM38.2983 7.08867L37.2663 8.33484H18.1018L16.7879 7.08867H38.2983ZM9.11178 0.862361L16.9909 8.33484H8.16329L5.95447 2.83898L9.11178 0.862361ZM2.41178 5.15636L5.29864 3.2615L6.0602 5.15636H2.41178ZM21.7602 27.9406C21.7502 27.9299 21.7364 27.9253 21.7257 27.9169L24.4701 25.1701V30.7844L21.7602 27.9406ZM39.2545 31.213C37.808 31.1916 34.214 31.1825 25.2362 31.2321V24.6513C25.2362 24.581 25.2117 24.5183 25.1788 24.461L28.8364 20.7997C32.4434 24.3701 37.5498 29.4519 39.2545 31.213ZM17.6222 30.9425L8.47894 9.0989H37.3506C37.3782 9.10501 37.4058 9.11342 37.4334 9.11342C37.4556 9.11342 37.4763 9.10272 37.4985 9.0989H39.4445L17.6222 30.9425Z","fill","var(--topbar-item-text-color)"],["type","button",1,"layout-sidebar-anchor",3,"click"],["app-menu-profile","",4,"ngIf"],[1,"layout-menu-container"],["app-menu",""],["app-menu-profile",""]],template:function(o,r){if(o&1){let t=T();l(0,"div",3),I("mouseenter",function(){return g(t),f(r.onMouseEnter())})("mouseleave",function(){return g(t),f(r.onMouseLeave())}),l(1,"div",4)(2,"a",5),ye(),l(3,"svg",6),p(4,"path",7)(5,"path",8)(6,"path",9)(7,"path",10)(8,"path",11)(9,"path",12)(10,"path",13),c(),l(11,"svg",14),p(12,"path",15),c()(),no(),l(13,"button",16),I("click",function(){return g(t),f(r.anchor())}),c()(),m(14,nl,2,0,"div",17),l(15,"div",18,0),p(17,"div",19),c(),m(18,al,2,0,"div",17),c()}o&2&&(s(14),a("ngIf",r.menuProfilePosition()==="start"),s(4),a("ngIf",r.menuProfilePosition()==="end"))},dependencies:[oo,M,D,bo],encapsulation:2})};var ll=["app-breadcrumb",""];function sl(e,i){if(e&1&&(l(0,"li"),p(1,"i",3),c(),l(2,"li")(3,"span"),b(4),c()()),e&2){let o=i.$implicit;s(4),X(o.label)}}var vo=class e{constructor(i){this.router=i;this.router.events.pipe(Le(o=>o instanceof Ce)).subscribe(o=>{let r=this.router.routerState.snapshot.root,t=[];this.addBreadcrumb(r,[],t),this._breadcrumbs$.next(t)})}_breadcrumbs$=new jo([]);breadcrumbs$=this._breadcrumbs$.asObservable();addBreadcrumb(i,o,r){let t=o.concat(i.url.map(w=>w.path)),n=i.data.breadcrumb,u=i.parent&&i.parent.data?i.parent.data.breadcrumb:null;n&&n!==u&&r.push({label:i.data.breadcrumb,url:"/"+t.join("/")}),i.firstChild&&this.addBreadcrumb(i.firstChild,t,r)}static \u0275fac=function(o){return new(o||e)(Q(K))};static \u0275cmp=C({type:e,selectors:[["","app-breadcrumb",""]],hostAttrs:[1,"layout-breadcrumb-container"],attrs:ll,decls:6,vars:3,consts:[[1,"layout-breadcrumb"],[1,"pi","pi-home"],["ngFor","",3,"ngForOf"],[1,"pi","pi-angle-right"]],template:function(o,r){o&1&&(l(0,"nav",0)(1,"ol")(2,"li"),p(3,"i",1),c(),m(4,sl,5,1,"ng-template",2),pr(5,"async"),c()()),o&2&&(s(4),a("ngForOf",gr(5,1,r.breadcrumbs$)))},dependencies:[M,_e,br,P,re,We],encapsulation:2})};var yt={root:{transitionDuration:"{transition.duration}"},panel:{borderWidth:"0",borderColor:"{content.border.color}"},header:{color:"{text.color}",hoverColor:"{text.color}",activeColor:"{text.color}",padding:"1.25rem",fontWeight:"600",borderRadius:"0",borderWidth:"0",borderColor:"{content.border.color}",background:"{content.background}",hoverBackground:"{content.hover.background}",activeBackground:"{content.background}",activeHoverBackground:"{content.background}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"},toggleIcon:{color:"{text.muted.color}",hoverColor:"{text.muted.color}",activeColor:"{text.muted.color}",activeHoverColor:"{text.muted.color}"},first:{topBorderRadius:"{content.border.radius}",borderWidth:"0"},last:{bottomBorderRadius:"{content.border.radius}",activeBottomBorderRadius:"0"}},content:{borderWidth:"0",borderColor:"{content.border.color}",background:"{content.background}",color:"{text.color}",padding:"0 1.25rem 1.25rem 1.25rem"},css:({dt:e})=>`
.p-accordionpanel {
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
    transition: margin ${e("accordion.transition.duration")};
}

.p-accordionpanel-active {
    margin: 1rem 0;
}

.p-accordionpanel:first-child {
    border-start-start-radius: ${e("content.border.radius")};
    border-start-end-radius: ${e("content.border.radius")};
    margin-top: 0;
}

.p-accordionpanel:last-child {
    border-end-start-radius: ${e("content.border.radius")};
    border-end-end-radius: ${e("content.border.radius")};
    margin-bottom: 0;
}

.p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
    background: ${e("navigation.item.active.background")};
}
`};var kt={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}"},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},dropdown:{width:"3rem",sm:{width:"2.5rem"},lg:{width:"3.5rem"},borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",borderRadius:"{form.field.border.radius}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},chip:{borderRadius:"{border.radius.sm}"},emptyMessage:{padding:"{list.option.padding}"},colorScheme:{light:{chip:{focusBackground:"{surface.300}",focusColor:"{surface.950}"},dropdown:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}"}},dark:{chip:{focusBackground:"{surface.600}",focusColor:"{surface.0}"},dropdown:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}"}}},css:({dt:e})=>`
.p-autocomplete-dropdown:focus-visible {
    background: ${e("autocomplete.dropdown.hover.background")}
    border-color: ${e("autocomplete.dropdown.hover.border.color")};
    color: ${e("autocomplete.dropdown.hover.color")};
}

.p-variant-filled.p-autocomplete-input-multiple {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border: 1px solid transparent;
    background: ${e("autocomplete.filled.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("autocomplete.focus.border.color")}, ${e("autocomplete.focus.border.color")}), linear-gradient(to bottom, ${e("autocomplete.border.color")}, ${e("autocomplete.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
}

.p-autocomplete:not(.p-disabled):hover .p-variant-filled.p-autocomplete-input-multiple {
    background: ${e("autocomplete.filled.hover.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("autocomplete.focus.border.color")}, ${e("autocomplete.focus.border.color")}), linear-gradient(to bottom, ${e("autocomplete.hover.border.color")}, ${e("autocomplete.hover.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-autocomplete:not(.p-disabled).p-focus .p-variant-filled.p-autocomplete-input-multiple {
    outline: 0 none;
    background: ${e("autocomplete.filled.focus.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("autocomplete.focus.border.color")}, ${e("autocomplete.focus.border.color")}), linear-gradient(to bottom, ${e("autocomplete.border.color")}, ${e("autocomplete.border.color")});
    background-size: 100% 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-autocomplete:not(.p-disabled).p-focus:hover .p-variant-filled.p-autocomplete-input-multiple {
    background-image: linear-gradient(to bottom, ${e("autocomplete.focus.border.color")}, ${e("autocomplete.focus.border.color")}), linear-gradient(to bottom, ${e("autocomplete.hover.border.color")}, ${e("autocomplete.hover.border.color")});
}

.p-autocomplete.p-invalid .p-autocomplete-input-multiple {
    background-image: linear-gradient(to bottom, ${e("autocomplete.invalid.border.color")}, ${e("autocomplete.invalid.border.color")}), linear-gradient(to bottom, ${e("autocomplete.invalid.border.color")}, ${e("autocomplete.invalid.border.color")});
}

.p-autocomplete.p-invalid.p-focus .p-autocomplete-input-multiple  {
    background-image: linear-gradient(to bottom, ${e("autocomplete.invalid.border.color")}, ${e("autocomplete.invalid.border.color")}), linear-gradient(to bottom, ${e("autocomplete.invalid.border.color")}, ${e("autocomplete.invalid.border.color")});
}

.p-autocomplete-option {
    transition: none;
}

.p-autocomplete:has(.p-variant-filled) .p-autocomplete-dropdown {
    border-top-color: transparent;
    border-right-color: transparent;
}
`};var xt={root:{width:"2rem",height:"2rem",fontSize:"1rem",background:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},icon:{size:"1rem"},group:{borderColor:"{content.background}",offset:"-0.75rem"},lg:{width:"3rem",height:"3rem",fontSize:"1.5rem",icon:{size:"1.5rem"},group:{offset:"-1rem"}},xl:{width:"4rem",height:"4rem",fontSize:"2rem",icon:{size:"2rem"},group:{offset:"-1.5rem"}}};var _t={root:{borderRadius:"{border.radius.md}",padding:"0 0.5rem",fontSize:"0.75rem",fontWeight:"700",minWidth:"1.5rem",height:"1.5rem"},dot:{size:"0.5rem"},sm:{fontSize:"0.625rem",minWidth:"1.25rem",height:"1.25rem"},lg:{fontSize:"0.875rem",minWidth:"1.75rem",height:"1.75rem"},xl:{fontSize:"1rem",minWidth:"2rem",height:"2rem"},colorScheme:{light:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.100}",color:"{surface.600}"},success:{background:"{green.500}",color:"{surface.0}"},info:{background:"{sky.500}",color:"{surface.0}"},warn:{background:"{orange.500}",color:"{surface.0}"},danger:{background:"{red.500}",color:"{surface.0}"},contrast:{background:"{surface.950}",color:"{surface.0}"}},dark:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.800}",color:"{surface.300}"},success:{background:"{green.400}",color:"{green.950}"},info:{background:"{sky.400}",color:"{sky.950}"},warn:{background:"{orange.400}",color:"{orange.950}"},danger:{background:"{red.400}",color:"{red.950}"},contrast:{background:"{surface.0}",color:"{surface.950}"}}}};var Ct={primitive:{borderRadius:{none:"0",xs:"2px",sm:"4px",md:"6px",lg:"8px",xl:"12px"},emerald:{50:"#E8F6F1",100:"#C5EBE1",200:"#9EDFCF",300:"#76D3BD",400:"#58C9AF",500:"#3BBFA1",600:"#35AF94",700:"#2D9B83",800:"#268873",900:"#1A6657",950:"#0d3329"},green:{50:"#E8F5E9",100:"#C8E6C9",200:"#A5D6A7",300:"#81C784",400:"#66BB6A",500:"#4CAF50",600:"#43A047",700:"#388E3C",800:"#2E7D32",900:"#1B5E20",950:"#0e2f10"},lime:{50:"#F9FBE7",100:"#F0F4C3",200:"#E6EE9C",300:"#DCE775",400:"#D4E157",500:"#CDDC39",600:"#C0CA33",700:"#AFB42B",800:"#9E9D24",900:"#827717",950:"#413c0c"},red:{50:"#FFEBEE",100:"#FFCDD2",200:"#EF9A9A",300:"#E57373",400:"#EF5350",500:"#F44336",600:"#E53935",700:"#D32F2F",800:"#C62828",900:"#B71C1C",950:"#5c0e0e"},orange:{50:"#FFF3E0",100:"#FFE0B2",200:"#FFCC80",300:"#FFB74D",400:"#FFA726",500:"#FF9800",600:"#FB8C00",700:"#F57C00",800:"#EF6C00",900:"#E65100",950:"#732900"},amber:{50:"#FFF8E1",100:"#FFECB3",200:"#FFE082",300:"#FFD54F",400:"#FFCA28",500:"#FFC107",600:"#FFB300",700:"#FFA000",800:"#FF8F00",900:"#FF6F00",950:"#803800"},yellow:{50:"#FFFDE7",100:"#FFF9C4",200:"#FFF59D",300:"#FFF176",400:"#FFEE58",500:"#FFEB3B",600:"#FDD835",700:"#FBC02D",800:"#F9A825",900:"#F57F17",950:"#7b400c"},teal:{50:"#E0F2F1",100:"#B2DFDB",200:"#80CBC4",300:"#4DB6AC",400:"#26A69A",500:"#009688",600:"#00897B",700:"#00796B",800:"#00695C",900:"#004D40",950:"#002720"},cyan:{50:"#E0F7FA",100:"#B2EBF2",200:"#80DEEA",300:"#4DD0E1",400:"#26C6DA",500:"#00BCD4",600:"#00ACC1",700:"#0097A7",800:"#00838F",900:"#006064",950:"#003032"},sky:{50:"#E1F5FE",100:"#B3E5FC",200:"#81D4FA",300:"#4FC3F7",400:"#29B6F6",500:"#03A9F4",600:"#039BE5",700:"#0288D1",800:"#0277BD",900:"#01579B",950:"#012c4e"},blue:{50:"#E3F2FD",100:"#BBDEFB",200:"#90CAF9",300:"#64B5F6",400:"#42A5F5",500:"#2196F3",600:"#1E88E5",700:"#1976D2",800:"#1565C0",900:"#0D47A1",950:"#072451"},indigo:{50:"#E8EAF6",100:"#C5CAE9",200:"#9FA8DA",300:"#7986CB",400:"#5C6BC0",500:"#3F51B5",600:"#3949AB",700:"#303F9F",800:"#283593",900:"#1A237E",950:"#0d123f"},violet:{50:"#EDE7F6",100:"#D1C4E9",200:"#B39DDB",300:"#9575CD",400:"#7E57C2",500:"#673AB7",600:"#5E35B1",700:"#512DA8",800:"#4527A0",900:"#311B92",950:"#190e49"},purple:{50:"#F3E5F5",100:"#E1BEE7",200:"#CE93D8",300:"#BA68C8",400:"#AB47BC",500:"#9C27B0",600:"#8E24AA",700:"#7B1FA2",800:"#6A1B9A",900:"#4A148C",950:"#250a46"},fuchsia:{50:"#FDE6F3",100:"#FBC1E3",200:"#F897D1",300:"#F56DBF",400:"#F34DB2",500:"#F12DA5",600:"#E0289D",700:"#CC2392",800:"#B81E88",900:"#951777",950:"#4b0c3c"},pink:{50:"#FCE4EC",100:"#F8BBD0",200:"#F48FB1",300:"#F06292",400:"#EC407A",500:"#E91E63",600:"#D81B60",700:"#C2185B",800:"#AD1457",900:"#880E4F",950:"#440728"},rose:{50:"#FFF0F0",100:"#FFD9D9",200:"#FFC0C0",300:"#FFA7A7",400:"#FF8E8E",500:"#FF7575",600:"#FF5252",700:"#FF3838",800:"#F71C1C",900:"#D50000",950:"#3E0000"},slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a",950:"#020617"},gray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827",950:"#030712"},zinc:{50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b",950:"#09090b"},neutral:{50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717",950:"#0a0a0a"},stone:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917",950:"#0c0a09"}},semantic:{transitionDuration:"0.2s",focusRing:{width:"0",style:"none",color:"unset",offset:"0"},disabledOpacity:"0.38",iconSize:"1rem",anchorGutter:"0",primary:{50:"{emerald.50}",100:"{emerald.100}",200:"{emerald.200}",300:"{emerald.300}",400:"{emerald.400}",500:"{emerald.500}",600:"{emerald.600}",700:"{emerald.700}",800:"{emerald.800}",900:"{emerald.900}",950:"{emerald.950}"},formField:{paddingX:"0.75rem",paddingY:"0.75rem",sm:{fontSize:"0.875rem",paddingX:"0.625rem",paddingY:"0.625rem"},lg:{fontSize:"1.125rem",paddingX:"0.825rem",paddingY:"0.825rem"},borderRadius:"{border.radius.sm}",focusRing:{width:"2px",style:"solid",color:"{primary.color}",offset:"-2px",shadow:"none"},transitionDuration:"{transition.duration}"},list:{padding:"0.5rem 0",gap:"0",header:{padding:"0.75rem 1rem"},option:{padding:"0.75rem 1rem",borderRadius:"{border.radius.none}"},optionGroup:{padding:"0.75rem 1rem",fontWeight:"700"}},content:{borderRadius:"{border.radius.sm}"},mask:{transitionDuration:"0.15s"},navigation:{list:{padding:"0.5rem 0",gap:"0"},item:{padding:"0.75rem 1rem",borderRadius:"{border.radius.none}",gap:"0.5rem"},submenuLabel:{padding:"0.75rem 1rem",fontWeight:"700"},submenuIcon:{size:"0.875rem"}},overlay:{select:{borderRadius:"{border.radius.sm}",shadow:"0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12)"},popover:{borderRadius:"{border.radius.sm}",padding:"1rem",shadow:"0 11px 15px -7px rgba(0,0,0,.2), 0 24px 38px 3px rgba(0,0,0,.14), 0 9px 46px 8px rgba(0,0,0,.12)"},modal:{borderRadius:"{border.radius.sm}",padding:"1.5rem",shadow:"0 11px 15px -7px rgba(0,0,0,.2), 0 24px 38px 3px rgba(0,0,0,.14), 0 9px 46px 8px rgba(0,0,0,.12)"},navigation:{shadow:"0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12)"}},colorScheme:{light:{focusRing:{shadow:"0 0 1px 4px {surface.200}"},surface:{0:"#ffffff",50:"{slate.50}",100:"{slate.100}",200:"{slate.200}",300:"{slate.300}",400:"{slate.400}",500:"{slate.500}",600:"{slate.600}",700:"{slate.700}",800:"{slate.800}",900:"{slate.900}",950:"{slate.950}"},primary:{color:"{primary.500}",contrastColor:"#ffffff",hoverColor:"{primary.400}",activeColor:"{primary.300}"},highlight:{background:"color-mix(in srgb, {primary.color}, transparent 88%)",focusBackground:"color-mix(in srgb, {primary.color}, transparent 76%)",color:"{primary.700}",focusColor:"{primary.800}"},mask:{background:"rgba(0,0,0,0.32)",color:"{surface.200}"},formField:{background:"{surface.0}",disabledBackground:"{surface.300}",filledBackground:"{surface.100}",filledHoverBackground:"{surface.200}",filledFocusBackground:"{surface.100}",borderColor:"{surface.400}",hoverBorderColor:"{surface.900}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.800}",color:"{surface.900}",disabledColor:"{surface.600}",placeholderColor:"{surface.600}",invalidPlaceholderColor:"{red.800}",floatLabelColor:"{surface.600}",floatLabelFocusColor:"{primary.600}",floatLabelActiveColor:"{surface.600}",floatLabelInvalidColor:"{form.field.invalid.placeholder.color}",iconColor:"{surface.600}",shadow:"none"},text:{color:"{surface.900}",hoverColor:"{surface.900}",mutedColor:"{surface.600}",hoverMutedColor:"{surface.600}"},content:{background:"{surface.0}",hoverBackground:"{surface.100}",borderColor:"{surface.300}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.0}",borderColor:"{surface.0}",color:"{text.color}"},popover:{background:"{surface.0}",borderColor:"{surface.0}",color:"{text.color}"},modal:{background:"{surface.0}",borderColor:"{surface.0}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.100}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.600}",focusColor:"{surface.600}"}},optionGroup:{background:"transparent",color:"{text.color}"}},navigation:{item:{focusBackground:"{surface.100}",activeBackground:"{surface.200}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.600}",focusColor:"{surface.600}",activeColor:"{surface.600}"}},submenuLabel:{background:"transparent",color:"{text.color}"},submenuIcon:{color:"{surface.600}",focusColor:"{surface.600}",activeColor:"{surface.600}"}}},dark:{focusRing:{shadow:"0 0 1px 4px {surface.700}"},surface:{0:"#ffffff",50:"{zinc.50}",100:"{zinc.100}",200:"{zinc.200}",300:"{zinc.300}",400:"{zinc.400}",500:"{zinc.500}",600:"{zinc.600}",700:"{zinc.700}",800:"{zinc.800}",900:"{zinc.900}",950:"{zinc.950}"},primary:{color:"{primary.400}",contrastColor:"{surface.900}",hoverColor:"{primary.300}",activeColor:"{primary.200}"},highlight:{background:"color-mix(in srgb, {primary.400}, transparent 84%)",focusBackground:"color-mix(in srgb, {primary.400}, transparent 76%)",color:"rgba(255,255,255,.87)",focusColor:"rgba(255,255,255,.87)"},mask:{background:"rgba(0,0,0,0.6)",color:"{surface.200}"},formField:{background:"{surface.950}",disabledBackground:"{surface.700}",filledBackground:"{surface.800}",filledHoverBackground:"{surface.700}",filledFocusBackground:"{surface.800}",borderColor:"{surface.600}",hoverBorderColor:"{surface.400}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.300}",color:"{surface.0}",disabledColor:"{surface.400}",placeholderColor:"{surface.400}",invalidPlaceholderColor:"{red.300}",floatLabelColor:"{surface.400}",floatLabelFocusColor:"{primary.color}",floatLabelActiveColor:"{surface.400}",floatLabelInvalidColor:"{form.field.invalid.placeholder.color}",iconColor:"{surface.400}",shadow:"none"},text:{color:"{surface.0}",hoverColor:"{surface.0}",mutedColor:"{surface.400}",hoverMutedColor:"{surface.400}"},content:{background:"{surface.900}",hoverBackground:"{surface.800}",borderColor:"{surface.700}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.900}",borderColor:"{surface.900}",color:"{text.color}"},popover:{background:"{surface.900}",borderColor:"{surface.900}",color:"{text.color}"},modal:{background:"{surface.900}",borderColor:"{surface.900}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.800}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.400}",focusColor:"{surface.400}"}},optionGroup:{background:"transparent",color:"{text.muted.color}"}},navigation:{item:{focusBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.400}",focusColor:"{surface.400}",activeColor:"{surface.400}"}},submenuLabel:{background:"transparent",color:"{text.muted.color}"},submenuIcon:{color:"{surface.400}",focusColor:"{surface.400}",activeColor:"{surface.400}"}}}}}};var wt={root:{borderRadius:"{content.border.radius}"}};var It={root:{padding:"1rem",background:"{content.background}",gap:"0.5rem",transitionDuration:"{transition.duration}"},item:{color:"{text.muted.color}",hoverColor:"{text.color}",borderRadius:"{content.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",hoverColor:"{navigation.item.icon.focus.color}"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},separator:{color:"{navigation.item.icon.color}"}};var St={root:{borderRadius:"{form.field.border.radius}",roundedBorderRadius:"2rem",gap:"0.5rem",paddingX:"1rem",paddingY:"0.625rem",iconOnlyWidth:"3rem",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}",iconOnlyWidth:"2.5rem"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}",iconOnlyWidth:"3.5rem"},label:{fontWeight:"500"},raisedShadow:"0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"},badgeSize:"1rem",transitionDuration:"{form.field.transition.duration}"},colorScheme:{light:{root:{primary:{background:"{primary.color}",hoverBackground:"{primary.hover.color}",activeBackground:"{primary.active.color}",borderColor:"{primary.color}",hoverBorderColor:"{primary.hover.color}",activeBorderColor:"{primary.active.color}",color:"{primary.contrast.color}",hoverColor:"{primary.contrast.color}",activeColor:"{primary.contrast.color}",focusRing:{color:"{primary.color}",shadow:"none"}},secondary:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",borderColor:"{surface.100}",hoverBorderColor:"{surface.200}",activeBorderColor:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}",focusRing:{color:"{surface.600}",shadow:"none"}},info:{background:"{sky.500}",hoverBackground:"{sky.400}",activeBackground:"{sky.300}",borderColor:"{sky.500}",hoverBorderColor:"{sky.400}",activeBorderColor:"{sky.300}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{sky.500}",shadow:"none"}},success:{background:"{green.500}",hoverBackground:"{green.400}",activeBackground:"{green.300}",borderColor:"{green.500}",hoverBorderColor:"{green.400}",activeBorderColor:"{green.300}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{green.500}",shadow:"none"}},warn:{background:"{orange.500}",hoverBackground:"{orange.400}",activeBackground:"{orange.300}",borderColor:"{orange.500}",hoverBorderColor:"{orange.400}",activeBorderColor:"{orange.300}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{orange.500}",shadow:"none"}},help:{background:"{purple.500}",hoverBackground:"{purple.400}",activeBackground:"{purple.300}",borderColor:"{purple.500}",hoverBorderColor:"{purple.400}",activeBorderColor:"{purple.300}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{purple.500}",shadow:"none"}},danger:{background:"{red.500}",hoverBackground:"{red.400}",activeBackground:"{red.300}",borderColor:"{red.500}",hoverBorderColor:"{red.400}",activeBorderColor:"{red.300}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{red.500}",shadow:"none"}},contrast:{background:"{surface.950}",hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.950}",hoverBorderColor:"{surface.800}",activeBorderColor:"{surface.700}",color:"{surface.0}",hoverColor:"{surface.0}",activeColor:"{surface.0}",focusRing:{color:"{surface.950}",shadow:"none"}}},outlined:{primary:{hoverBackground:"{primary.50}",activeBackground:"{primary.100}",borderColor:"{primary.color}",color:"{primary.color}"},secondary:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.600}",color:"{surface.600}"},success:{hoverBackground:"{green.50}",activeBackground:"{green.100}",borderColor:"{green.500}",color:"{green.500}"},info:{hoverBackground:"{sky.50}",activeBackground:"{sky.100}",borderColor:"{sky.500}",color:"{sky.500}"},warn:{hoverBackground:"{orange.50}",activeBackground:"{orange.100}",borderColor:"{orange.500}",color:"{orange.500}"},help:{hoverBackground:"{purple.50}",activeBackground:"{purple.100}",borderColor:"{purple.500}",color:"{purple.500}"},danger:{hoverBackground:"{red.50}",activeBackground:"{red.100}",borderColor:"{red.500}",color:"{red.500}"},contrast:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.950}",color:"{surface.950}"},plain:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.900}",color:"{surface.900}"}},text:{primary:{hoverBackground:"{primary.50}",activeBackground:"{primary.100}",color:"{primary.color}"},secondary:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.600}"},success:{hoverBackground:"{green.50}",activeBackground:"{green.100}",color:"{green.500}"},info:{hoverBackground:"{sky.50}",activeBackground:"{sky.100}",color:"{sky.500}"},warn:{hoverBackground:"{orange.50}",activeBackground:"{orange.100}",color:"{orange.500}"},help:{hoverBackground:"{purple.50}",activeBackground:"{purple.100}",color:"{purple.500}"},danger:{hoverBackground:"{red.50}",activeBackground:"{red.100}",color:"{red.500}"},contrast:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.950}"},plain:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.900}"}},link:{color:"{primary.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}},dark:{root:{primary:{background:"{primary.color}",hoverBackground:"{primary.hover.color}",activeBackground:"{primary.active.color}",borderColor:"{primary.color}",hoverBorderColor:"{primary.hover.color}",activeBorderColor:"{primary.active.color}",color:"{primary.contrast.color}",hoverColor:"{primary.contrast.color}",activeColor:"{primary.contrast.color}",focusRing:{color:"{primary.color}",shadow:"none"}},secondary:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",borderColor:"{surface.800}",hoverBorderColor:"{surface.700}",activeBorderColor:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}",focusRing:{color:"{surface.300}",shadow:"none"}},info:{background:"{sky.400}",hoverBackground:"{sky.300}",activeBackground:"{sky.200}",borderColor:"{sky.400}",hoverBorderColor:"{sky.300}",activeBorderColor:"{sky.200}",color:"{sky.950}",hoverColor:"{sky.950}",activeColor:"{sky.950}",focusRing:{color:"{sky.400}",shadow:"none"}},success:{background:"{green.400}",hoverBackground:"{green.300}",activeBackground:"{green.200}",borderColor:"{green.400}",hoverBorderColor:"{green.300}",activeBorderColor:"{green.200}",color:"{green.950}",hoverColor:"{green.950}",activeColor:"{green.950}",focusRing:{color:"{green.400}",shadow:"none"}},warn:{background:"{orange.400}",hoverBackground:"{orange.300}",activeBackground:"{orange.200}",borderColor:"{orange.400}",hoverBorderColor:"{orange.300}",activeBorderColor:"{orange.200}",color:"{orange.950}",hoverColor:"{orange.950}",activeColor:"{orange.950}",focusRing:{color:"{orange.400}",shadow:"none"}},help:{background:"{purple.400}",hoverBackground:"{purple.300}",activeBackground:"{purple.200}",borderColor:"{purple.400}",hoverBorderColor:"{purple.300}",activeBorderColor:"{purple.200}",color:"{purple.950}",hoverColor:"{purple.950}",activeColor:"{purple.950}",focusRing:{color:"{purple.400}",shadow:"none"}},danger:{background:"{red.400}",hoverBackground:"{red.300}",activeBackground:"{red.200}",borderColor:"{red.400}",hoverBorderColor:"{red.300}",activeBorderColor:"{red.200}",color:"{red.950}",hoverColor:"{red.950}",activeColor:"{red.950}",focusRing:{color:"{red.400}",shadow:"none"}},contrast:{background:"{surface.0}",hoverBackground:"{surface.100}",activeBackground:"{surface.200}",borderColor:"{surface.0}",hoverBorderColor:"{surface.100}",activeBorderColor:"{surface.200}",color:"{surface.950}",hoverColor:"{surface.950}",activeColor:"{surface.950}",focusRing:{color:"{surface.0}",shadow:"none"}}},outlined:{primary:{hoverBackground:"color-mix(in srgb, {primary.color}, transparent 96%)",activeBackground:"color-mix(in srgb, {primary.color}, transparent 84%)",borderColor:"{primary.700}",color:"{primary.color}"},secondary:{hoverBackground:"rgba(255,255,255,0.04)",activeBackground:"rgba(255,255,255,0.16)",borderColor:"{surface.700}",color:"{surface.400}"},success:{hoverBackground:"color-mix(in srgb, {green.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {green.400}, transparent 84%)",borderColor:"{green.700}",color:"{green.400}"},info:{hoverBackground:"color-mix(in srgb, {sky.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {sky.400}, transparent 84%)",borderColor:"{sky.700}",color:"{sky.400}"},warn:{hoverBackground:"color-mix(in srgb, {orange.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {orange.400}, transparent 84%)",borderColor:"{orange.700}",color:"{orange.400}"},help:{hoverBackground:"color-mix(in srgb, {purple.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {purple.400}, transparent 84%)",borderColor:"{purple.700}",color:"{purple.400}"},danger:{hoverBackground:"color-mix(in srgb, {red.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {red.400}, transparent 84%)",borderColor:"{red.700}",color:"{red.400}"},contrast:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.500}",color:"{surface.0}"},plain:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.600}",color:"{surface.0}"}},text:{primary:{hoverBackground:"color-mix(in srgb, {primary.color}, transparent 96%)",activeBackground:"color-mix(in srgb, {primary.color}, transparent 84%)",color:"{primary.color}"},secondary:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.400}"},success:{hoverBackground:"color-mix(in srgb, {green.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {green.400}, transparent 84%)",color:"{green.400}"},info:{hoverBackground:"color-mix(in srgb, {sky.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {sky.400}, transparent 84%)",color:"{sky.400}"},warn:{hoverBackground:"color-mix(in srgb, {orange.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {orange.400}, transparent 84%)",color:"{orange.400}"},help:{hoverBackground:"color-mix(in srgb, {purple.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {purple.400}, transparent 84%)",color:"{purple.400}"},danger:{hoverBackground:"color-mix(in srgb, {red.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {red.400}, transparent 84%)",color:"{red.400}"},contrast:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.0}"},plain:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.0}"}},link:{color:"{primary.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}}},css:({dt:e})=>`
.p-button:focus-visible {
    background: ${e("button.primary.active.background")};
    border-color: ${e("button.primary.active.background")};
}

.p-button-secondary:focus-visible {
    background: ${e("button.secondary.active.background")};
    border-color: ${e("button.secondary.active.background")};
}

.p-button-success:focus-visible {
    background: ${e("button.success.active.background")};
    border-color: ${e("button.success.active.background")};
}

.p-button-info:focus-visible {
    background: ${e("button.info.active.background")};
    border-color: ${e("button.info.active.background")};
}

.p-button-warn:focus-visible {
    background: ${e("button.warn.active.background")};
    border-color: ${e("button.warn.active.background")};
}

.p-button-help:focus-visible {
    background: ${e("button.help.active.background")};
    border-color: ${e("button.help.active.background")};
}

.p-button-danger:focus-visible {
    background: ${e("button.danger.active.background")};
    border-color: ${e("button.danger.active.background")};
}

.p-button-contrast:focus-visible {
    background: ${e("button.contrast.active.background")};
    border-color: ${e("button.contrast.active.background")};
}

.p-button-link:focus-visible {
    background: color-mix(in srgb, ${e("primary.color")}, transparent 84%);
    border-color: transparent;
}

.p-button-text:focus-visible {
    background: ${e("button.text.primary.active.background")};
    border-color: transparent;
}

.p-button-secondary.p-button-text:focus-visible {
    background: ${e("button.text.secondary.active.background")};
    border-color: transparent;
}

.p-button-success.p-button-text:focus-visible {
    background: ${e("button.text.success.active.background")};
    border-color: transparent;
}

.p-button-info.p-button-text:focus-visible {
    background: ${e("button.text.info.active.background")};
    border-color: transparent;
}

.p-button-warn.p-button-text:focus-visible {
    background: ${e("button.text.warn.active.background")};
    border-color: transparent;
}

.p-button-help.p-button-text:focus-visible {
    background: ${e("button.text.help.active.background")};
    border-color: transparent;
}

.p-button-danger.p-button-text:focus-visible {
    background: ${e("button.text.danger.active.background")};
    border-color: transparent;
}

.p-button-contrast.p-button-text:focus-visible {
    background: ${e("button.text.contrast.active.background")};
    border-color: transparent;
}

.p-button-plain.p-button-text:focus-visible {
    background: ${e("button.text.plain.active.background")};
    border-color: transparent;
}

.p-button-outlined:focus-visible {
    background: ${e("button.outlined.primary.active.background")};
}

.p-button-secondary.p-button-outlined:focus-visible {
    background: ${e("button.outlined.secondary.active.background")};
    border-color: ${e("button.outlined.secondary.border.color")};
}

.p-button-success.p-button-outlined:focus-visible {
    background: ${e("button.outlined.success.active.background")};
}

.p-button-info.p-button-outlined:focus-visible {
    background: ${e("button.outlined.info.active.background")};
}

.p-button-warn.p-button-outlined:focus-visible {
    background: ${e("button.outlined.warn.active.background")};
}

.p-button-help.p-button-outlined:focus-visible {
    background: ${e("button.outlined.help.active.background")};
}

.p-button-danger.p-button-outlined:focus-visible {
    background: ${e("button.outlined.danger.active.background")};
}

.p-button-contrast.p-button-outlined:focus-visible {
    background: ${e("button.outlined.contrast.active.background")};
}

.p-button-plain.p-button-outlined:focus-visible {
    background: ${e("button.outlined.plain.active.background")};
}
`};var Bt={root:{background:"{content.background}",borderRadius:"{content.border.radius}",color:"{content.color}",shadow:"0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)"},body:{padding:"1.5rem",gap:"0.75rem"},caption:{gap:"0.5rem"},title:{fontSize:"1.25rem",fontWeight:"500"},subtitle:{color:"{text.muted.color}"}};var Mt={root:{transitionDuration:"{transition.duration}"},content:{gap:"0.25rem"},indicatorList:{padding:"1rem",gap:"1rem"},indicator:{width:"1.25rem",height:"1.25rem",borderRadius:"50%",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},colorScheme:{light:{indicator:{background:"{surface.200}",hoverBackground:"{surface.300}",activeBackground:"{primary.color}"}},dark:{indicator:{background:"{surface.700}",hoverBackground:"{surface.600}",activeBackground:"{primary.color}"}}},css:({dt:e})=>`
.p-carousel-indicator-button:hover {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("text.color")}, transparent 96%)
}

.p-carousel-indicator-button:focus-visible {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("text.color")}, transparent 96%);
}

.p-carousel-indicator-active .p-carousel-indicator-button:hover {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("carousel.indicator.active.background")}, transparent 92%);
}

.p-carousel-indicator-active .p-carousel-indicator-button:focus-visible {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("carousel.indicator.active.background")}, transparent 84%);
}
`};var Tt={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}",mobileIndent:"1rem"},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}",icon:{color:"{list.option.icon.color}",focusColor:"{list.option.icon.focus.color}",size:"0.875rem"}},clearIcon:{color:"{form.field.icon.color}"},css:({dt:e})=>`
.p-cascadeselect.p-variant-filled {
    border-end-start-radius: 0
    border-end-end-radius: 0;
    border: 1px solid transparent;
    background: ${e("cascadeselect.filled.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("cascadeselect.focus.border.color")}, ${e("cascadeselect.focus.border.color")}), linear-gradient(to bottom, ${e("cascadeselect.border.color")}, ${e("cascadeselect.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
}

.p-cascadeselect.p-variant-filled:not(.p-disabled):hover {
    background: ${e("cascadeselect.filled.hover.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("cascadeselect.focus.border.color")}, ${e("cascadeselect.focus.border.color")}), linear-gradient(to bottom, ${e("cascadeselect.hover.border.color")}, ${e("cascadeselect.hover.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-cascadeselect.p-variant-filled:not(.p-disabled).p-focus {
    outline: 0 none;
    background: ${e("cascadeselect.filled.focus.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("cascadeselect.focus.border.color")}, ${e("cascadeselect.focus.border.color")}), linear-gradient(to bottom, ${e("cascadeselect.border.color")}, ${e("cascadeselect.border.color")});
    background-size: 100% 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-cascadeselect.p-variant-filled:not(.p-disabled).p-focus:hover {
    background-image: linear-gradient(to bottom, ${e("cascadeselect.focus.border.color")}, ${e("cascadeselect.focus.border.color")}), linear-gradient(to bottom, ${e("cascadeselect.hover.border.color")}, ${e("cascadeselect.hover.border.color")});
}

.p-cascadeselect.p-variant-filled.p-invalid {
    background-image: linear-gradient(to bottom, ${e("cascadeselect.invalid.border.color")}, ${e("cascadeselect.invalid.border.color")}), linear-gradient(to bottom, ${e("cascadeselect.invalid.border.color")}, ${e("cascadeselect.invalid.border.color")});
}

.p-cascadeselect.p-variant-filled.p-invalid:not(.p-disabled).p-focus  {
    background-image: linear-gradient(to bottom, ${e("cascadeselect.invalid.border.color")}, ${e("cascadeselect.invalid.border.color")}), linear-gradient(to bottom, ${e("cascadeselect.invalid.border.color")}, ${e("cascadeselect.invalid.border.color")});
}

.p-cascadeselect-option {
    transition: none;
}
`};var $t={root:{borderRadius:"{border.radius.xs}",width:"18px",height:"18px",background:"{form.field.background}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.color}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.color}",checkedFocusBorderColor:"{primary.color}",checkedDisabledBorderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",shadow:"{form.field.shadow}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"},transitionDuration:"{form.field.transition.duration}",sm:{width:"14px",height:"14px"},lg:{width:"22px",height:"22px"}},icon:{size:"0.875rem",color:"{form.field.color}",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}",disabledColor:"{form.field.disabled.color}",sm:{size:"0.75rem"},lg:{size:"1rem"}},css:({dt:e})=>`
.p-checkbox {
    border-radius: 50%;
    transition: box-shadow ${e("checkbox.transition.duration")};
}

.p-checkbox-box {
    border-width: 2px;
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("text.color")}, transparent 96%);
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("text.color")}, transparent 88%);
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("checkbox.checked.background")}, transparent 92%);
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("checkbox.checked.background")}, transparent 84%);
}

.p-checkbox-checked .p-checkbox-box:before  {
    content: "";
    position: absolute;
    top: var(--p-md-check-icon-t);
    left: 2px;
    border-right: 2px solid transparent;
    border-bottom: 2px solid transparent;
    transform: rotate(45deg);
    transform-origin: 0% 100%;
    animation: p-md-check 125ms 50ms linear forwards;
}

.p-checkbox-checked .p-checkbox-icon {
    display: none;
}

.p-checkbox {
    --p-md-check-icon-t: 10px;
    --p-md-check-icon-w: 6px;
    --p-md-check-icon-h: 12px;
}

.p-checkbox-sm {
    --p-md-check-icon-t: 8px;
    --p-md-check-icon-w: 4px;
    --p-md-check-icon-h: 10px;
}

.p-checkbox-lg {
    --p-md-check-icon-t: 12px;
    --p-md-check-icon-w: 8px;
    --p-md-check-icon-h: 16px;
}

@keyframes p-md-check {
    0%{
      width: 0;
      height: 0;
      border-color: ${e("checkbox.icon.checked.color")};
      transform: translate3d(0,0,0) rotate(45deg);
    }
    33%{
      width: var(--p-md-check-icon-w);
      height: 0;
      transform: translate3d(0,0,0) rotate(45deg);
    }
    100%{
      width: var(--p-md-check-icon-w);
      height: var(--p-md-check-icon-h);
      border-color: ${e("checkbox.icon.checked.color")};
      transform: translate3d(0,calc(-1 * var(--p-md-check-icon-h)),0) rotate(45deg);
    }
}
`};var Ft={root:{borderRadius:"2rem",paddingX:"0.75rem",paddingY:"0.75rem",gap:"0.5rem",transitionDuration:"{transition.duration}"},image:{width:"2.25rem",height:"2.25rem"},icon:{size:"1rem"},removeIcon:{size:"1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}"}},colorScheme:{light:{root:{background:"{surface.200}",color:"{surface.900}"},icon:{color:"{surface.600}"},removeIcon:{color:"{surface.600}",focusRing:{shadow:"0 0 1px 4px {surface.300}"}}},dark:{root:{background:"{surface.700}",color:"{surface.0}"},icon:{color:"{surface.0}"},removeIcon:{color:"{surface.0}",focusRing:{shadow:"0 0 1px 4px {surface.600}"}}}}};var Rt={root:{transitionDuration:"{transition.duration}"},preview:{width:"2rem",height:"2rem",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},panel:{shadow:"{overlay.popover.shadow}",borderRadius:"{overlay.popover.borderRadius}"},colorScheme:{light:{panel:{background:"{surface.800}",borderColor:"{surface.900}"},handle:{color:"{surface.0}"}},dark:{panel:{background:"{surface.900}",borderColor:"{surface.700}"},handle:{color:"{surface.0}"}}}};var Et={icon:{size:"2rem",color:"{overlay.modal.color}"},content:{gap:"1rem"}};var Lt={root:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",color:"{overlay.popover.color}",borderRadius:"{overlay.popover.border.radius}",shadow:"{overlay.popover.shadow}",gutter:"10px",arrowOffset:"1.25rem"},content:{padding:"{overlay.popover.padding}",gap:"1rem"},icon:{size:"1.5rem",color:"{overlay.popover.color}"},footer:{gap:"0.5rem",padding:"0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}"}};var Dt={root:{background:"{content.background}",borderColor:"transparent",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},list:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},submenu:{mobileIndent:"1rem"},submenuIcon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},separator:{borderColor:"{content.border.color}"}};var zt={root:{transitionDuration:"{transition.duration}"},header:{background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem",sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},headerCell:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{datatable.border.color}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",gap:"0.5rem",padding:"0.75rem 1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"},sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},columnTitle:{fontWeight:"600"},row:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},bodyCell:{borderColor:"{datatable.border.color}",padding:"0.75rem 1rem",sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},footerCell:{background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",padding:"0.75rem 1rem",sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},columnFooter:{fontWeight:"600"},footer:{background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem",sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},dropPoint:{color:"{primary.color}"},columnResizer:{width:"0.5rem"},resizeIndicator:{width:"1px",color:"{primary.color}"},sortIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",size:"0.875rem"},loadingIcon:{size:"2rem"},rowToggleButton:{hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",selectedHoverColor:"{primary.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},filter:{inlineGap:"0.5rem",overlaySelect:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},overlayPopover:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",borderRadius:"{overlay.popover.border.radius}",color:"{overlay.popover.color}",shadow:"{overlay.popover.shadow}",padding:"{overlay.popover.padding}",gap:"0.5rem"},rule:{borderColor:"{content.border.color}"},constraintList:{padding:"{list.padding}",gap:"{list.gap}"},constraint:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",separator:{borderColor:"{content.border.color}"},padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"}},paginatorTop:{borderColor:"{datatable.border.color}",borderWidth:"0 0 1px 0"},paginatorBottom:{borderColor:"{datatable.border.color}",borderWidth:"0 0 1px 0"},colorScheme:{light:{root:{borderColor:"{content.border.color}"},row:{stripedBackground:"{surface.50}"},bodyCell:{selectedBorderColor:"{primary.100}"}},dark:{root:{borderColor:"{surface.800}"},row:{stripedBackground:"{surface.950}"},bodyCell:{selectedBorderColor:"{primary.900}"}}},css:({dt:e})=>`
.p-datatable-header-cell,
.p-datatable-tbody > tr {
    transition: none
}
`};var At={root:{borderColor:"transparent",borderWidth:"0",borderRadius:"0",padding:"0"},header:{background:"{content.background}",color:"{content.color}",borderColor:"{content.border.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem",borderRadius:"0"},content:{background:"{content.background}",color:"{content.color}",borderColor:"transparent",borderWidth:"0",padding:"0",borderRadius:"0"},footer:{background:"{content.background}",color:"{content.color}",borderColor:"{content.border.color}",borderWidth:"1px 0 0 0",padding:"0.75rem 1rem",borderRadius:"0"},paginatorTop:{borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},paginatorBottom:{borderColor:"{content.border.color}",borderWidth:"1px 0 0 0"}};var Pt={root:{transitionDuration:"{transition.duration}"},panel:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.popover.shadow}",padding:"0.5rem"},header:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",padding:"0 0 0.5rem 0"},title:{gap:"0.5rem",fontWeight:"700"},dropdown:{width:"3rem",sm:{width:"2.5rem"},lg:{width:"3.5rem"},borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",borderRadius:"{form.field.border.radius}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"n\u0131ne"}},inputIcon:{color:"{form.field.icon.color}"},selectMonth:{hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",padding:"0.5rem 0.75rem",borderRadius:"{content.border.radius}"},selectYear:{hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",padding:"0.5rem 0.75rem",borderRadius:"{content.border.radius}"},group:{borderColor:"{content.border.color}",gap:"{overlay.popover.padding}"},dayView:{margin:"0.5rem 0 0 0"},weekDay:{padding:"0.5rem",fontWeight:"700",color:"{content.color}"},date:{hoverBackground:"{content.hover.background}",selectedBackground:"{primary.color}",rangeSelectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{primary.contrast.color}",rangeSelectedColor:"{highlight.color}",width:"2.5rem",height:"2.5rem",borderRadius:"50%",padding:"0.125rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},monthView:{margin:"0.5rem 0 0 0"},month:{padding:"0.625rem",borderRadius:"{content.border.radius}"},yearView:{margin:"0.5rem 0 0 0"},year:{padding:"0.625rem",borderRadius:"{content.border.radius}"},buttonbar:{padding:"0.5rem 0 0 0",borderColor:"{content.border.color}"},timePicker:{padding:"0.5rem 0 0 0",borderColor:"{content.border.color}",gap:"0.5rem",buttonGap:"0.25rem"},colorScheme:{light:{dropdown:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}"},today:{background:"{surface.200}",color:"{surface.900}"}},dark:{dropdown:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}"},today:{background:"{surface.700}",color:"{surface.0}"}}},css:({dt:e})=>`
.p-datepicker-header {
    justify-content: start
}

.p-datepicker-title {
    order: 1;
}

.p-datepicker-prev-button {
    order: 2;
    margin-inline-start: auto;
}

.p-datepicker-next-button {
    order: 2;
    margin-inline-start: 0.5rem;
}

.p-datepicker-select-month:focus-visible {
    background: ${e("datepicker.select.month.hover.background")};
    color: ${e("datepicker.select.month.hover.color")};
    outline: 0 none;
}

.p-datepicker-select-year:focus-visible {
    background: ${e("datepicker.select.year.hover.background")};
    color: ${e("datepicker.select.year.hover.color")};
    outline: 0 none;
}

.p-datepicker-dropdown:focus-visible {
    outline: 0 none;
    background: ${e("datepicker.dropdown.hover.background")};
    border-color: ${e("datepicker.dropdown.hover.border.color")};
    color: ${e("datepicker.dropdown.hover.color")};
}

.p-datepicker:has(.p-variant-filled) .p-datepicker-dropdown {
    border-top-color: transparent;
    border-right-color: transparent;
}
`};var Vt={root:{background:"{overlay.modal.background}",borderColor:"{overlay.modal.border.color}",color:"{overlay.modal.color}",borderRadius:"{overlay.modal.border.radius}",shadow:"{overlay.modal.shadow}"},header:{padding:"{overlay.modal.padding}",gap:"0.5rem"},title:{fontSize:"1.25rem",fontWeight:"600"},content:{padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"},footer:{padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}",gap:"0.5rem"}};var Ht={root:{borderColor:"{content.border.color}"},content:{background:"{content.background}",color:"{text.color}"},horizontal:{margin:"1rem 0",padding:"0 1rem",content:{padding:"0 0.5rem"}},vertical:{margin:"0 1rem",padding:"0.5rem 0",content:{padding:"0.5rem 0"}}};var Ot={root:{background:"rgba(255, 255, 255, 0.1)",borderColor:"rgba(255, 255, 255, 0.2)",padding:"0.5rem",borderRadius:"{border.radius.xl}"},item:{borderRadius:"{content.border.radius}",padding:"0.5rem",size:"3rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}};var Wt={root:{background:"{overlay.modal.background}",borderColor:"{overlay.modal.border.color}",color:"{overlay.modal.color}",shadow:"{overlay.modal.shadow}"},header:{padding:"{overlay.modal.padding}"},title:{fontSize:"1.5rem",fontWeight:"600"},content:{padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"},footer:{padding:"{overlay.modal.padding}"}};var Nt={toolbar:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}"},toolbarItem:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}",padding:"{list.padding}"},overlayOption:{focusBackground:"{list.option.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},content:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},css:({dt:e})=>`
.p-editor .p-editor-toolbar {
    padding: 0.75rem
}
`};var Qt={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",padding:"0 1.25rem 1.25rem 1.25rem",transitionDuration:"{transition.duration}"},legend:{background:"{content.background}",hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",borderRadius:"{content.border.radius}",borderWidth:"1px",borderColor:"transparent",padding:"0.75rem 1rem",gap:"0.5rem",fontWeight:"600",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},toggleIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}"},content:{padding:"0"},css:({dt:e})=>`
.p-fieldset-toggle-button:focus-visible {
    background: ${e("navigation.item.active.background")}

}
`};var jt={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",transitionDuration:"{transition.duration}"},header:{background:"transparent",color:"{text.color}",padding:"1.25rem",borderColor:"unset",borderWidth:"0",borderRadius:"0",gap:"0.5rem"},content:{highlightBorderColor:"{primary.color}",padding:"0 1.25rem 1.25rem 1.25rem",gap:"1rem"},file:{padding:"1rem",gap:"1rem",borderColor:"{content.border.color}",info:{gap:"0.5rem"}},fileList:{gap:"0.5rem"},progressbar:{height:"0.25rem"},basic:{gap:"0.5rem"}};var qt={root:{color:"{form.field.float.label.color}",focusColor:"{form.field.float.label.focus.color}",activeColor:"{form.field.float.label.active.color}",invalidColor:"{form.field.float.label.invalid.color}",transitionDuration:"0.2s",positionX:"{form.field.padding.x}",positionY:"{form.field.padding.y}",fontWeight:"500",active:{fontSize:"0.75rem",fontWeight:"400"}},over:{active:{top:"-1.25rem"}},in:{input:{paddingTop:"1.5rem",paddingBottom:"0.5rem"},active:{top:"0.5rem"}},on:{borderRadius:"{border.radius.xs}",active:{background:"{form.field.background}",padding:"0 0.125rem"}}};var Kt={root:{borderWidth:"1px",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",transitionDuration:"{transition.duration}"},navButton:{background:"rgba(255, 255, 255, 0.1)",hoverBackground:"rgba(255, 255, 255, 0.2)",color:"{surface.100}",hoverColor:"{surface.0}",size:"3rem",gutter:"0.5rem",prev:{borderRadius:"50%"},next:{borderRadius:"50%"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},navIcon:{size:"1.5rem"},thumbnailsContent:{background:"{content.background}",padding:"1rem 0.25rem"},thumbnailNavButton:{size:"2rem",borderRadius:"50%",gutter:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},thumbnailNavButtonIcon:{size:"1rem"},caption:{background:"rgba(0, 0, 0, 0.5)",color:"{surface.100}",padding:"1rem"},indicatorList:{gap:"0.5rem",padding:"1rem"},indicatorButton:{width:"1rem",height:"1rem",activeBackground:"{primary.color}",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},insetIndicatorList:{background:"rgba(0, 0, 0, 0.5)"},insetIndicatorButton:{background:"rgba(255, 255, 255, 0.4)",hoverBackground:"rgba(255, 255, 255, 0.6)",activeBackground:"rgba(255, 255, 255, 0.9)"},closeButton:{size:"3rem",gutter:"0.5rem",background:"rgba(255, 255, 255, 0.1)",hoverBackground:"rgba(255, 255, 255, 0.2)",color:"{surface.50}",hoverColor:"{surface.0}",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},closeButtonIcon:{size:"1.5rem"},colorScheme:{light:{thumbnailNavButton:{hoverBackground:"{surface.100}",color:"{surface.600}",hoverColor:"{surface.700}"},indicatorButton:{background:"{surface.200}",hoverBackground:"{surface.300}"}},dark:{thumbnailNavButton:{hoverBackground:"{surface.700}",color:"{surface.400}",hoverColor:"{surface.0}"},indicatorButton:{background:"{surface.700}",hoverBackground:"{surface.600}"}}}};var Gt={icon:{color:"{form.field.icon.color}"}};var Ut={root:{color:"{form.field.float.label.color}",focusColor:"{form.field.float.label.focus.color}",invalidColor:"{form.field.float.label.invalid.color}",transitionDuration:"0.2s",positionX:"{form.field.padding.x}",top:"0.5rem",fontSize:"0.75rem",fontWeight:"400"},input:{paddingTop:"1.5rem",paddingBottom:"0.5rem"}};var Zt={root:{transitionDuration:"{transition.duration}"},preview:{icon:{size:"1.5rem"},mask:{background:"{mask.background}",color:"{mask.color}"}},toolbar:{position:{left:"auto",right:"1rem",top:"1rem",bottom:"auto"},blur:"8px",background:"rgba(255,255,255,0.1)",borderColor:"rgba(255,255,255,0.2)",borderWidth:"1px",borderRadius:"30px",padding:".5rem",gap:"0.5rem"},action:{hoverBackground:"rgba(255,255,255,0.1)",color:"{surface.50}",hoverColor:"{surface.0}",size:"3rem",iconSize:"1.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}};var Yt={handle:{size:"20px",hoverSize:"40px",background:"rgba(255,255,255,0.4)",hoverBackground:"rgba(255,255,255,0.6)",borderColor:"unset",hoverBorderColor:"unset",borderWidth:"0",borderRadius:"50%",transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"rgba(255,255,255,0.3)",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}};var Xt={root:{padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{content.border.radius}",gap:"0.5rem"},text:{fontWeight:"500"},icon:{size:"1rem"},colorScheme:{light:{info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"}},dark:{info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"}}}};var Jt={root:{padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{transition.duration}"},display:{hoverBackground:"{content.hover.background}",hoverColor:"{content.hover.color}"}};var ei={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},chip:{borderRadius:"{border.radius.sm}"},colorScheme:{light:{chip:{focusBackground:"{surface.200}",color:"{surface.800}"}},dark:{chip:{focusBackground:"{surface.700}",color:"{surface.0}"}}}};var oi={addon:{background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.icon.color}",borderRadius:"{form.field.border.radius}",padding:"0.75rem",minWidth:"3rem"},css:({dt:e})=>`
.p-inputgroup:has(.p-variant-filled) .p-inputgroupaddon {
    border-block-start-color: ${e("inputtext.filled.background")};
    border-inline-color: ${e("inputtext.filled.background")};
    background: ${e("inputtext.filled.background")} no-repeat;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}
    `};var ri={root:{transitionDuration:"{transition.duration}"},button:{width:"3rem",borderRadius:"{form.field.border.radius}",verticalPadding:"{form.field.padding.y}"},colorScheme:{light:{button:{background:"transparent",hoverBackground:"{surface.100}",activeBackground:"{surface.200}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.400}",hoverColor:"{surface.500}",activeColor:"{surface.600}"}},dark:{button:{background:"transparent",hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.400}",hoverColor:"{surface.300}",activeColor:"{surface.200}"}}},css:({dt:e})=>`
.p-inputnumber-stacked .p-inputnumber-button-group {
    top: 2px;
    right: 2px;
    height: calc(100% - 4px);
}

.p-inputnumber-horizontal:has(.p-variant-filled) .p-inputnumber-button {
    border-block-start-color: ${e("inputtext.filled.background")};
    border-inline-color: ${e("inputtext.filled.background")};
    background: ${e("inputtext.filled.background")} no-repeat;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
} 
    
.p-inputnumber-vertical:has(.p-variant-filled) .p-inputnumber-button {
    border-block-color: ${e("inputtext.filled.background")};
    border-inline-color: ${e("inputtext.filled.background")};
    background: ${e("inputtext.filled.background")} no-repeat;
} 

.p-inputnumber-vertical:has(.p-variant-filled) .p-inputnumber-increment-button {
    border-block-end: 1px solid ${e("inputtext.border.color")}
}
`};var ti={root:{gap:"0.5rem"},input:{width:"3rem",sm:{width:"2.5rem"},lg:{width:"3.5rem"}}};var ii={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},css:({dt:e})=>`
.p-inputtext.p-variant-filled {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border: 1px solid transparent;
    background: ${e("inputtext.filled.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("inputtext.focus.border.color")}, ${e("inputtext.focus.border.color")}), linear-gradient(to bottom, ${e("inputtext.border.color")}, ${e("inputtext.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
}

.p-inputtext.p-variant-filled:enabled:hover {
    background: ${e("inputtext.filled.hover.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("inputtext.focus.border.color")}, ${e("inputtext.focus.border.color")}), linear-gradient(to bottom, ${e("inputtext.hover.border.color")}, ${e("inputtext.hover.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-inputtext.p-variant-filled:enabled:focus {
    outline: 0 none;
    background: ${e("inputtext.filled.focus.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("inputtext.focus.border.color")}, ${e("inputtext.focus.border.color")}), linear-gradient(to bottom, ${e("inputtext.border.color")}, ${e("inputtext.border.color")});
    background-size: 100% 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-inputtext.p-variant-filled:enabled:hover:focus {
    background-image: linear-gradient(to bottom, ${e("inputtext.focus.border.color")}, ${e("inputtext.focus.border.color")}), linear-gradient(to bottom, ${e("inputtext.hover.border.color")}, ${e("inputtext.hover.border.color")});
}

.p-inputtext.p-variant-filled.p-invalid {
    background-image: linear-gradient(to bottom, ${e("inputtext.invalid.border.color")}, ${e("inputtext.invalid.border.color")}), linear-gradient(to bottom, ${e("inputtext.invalid.border.color")}, ${e("inputtext.invalid.border.color")});
}

.p-inputtext.p-variant-filled.p-invalid:enabled:focus {
    background-image: linear-gradient(to bottom, ${e("inputtext.invalid.border.color")}, ${e("inputtext.invalid.border.color")}), linear-gradient(to bottom, ${e("inputtext.invalid.border.color")}, ${e("inputtext.invalid.border.color")});
}
`};var ni={root:{transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},value:{background:"{primary.color}"},range:{background:"{content.border.color}"},text:{color:"{text.muted.color}"}};var ai={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",borderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",shadow:"{form.field.shadow}",borderRadius:"{form.field.border.radius}",transitionDuration:"{form.field.transition.duration}"},list:{padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},checkmark:{color:"{list.option.color}",gutterStart:"-0.375rem",gutterEnd:"0.375rem"},emptyMessage:{padding:"{list.option.padding}"},colorScheme:{light:{option:{stripedBackground:"{surface.50}"}},dark:{option:{stripedBackground:"{surface.900}"}}},css:({dt:e})=>`
.p-listbox-option {
    transition: none
}
`};var li={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",verticalOrientation:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},horizontalOrientation:{padding:"0.5rem 0.75rem",gap:"0.5rem"},transitionDuration:"{transition.duration}"},baseItem:{borderRadius:"{content.border.radius}",padding:"{navigation.item.padding}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},overlay:{padding:"0",background:"{content.background}",borderColor:"transparent",borderRadius:"{content.border.radius}",color:"{content.color}",shadow:"{overlay.navigation.shadow}",gap:"0.5rem"},submenu:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},submenuLabel:{padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",background:"{navigation.submenu.label.background.}",color:"{navigation.submenu.label.color}"},submenuIcon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},separator:{borderColor:"{content.border.color}"},mobileButton:{borderRadius:"50%",size:"2.5rem",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",hoverBackground:"{content.hover.background}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},css:({dt:e})=>`
.p-megamenu-button:focus-visible {
    background: ${e("navigation.item.active.background")}
}
`};var si={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},list:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},item:{focusBackground:"{navigation.item.focus.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}"}},submenuLabel:{padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",background:"{navigation.submenu.label.background}",color:"{navigation.submenu.label.color}"},separator:{borderColor:"{content.border.color}"},css:({dt:e})=>`
.p-menu-overlay {
    border-color: transparent
}
`};var ci={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",padding:"0.5rem 0.75rem",transitionDuration:"{transition.duration}"},baseItem:{borderRadius:"{content.border.radius}",padding:"{navigation.item.padding}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},submenu:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}",background:"{content.background}",borderColor:"transparent",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",mobileIndent:"1rem",icon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"}},separator:{borderColor:"{content.border.color}"},mobileButton:{borderRadius:"50%",size:"2.5rem",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",hoverBackground:"{content.hover.background}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},css:({dt:e})=>`
.p-menubar-button:focus-visible {
    background: ${e("navigation.item.active.background")}
}
`};var di={root:{borderRadius:"{content.border.radius}",borderWidth:"0",transitionDuration:"{transition.duration}"},content:{padding:"1rem 1.25rem",gap:"0.5rem",sm:{padding:"0.625rem 0.625rem"},lg:{padding:"0.825rem 0.825rem"}},text:{fontSize:"1rem",fontWeight:"500",sm:{fontSize:"0.875rem"},lg:{fontSize:"1.125rem"}},icon:{size:"1.25rem",sm:{size:"1rem"},lg:{size:"1.5rem"}},closeButton:{width:"2rem",height:"2rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"}},closeIcon:{size:"1rem",sm:{size:"0.875rem"},lg:{size:"1.125rem"}},outlined:{root:{borderWidth:"1px"}},simple:{content:{padding:"0"}},colorScheme:{light:{info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",shadow:"none",closeButton:{hoverBackground:"{blue.100}",focusRing:{color:"{blue.600}",shadow:"none"}},outlined:{color:"{blue.600}",borderColor:"{blue.600}"},simple:{color:"{blue.600}"}},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",shadow:"none",closeButton:{hoverBackground:"{green.100}",focusRing:{color:"{green.600}",shadow:"none"}},outlined:{color:"{green.600}",borderColor:"{green.600}"},simple:{color:"{green.600}"}},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.900}",shadow:"none",closeButton:{hoverBackground:"{yellow.100}",focusRing:{color:"{yellow.600}",shadow:"none"}},outlined:{color:"{yellow.900}",borderColor:"{yellow.900}"},simple:{color:"{yellow.900}"}},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",shadow:"none",closeButton:{hoverBackground:"{red.100}",focusRing:{color:"{red.600}",shadow:"none"}},outlined:{color:"{red.600}",borderColor:"{red.600}"},simple:{color:"{red.600}"}},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",shadow:"none",closeButton:{hoverBackground:"{surface.200}",focusRing:{color:"{surface.600}",shadow:"none"}},outlined:{color:"{surface.600}",borderColor:"{surface.600}"},simple:{color:"{surface.600}"}},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",shadow:"none",closeButton:{hoverBackground:"{surface.800}",focusRing:{color:"{surface.50}",shadow:"none"}},outlined:{color:"{surface.950}",borderColor:"{surface.950}"},simple:{color:"{surface.950}"}}},dark:{info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",shadow:"none",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{blue.500}",shadow:"none"}},outlined:{color:"{blue.500}",borderColor:"{blue.500}"},simple:{color:"{blue.500}"}},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",shadow:"none",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{green.500}",shadow:"none"}},outlined:{color:"{green.500}",borderColor:"{green.500}"},simple:{color:"{green.500}"}},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",shadow:"none",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{yellow.500}",shadow:"none"}},outlined:{color:"{yellow.500}",borderColor:"{yellow.500}"},simple:{color:"{yellow.500}"}},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",shadow:"none",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{red.500}",shadow:"none"}},outlined:{color:"{red.500}",borderColor:"{red.500}"},simple:{color:"{red.500}"}},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",shadow:"none",closeButton:{hoverBackground:"{surface.700}",focusRing:{color:"{surface.300}",shadow:"none"}},outlined:{color:"{surface.400}",borderColor:"{surface.400}"},simple:{color:"{surface.400}"}},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",shadow:"none",closeButton:{hoverBackground:"{surface.100}",focusRing:{color:"{surface.950}",shadow:"none"}},outlined:{color:"{surface.0}",borderColor:"{surface.0}"},simple:{color:"{surface.0}"}}}}};var ui={root:{borderRadius:"{content.border.radius}",gap:"1rem"},meters:{background:"{content.border.color}",size:"0.5rem"},label:{gap:"0.5rem"},labelMarker:{size:"0.5rem"},labelIcon:{size:"1rem"},labelList:{verticalGap:"0.5rem",horizontalGap:"1rem"}};var mi={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}",gap:"0.75rem"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},chip:{borderRadius:"{border.radius.sm}"},clearIcon:{color:"{form.field.icon.color}"},emptyMessage:{padding:"{list.option.padding}"},css:({dt:e})=>`
.p-multiselect.p-variant-filled {
    border-end-start-radius: 0
    border-end-end-radius: 0;
    border: 1px solid transparent;
    background: ${e("multiselect.filled.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("multiselect.focus.border.color")}, ${e("multiselect.focus.border.color")}), linear-gradient(to bottom, ${e("multiselect.border.color")}, ${e("multiselect.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
}

.p-multiselect.p-variant-filled:not(.p-disabled):hover {
    background: ${e("multiselect.filled.hover.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("multiselect.focus.border.color")}, ${e("multiselect.focus.border.color")}), linear-gradient(to bottom, ${e("multiselect.hover.border.color")}, ${e("multiselect.hover.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-multiselect.p-variant-filled:not(.p-disabled).p-focus {
    outline: 0 none;
    background: ${e("multiselect.filled.focus.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("multiselect.focus.border.color")}, ${e("multiselect.focus.border.color")}), linear-gradient(to bottom, ${e("multiselect.border.color")}, ${e("multiselect.border.color")});
    background-size: 100% 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-multiselect.p-variant-filled:not(.p-disabled).p-focus:hover {
    background-image: linear-gradient(to bottom, ${e("multiselect.focus.border.color")}, ${e("multiselect.focus.border.color")}), linear-gradient(to bottom, ${e("multiselect.hover.border.color")}, ${e("multiselect.hover.border.color")});
}

.p-multiselect.p-variant-filled.p-invalid {
    background-image: linear-gradient(to bottom, ${e("multiselect.invalid.border.color")}, ${e("multiselect.invalid.border.color")}), linear-gradient(to bottom, ${e("multiselect.invalid.border.color")}, ${e("multiselect.invalid.border.color")});
}

.p-multiselect.p-variant-filled.p-invalid:not(.p-disabled).p-focus  {
    background-image: linear-gradient(to bottom, ${e("multiselect.invalid.border.color")}, ${e("multiselect.invalid.border.color")}), linear-gradient(to bottom, ${e("multiselect.invalid.border.color")}, ${e("multiselect.invalid.border.color")});
}

.p-multiselect-option {
    transition: none;
}
`};var pi={root:{gap:"1.125rem"},controls:{gap:"0.5rem"}};var gi={root:{gutter:"0.75rem",transitionDuration:"{transition.duration}"},node:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{content.border.color}",color:"{content.color}",selectedColor:"{highlight.color}",hoverColor:"{content.hover.color}",padding:"1rem 1.25rem",toggleablePadding:"1rem 1.25rem 1.5rem 1.25rem",borderRadius:"{content.border.radius}"},nodeToggleButton:{background:"{content.background}",hoverBackground:"{content.hover.background}",borderColor:"{content.border.color}",color:"{text.muted.color}",hoverColor:"{text.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},connector:{color:"{content.border.color}",borderRadius:"{content.border.radius}",height:"24px"}};var fi={root:{outline:{width:"2px",color:"{content.background}"}}};var bi={root:{padding:"0.5rem 1rem",gap:"0.25rem",borderRadius:"{content.border.radius}",background:"{content.background}",color:"{content.color}",transitionDuration:"{transition.duration}"},navButton:{background:"transparent",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedColor:"{highlight.color}",width:"2.5rem",height:"2.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},currentPageReport:{color:"{text.muted.color}"},jumpToPageInput:{maxWidth:"2.5rem"}};var hi={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},header:{background:"transparent",color:"{text.color}",padding:"1.25rem",borderColor:"{content.border.color}",borderWidth:"0",borderRadius:"0"},toggleableHeader:{padding:"0.5rem 1.25rem"},title:{fontWeight:"600"},content:{padding:"0 1.25rem 1.25rem 1.25rem"},footer:{padding:"0 1.25rem 1.25rem 1.25rem"}};var vi={root:{gap:"0",transitionDuration:"{transition.duration}"},panel:{background:"{content.background}",borderColor:"{content.border.color}",borderWidth:"0",color:"{content.color}",padding:"0",borderRadius:"0",first:{borderWidth:"0",topBorderRadius:"{content.border.radius}"},last:{borderWidth:"0",bottomBorderRadius:"{content.border.radius}"}},item:{focusBackground:"{navigation.item.focus.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",gap:"0.5rem",padding:"{navigation.item.padding}",borderRadius:"{content.border.radius}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}"}},submenu:{indent:"1rem"},submenuIcon:{color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}"},css:({dt:e})=>`
.p-panelmenu-panel {
    box-shadow: 0 0 0 1px ${e("panelmenu.panel.border.color")}
    transition: margin ${e("panelmenu.transition.duration")};
}

.p-panelmenu-panel:has(.p-panelmenu-header-active) {
    margin: 1rem 0;
}

.p-panelmenu-panel:first-child {
    border-start-start-radius: ${e("content.border.radius")};
    border-start-end-radius: ${e("content.border.radius")};
    margin-top: 0;
}

.p-panelmenu-panel:last-child {
    border-end-start-radius: ${e("content.border.radius")};
    border-end-end-radius: ${e("content.border.radius")};
    margin-bottom: 0;
}

.p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
    background: ${e("navigation.item.active.background")};
}
`};var yi={meter:{background:"{content.border.color}",borderRadius:"{content.border.radius}",height:".75rem"},icon:{color:"{form.field.icon.color}"},overlay:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",borderRadius:"{overlay.popover.border.radius}",color:"{overlay.popover.color}",padding:"{overlay.popover.padding}",shadow:"{overlay.popover.shadow}"},content:{gap:"0.5rem"},colorScheme:{light:{strength:{weakBackground:"{red.500}",mediumBackground:"{amber.500}",strongBackground:"{green.500}"}},dark:{strength:{weakBackground:"{red.400}",mediumBackground:"{amber.400}",strongBackground:"{green.400}"}}}};var ki={root:{gap:"1.125rem"},controls:{gap:"0.5rem"}};var xi={root:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",color:"{overlay.popover.color}",borderRadius:"{overlay.popover.border.radius}",shadow:"{overlay.popover.shadow}",gutter:"10px",arrowOffset:"1.25rem"},content:{padding:"{overlay.popover.padding}"}};var _i={root:{background:"{content.border.color}",borderRadius:"{content.border.radius}",height:"1rem"},value:{background:"{primary.color}"},label:{color:"{primary.contrast.color}",fontSize:"0.75rem",fontWeight:"600"}};var Ci={colorScheme:{light:{root:{colorOne:"{red.500}",colorTwo:"{blue.500}",colorThree:"{green.500}",colorFour:"{yellow.500}"}},dark:{root:{colorOne:"{red.400}",colorTwo:"{blue.400}",colorThree:"{green.400}",colorFour:"{yellow.400}"}}}};var wi={root:{width:"20px",height:"20px",background:"{form.field.background}",checkedBackground:"{primary.contrast.color}",checkedHoverBackground:"{primary.contrast.color}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.color}",checkedFocusBorderColor:"{primary.color}",checkedDisabledBorderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",shadow:"{form.field.shadow}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"},transitionDuration:"{form.field.transition.duration}",sm:{width:"16px",height:"16px"},lg:{width:"24px",height:"24px"}},icon:{size:"10px",checkedColor:"{primary.color}",checkedHoverColor:"{primary.color}",disabledColor:"{form.field.disabled.color}",sm:{size:"8px"},lg:{size:"12px"}},css:({dt:e})=>`
.p-radiobutton {
    border-radius: 50%;
    transition: box-shadow ${e("radiobutton.transition.duration")};
}

.p-radiobutton-box {
    border-width: 2px;
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("text.color")}, transparent 96%);
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:focus-visible) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("text.color")}, transparent 88%);
}

.p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:hover) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("radiobutton.checked.border.color")}, transparent 92%);
}

.p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:focus-visible) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("radiobutton.checked.border.color")}, transparent 84%);
}
`};var Ii={root:{gap:"0.5rem",transitionDuration:"{transition.duration}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},icon:{size:"1.125rem",color:"{text.muted.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"},css:({dt:e})=>`
.p-rating:not(.p-disabled):not(.p-readonly) .p-rating-option:hover {
    background: color-mix(in srgb, ${e("rating.icon.color")}, transparent 96%)
    box-shadow: 0 0 1px 8px color-mix(in srgb, ${e("rating.icon.color")}, transparent 96%);
}

.p-rating:not(.p-disabled):not(.p-readonly) .p-rating-option-active:hover {
    background: color-mix(in srgb, ${e("rating.icon.active.color")}, transparent 92%);
    box-shadow: 0 0 1px 8px color-mix(in srgb, ${e("rating.icon.active.color")}, transparent 92%);
}

.p-rating-option.p-focus-visible {
    background: color-mix(in srgb, ${e("rating.icon.active.color")}, transparent 84%);
    box-shadow: 0 0 1px 8px color-mix(in srgb, ${e("rating.icon.active.color")}, transparent 84%);
}
`};var Si={colorScheme:{light:{root:{background:"rgba(0,0,0,0.1)"}},dark:{root:{background:"rgba(255,255,255,0.3)"}}}};var Bi={root:{transitionDuration:"{transition.duration}"},bar:{size:"9px",borderRadius:"{border.radius.sm}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},colorScheme:{light:{bar:{background:"{surface.200}"}},dark:{bar:{background:"{surface.700}"}}}};var Mi={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},clearIcon:{color:"{form.field.icon.color}"},checkmark:{color:"{list.option.color}",gutterStart:"-0.375rem",gutterEnd:"0.375rem"},emptyMessage:{padding:"{list.option.padding}"},css:({dt:e})=>`
.p-select.p-variant-filled {
    border-end-start-radius: 0
    border-end-end-radius: 0;
    border: 1px solid transparent;
    background: ${e("select.filled.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("select.focus.border.color")}, ${e("select.focus.border.color")}), linear-gradient(to bottom, ${e("select.border.color")}, ${e("select.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
}

.p-select.p-variant-filled:not(.p-disabled):hover {
    background: ${e("select.filled.hover.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("select.focus.border.color")}, ${e("select.focus.border.color")}), linear-gradient(to bottom, ${e("select.hover.border.color")}, ${e("select.hover.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-select.p-variant-filled:not(.p-disabled).p-focus {
    outline: 0 none;
    background: ${e("select.filled.focus.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("select.focus.border.color")}, ${e("select.focus.border.color")}), linear-gradient(to bottom, ${e("select.border.color")}, ${e("select.border.color")});
    background-size: 100% 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-select.p-variant-filled:not(.p-disabled).p-focus:hover {
    background-image: linear-gradient(to bottom, ${e("select.focus.border.color")}, ${e("select.focus.border.color")}), linear-gradient(to bottom, ${e("select.hover.border.color")}, ${e("select.hover.border.color")});
}

.p-select.p-variant-filled.p-invalid {
    background-image: linear-gradient(to bottom, ${e("select.invalid.border.color")}, ${e("select.invalid.border.color")}), linear-gradient(to bottom, ${e("select.invalid.border.color")}, ${e("select.invalid.border.color")});
}

.p-select.p-variant-filled.p-invalid:not(.p-disabled).p-focus  {
    background-image: linear-gradient(to bottom, ${e("select.invalid.border.color")}, ${e("select.invalid.border.color")}), linear-gradient(to bottom, ${e("select.invalid.border.color")}, ${e("select.invalid.border.color")});
}

.p-select-option {
    transition: none;
}
`};var Ti={root:{borderRadius:"{form.field.border.radius}"},colorScheme:{light:{root:{invalidBorderColor:"{form.field.invalid.border.color}"}},dark:{root:{invalidBorderColor:"{form.field.invalid.border.color}"}}}};var $i={root:{borderRadius:"{content.border.radius}"},colorScheme:{light:{root:{background:"{surface.200}",animationBackground:"rgba(255,255,255,0.4)"}},dark:{root:{background:"rgba(255, 255, 255, 0.06)",animationBackground:"rgba(255, 255, 255, 0.04)"}}}};var Fi={root:{transitionDuration:"{transition.duration}"},track:{background:"{content.border.color}",borderRadius:"{border.radius.xs}",size:"2px"},range:{background:"{primary.color}"},handle:{width:"18px",height:"18px",borderRadius:"50%",background:"{primary.color}",hoverBackground:"{primary.color}",content:{borderRadius:"50%",background:"{primary.color}",hoverBackground:"{primary.color}",width:"18px",height:"18px",shadow:"0px 2px 1px -1px rgba(0, 0, 0, .2), 0px 1px 1px 0px rgba(0, 0, 0, .14), 0px 1px 3px 0px rgba(0, 0, 0, .12)"},focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},css:({dt:e})=>`
.p-slider-handle {
    transition: box-shadow ${e("slider.transition.duration")}
}

.p-slider:not(.p-disabled) .p-slider-handle:hover {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("slider.handle.background")}, transparent 92%);
}

.p-slider-handle:focus-visible,
.p-slider:not(.p-disabled) .p-slider-handle:focus:hover {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("slider.handle.background")}, transparent 84%);
}
`};var Ri={root:{gap:"0.5rem",transitionDuration:"{transition.duration}"}};var Ei={root:{borderRadius:"{form.field.border.radius}",roundedBorderRadius:"2rem",raisedShadow:"0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)"}};var Li={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",transitionDuration:"{transition.duration}"},gutter:{background:"{content.border.color}"},handle:{size:"24px",background:"transparent",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}};var Di={root:{transitionDuration:"{transition.duration}"},separator:{background:"{content.border.color}",activeBackground:"{primary.color}",margin:"0 0 0 1.625rem",size:"2px"},step:{padding:"0.5rem",gap:"1rem"},stepHeader:{padding:"0.75rem 1rem",borderRadius:"{content.border.radius}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"},gap:"0.5rem"},stepTitle:{color:"{text.muted.color}",activeColor:"{text.color}",fontWeight:"500"},stepNumber:{activeBackground:"{primary.color}",activeBorderColor:"{primary.color}",activeColor:"{primary.contrast.color}",size:"2rem",fontSize:"1.143rem",fontWeight:"500",borderRadius:"50%",shadow:"none"},steppanels:{padding:"0.875rem 0.5rem 1.125rem 0.5rem"},steppanel:{background:"{content.background}",color:"{content.color}",padding:"0",indent:"1rem"},colorScheme:{light:{stepNumber:{background:"{surface.400}",borderColor:"{surface.400}",color:"{surface.0}"}},dark:{stepNumber:{background:"{surface.200}",borderColor:"{surface.200}",color:"{surface.900}"}}},css:({dt:e})=>`
.p-step-header:focus-visible {
    background: ${e("navigation.item.active.background")}
}
`};var zi={root:{transitionDuration:"{transition.duration}"},separator:{background:"{content.border.color}"},itemLink:{borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},gap:"0.5rem"},itemLabel:{color:"{text.muted.color}",activeColor:"{primary.color}",fontWeight:"500"},itemNumber:{background:"{content.background}",activeBackground:"{content.background}",borderColor:"{content.border.color}",activeBorderColor:"{content.border.color}",color:"{text.muted.color}",activeColor:"{primary.color}",size:"2rem",fontSize:"1.143rem",fontWeight:"500",borderRadius:"50%",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"}};var Ai={root:{transitionDuration:"{transition.duration}"},tablist:{borderWidth:"0 0 1px 0",background:"{content.background}",borderColor:"{content.border.color}"},item:{background:"transparent",hoverBackground:"transparent",activeBackground:"transparent",borderWidth:"0 0 1px 0",borderColor:"{content.border.color}",hoverBorderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}",padding:"1rem 1.125rem",fontWeight:"600",margin:"0 0 -1px 0",gap:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},itemIcon:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},activeBar:{height:"1px",bottom:"-1px",background:"{primary.color}"}};var Pi={root:{transitionDuration:"{transition.duration}"},tablist:{borderWidth:"0 0 1px 0",background:"{content.background}",borderColor:"{content.border.color}"},tab:{background:"transparent",hoverBackground:"{content.hover.background}",activeBackground:"transparent",borderWidth:"0 0 1px 0",borderColor:"{content.border.color}",hoverBorderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.color}",hoverColor:"{text.color}",activeColor:"{primary.color}",padding:"1rem 1.25rem",fontWeight:"600",margin:"0 0 -1px 0",gap:"0.5rem",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},tabpanel:{background:"{content.background}",color:"{content.color}",padding:"1.25rem 1.25rem 1.25rem 1.25rem",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},navButton:{background:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",width:"3rem",shadow:"none",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},activeBar:{height:"2px",bottom:"-1px",background:"{primary.color}"},css:({dt:e})=>`


.p-tabs-scrollable .p-tab {
    flex-grow: 0
}

.p-tab-active {
    --p-ripple-background: color-mix(in srgb, ${e("primary.color")}, transparent 90%)
}

.p-tab:not(.p-disabled):focus-visible {
    background: ${e("navigation.item.active.background")};
}

.p-tablist-nav-button:focus-visible {
    background: ${e("navigation.item.active.background")};
}
`};var Vi={root:{transitionDuration:"{transition.duration}"},tabList:{background:"{content.background}",borderColor:"{content.border.color}"},tab:{borderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},tabPanel:{background:"{content.background}",color:"{content.color}"},navButton:{background:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}"},colorScheme:{light:{navButton:{shadow:"0px 0px 10px 50px rgba(255, 255, 255, 0.6)"}},dark:{navButton:{shadow:"0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"}}}};var Hi={root:{fontSize:"0.875rem",fontWeight:"700",padding:"0.25rem 0.5rem",gap:"0.25rem",borderRadius:"{content.border.radius}",roundedBorderRadius:"{border.radius.xl}"},icon:{size:"0.75rem"},colorScheme:{light:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.100}",color:"{surface.600}"},success:{background:"{green.500}",color:"{surface.0}"},info:{background:"{sky.500}",color:"{surface.0}"},warn:{background:"{orange.500}",color:"{surface.0}"},danger:{background:"{red.500}",color:"{surface.0}"},contrast:{background:"{surface.950}",color:"{surface.0}"}},dark:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.800}",color:"{surface.300}"},success:{background:"{green.400}",color:"{green.950}"},info:{background:"{sky.400}",color:"{sky.950}"},warn:{background:"{orange.400}",color:"{orange.950}"},danger:{background:"{red.400}",color:"{red.950}"},contrast:{background:"{surface.0}",color:"{surface.950}"}}}};var Oi={root:{background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.color}",height:"18rem",padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{form.field.border.radius}"},prompt:{gap:"0.25rem"},commandResponse:{margin:"2px 0"}};var Wi={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},css:({dt:e})=>`
.p-textarea.p-variant-filled {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border: 1px solid transparent;
    background: ${e("textarea.filled.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("textarea.focus.border.color")}, ${e("textarea.focus.border.color")}), linear-gradient(to bottom, ${e("textarea.border.color")}, ${e("textarea.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
}

.p-textarea.p-variant-filled:enabled:hover {
    background: ${e("textarea.filled.hover.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("textarea.focus.border.color")}, ${e("textarea.focus.border.color")}), linear-gradient(to bottom, ${e("textarea.hover.border.color")}, ${e("textarea.hover.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-textarea.p-variant-filled:enabled:focus {
    outline: 0 none;
    background: ${e("textarea.filled.focus.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("textarea.focus.border.color")}, ${e("textarea.focus.border.color")}), linear-gradient(to bottom, ${e("textarea.border.color")}, ${e("textarea.border.color")});
    background-size: 100% 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-textarea.p-variant-filled:enabled:hover:focus {
    background-image: linear-gradient(to bottom, ${e("textarea.focus.border.color")}, ${e("textarea.focus.border.color")}), linear-gradient(to bottom, ${e("textarea.hover.border.color")}, ${e("textarea.hover.border.color")});
}

.p-textarea.p-variant-filled.p-invalid {
    background-image: linear-gradient(to bottom, ${e("textarea.invalid.border.color")}, ${e("textarea.invalid.border.color")}), linear-gradient(to bottom, ${e("textarea.invalid.border.color")}, ${e("textarea.invalid.border.color")});
}

.p-textarea.p-variant-filled.p-invalid:enabled:focus {
    background-image: linear-gradient(to bottom, ${e("textarea.invalid.border.color")}, ${e("textarea.invalid.border.color")}), linear-gradient(to bottom, ${e("textarea.invalid.border.color")}, ${e("textarea.invalid.border.color")});
}
`};var Ni={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},list:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},submenu:{mobileIndent:"1rem"},submenuIcon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},separator:{borderColor:"{content.border.color}"},css:({dt:e})=>`
.p-tieredmenu-overlay {
    border-color: transparent
}
`};var Qi={event:{minHeight:"5rem"},horizontal:{eventContent:{padding:"1rem 0"}},vertical:{eventContent:{padding:"0 1rem"}},eventMarker:{size:"1.5rem",borderRadius:"50%",borderWidth:"2px",background:"{primary.color}",content:{borderRadius:"50%",size:"0",background:"{primary.color}",insetShadow:"none"}},eventConnector:{color:"{content.border.color}",size:"2px"},colorScheme:{light:{eventMarker:{borderColor:"{surface.0}"}},dark:{eventMarker:{borderColor:"{surface.900}"}}}};var ji={root:{width:"25rem",borderRadius:"{content.border.radius}",borderWidth:"0",transitionDuration:"{transition.duration}"},icon:{size:"1.25rem"},content:{padding:"{overlay.popover.padding}",gap:"0.5rem"},text:{gap:"0.5rem"},summary:{fontWeight:"500",fontSize:"1rem"},detail:{fontWeight:"500",fontSize:"0.875rem"},closeButton:{width:"2rem",height:"2rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"}},closeIcon:{size:"1rem"},colorScheme:{light:{root:{blur:"0"},info:{background:"{blue.50}",borderColor:"{blue.200}",color:"{blue.600}",detailColor:"{surface.700}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{blue.100}",focusRing:{color:"{blue.600}",shadow:"none"}}},success:{background:"{green.50}",borderColor:"{green.200}",color:"{green.600}",detailColor:"{surface.700}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{green.100}",focusRing:{color:"{green.600}",shadow:"none"}}},warn:{background:"{yellow.50}",borderColor:"{yellow.200}",color:"{yellow.900}",detailColor:"{surface.700}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{yellow.100}",focusRing:{color:"{yellow.600}",shadow:"none"}}},error:{background:"{red.50}",borderColor:"{red.200}",color:"{red.600}",detailColor:"{surface.700}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{red.100}",focusRing:{color:"{red.600}",shadow:"none"}}},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",detailColor:"{surface.700}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{surface.200}",focusRing:{color:"{surface.600}",shadow:"none"}}},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",detailColor:"{surface.0}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{surface.800}",focusRing:{color:"{surface.50}",shadow:"none"}}}},dark:{root:{blur:"10px"},info:{background:"color-mix(in srgb, {blue.500}, transparent 36%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{surface.0}",detailColor:"{blue.100}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{blue.500}",shadow:"none"}}},success:{background:"color-mix(in srgb, {green.500}, transparent 36%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{surface.0}",detailColor:"{green.100}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{green.500}",shadow:"none"}}},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 36%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{surface.0}",detailColor:"{yellow.50}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{yellow.500}",shadow:"none"}}},error:{background:"color-mix(in srgb, {red.500}, transparent 36%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{surface.0}",detailColor:"{red.100}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{red.500}",shadow:"none"}}},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",detailColor:"{surface.0}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{surface.700}",focusRing:{color:"{surface.300}",shadow:"none"}}},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",detailColor:"{surface.950}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{surface.100}",focusRing:{color:"{surface.950}",shadow:"none"}}}}}};var qi={root:{padding:"0.75rem 1rem",borderRadius:"{form.field.border.radius}",gap:"0.5rem",fontWeight:"500",background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.color}",hoverColor:"{form.field.color}",checkedColor:"{form.field.color}",checkedBorderColor:"{form.field.border.color}",disabledBackground:"{form.field.disabled.background}",disabledBorderColor:"{form.field.disabled.background}",disabledColor:"{form.field.disabled.color}",invalidBorderColor:"{form.field.invalid.border.color}",focusRing:{width:"0",style:"none",offset:"0",color:"unset",shadow:"none"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",padding:"0.625rem 0.75rem"},lg:{fontSize:"{form.field.lg.font.size}",padding:"0.875rem 1.25rem"}},icon:{color:"{text.muted.color}",hoverColor:"{text.muted.color}",checkedColor:"{text.muted.color}",disabledColor:"{form.field.disabled.color}"},content:{checkedBackground:"transparent",checkedShadow:"none",padding:"0",borderRadius:"0",sm:{padding:"0"},lg:{padding:"0"}},colorScheme:{light:{root:{hoverBackground:"{surface.100}",checkedBackground:"{surface.200}"}},dark:{root:{hoverBackground:"{surface.800}",checkedBackground:"{surface.700}"}}},css:({dt:e})=>`
.p-togglebutton:focus-visible {
    background: ${e("togglebutton.hover.background")}
}
`};var Ki={root:{width:"2.75rem",height:"1rem",borderRadius:"30px",gap:"0px",shadow:"none",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"},borderWidth:"1px",borderColor:"transparent",hoverBorderColor:"transparent",checkedBorderColor:"transparent",checkedHoverBorderColor:"transparent",invalidBorderColor:"{form.field.invalid.border.color}",transitionDuration:"{form.field.transition.duration}",slideDuration:"0.2s"},handle:{borderRadius:"50%",size:"1.5rem"},colorScheme:{light:{root:{background:"{surface.300}",disabledBackground:"{surface.400}",hoverBackground:"{surface.300}",checkedBackground:"{primary.200}",checkedHoverBackground:"{primary.200}"},handle:{background:"{surface.0}",disabledBackground:"{surface.200}",hoverBackground:"{surface.0}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}"}},dark:{root:{background:"{surface.700}",disabledBackground:"{surface.600}",hoverBackground:"{surface.700}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.color}"},handle:{background:"{surface.400}",disabledBackground:"{surface.500}",hoverBackground:"{surface.300}",checkedBackground:"{primary.200}",checkedHoverBackground:"{primary.200}",color:"{surface.800}",hoverColor:"{surface.900}",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}"}}},css:({dt:e})=>`
.p-toggleswitch-handle {
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("text.color")}, transparent 96%), 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-handle {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("text.color")}, transparent 88%), 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("toggleswitch.handle.checked.background")}, transparent 92%), 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible).p-toggleswitch-checked .p-toggleswitch-handle {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("toggleswitch.handle.checked.background")}, transparent 84%), 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
`};var Gi={root:{color:"{content.color}",borderRadius:"{content.border.radius}",gap:"0.5rem",padding:"1rem"},colorScheme:{light:{root:{background:"{surface.100}",borderColor:"{surface.100}"}},dark:{root:{background:"{surface.800}",borderColor:"{surface.800}"}}}};var Ui={root:{background:"{surface.600}",color:"{surface.0}",maxWidth:"12.5rem",gutter:"0.25rem",shadow:"{overlay.popover.shadow}",padding:"0.5rem 0.75rem",borderRadius:"{overlay.popover.border.radius}"}};var Zi={root:{background:"{content.background}",color:"{content.color}",padding:"1rem",gap:"2px",indent:"2rem",transitionDuration:"{transition.duration}"},node:{padding:"0.5rem 0.75rem",borderRadius:"{border.radius.xs}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{text.color}",hoverColor:"{text.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"},gap:"0.5rem"},nodeIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedColor:"{highlight.color}"},nodeToggleButton:{borderRadius:"50%",size:"2rem",hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedHoverColor:"{primary.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},loadingIcon:{size:"2rem"},filter:{margin:"0 0 0.75rem 0"},css:({dt:e})=>`
.p-tree-node-content {
    transition: none
}
`};var Yi={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},tree:{padding:"{list.padding}"},emptyMessage:{padding:"{list.option.padding}"},chip:{borderRadius:"{border.radius.sm}"},clearIcon:{color:"{form.field.icon.color}"},css:({dt:e})=>`
.p-treeselect.p-variant-filled {
    border-end-start-radius: 0
    border-end-end-radius: 0;
    border: 1px solid transparent;
    background: ${e("treeselect.filled.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("treeselect.focus.border.color")}, ${e("treeselect.focus.border.color")}), linear-gradient(to bottom, ${e("treeselect.border.color")}, ${e("treeselect.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
}

.p-treeselect.p-variant-filled:not(.p-disabled):hover {
    background: ${e("treeselect.filled.hover.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("treeselect.focus.border.color")}, ${e("treeselect.focus.border.color")}), linear-gradient(to bottom, ${e("treeselect.hover.border.color")}, ${e("treeselect.hover.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-treeselect.p-variant-filled:not(.p-disabled).p-focus {
    outline: 0 none;
    background: ${e("treeselect.filled.focus.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("treeselect.focus.border.color")}, ${e("treeselect.focus.border.color")}), linear-gradient(to bottom, ${e("treeselect.border.color")}, ${e("treeselect.border.color")});
    background-size: 100% 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-treeselect.p-variant-filled:not(.p-disabled).p-focus:hover {
    background-image: linear-gradient(to bottom, ${e("treeselect.focus.border.color")}, ${e("treeselect.focus.border.color")}), linear-gradient(to bottom, ${e("treeselect.hover.border.color")}, ${e("treeselect.hover.border.color")});
}

.p-treeselect.p-variant-filled.p-invalid {
    background-image: linear-gradient(to bottom, ${e("treeselect.invalid.border.color")}, ${e("treeselect.invalid.border.color")}), linear-gradient(to bottom, ${e("treeselect.invalid.border.color")}, ${e("treeselect.invalid.border.color")});
}

.p-treeselect.p-variant-filled.p-invalid:not(.p-disabled).p-focus  {
    background-image: linear-gradient(to bottom, ${e("treeselect.invalid.border.color")}, ${e("treeselect.invalid.border.color")}), linear-gradient(to bottom, ${e("treeselect.invalid.border.color")}, ${e("treeselect.invalid.border.color")});
}
`};var Xi={root:{transitionDuration:"{transition.duration}"},header:{background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},headerCell:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{treetable.border.color}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",gap:"0.5rem",padding:"0.75rem 1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},columnTitle:{fontWeight:"600"},row:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},bodyCell:{borderColor:"{treetable.border.color}",padding:"0.75rem 1rem",gap:"0.5rem"},footerCell:{background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",padding:"0.75rem 1rem"},columnFooter:{fontWeight:"600"},footer:{background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},columnResizer:{width:"0.5rem"},resizeIndicator:{width:"1px",color:"{primary.color}"},sortIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",size:"0.875rem"},loadingIcon:{size:"2rem"},nodeToggleButton:{hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",selectedHoverColor:"{primary.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},paginatorTop:{borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},paginatorBottom:{borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},colorScheme:{light:{root:{borderColor:"{content.border.color}"},bodyCell:{selectedBorderColor:"{primary.100}"}},dark:{root:{borderColor:"{surface.800}"},bodyCell:{selectedBorderColor:"{primary.900}"}}},css:({dt:e})=>`
.p-treetable-header-cell,
.p-treetable-tbody > tr {
    transition: none
}
`};var Ji={loader:{mask:{background:"{content.background}",color:"{text.muted.color}"},icon:{size:"2rem"}}};var yo=_(h({},Ct),{components:{accordion:yt,autocomplete:kt,avatar:xt,badge:_t,blockui:wt,breadcrumb:It,button:St,datepicker:Pt,card:Bt,carousel:Mt,cascadeselect:Tt,checkbox:$t,chip:Ft,colorpicker:Rt,confirmdialog:Et,confirmpopup:Lt,contextmenu:Dt,dataview:At,datatable:zt,dialog:Vt,divider:Ht,dock:Ot,drawer:Wt,editor:Nt,fieldset:Qt,fileupload:jt,iftalabel:Ut,floatlabel:qt,galleria:Kt,iconfield:Gt,image:Zt,imagecompare:Yt,inlinemessage:Xt,inplace:Jt,inputchips:ei,inputgroup:oi,inputnumber:ri,inputotp:ti,inputtext:ii,knob:ni,listbox:ai,megamenu:li,menu:si,menubar:ci,message:di,metergroup:ui,multiselect:mi,orderlist:pi,organizationchart:gi,overlaybadge:fi,popover:xi,paginator:bi,password:yi,panel:hi,panelmenu:vi,picklist:ki,progressbar:_i,progressspinner:Ci,radiobutton:wi,rating:Ii,scrollpanel:Bi,select:Mi,selectbutton:Ti,skeleton:$i,slider:Fi,speeddial:Ri,splitter:Li,splitbutton:Ei,stepper:Di,steps:zi,tabmenu:Ai,tabs:Pi,tabview:Vi,textarea:Wi,tieredmenu:Ni,tag:Hi,terminal:Oi,timeline:Qi,togglebutton:qi,toggleswitch:Ki,tree:Zi,treeselect:Yi,treetable:Xi,toast:ji,toolbar:Gi,virtualscroller:Ji,tooltip:Ui,ripple:Si},css:({dt:e})=>`

    `});var cl=["header"],dl=["footer"],ul=["content"],ml=["closeicon"],pl=["headless"],gl=["maskRef"],fl=["container"],bl=["closeButton"],hl=["*"],vl=(e,i,o,r,t,n)=>({"p-drawer":!0,"p-drawer-active":e,"p-drawer-left":i,"p-drawer-right":o,"p-drawer-top":r,"p-drawer-bottom":t,"p-drawer-full":n}),yl=(e,i)=>({transform:e,transition:i}),kl=e=>({value:"visible",params:e});function xl(e,i){e&1&&ae(0)}function _l(e,i){if(e&1&&m(0,xl,1,0,"ng-container",4),e&2){let o=d(2);a("ngTemplateOutlet",o.headlessTemplate||o._headlessTemplate)}}function Cl(e,i){e&1&&ae(0)}function wl(e,i){if(e&1&&(l(0,"div"),b(1),c()),e&2){let o=d(3);Y(o.cx("title")),s(),X(o.header)}}function Il(e,i){e&1&&p(0,"TimesIcon"),e&2&&x("data-pc-section","closeicon")}function Sl(e,i){}function Bl(e,i){e&1&&m(0,Sl,0,0,"ng-template")}function Ml(e,i){if(e&1&&m(0,Il,1,1,"TimesIcon",8)(1,Bl,1,0,null,4),e&2){let o=d(4);a("ngIf",!o.closeIconTemplate&&!o._closeIconTemplate),s(),a("ngTemplateOutlet",o.closeIconTemplate||o._closeIconTemplate)}}function Tl(e,i){if(e&1){let o=T();l(0,"p-button",9),I("onClick",function(t){g(o);let n=d(3);return f(n.close(t))})("keydown.enter",function(t){g(o);let n=d(3);return f(n.close(t))}),m(1,Ml,2,2,"ng-template",null,1,$e),c()}if(e&2){let o=d(3);a("ngClass",o.cx("closeButton"))("buttonProps",o.closeButtonProps)("ariaLabel",o.ariaCloseLabel),x("data-pc-section","closebutton")("data-pc-group-section","iconcontainer")}}function $l(e,i){e&1&&ae(0)}function Fl(e,i){e&1&&ae(0)}function Rl(e,i){if(e&1&&(O(0),l(1,"div",5),m(2,Fl,1,0,"ng-container",4),c(),W()),e&2){let o=d(3);s(),a("ngClass",o.cx("footer")),x("data-pc-section","footer"),s(),a("ngTemplateOutlet",o.footerTemplate||o._footerTemplate)}}function El(e,i){if(e&1&&(l(0,"div",5),m(1,Cl,1,0,"ng-container",4)(2,wl,2,3,"div",6)(3,Tl,3,5,"p-button",7),c(),l(4,"div",5),dr(5),m(6,$l,1,0,"ng-container",4),c(),m(7,Rl,3,3,"ng-container",8)),e&2){let o=d(2);a("ngClass",o.cx("header")),x("data-pc-section","header"),s(),a("ngTemplateOutlet",o.headerTemplate||o._headerTemplate),s(),a("ngIf",o.header),s(),a("ngIf",o.showCloseIcon&&o.closable),s(),a("ngClass",o.cx("content")),x("data-pc-section","content"),s(2),a("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),s(),a("ngIf",o.footerTemplate||o._footerTemplate)}}function Ll(e,i){if(e&1){let o=T();l(0,"div",3,0),I("@panelState.start",function(t){g(o);let n=d();return f(n.onAnimationStart(t))})("@panelState.done",function(t){g(o);let n=d();return f(n.onAnimationEnd(t))})("keydown",function(t){g(o);let n=d();return f(n.onKeyDown(t))}),m(2,_l,1,1,"ng-container")(3,El,8,9),c()}if(e&2){let o=d();Z(o.style),Y(o.styleClass),a("ngClass",mr(9,vl,o.visible,o.position==="left"&&!o.fullScreen,o.position==="right"&&!o.fullScreen,o.position==="top"&&!o.fullScreen,o.position==="bottom"&&!o.fullScreen,o.fullScreen||o.position==="full"))("@panelState",L(19,kl,Ae(16,yl,o.transformOptions,o.transitionOptions))),x("data-pc-name","sidebar")("data-pc-section","root"),s(2),ze(o.headlessTemplate||o._headlessTemplate?2:3)}}var Dl=({dt:e})=>`
.p-drawer {
    display: flex;
    flex-direction: column;
    pointer-events: auto;
    transform: translate3d(0px, 0px, 0px);
    position: fixed;
    transition: transform 0.3s;
    background: ${e("drawer.background")};
    color: ${e("drawer.color")};
    border: 1px solid ${e("drawer.border.color")};
    box-shadow: ${e("drawer.shadow")};
}

.p-drawer-content {
    overflow-y: auto;
    flex-grow: 1;
    padding: ${e("drawer.content.padding")};
}

.p-drawer-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    padding: ${e("drawer.header.padding")};
}

.p-drawer-footer {
    padding: ${e("drawer.header.padding")};
}

.p-drawer-title {
    font-weight: ${e("drawer.title.font.weight")};
    font-size: ${e("drawer.title.font.size")};
}

.p-drawer-full .p-drawer {
    transition: none;
    transform: none;
    width: 100vw !important;
    height: 100vh !important;
    max-height: 100%;
    top: 0px !important;
    left: 0px !important;
    border-width: 1px;
}

.p-drawer-left .p-drawer {
    align-self: start;
    width: 20rem;
    height: 100%;
    border-right-width: 1px;
}

.p-drawer-right .p-drawer {
    align-self: end;
    width: 20rem;
    height: 100%;
    border-left-width: 1px;
}

.p-drawer-top .p-drawer {
    height: 10rem;
    width: 100%;
    border-bottom-width: 1px;
}

.p-drawer-bottom .p-drawer {
    height: 10rem;
    width: 100%;
    border-top-width: 1px;
}

.p-drawer-left .p-drawer-content,
.p-drawer-right .p-drawer-content,
.p-drawer-top .p-drawer-content,
.p-drawer-bottom .p-drawer-content {
    width: 100%;
    height: 100%;
}

.p-drawer-open {
    display: flex;
}

.p-drawer-top {
    justify-content: flex-start;
}

.p-drawer-bottom {
    justify-content: flex-end;
}

.p-drawer {
    position: fixed;
    transition: transform 0.3s;
    display: flex;
    flex-direction: column;
}

.p-drawer-content {
    position: relative;
    overflow-y: auto;
    flex-grow: 1;
}

.p-drawer-header {
    display: flex;
    align-items: center;
}

.p-drawer-footer {
    margin-top: auto;
}

.p-drawer-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
}

.p-drawer-left {
    top: 0;
    left: 0;
    width: 20rem;
    height: 100%;
}

.p-drawer-right {
    top: 0;
    right: 0;
    width: 20rem;
    height: 100%;
}

.p-drawer-top {
    top: 0;
    left: 0;
    width: 100%;
    height: 10rem;
}

.p-drawer-bottom {
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10rem;
}

.p-drawer-full {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    -webkit-transition: none;
    transition: none;
}

.p-drawer-mask {
    background-color: rgba(0, 0, 0, 0.4);
    transition-duration: 0.2s;
}

.p-overlay-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask:dir(rtl) {
    flex-direction: row-reverse;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation 150ms forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation 150ms forwards;
}

@keyframes p-overlay-mask-enter-animation {
    from {
        background-color: transparent;
    }
    to {
        background-color: rgba(0, 0, 0, 0.4);
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background-color: rgba(0, 0, 0, 0.4);
    }
    to {
        background-color: transparent;
    }
}
`,zl={mask:({instance:e})=>({position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",flexDirection:"column",alignItems:e.position==="top"?"flex-start":e.position==="bottom"?"flex-end":"center"})},Al={mask:({instance:e})=>({"p-drawer-mask":!0,"p-overlay-mask p-overlay-mask-enter":e.modal,"p-drawer-open":e.containerVisible,"p-drawer-full":e.fullScreen,[`p-drawer-${e.position}`]:!!e.position}),root:({instance:e})=>({"p-drawer p-component":!0,"p-drawer-full":e.fullScreen}),header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},en=(()=>{class e extends Ie{name="drawer";theme=Dl;classes=Al;inlineStyles=zl;static \u0275fac=(()=>{let o;return function(t){return(o||(o=N(e)))(t||e)}})();static \u0275prov=F({token:e,factory:e.\u0275fac})}return e})();var Pl=Lo([q({transform:"{{transform}}",opacity:0}),ce("{{transition}}")]),Vl=Lo([ce("{{transition}}",q({transform:"{{transform}}",opacity:0}))]),Wo=(()=>{class e extends he{appendTo="body";blockScroll=!1;style;styleClass;ariaCloseLabel;autoZIndex=!0;baseZIndex=0;modal=!0;closeButtonProps={severity:"secondary",text:!0,rounded:!0};dismissible=!0;showCloseIcon=!0;closeOnEscape=!0;transitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";get visible(){return this._visible}set visible(o){this._visible=o}get position(){return this._position}set position(o){if(this._position=o,o==="full"){this.transformOptions="none";return}switch(o){case"left":this.transformOptions="translate3d(-100%, 0px, 0px)";break;case"right":this.transformOptions="translate3d(100%, 0px, 0px)";break;case"bottom":this.transformOptions="translate3d(0px, 100%, 0px)";break;case"top":this.transformOptions="translate3d(0px, -100%, 0px)";break}}get fullScreen(){return this._fullScreen}set fullScreen(o){this._fullScreen=o,o&&(this.transformOptions="none")}header;maskStyle;closable=!0;onShow=new U;onHide=new U;visibleChange=new U;maskRef;containerViewChild;closeButtonViewChild;initialized;_visible;_position="left";_fullScreen=!1;container;transformOptions="translate3d(-100%, 0px, 0px)";mask;maskClickListener;documentEscapeListener;animationEndListener;_componentStyle=k(en);ngAfterViewInit(){super.ngAfterViewInit(),this.initialized=!0}headerTemplate;footerTemplate;contentTemplate;closeIconTemplate;headlessTemplate;_headerTemplate;_footerTemplate;_contentTemplate;_closeIconTemplate;_headlessTemplate;templates;ngAfterContentInit(){this.templates?.forEach(o=>{switch(o.getType()){case"content":this._contentTemplate=o.template;break;case"header":this._headerTemplate=o.template;break;case"footer":this._footerTemplate=o.template;break;case"closeicon":this._closeIconTemplate=o.template;break;case"headless":this._headlessTemplate=o.template;break;default:this._contentTemplate=o.template;break}})}onKeyDown(o){o.code==="Escape"&&this.hide(!1)}show(){this.container.setAttribute(this.attrSelector,""),this.autoZIndex&&Se.set("modal",this.container,this.baseZIndex||this.config.zIndex.modal),this.modal&&this.enableModality(),this.onShow.emit({}),this.visibleChange.emit(!0)}hide(o=!0){o&&this.onHide.emit({}),this.modal&&this.disableModality()}close(o){this.hide(),this.visibleChange.emit(!1),o.preventDefault()}enableModality(){let o=this.document.querySelectorAll(".p-drawer-active"),r=o.length,t=r==1?String(parseInt(this.container.style.zIndex)-1):String(parseInt(o[r-1].style.zIndex)-1);this.mask||(this.mask=this.renderer.createElement("div"),this.renderer.setStyle(this.mask,"zIndex",t),Er(this.mask,"style",this.maskStyle),co(this.mask,"p-overlay-mask p-drawer-mask p-overlay-mask-enter"),this.dismissible&&(this.maskClickListener=this.renderer.listen(this.mask,"click",n=>{this.dismissible&&this.close(n)})),this.renderer.appendChild(this.document.body,this.mask),this.blockScroll&&Tr())}disableModality(){this.mask&&(co(this.mask,"p-overlay-mask-leave"),this.animationEndListener=this.renderer.listen(this.mask,"animationend",this.destroyModal.bind(this)))}destroyModal(){this.unbindMaskClickListener(),this.mask&&this.renderer.removeChild(this.document.body,this.mask),this.blockScroll&&$r(),this.unbindAnimationEndListener(),this.mask=null}onAnimationStart(o){switch(o.toState){case"visible":this.container=o.element,this.appendContainer(),this.show(),this.closeOnEscape&&this.bindDocumentEscapeListener();break}}onAnimationEnd(o){switch(o.toState){case"void":this.hide(!1),Se.clear(this.container),this.unbindGlobalListeners();break}}appendContainer(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.container):Fr(this.appendTo,this.container))}bindDocumentEscapeListener(){let o=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentEscapeListener=this.renderer.listen(o,"keydown",r=>{r.which==27&&parseInt(this.container.style.zIndex)===Se.get(this.container)&&this.close(r)})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}unbindGlobalListeners(){this.unbindMaskClickListener(),this.unbindDocumentEscapeListener()}unbindAnimationEndListener(){this.animationEndListener&&this.mask&&(this.animationEndListener(),this.animationEndListener=null)}ngOnDestroy(){this.initialized=!1,this.visible&&this.modal&&this.destroyModal(),this.appendTo&&this.container&&this.renderer.appendChild(this.el.nativeElement,this.container),this.container&&this.autoZIndex&&Se.clear(this.container),this.container=null,this.unbindGlobalListeners(),this.unbindAnimationEndListener()}static \u0275fac=(()=>{let o;return function(t){return(o||(o=N(e)))(t||e)}})();static \u0275cmp=C({type:e,selectors:[["p-drawer"]],contentQueries:function(r,t,n){if(r&1&&(E(n,cl,4),E(n,dl,4),E(n,ul,4),E(n,ml,4),E(n,pl,4),E(n,Oe,4)),r&2){let u;v(u=y())&&(t.headerTemplate=u.first),v(u=y())&&(t.footerTemplate=u.first),v(u=y())&&(t.contentTemplate=u.first),v(u=y())&&(t.closeIconTemplate=u.first),v(u=y())&&(t.headlessTemplate=u.first),v(u=y())&&(t.templates=u)}},viewQuery:function(r,t){if(r&1&&(B(gl,5),B(fl,5),B(bl,5)),r&2){let n;v(n=y())&&(t.maskRef=n.first),v(n=y())&&(t.containerViewChild=n.first),v(n=y())&&(t.closeButtonViewChild=n.first)}},inputs:{appendTo:"appendTo",blockScroll:[2,"blockScroll","blockScroll",R],style:"style",styleClass:"styleClass",ariaCloseLabel:"ariaCloseLabel",autoZIndex:[2,"autoZIndex","autoZIndex",R],baseZIndex:[2,"baseZIndex","baseZIndex",ke],modal:[2,"modal","modal",R],closeButtonProps:"closeButtonProps",dismissible:[2,"dismissible","dismissible",R],showCloseIcon:[2,"showCloseIcon","showCloseIcon",R],closeOnEscape:[2,"closeOnEscape","closeOnEscape",R],transitionOptions:"transitionOptions",visible:"visible",position:"position",fullScreen:"fullScreen",header:"header",maskStyle:"maskStyle",closable:[2,"closable","closable",R]},outputs:{onShow:"onShow",onHide:"onHide",visibleChange:"visibleChange"},features:[j([en]),ne],ngContentSelectors:hl,decls:1,vars:1,consts:[["container",""],["icon",""],["role","complementary",3,"ngClass","style","class","keydown",4,"ngIf"],["role","complementary",3,"keydown","ngClass"],[4,"ngTemplateOutlet"],[3,"ngClass"],[3,"class",4,"ngIf"],[3,"ngClass","buttonProps","ariaLabel","onClick","keydown.enter",4,"ngIf"],[4,"ngIf"],[3,"onClick","keydown.enter","ngClass","buttonProps","ariaLabel"]],template:function(r,t){r&1&&(cr(),m(0,Ll,4,21,"div",2)),r&2&&a("ngIf",t.visible)},dependencies:[M,A,D,Fe,Gr,qr,H],encapsulation:2,data:{animation:[Pe("panelState",[de("void => visible",[Do(Pl)]),de("visible => void",[Do(Vl)])])]},changeDetection:0})}return e})(),on=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=se({type:e});static \u0275inj=le({imports:[Wo,H,H]})}return e})();var Ol=["handle"],Wl=["input"],Nl=e=>({checked:e});function Ql(e,i){e&1&&ae(0)}function jl(e,i){if(e&1&&m(0,Ql,1,0,"ng-container",4),e&2){let o=d();a("ngTemplateOutlet",o.handleTemplate||o._handleTemplate)("ngTemplateOutletContext",L(2,Nl,o.checked()))}}var ql=({dt:e})=>`
.p-toggleswitch {
    display: inline-block;
    width: ${e("toggleswitch.width")};
    height: ${e("toggleswitch.height")};
}

.p-toggleswitch-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border-radius: ${e("toggleswitch.border.radius")};
}

.p-toggleswitch-slider {
    display: inline-block;
    cursor: pointer;
    width: 100%;
    height: 100%;
    border-width: ${e("toggleswitch.border.width")};
    border-style: solid;
    border-color: ${e("toggleswitch.border.color")};
    background: ${e("toggleswitch.background")};
    transition: background ${e("toggleswitch.transition.duration")}, color ${e("toggleswitch.transition.duration")}, border-color ${e("toggleswitch.transition.duration")}, outline-color ${e("toggleswitch.transition.duration")}, box-shadow ${e("toggleswitch.transition.duration")};
    border-radius: ${e("toggleswitch.border.radius")};
    outline-color: transparent;
    box-shadow: ${e("toggleswitch.shadow")};
}

.p-toggleswitch-handle {
    position: absolute;
    top: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${e("toggleswitch.handle.background")};
    color: ${e("toggleswitch.handle.color")};
    width: ${e("toggleswitch.handle.size")};
    height: ${e("toggleswitch.handle.size")};
    inset-inline-start: ${e("toggleswitch.gap")};
    margin-block-start: calc(-1 * calc(${e("toggleswitch.handle.size")} / 2));
    border-radius: ${e("toggleswitch.handle.border.radius")};
    transition: background ${e("toggleswitch.transition.duration")}, color ${e("toggleswitch.transition.duration")}, inset-inline-start ${e("toggleswitch.slide.duration")}, box-shadow ${e("toggleswitch.slide.duration")};
}

.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
    background: ${e("toggleswitch.checked.background")};
    border-color: ${e("toggleswitch.checked.border.color")};
}

.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-handle {
    background: ${e("toggleswitch.handle.checked.background")};
    color: ${e("toggleswitch.handle.checked.color")};
    inset-inline-start: calc(${e("toggleswitch.width")} - calc(${e("toggleswitch.handle.size")} + ${e("toggleswitch.gap")}));
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {
    background: ${e("toggleswitch.hover.background")};
    border-color: ${e("toggleswitch.hover.border.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
    background: ${e("toggleswitch.handle.hover.background")};
    color: ${e("toggleswitch.handle.hover.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {
    background: ${e("toggleswitch.checked.hover.background")};
    border-color: ${e("toggleswitch.checked.hover.border.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
    background: ${e("toggleswitch.handle.checked.hover.background")};
    color: ${e("toggleswitch.handle.checked.hover.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {
    box-shadow: ${e("toggleswitch.focus.ring.shadow")};
    outline: ${e("toggleswitch.focus.ring.width")} ${e("toggleswitch.focus.ring.style")} ${e("toggleswitch.focus.ring.color")};
    outline-offset: ${e("toggleswitch.focus.ring.offset")};
}

.p-toggleswitch.p-invalid > .p-toggleswitch-slider {
    border-color: ${e("toggleswitch.invalid.border.color")};
}

.p-toggleswitch.p-disabled {
    opacity: 1;
}

.p-toggleswitch.p-disabled .p-toggleswitch-slider {
    background: ${e("toggleswitch.disabled.background")};
}

.p-toggleswitch.p-disabled .p-toggleswitch-handle {
    background: ${e("toggleswitch.handle.disabled.background")};
}

/* For PrimeNG */

p-toggleSwitch.ng-invalid.ng-dirty > .p-toggleswitch > .p-toggleswitch-slider,
p-toggle-switch.ng-invalid.ng-dirty > .p-toggleswitch > .p-toggleswitch-slider,
p-toggleswitch.ng-invalid.ng-dirty > .p-toggleswitch > .p-toggleswitch-slider {
    border-color: ${e("toggleswitch.invalid.border.color")};
}`,Kl={root:{position:"relative"}},Gl={root:({instance:e})=>({"p-toggleswitch p-component":!0,"p-toggleswitch-checked":e.checked(),"p-disabled":e.disabled,"p-invalid":e.invalid}),input:"p-toggleswitch-input",slider:"p-toggleswitch-slider",handle:"p-toggleswitch-handle"},rn=(()=>{class e extends Ie{name="toggleswitch";theme=ql;classes=Gl;inlineStyles=Kl;static \u0275fac=(()=>{let o;return function(t){return(o||(o=N(e)))(t||e)}})();static \u0275prov=F({token:e,factory:e.\u0275fac})}return e})();var Ul={provide:Ur,useExisting:io(()=>tn),multi:!0},tn=(()=>{class e extends he{style;styleClass;tabindex;inputId;name;disabled;readonly;trueValue=!0;falseValue=!1;ariaLabel;ariaLabelledBy;autofocus;onChange=new U;input;handleTemplate;_handleTemplate;modelValue=!1;focused=!1;onModelChange=()=>{};onModelTouched=()=>{};_componentStyle=k(rn);templates;ngAfterContentInit(){this.templates.forEach(o=>{switch(o.getType()){case"handle":this._handleTemplate=o.template;break;default:this._handleTemplate=o.template;break}})}onClick(o){!this.disabled&&!this.readonly&&(this.modelValue=this.checked()?this.falseValue:this.trueValue,this.onModelChange(this.modelValue),this.onChange.emit({originalEvent:o,checked:this.modelValue}),this.input.nativeElement.focus())}onFocus(){this.focused=!0}onBlur(){this.focused=!1,this.onModelTouched()}writeValue(o){this.modelValue=o,this.cd.markForCheck()}registerOnChange(o){this.onModelChange=o}registerOnTouched(o){this.onModelTouched=o}setDisabledState(o){this.disabled=o,this.cd.markForCheck()}checked(){return this.modelValue===this.trueValue}static \u0275fac=(()=>{let o;return function(t){return(o||(o=N(e)))(t||e)}})();static \u0275cmp=C({type:e,selectors:[["p-toggleswitch"],["p-toggleSwitch"],["p-toggle-switch"]],contentQueries:function(r,t,n){if(r&1&&(E(n,Ol,4),E(n,Oe,4)),r&2){let u;v(u=y())&&(t.handleTemplate=u.first),v(u=y())&&(t.templates=u)}},viewQuery:function(r,t){if(r&1&&B(Wl,5),r&2){let n;v(n=y())&&(t.input=n.first)}},inputs:{style:"style",styleClass:"styleClass",tabindex:[2,"tabindex","tabindex",ke],inputId:"inputId",name:"name",disabled:[2,"disabled","disabled",R],readonly:[2,"readonly","readonly",R],trueValue:"trueValue",falseValue:"falseValue",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",autofocus:[2,"autofocus","autofocus",R]},outputs:{onChange:"onChange"},features:[j([Ul,rn]),ne],decls:6,vars:23,consts:[["input",""],[3,"click","ngClass","ngStyle"],["type","checkbox","role","switch",3,"focus","blur","ngClass","checked","disabled","pAutoFocus"],[3,"ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(r,t){if(r&1){let n=T();l(0,"div",1),I("click",function(w){return g(n),f(t.onClick(w))}),l(1,"input",2,0),I("focus",function(){return g(n),f(t.onFocus())})("blur",function(){return g(n),f(t.onBlur())}),c(),l(3,"span",3)(4,"div",3),m(5,jl,1,4,"ng-container"),c()()()}r&2&&(Z(t.sx("root")),Y(t.styleClass),a("ngClass",t.cx("root"))("ngStyle",t.style),x("data-pc-name","toggleswitch")("data-pc-section","root"),s(),a("ngClass",t.cx("input"))("checked",t.checked())("disabled",t.disabled)("pAutoFocus",t.autofocus),x("id",t.inputId)("aria-checked",t.checked())("aria-labelledby",t.ariaLabelledBy)("aria-label",t.ariaLabel)("name",t.name)("tabindex",t.tabindex)("data-pc-section","hiddenInput"),s(2),a("ngClass",t.cx("slider")),x("data-pc-section","slider"),s(),a("ngClass",t.cx("handle")),s(),ze(t.handleTemplate||t._handleTemplate?5:-1))},dependencies:[M,A,Fe,be,Or,H],encapsulation:2,changeDetection:0})}return e})(),nn=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=se({type:e});static \u0275inj=le({imports:[tn,H,H]})}return e})();var xo=e=>({"background-color":e}),ln=e=>({"outline-primary":e}),sn=e=>({"text-white":e}),an=(e,i)=>i.name;function Zl(e,i){if(e&1){let o=T();l(0,"button",10),I("click",function(){g(o);let t=d();return f(t.toggleConfigSidebar())}),p(1,"i",11),c()}}function Yl(e,i){if(e&1){let o=T();l(0,"button",12),I("click",function(t){let n=g(o).$implicit,u=d();return f(u.updateColors(t,"primary",n))}),c()}if(e&2){let o=i.$implicit,r=d();Z(L(4,xo,(o==null?null:o.name)==="noir"?"var(--text-color)":o==null||o.palette==null?null:o.palette[500])),a("title",o.name)("ngClass",L(6,ln,o.name===r.selectedPrimaryColor()))}}function Xl(e,i){if(e&1){let o=T();l(0,"button",12),I("click",function(t){let n=g(o).$implicit,u=d();return f(u.updateColors(t,"surface",n))}),c()}if(e&2){let o=i.$implicit,r=d();Z(L(4,xo,o==null||o.palette==null?null:o.palette[500])),a("title",o.name)("ngClass",L(6,ln,r.selectedSurface()?r.selectedSurface()===o.name:r.isDarkTheme()?o.name==="zinc":o.name==="slate"))}}function Jl(e,i){e&1&&(l(0,"p"),b(1,"Menu themes are only available in light mode by design as large surfaces can emit too much brightness in dark mode."),c())}function es(e,i){if(e&1&&p(0,"i",38),e&2){let o=d(4);a("ngClass",L(1,sn,o.menuTheme!=="light"))}}function os(e,i){if(e&1){let o=T();l(0,"button",36),I("click",function(){let t=g(o).$implicit,n=d(3);return f(n.changeMenuTheme(t.name))}),m(1,es,1,3,"i",37),c()}if(e&2){let o=i.$implicit,r=d(3);a("ngStyle",L(2,xo,o.color)),s(),a("ngIf",r.menuTheme===o.name)}}function rs(e,i){if(e&1&&(l(0,"div",5),Ke(1,os,2,4,"button",35,Fo),c()),e&2){let o=d(2);s(),Ge(o.menuThemes)}}function ts(e,i){if(e&1&&p(0,"i",38),e&2){let o=d(3);a("ngClass",L(1,sn,o.topbarTheme!=="light"))}}function is(e,i){if(e&1){let o=T();l(0,"button",36),I("click",function(){let t=g(o).$implicit,n=d(2);return f(n.changeTopbarTheme(t.name))}),m(1,ts,1,3,"i",37),c()}if(e&2){let o=i.$implicit,r=d(2);a("ngStyle",L(2,xo,o.color)),s(),a("ngIf",r.topbarTheme===o.name)}}function ns(e,i){if(e&1){let o=T();O(0),l(1,"div",7)(2,"span",4),b(3,"Menu Type"),c(),l(4,"div",13)(5,"div",14)(6,"div",15)(7,"p-radio-button",16),oe("ngModelChange",function(t){g(o);let n=d();return ee(n.menuMode,t)||(n.menuMode=t),f(t)}),c(),l(8,"label",17),b(9,"Static"),c()(),l(10,"div",15)(11,"p-radio-button",18),oe("ngModelChange",function(t){g(o);let n=d();return ee(n.menuMode,t)||(n.menuMode=t),f(t)}),c(),l(12,"label",19),b(13,"Overlay"),c()()(),l(14,"div",14)(15,"div",15)(16,"p-radio-button",20),oe("ngModelChange",function(t){g(o);let n=d();return ee(n.menuMode,t)||(n.menuMode=t),f(t)}),c(),l(17,"label",21),b(18,"Slim"),c()(),l(19,"div",15)(20,"p-radio-button",22),oe("ngModelChange",function(t){g(o);let n=d();return ee(n.menuMode,t)||(n.menuMode=t),f(t)}),c(),l(21,"label",23),b(22,"Slim+"),c()()(),l(23,"div",14)(24,"div",15)(25,"p-radio-button",24),oe("ngModelChange",function(t){g(o);let n=d();return ee(n.menuMode,t)||(n.menuMode=t),f(t)}),c(),l(26,"label",25),b(27,"Reveal"),c()(),l(28,"div",15)(29,"p-radio-button",26),oe("ngModelChange",function(t){g(o);let n=d();return ee(n.menuMode,t)||(n.menuMode=t),f(t)}),c(),l(30,"label",27),b(31,"Drawer"),c()()(),l(32,"div",14)(33,"div",15)(34,"p-radio-button",28),oe("ngModelChange",function(t){g(o);let n=d();return ee(n.menuMode,t)||(n.menuMode=t),f(t)}),c(),l(35,"label",29),b(36,"Horizontal"),c()()()()(),l(37,"div",7)(38,"span",4),b(39,"Menu Profile"),c(),l(40,"div",13)(41,"div",14)(42,"div",15)(43,"p-radio-button",30),oe("ngModelChange",function(t){g(o);let n=d();return ee(n.menuProfilePosition,t)||(n.menuProfilePosition=t),f(t)}),c(),l(44,"label",31),b(45,"Start"),c()(),l(46,"div",15)(47,"p-radio-button",32),oe("ngModelChange",function(t){g(o);let n=d();return ee(n.menuProfilePosition,t)||(n.menuProfilePosition=t),f(t)}),c(),l(48,"label",33),b(49,"End"),c()()()()(),l(50,"div",7)(51,"span",4),b(52,"Menu Themes"),c(),m(53,Jl,2,0,"p",34)(54,rs,3,0,"ng-template",null,0,$e),c(),l(56,"div",7)(57,"span",4),b(58,"Topbar Themes"),c(),l(59,"div",5),Ke(60,is,2,4,"button",35,Fo),c()(),W()}if(e&2){let o=Ue(55),r=d();s(7),J("ngModel",r.menuMode),s(4),J("ngModel",r.menuMode),s(5),J("ngModel",r.menuMode),s(4),J("ngModel",r.menuMode),s(5),J("ngModel",r.menuMode),s(4),J("ngModel",r.menuMode),s(5),J("ngModel",r.menuMode),s(9),J("ngModel",r.menuProfilePosition),s(4),J("ngModel",r.menuProfilePosition),s(6),a("ngIf",r.isDarkTheme())("ngIfElse",o),s(7),Ge(r.topbarThemes)}}var ko=class e{simple=!1;router=k(K);config=k(Vo);_layoutService=k(z);primeng=k(Vo);themeOptions=[{name:"Light",value:!1},{name:"Dark",value:!0}];menuThemes=[{name:"light",color:"#FDFEFF"},{name:"dark",color:"#434B54"},{name:"indigo",color:"#1A237E"},{name:"bluegrey",color:"#37474F"},{name:"brown",color:"#4E342E"},{name:"cyan",color:"#006064"},{name:"green",color:"#2E7D32"},{name:"deeppurple",color:"#4527A0"},{name:"deeporange",color:"#BF360C"},{name:"pink",color:"#880E4F"},{name:"purple",color:"#6A1B9A"},{name:"teal",color:"#00695C"}];topbarThemes=[{name:"lightblue",color:"#2E88FF"},{name:"dark",color:"#363636"},{name:"white",color:"#FDFEFF"},{name:"blue",color:"#1565C0"},{name:"deeppurple",color:"#4527A0"},{name:"purple",color:"#6A1B9A"},{name:"pink",color:"#AD1457"},{name:"cyan",color:"#0097A7"},{name:"teal",color:"#00796B"},{name:"green",color:"#43A047"},{name:"lightgreen",color:"#689F38"},{name:"lime",color:"#AFB42B"},{name:"yellow",color:"#FBC02D"},{name:"amber",color:"#FFA000"},{name:"orange",color:"#FB8C00"},{name:"deeporange",color:"#D84315"},{name:"brown",color:"#5D4037"},{name:"grey",color:"#616161"},{name:"bluegrey",color:"#546E7A"},{name:"indigo",color:"#3F51B5"}];surfaces=[{name:"slate",palette:{0:"#ffffff",50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a",950:"#020617"}},{name:"gray",palette:{0:"#ffffff",50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827",950:"#030712"}},{name:"zinc",palette:{0:"#ffffff",50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b",950:"#09090b"}},{name:"neutral",palette:{0:"#ffffff",50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717",950:"#0a0a0a"}},{name:"stone",palette:{0:"#ffffff",50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917",950:"#0c0a09"}},{name:"soho",palette:{0:"#ffffff",50:"#ececec",100:"#dedfdf",200:"#c4c4c6",300:"#adaeb0",400:"#97979b",500:"#7f8084",600:"#6a6b70",700:"#55565b",800:"#3f4046",900:"#2c2c34",950:"#16161d"}},{name:"viva",palette:{0:"#ffffff",50:"#f3f3f3",100:"#e7e7e8",200:"#cfd0d0",300:"#b7b8b9",400:"#9fa1a1",500:"#87898a",600:"#6e7173",700:"#565a5b",800:"#3e4244",900:"#262b2c",950:"#0e1315"}},{name:"ocean",palette:{0:"#ffffff",50:"#fbfcfc",100:"#F7F9F8",200:"#EFF3F2",300:"#DADEDD",400:"#B1B7B6",500:"#828787",600:"#5F7274",700:"#415B61",800:"#29444E",900:"#183240",950:"#0c1920"}}];selectedPrimaryColor=S(()=>this._layoutService.layoutConfig().primary);get menuMode(){return this._layoutService.layoutConfig().menuMode}set menuMode(i){this._layoutService.layoutConfig.update(o=>_(h({},o),{menuMode:i}))}get menuTheme(){return this._layoutService.layoutConfig().menuTheme}set menuTheme(i){this._layoutService.layoutConfig.update(o=>_(h({},o),{menuTheme:i}))}get topbarTheme(){return this._layoutService.layoutConfig().topbarTheme}set topbarTheme(i){this._layoutService.layoutConfig.update(o=>_(h({},o),{topbarTheme:i}))}get menuProfilePosition(){return this._layoutService.layoutConfig().menuProfilePosition}set menuProfilePosition(i){this._layoutService.layoutConfig.update(o=>_(h({},o),{menuProfilePosition:i}))}get darkTheme(){return this._layoutService.layoutConfig().darkTheme}set darkTheme(i){this._layoutService.layoutConfig.update(o=>_(h({},o),{menuTheme:i?"dark":"light",darkTheme:i}))}get visible(){return this._layoutService.layoutState().configSidebarVisible}set visible(i){this._layoutService.layoutState.update(o=>_(h({},o),{configSidebarVisible:i}))}isDarkTheme=S(()=>this._layoutService.layoutConfig().darkTheme);selectedSurface=S(()=>this._layoutService.layoutConfig().surface);primaryColors=S(()=>{let i=yo.primitive,o=["emerald","green","lime","orange","amber","yellow","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","rose"],r=[{name:"noir",palette:{}}];return o.forEach(t=>{r.push({name:t,palette:i?.[t]})}),r});onLayoutThemeChange(i){this._layoutService.layoutConfig.update(o=>_(h({},o),{layoutTheme:i}))}getPresetExt(){let i=this.primaryColors().find(o=>o.name===this.selectedPrimaryColor())||{};return i.name==="noir"?{semantic:{primary:{50:"{surface.50}",100:"{surface.100}",200:"{surface.200}",300:"{surface.300}",400:"{surface.400}",500:"{surface.500}",600:"{surface.600}",700:"{surface.700}",800:"{surface.800}",900:"{surface.900}",950:"{surface.950}"},colorScheme:{light:{primary:{color:"{primary.950}",contrastColor:"#ffffff",hoverColor:"{primary.800}",activeColor:"{primary.700}"},highlight:{background:"{primary.950}",focusBackground:"{primary.700}",color:"#ffffff",focusColor:"#ffffff"}},dark:{primary:{color:"{primary.50}",contrastColor:"{primary.950}",hoverColor:"{primary.200}",activeColor:"{primary.300}"},highlight:{background:"{primary.50}",focusBackground:"{primary.300}",color:"{primary.950}",focusColor:"{primary.950}"}}}}}:{semantic:{primary:i.palette,colorScheme:{light:{primary:{color:"{primary.500}",contrastColor:"#ffffff",hoverColor:"{primary.600}",activeColor:"{primary.700}"},highlight:{background:"{primary.50}",focusBackground:"{primary.100}",color:"{primary.700}",focusColor:"{primary.800}"}},dark:{primary:{color:"{primary.400}",contrastColor:"{surface.900}",hoverColor:"{primary.300}",activeColor:"{primary.200}"},highlight:{background:"color-mix(in srgb, {primary.400}, transparent 84%)",focusBackground:"color-mix(in srgb, {primary.400}, transparent 76%)",color:"rgba(255,255,255,.87)",focusColor:"rgba(255,255,255,.87)"}}}}}}updateColors(i,o,r){o==="primary"?this._layoutService.layoutConfig.update(t=>_(h({},t),{primary:r.name})):o==="surface"&&this._layoutService.layoutConfig.update(t=>_(h({},t),{surface:r.name})),this.applyTheme(o,r),i.stopPropagation()}applyTheme(i,o){i==="primary"?Ar(this.getPresetExt()):i==="surface"&&Pr(o.palette)}changeMenuTheme(i){this.menuTheme=i}changeTopbarTheme(i){this.topbarTheme=i}toggleConfigSidebar(){this._layoutService.layoutState.update(i=>_(h({},i),{configSidebarVisible:!i.configSidebarVisible}))}static \u0275fac=function(o){return new(o||e)};static \u0275cmp=C({type:e,selectors:[["app-configurator"]],inputs:{simple:[2,"simple","simple",R]},decls:20,vars:7,consts:[["menu_theme_selector",""],["class","layout-config-button config-link","type","button",3,"click",4,"ngIf"],["position","right","styleClass","layout-config-sidebar w-80","header","Settings",3,"visibleChange","onHide","visible","transitionOptions"],[1,"flex","flex-col","gap-4"],[1,"text-lg","font-semibold"],[1,"pt-2","flex","gap-2","flex-wrap"],["type","button",1,"cursor-pointer","w-6","h-6","rounded-full","flex","flex-shrink-0","items-center","justify-center","p-0","outline-none","outline-offset-1",3,"title","ngClass","style"],[1,"flex","flex-col","gap-2"],["optionLabel","name","optionValue","value",3,"ngModelChange","ngModel","options","allowEmpty"],[4,"ngIf"],["type","button",1,"layout-config-button","config-link",3,"click"],[1,"pi","pi-cog"],["type","button",1,"cursor-pointer","w-6","h-6","rounded-full","flex","flex-shrink-0","items-center","justify-center","p-0","outline-none","outline-offset-1",3,"click","title","ngClass"],[1,"flex","flex-wrap","flex-col","gap-3"],[1,"flex"],[1,"flex","items-center","gap-2","w-1/2"],["name","menuMode","value","static",3,"ngModelChange","ngModel"],["for","static"],["name","menuMode","value","overlay",3,"ngModelChange","ngModel"],["for","overlay"],["name","menuMode","value","slim",3,"ngModelChange","ngModel"],["for","slim"],["name","menuMode","value","slim-plus","inputId","slim-plus",3,"ngModelChange","ngModel"],["for","slim-plus"],["name","menuMode","value","reveal",3,"ngModelChange","ngModel"],["for","reveal"],["name","menuMode","value","drawer","inputId","drawer",3,"ngModelChange","ngModel"],["for","drawer"],["name","menuMode","value","horizontal",3,"ngModelChange","ngModel"],["for","horizontal"],["name","menuProfilePosition","value","start",3,"ngModelChange","ngModel"],["for","start"],["name","menuProfilePosition","value","end",3,"ngModelChange","ngModel"],["for","end"],[4,"ngIf","ngIfElse"],["type","button",1,"cursor-pointer","w-6","h-6","rounded-full","flex","flex-shrink-0","items-center","justify-center","p-0","outline-none","outline-offset-1","shadow",3,"ngStyle"],["type","button",1,"cursor-pointer","w-6","h-6","rounded-full","flex","flex-shrink-0","items-center","justify-center","p-0","outline-none","outline-offset-1","shadow",3,"click","ngStyle"],["class","pi pi-check text-lg",3,"ngClass",4,"ngIf"],[1,"pi","pi-check","text-lg",3,"ngClass"]],template:function(o,r){o&1&&(m(0,Zl,2,0,"button",1),l(1,"p-drawer",2),oe("visibleChange",function(n){return ee(r.visible,n)||(r.visible=n),n}),I("onHide",function(){return r._layoutService.hideConfigSidebar()}),l(2,"div",3)(3,"div")(4,"span",4),b(5,"Primary"),c(),l(6,"div",5),Ke(7,Yl,1,8,"button",6,an),c()(),l(9,"div")(10,"span",4),b(11,"Surface"),c(),l(12,"div",5),Ke(13,Xl,1,8,"button",6,an),c()(),l(15,"div",7)(16,"span",4),b(17,"Color Scheme"),c(),l(18,"p-selectbutton",8),oe("ngModelChange",function(n){return ee(r.darkTheme,n)||(r.darkTheme=n),n}),c()(),m(19,ns,62,11,"ng-container",9),c()()),o&2&&(a("ngIf",r.simple),s(),J("visible",r.visible),a("transitionOptions",".3s cubic-bezier(0, 0, 0.2, 1)"),s(6),Ge(r.primaryColors()),s(6),Ge(r.surfaces),s(5),J("ngModel",r.darkTheme),a("options",r.themeOptions)("allowEmpty",!1),s(),a("ngIf",!r.simple))},dependencies:[M,A,D,be,po,Zr,Yr,lt,at,on,Wo,nn,ct,st],encapsulation:2})};var _o=class e{constructor(i,o,r){this.layoutService=i;this.renderer=o;this.router=r;this.overlayMenuOpenSubscription=this.layoutService.overlayOpen$.subscribe(()=>{this.menuOutsideClickListener||(this.menuOutsideClickListener=this.renderer.listen("document","click",t=>{!(this.appSidebar.appMenu.el.nativeElement.isSameNode(t.target)||this.appSidebar.appMenu.el.nativeElement.contains(t.target)||this.appTopbar.menuButton.nativeElement.isSameNode(t.target)||this.appTopbar.menuButton.nativeElement.contains(t.target))&&this.hideMenu()})),(this.layoutService.isSlim()||this.layoutService.isSlimPlus())&&!this.menuScrollListener&&(this.menuScrollListener=this.renderer.listen(this.appSidebar.appMenu.menuContainer.nativeElement,"scroll",t=>{this.layoutService.isDesktop()&&this.hideMenu()})),this.layoutService.layoutState().staticMenuMobileActive&&this.blockBodyScroll()}),this.router.events.pipe(Le(t=>t instanceof Ce)).subscribe(()=>{this.hideMenu()})}overlayMenuOpenSubscription;menuOutsideClickListener;menuScrollListener;appSidebar;appTopbar;blockBodyScroll(){document.body.classList?document.body.classList.add("blocked-scroll"):document.body.className+=" blocked-scroll"}unblockBodyScroll(){document.body.classList?document.body.classList.remove("blocked-scroll"):document.body.className=document.body.className.replace(new RegExp("(^|\\b)"+"blocked-scroll".split(" ").join("|")+"(\\b|$)","gi")," ")}hideMenu(){this.layoutService.layoutState.update(i=>_(h({},i),{overlayMenuActive:!1,staticMenuMobileActive:!1,menuHoverActive:!1})),this.layoutService.reset(),this.menuOutsideClickListener&&(this.menuOutsideClickListener(),this.menuOutsideClickListener=null),this.menuScrollListener&&(this.menuScrollListener(),this.menuScrollListener=null),this.unblockBodyScroll()}containerClass=S(()=>{let i=this.layoutService.layoutConfig(),o=this.layoutService.layoutState();return{"layout-overlay":i.menuMode==="overlay","layout-static":i.menuMode==="static","layout-slim":i.menuMode==="slim","layout-slim-plus":i.menuMode==="slim-plus","layout-horizontal":i.menuMode==="horizontal","layout-reveal":i.menuMode==="reveal","layout-drawer":i.menuMode==="drawer","layout-sidebar-dark":i.darkTheme,"layout-static-inactive":o.staticMenuDesktopInactive&&i.menuMode==="static","layout-overlay-active":o.overlayMenuActive,"layout-mobile-active":o.staticMenuMobileActive,"layout-topbar-menu-active":o.topbarMenuActive,"layout-menu-profile-active":o.rightMenuActive,"layout-sidebar-active":o.sidebarActive,"layout-sidebar-anchored":o.anchored,[`layout-topbar-${i.topbarTheme}`]:!0,[`layout-menu-${i.menuTheme}`]:!0,[`layout-menu-profile-${i.menuProfilePosition}`]:!0}});ngOnDestroy(){this.overlayMenuOpenSubscription&&this.overlayMenuOpenSubscription.unsubscribe(),this.menuOutsideClickListener&&this.menuOutsideClickListener()}static \u0275fac=function(o){return new(o||e)(Q(z),Q(qe),Q(K))};static \u0275cmp=C({type:e,selectors:[["app-main-layout"]],viewQuery:function(o,r){if(o&1&&(B(ro,5),B(eo,5)),o&2){let t;v(t=y())&&(r.appSidebar=t.first),v(t=y())&&(r.appTopbar=t.first)}},features:[j([z,He])],decls:10,vars:1,consts:[[1,"layout-container",3,"ngClass"],["app-header",""],["app-sidebar",""],[1,"layout-content-wrapper"],["app-breadcrumb",""],[1,"layout-content"],["app-footer",""]],template:function(o,r){o&1&&(l(0,"div",0),p(1,"div",1)(2,"div",2),l(3,"div",3),p(4,"div",4),l(5,"div",5),p(6,"router-outlet"),c(),p(7,"div",6),c()(),p(8,"app-configurator")(9,"p-toast")),o&2&&a("ngClass",r.containerClass())},dependencies:[M,A,P,lo,eo,fo,ro,vo,go,ko],encapsulation:2})};var Co=class e{static \u0275fac=function(o){return new(o||e)};static \u0275cmp=C({type:e,selectors:[["app-not-found"]],decls:2,vars:0,template:function(o,r){o&1&&(l(0,"p"),b(1,"not-found-works"),c())},dependencies:[P,re,We],encapsulation:2})};var wo=class e{constructor(i){this.router=i}goToHome(){this.router.navigate(["/dashboard"])}static \u0275fac=function(o){return new(o||e)(Q(K))};static \u0275cmp=C({type:e,selectors:[["app-server-down"]],decls:18,vars:0,consts:[[1,"min-h-screen","w-full","flex","items-center","justify-center","bg-gray-50","px-4"],[1,"max-w-md","w-full"],[1,"text-center","space-y-8","animate-fade-in"],[1,"flex","justify-center","animate-slide-up"],[1,"w-16","h-16","bg-red-50","rounded-full","flex","items-center","justify-center"],["fill","none","stroke","currentColor","viewBox","0 0 24 24",1,"w-8","h-8","text-red-400"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","1.5","d","M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"],[1,"animate-slide-up",2,"animation-delay","0.1s"],[1,"text-7xl","font-light","text-gray-800","mb-2","tracking-tight"],[1,"w-12","h-0.5","bg-gray-300","mx-auto"],[1,"space-y-3","animate-slide-up",2,"animation-delay","0.2s"],[1,"text-xl","font-medium","text-gray-900"],[1,"text-gray-600","leading-relaxed","max-w-sm","mx-auto"],[1,"flex","flex-col","sm:flex-row","gap-3","justify-center","animate-slide-up",2,"animation-delay","0.3s"],["pButton","","type","button","label","Reintentar","icon","pi pi-refresh",1,"p-button-default",3,"click"]],template:function(o,r){o&1&&(l(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),ye(),l(5,"svg",5),p(6,"path",6),c()()(),no(),l(7,"div",7)(8,"h1",8),b(9,"500"),c(),p(10,"div",9),c(),l(11,"div",10)(12,"h2",11),b(13,"Error interno del servidor"),c(),l(14,"p",12),b(15,"Estamos experimentando problemas t\xE9cnicos. Nuestro equipo ha sido notificado."),c()(),l(16,"div",13)(17,"button",14),I("click",function(){return r.goToHome()}),c()()()()())},dependencies:[re,Kr],encapsulation:2})};var cn=[{path:"",redirectTo:"/dashboard",pathMatch:"full"},{path:"",component:_o,children:[{path:"dashboard",data:{breadcrumb:"Dashboard"},loadChildren:()=>import("./chunk-BYCAZLWG.js").then(e=>e.dashboardRoutes)},{path:"purchases",data:{breadcrumb:"Compras"},loadChildren:()=>import("./chunk-V2JMJ2TP.js").then(e=>e.purchasesRoutes)},{path:"inventory",data:{breadcrumb:"Inventario"},loadChildren:()=>import("./chunk-VGAACZON.js").then(e=>e.inventoryRoutes)},{path:"settings",data:{breadcrumb:"Configuraci\xF3n"},loadChildren:()=>import("./chunk-25Y3HI23.js").then(e=>e.settingsRoutes)}]},{path:"not-found",component:Co},{path:"server-error",component:wo},{path:"**",redirectTo:"not-found"}];var Be=class e{_loading=ge(!1);loading=this._loading.asReadonly();timer;show(){clearTimeout(this.timer),this._loading.set(!0)}hide(){this.timer=setTimeout(()=>{this._loading.set(!1)},1e3)}static \u0275fac=function(o){return new(o||e)};static \u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"})};var Io=class e{constructor(i){this.loader=i}intercept(i,o){return this.loader.show(),o.handle(i).pipe(Uo(()=>this.loader.hide()))}static \u0275fac=function(o){return new(o||e)(De(Be))};static \u0275prov=F({token:e,factory:e.\u0275fac})};var So=class e{constructor(i){this.router=i}intercept(i,o){return o.handle(i).pipe(Go(r=>{if(r instanceof yr)switch(r.status){case 401:this.router.navigate(["/login"]);break;case 403:this.router.navigate(["/forbidden"]);break;case 404:this.router.navigate(["/not-found"]);break;case 0:this.router.navigate(["/server-error"]);break;case 500:default:this.router.navigate(["/server-error"]);break}return qo(()=>r)}))}static \u0275fac=function(o){return new(o||e)(De(K))};static \u0275prov=F({token:e,factory:e.\u0275fac})};var ls=zr(yo,{semantic:{colorScheme:{light:{surface:{0:"#ffffff",50:"{zinc.50}",100:"{zinc.100}",200:"{zinc.200}",300:"{zinc.300}",400:"{zinc.400}",500:"{zinc.500}",600:"{zinc.600}",700:"{zinc.700}",800:"{zinc.800}",900:"{zinc.900}",950:"{zinc.950}"}},dark:{surface:{0:"#ffffff",50:"{slate.50}",100:"{slate.100}",200:"{slate.200}",300:"{slate.300}",400:"{slate.400}",500:"{slate.500}",600:"{slate.600}",700:"{slate.700}",800:"{slate.800}",900:"{slate.900}",950:"{slate.950}"}}},primary:{50:"{indigo.50}",100:"{indigo.100}",200:"{indigo.200}",300:"{indigo.300}",400:"{indigo.400}",500:"{indigo.500}",600:"{indigo.600}",700:"{indigo.700}",800:"{indigo.800}",900:"{indigo.900}",950:"{indigo.950}"}}}),dn={providers:[Je,He,ar(()=>{let e=k(Je);return Ko(e.initCompanyLoad()).catch(i=>{console.error("\u{1F6AB} Error de conexi\xF3n al backend",i)})}),Sr(cn,Br({anchorScrolling:"enabled",scrollPositionRestoration:"enabled"}),Mr()),xr(_r()),{provide:Eo,useClass:Io,multi:!0},{provide:Eo,useClass:So,multi:!0},dt(),Vr({ripple:!0,inputStyle:"filled",theme:{preset:ls,options:{darkModeSelector:".app-dark"}}})]};var ss=({dt:e})=>`
.p-progressspinner {
    position: relative;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    display: inline-block;
}

.p-progressspinner::before {
    content: "";
    display: block;
    padding-top: 100%;
}

.p-progressspinner-spin {
    height: 100%;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: p-progressspinner-rotate 2s linear infinite;
}

.p-progressspinner-circle {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: 0;
    stroke: ${e("progressspinner.colorOne")};
    animation: p-progressspinner-dash 1.5s ease-in-out infinite, p-progressspinner-color 6s ease-in-out infinite;
    stroke-linecap: round;
}

@keyframes p-progressspinner-rotate {
    100% {
        transform: rotate(360deg);
    }
}
@keyframes p-progressspinner-dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
    }
}
@keyframes p-progressspinner-color {
    100%,
    0% {
        stroke: ${e("progressspinner.colorOne")};
    }
    40% {
        stroke: ${e("progressspinner.colorTwo")};
    }
    66% {
        stroke: ${e("progressspinner.colorThree")};
    }
    80%,
    90% {
        stroke: ${e("progressspinner.colorFour")};
    }
}
`,cs={root:"p-progressspinner",spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},un=(()=>{class e extends Ie{name="progressspinner";theme=ss;classes=cs;static \u0275fac=(()=>{let o;return function(t){return(o||(o=N(e)))(t||e)}})();static \u0275prov=F({token:e,factory:e.\u0275fac})}return e})();var No=(()=>{class e extends he{styleClass;style;strokeWidth="2";fill="none";animationDuration="2s";ariaLabel;_componentStyle=k(un);static \u0275fac=(()=>{let o;return function(t){return(o||(o=N(e)))(t||e)}})();static \u0275cmp=C({type:e,selectors:[["p-progressSpinner"],["p-progress-spinner"],["p-progressspinner"]],inputs:{styleClass:"styleClass",style:"style",strokeWidth:"strokeWidth",fill:"fill",animationDuration:"animationDuration",ariaLabel:"ariaLabel"},features:[j([un]),ne],decls:3,vars:11,consts:[["role","progressbar",1,"p-progressspinner",3,"ngStyle","ngClass"],["viewBox","25 25 50 50",1,"p-progressspinner-spin"],["cx","50","cy","50","r","20","stroke-miterlimit","10",1,"p-progressspinner-circle"]],template:function(r,t){r&1&&(l(0,"div",0),ye(),l(1,"svg",1),p(2,"circle",2),c()()),r&2&&(a("ngStyle",t.style)("ngClass",t.styleClass),x("aria-label",t.ariaLabel)("aria-busy",!0)("data-pc-name","progressspinner")("data-pc-section","root"),s(),lr("animation-duration",t.animationDuration),x("data-pc-section","root"),s(),x("fill",t.fill)("stroke-width",t.strokeWidth))},dependencies:[M,A,be,H],encapsulation:2,changeDetection:0})}return e})(),mn=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=se({type:e});static \u0275inj=le({imports:[No,H,H]})}return e})();function us(e,i){e&1&&(l(0,"div",1),p(1,"p-progressSpinner",2),c())}var Bo=class e{loader=k(Be);loading=S(()=>this.loader.loading());static \u0275fac=function(o){return new(o||e)};static \u0275cmp=C({type:e,selectors:[["app-loader"]],decls:1,vars:1,consts:[["class","fixed inset-0 z-[9999] bg-black bg-opacity-40 flex items-center justify-center",4,"ngIf"],[1,"fixed","inset-0","z-[9999]","bg-black","bg-opacity-40","flex","items-center","justify-center"],["strokeWidth","4","styleClass","w-12 h-12"]],template:function(o,r){o&1&&m(0,us,2,0,"div",0),o&2&&a("ngIf",r.loading())},dependencies:[M,D,mn,No],encapsulation:2})};var Mo=class e{title="Quanta Frontend";router=k(K);loader=k(Be);ngOnInit(){this.router.events.subscribe(i=>{i instanceof Cr&&this.loader.show(),(i instanceof Ce||i instanceof wr||i instanceof Ir)&&this.loader.hide()})}static \u0275fac=function(o){return new(o||e)};static \u0275cmp=C({type:e,selectors:[["app-root"]],decls:3,vars:0,template:function(o,r){o&1&&p(0,"app-loader")(1,"router-outlet")(2,"p-toast")},dependencies:[lo,Bo,nt,go],encapsulation:2})};vr(Mo,dn).catch(e=>console.error(e));
