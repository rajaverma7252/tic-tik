import{a as k}from"./chunk-QZFLKR46.js";import{C as l,E as h,G as u,H as C,I as v,J as x,K as c,L as a,M as O,N as q,O as y,P as d,Q as m,R as b,S as w,X as I,Z as L,ca as M,ga as S,o as p,s as f,t as _,y as s,z as g}from"./chunk-CI7RB4IY.js";var P=t=>({disabled:t});function F(t,i){t&1&&O(0,"div",2)}function Q(t,i){if(t&1&&(c(0,"p",6),m(1),a()),t&2){let o=d().$implicit;s(),b(o.text)}}function T(t,i){if(t&1){let o=q();l(0,F,1,0,"div",2),c(1,"div",1)(2,"div",3),y("click",function(){let e=f(o).$implicit,r=d();return _(r.onQuestion(e.order==r.currentOrder))}),c(3,"div",4)(4,"h5",5),m(5),a(),l(6,Q,2,1,"p",6),a()()()}if(t&2){let o=i.$implicit,n=i.$index,e=d();u(0,n+1===e.currentOrder?0:-1),s(3),h("ngClass",L(4,P,o.order!=e.currentOrder)),s(2),w("Question ",n+1,""),s(),u(6,o.order==e.currentOrder?6:-1)}}var j=(()=>{let i=class i{constructor(n){this.router=n,this.questions=k.questions,this.currentOrder=Number(sessionStorage.getItem("currentOrder")),this.questionList=sessionStorage.getItem("questionList"),this.currentOrder||this.router.navigate(["/home"]),this.questionList?this.questionList=JSON.parse(this.questionList):(this.questionList=this.questions.sort(()=>Math.random()-.5),this.questionList=this.questionList.filter((e,r)=>e.order=r+1),sessionStorage.setItem("questionList",JSON.stringify(this.questionList)))}ngAfterViewInit(){this.scroll("itemRef")}scroll(n){let e=document.getElementById(n);setTimeout(()=>{e.scrollIntoView()},200)}onQuestion(n=!1){let e=new Audio;if(e.src="./assets/mp3/click.wav",e.play(),n)this.router.navigate(["/home/questions/options"]);else return}};i.\u0275fac=function(e){return new(e||i)(g(S))},i.\u0275cmp=p({type:i,selectors:[["app-questions"]],standalone:!0,features:[I],decls:3,vars:0,consts:[[1,"row","mt-4","mb-5"],[1,"col-sm-3","d-flex","align-items-center","justify-content-center"],["id","itemRef"],[1,"card","m-4",2,"width","18rem","height","7.5rem",3,"click"],[1,"card-body",3,"ngClass"],[1,"card-title"],[1,"card-text"]],template:function(e,r){e&1&&(c(0,"div",0),v(1,T,7,6,"div",1,C),a()),e&2&&(s(),x(r.questionList))},dependencies:[M],styles:[".card[_ngcontent-%COMP%]{cursor:pointer;background-color:#7fffd4}.card[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{background-color:#d2d96c;border-radius:5px}.card[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{cursor:not-allowed;background-color:gray;border-radius:5px}"]});let t=i;return t})();export{j as QuestionsComponent};
