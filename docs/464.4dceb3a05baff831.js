"use strict";(self.webpackChunkformApp=self.webpackChunkformApp||[]).push([[464],{2464:(X,h,i)=>{i.r(h),i.d(h,{AuthModule:()=>D});var c=i(6895),a=i(433),p=i(1134),e=i(8256);let y=(()=>{class n{constructor(){this.firstNameAndLastnamePattern="([a-zA-Z]+) ([a-zA-Z]+)",this.emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"}cantBeStrider(t){return"strider"===t.value.trim().toLowerCase()?{Strider:!0}:null}isValidField(t,s){return t.controls[s].errors&&t.controls[s].touched}isFieldOneEqualFieldTwo(t,s){return o=>{const l=o.get(t)?.value,m=o.get(s)?.value;return l!==m?(o.get(s)?.setErrors({notEqual:!0}),{noEqual:!0}):(o.get(s)?.setErrors(null),null)}}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var f=i(9751),T=i(727);class F extends T.w0{constructor(r,t){super()}schedule(r,t=0){return this}}const d={setInterval(n,r,...t){const{delegate:s}=d;return s?.setInterval?s.setInterval(n,r,...t):setInterval(n,r,...t)},clearInterval(n){const{delegate:r}=d;return(r?.clearInterval||clearInterval)(n)},delegate:void 0};var q=i(8737);const g={now:()=>(g.delegate||Date).now(),delegate:void 0};class u{constructor(r,t=u.now){this.schedulerActionCtor=r,this.now=t}schedule(r,t=0,s){return new this.schedulerActionCtor(this,r).schedule(s,t)}}u.now=g.now;const v=new class w extends u{constructor(r,t=u.now){super(r,t),this.actions=[],this._active=!1}flush(r){const{actions:t}=this;if(this._active)return void t.push(r);let s;this._active=!0;do{if(s=r.execute(r.state,r.delay))break}while(r=t.shift());if(this._active=!1,s){for(;r=t.shift();)r.unsubscribe();throw s}}}(class U extends F{constructor(r,t){super(r,t),this.scheduler=r,this.work=t,this.pending=!1}schedule(r,t=0){var s;if(this.closed)return this;this.state=r;const o=this.id,l=this.scheduler;return null!=o&&(this.id=this.recycleAsyncId(l,o,t)),this.pending=!0,this.delay=t,this.id=null!==(s=this.id)&&void 0!==s?s:this.requestAsyncId(l,this.id,t),this}requestAsyncId(r,t,s=0){return d.setInterval(r.flush.bind(r,this),s)}recycleAsyncId(r,t,s=0){if(null!=s&&this.delay===s&&!1===this.pending)return t;null!=t&&d.clearInterval(t)}execute(r,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const s=this._execute(r,t);if(s)return s;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(r,t){let o,s=!1;try{this.work(r)}catch(l){s=!0,o=l||new Error("Scheduled action threw falsy error")}if(s)return this.unsubscribe(),o}unsubscribe(){if(!this.closed){const{id:r,scheduler:t}=this,{actions:s}=t;this.work=this.state=this.scheduler=null,this.pending=!1,(0,q.P)(s,this),null!=r&&(this.id=this.recycleAsyncId(t,r,null)),this.delay=null,super.unsubscribe()}}}),I=v;var C=i(7272),Z=i(5698),S=i(4482),b=i(5403),x=i(5032),V=i(9718),N=i(5577);function A(n,r){return r?t=>(0,C.z)(r.pipe((0,Z.q)(1),function P(){return(0,S.e)((n,r)=>{n.subscribe((0,b.x)(r,x.Z))})}()),t.pipe(A(n))):(0,N.z)((t,s)=>n(t,s).pipe((0,Z.q)(1),(0,V.h)(t)))}var E=i(3532);let z=(()=>{class n{validate(t){const s=t.value;return new f.y(l=>{console.log({email:s}),"ejemplo@google.com"===s&&(l.next({emailTaken:!0}),l.complete()),l.next(null),l.complete()}).pipe(function L(n,r=v){const t=function j(n=0,r,t=I){let s=-1;return null!=r&&((0,E.K)(r)?t=r:s=r),new f.y(o=>{let l=function R(n){return n instanceof Date&&!isNaN(n)}(n)?+n-t.now():n;l<0&&(l=0);let m=0;return t.schedule(function(){o.closed||(o.next(m++),0<=s?this.schedule(void 0,s):o.complete())},l)})}(n,r);return A(()=>t)}(3e3))}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function J(n,r){1&n&&(e.TgZ(0,"span",13),e._uU(1," Debe de ser en formato de nombre y apellido "),e.qZA())}function Y(n,r){1&n&&(e.TgZ(0,"span",13),e._uU(1," mensaje de error del email "),e.qZA())}function O(n,r){1&n&&(e.TgZ(0,"span",13),e._uU(1," El username no puede ser Strider "),e.qZA())}function M(n,r){1&n&&(e.TgZ(0,"span",13),e._uU(1," La contrase\xf1a debe de ser mayor de 6 caracteres. "),e.qZA())}function B(n,r){1&n&&(e.TgZ(0,"span",13),e._uU(1," Las contrase\xf1as deben de ser iguales "),e.qZA())}const Q=[{path:"",children:[{path:"sign-up",component:(()=>{class n{constructor(t,s,o){this.fb=t,this.validatorsService=s,this.emailValidator=o,this.myForm=this.fb.group({name:["",[a.kI.required,a.kI.pattern(this.validatorsService.firstNameAndLastnamePattern)]],email:["",[a.kI.required,a.kI.pattern(this.validatorsService.emailPattern)],[this.emailValidator]],username:["",[a.kI.required,this.validatorsService.cantBeStrider]],password:["",[a.kI.required,a.kI.minLength(6)]],password2:["",[a.kI.required]]},{validators:[this.validatorsService.isFieldOneEqualFieldTwo("password","password2")]})}isValidField(t){return this.validatorsService.isValidField(this.myForm,t)}onSubmit(){this.myForm.markAllAsTouched()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(a.qu),e.Y36(y),e.Y36(z))},n.\u0275cmp=e.Xpm({type:n,selectors:[["ng-component"]],decls:76,vars:27,consts:[[1,"row"],[1,"col"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"row","mb-3"],[1,"col-sm-3","col-form-label"],[1,"col-sm-9"],["formControlName","name","type","text","placeholder","Nombre del usuario",1,"form-control"],["class","form-text text-danger",4,"ngIf"],["type","email","formControlName","email","placeholder","Email del usuario",1,"form-control"],["formControlName","username","type","text","placeholder","Nombre c\xf3digo del usuario",1,"form-control"],["formControlName","password","type","password","placeholder","Password de su cuenta",1,"form-control"],["formControlName","password2","type","password","placeholder","Confirmar la contrase\xf1a",1,"form-control"],["type","submit",1,"btn","btn-primary","float-end"],[1,"form-text","text-danger"]],template:function(t,s){1&t&&(e.TgZ(0,"h2"),e._uU(1,"Validaciones Reactivas"),e.qZA(),e._UZ(2,"hr"),e.TgZ(3,"div",0)(4,"div",1)(5,"form",2),e.NdJ("ngSubmit",function(){return s.onSubmit()}),e.TgZ(6,"div",3)(7,"label",4),e._uU(8,"Nombre"),e.qZA(),e.TgZ(9,"div",5),e._UZ(10,"input",6),e.YNc(11,J,2,0,"span",7),e.qZA()(),e.TgZ(12,"div",3)(13,"label",4),e._uU(14,"Email"),e.qZA(),e.TgZ(15,"div",5),e._UZ(16,"input",8),e.YNc(17,Y,2,0,"span",7),e.qZA()(),e.TgZ(18,"div",3)(19,"label",4),e._uU(20,"Username"),e.qZA(),e.TgZ(21,"div",5),e._UZ(22,"input",9),e.YNc(23,O,2,0,"span",7),e.qZA()(),e.TgZ(24,"div",3)(25,"label",4),e._uU(26,"Password"),e.qZA(),e.TgZ(27,"div",5),e._UZ(28,"input",10),e.YNc(29,M,2,0,"span",7),e.qZA()(),e.TgZ(30,"div",3)(31,"label",4),e._uU(32,"Confirmar"),e.qZA(),e.TgZ(33,"div",5),e._UZ(34,"input",11),e.YNc(35,B,2,0,"span",7),e.qZA()(),e.TgZ(36,"div",0)(37,"div",1)(38,"button",12),e._uU(39," Crear "),e.qZA()()()()()(),e.TgZ(40,"h2"),e._uU(41),e.qZA(),e.TgZ(42,"h2"),e._uU(43),e.qZA(),e.TgZ(44,"h2"),e._uU(45),e.qZA(),e.TgZ(46,"h2"),e._uU(47,"Form errors: "),e.qZA(),e.TgZ(48,"pre"),e._uU(49),e.ALo(50,"json"),e.qZA(),e.TgZ(51,"h5"),e._uU(52,"Nombre"),e.qZA(),e.TgZ(53,"pre"),e._uU(54),e.ALo(55,"json"),e.qZA(),e.TgZ(56,"h5"),e._uU(57,"Email"),e.qZA(),e.TgZ(58,"pre"),e._uU(59),e.ALo(60,"json"),e.qZA(),e.TgZ(61,"h5"),e._uU(62,"Username"),e.qZA(),e.TgZ(63,"pre"),e._uU(64),e.ALo(65,"json"),e.qZA(),e.TgZ(66,"h5"),e._uU(67,"Password"),e.qZA(),e.TgZ(68,"pre"),e._uU(69),e.ALo(70,"json"),e.qZA(),e.TgZ(71,"h5"),e._uU(72,"Confirmar"),e.qZA(),e.TgZ(73,"pre"),e._uU(74),e.ALo(75,"json"),e.qZA()),2&t&&(e.xp6(5),e.Q6J("formGroup",s.myForm),e.xp6(6),e.Q6J("ngIf",s.isValidField("name")),e.xp6(6),e.Q6J("ngIf",s.isValidField("email")),e.xp6(6),e.Q6J("ngIf",s.isValidField("username")),e.xp6(6),e.Q6J("ngIf",s.isValidField("password")),e.xp6(6),e.Q6J("ngIf",s.isValidField("password2")),e.xp6(6),e.hij("Form Valid: ",s.myForm.valid," "),e.xp6(2),e.hij("Form Status: ",s.myForm.status,""),e.xp6(2),e.hij("Form Pending: ",s.myForm.pending,""),e.xp6(4),e.Oqu(e.lcZ(50,15,s.myForm.errors)),e.xp6(5),e.Oqu(e.lcZ(55,17,s.myForm.controls.name.errors)),e.xp6(5),e.Oqu(e.lcZ(60,19,s.myForm.controls.email.errors)),e.xp6(5),e.Oqu(e.lcZ(65,21,s.myForm.controls.username.errors)),e.xp6(5),e.Oqu(e.lcZ(70,23,s.myForm.value.password)),e.xp6(5),e.Oqu(e.lcZ(75,25,s.myForm.controls.password2.errors)))},dependencies:[c.O5,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,c.Ts],encapsulation:2}),n})()},{path:"**",redirectTo:"sign-up"}]}];let k=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[p.Bz.forChild(Q),p.Bz]}),n})(),D=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.ez,k,a.UX]}),n})()}}]);