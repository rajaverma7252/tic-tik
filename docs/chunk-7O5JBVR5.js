import{a as k}from"./chunk-AKA53QGP.js";import{C as g,E as _,G as h,H as C,I as v,J as x,K as c,L as a,N as q,O,P as d,Q as u,R as y,S as b,X as L,Z as M,ca as S,ga as w,o as l,s as m,t as p,y as s,z as f}from"./chunk-CI7RB4IY.js";var P=e=>({disabled:e});function I(e,i){if(e&1&&(c(0,"p",5),u(1),a()),e&2){let r=d().$implicit;s(),y(r.text)}}function F(e,i){if(e&1){let r=q();c(0,"div",1)(1,"div",2),O("click",function(){let t=m(r).$implicit,o=d();return p(o.onQuestion(t.order==o.currentOrder))}),c(2,"div",3)(3,"h5",4),u(4),a(),g(5,I,2,1,"p",5),a()()()}if(e&2){let r=i.$implicit,n=i.$index,t=d();s(2),_("ngClass",M(3,P,r.order!=t.currentOrder)),s(2),b("Question ",n+1,""),s(),h(5,r.order==t.currentOrder?5:-1)}}var $=(()=>{let i=class i{constructor(n){this.router=n,this.questions=k.questions,this.currentOrder=Number(sessionStorage.getItem("currentOrder")),this.questionList=sessionStorage.getItem("questionList"),this.currentOrder||this.router.navigate(["/home"]),this.questionList?this.questionList=JSON.parse(this.questionList):(this.questionList=this.questions.sort(()=>Math.random()-.5),this.questionList=this.questionList.filter((t,o)=>t.order=o+1),sessionStorage.setItem("questionList",JSON.stringify(this.questionList)))}onQuestion(n=!1){let t=new Audio;if(t.src="./assets/mp3/click.wav",t.play(),n)this.router.navigate(["/home/questions/options"]);else return}};i.\u0275fac=function(t){return new(t||i)(f(w))},i.\u0275cmp=l({type:i,selectors:[["app-questions"]],standalone:!0,features:[L],decls:3,vars:0,consts:[[1,"row","mt-4","mb-5"],[1,"col-sm-3","d-flex","align-items-center","justify-content-center"],[1,"card","m-4",2,"width","18rem","height","7.5rem",3,"click"],[1,"card-body",3,"ngClass"],[1,"card-title"],[1,"card-text"]],template:function(t,o){t&1&&(c(0,"div",0),v(1,F,6,5,"div",1,C),a()),t&2&&(s(),x(o.questionList))},dependencies:[S],styles:[".card[_ngcontent-%COMP%]{cursor:pointer;background-color:#7fffd4}.card[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{background-color:#d2d96c;border-radius:5px}.card[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{cursor:not-allowed;background-color:gray;border-radius:5px}"]});let e=i;return e})();export{$ as QuestionsComponent};