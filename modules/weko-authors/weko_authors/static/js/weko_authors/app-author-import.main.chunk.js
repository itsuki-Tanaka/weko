(this["webpackJsonpapp-author-import"]=this["webpackJsonpapp-author-import"]||[]).push([[0],{393:function(e,t,a){},401:function(e,t,a){"use strict";a.r(t);a(195),a(205);var n=a(2),r=a.n(n),s=a(59),c=a.n(s),l=a(16),i=a.n(l),o=a(34),d=a(44),u=a(45),m=a(47),j=a(46),b=(a(393),a(394),document.getElementById("select").value),h=document.getElementById("import").value,p=document.getElementById("result").value,v=document.getElementById("download").value,f=document.getElementById("no").value,x=document.getElementById("weko_id").value,O=document.getElementById("name").value,g=document.getElementById("select_file").value,_=document.getElementById("selected_file_name").value,y=document.getElementById("next").value,k=document.getElementById("summary").value,N=document.getElementById("total").value,I=document.getElementById("new_creator").value,w=document.getElementById("update_creator").value,E=document.getElementById("delete_creator").value,S=document.getElementById("check_error").value,B=document.getElementById("mail_address").value,C=document.getElementById("check_result").value,D=document.getElementById("start_date").value,T=document.getElementById("end_date").value,M=document.getElementById("status").value,L=document.getElementById("to_do").value,F=document.getElementById("register_success").value,U=document.getElementById("update_success").value,A=document.getElementById("delete_success").value,Y=document.getElementById("error").value,J=document.getElementById("warning").value,P=document.getElementById("register").value,R=document.getElementById("update").value,G=document.getElementById("deleted").value,H=document.getElementById("internal_server_error").value,q=document.getElementById("celery_not_run").value,z=document.getElementById("not_available_error").value,K=document.getElementById("not_available_error_another").value,Q=document.getElementById("import_fail_error").value,V=JSON.parse(document.getElementById("import_authors_entrypoints").value),W=0,X=1,Z=2,$=[{tab_key:"select",tab_name:b,step:W},{tab_key:"import",tab_name:h,step:X},{tab_key:"result",tab_name:p,step:Z}],ee=0,te=1,ae=2,ne=3,re="import_author_task_id",se=r.a.createContext({}),ce=function(e){var t="";switch(e){case"new":t=F;break;case"update":t=U;break;case"deleted":t=A}return t},le=function(e){return e?e.filter((function(e){return null!=e&&""!==e})):[]},ie=function(e){return e?le(e.map((function(e){var t=e.familyName&&e.firstName?", ":"";return e.familyName+t+e.firstName}))):[]},oe=function(e,t,a){var n="object"!==typeof e?JSON.parse(e):e,r="";if(a){var s="";for(var c in n[0])s+=c+"\t";r+=(s=s.slice(0,-1))+"\r\n"}for(var l=0;l<n.length;l++){var i="";for(var o in n[l])i+='"'+n[l][o]+'"\t';r+=(i=i.slice(0,-1))+"\r\n"}if(""!==r){var d=t.replace(/ /g,"_")+".tsv",u=new Blob([r],{type:"text/tsv"});if(window.navigator&&window.navigator.msSaveOrOpenBlob)window.navigator.msSaveOrOpenBlob(u,d);else{var m=window.URL.createObjectURL(u),j=document.createElement("a");j.style.display="none",j.href=m,j.download=d,document.body.appendChild(j),j.click(),document.body.removeChild(j),window.URL.revokeObjectURL(m)}}else alert("Invalid data")},de=a(0),ue=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).getLastString=function(e,t){return e.split(t).pop()},n.onChangeFile=function(e){var t=e.target.files[0],a=n.getLastString(e.target.value,"\\");if("tsv"!==n.getLastString(a,"."))return!1;n.setState({fileName:a});var r=new FileReader;r.onload=function(){n.setState({file:r.result})},r.readAsDataURL(t)},n.onCheckImportFile=Object(o.a)(i.a.mark((function e(){var t,a,r,s,c,l,o,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.context,a=t.setImportData,r=t.setErrorMessage,s=n.state,c=s.fileName,l=s.file){e.next=4;break}return e.abrupt("return");case 4:return n.setState({isChecking:!0}),e.prev=5,e.next=8,fetch(V.check_import_file,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({file_name:c,file:l})});case 8:return o=e.sent,e.next=11,o.json();case 11:(d=e.sent).error?r(d.error):a(d.list_import_data),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(5),r(H);case 18:n.setState({isChecking:!1});case 19:case"end":return e.stop()}}),e,null,[[5,15]])}))),n.state={file:null,fileName:"",isChecking:!1},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.fileName,n=t.file,r=t.isChecking,s=this.context.importStatus;return Object(de.jsx)("div",{className:"col-sm-12",children:Object(de.jsx)("div",{className:"row",children:Object(de.jsxs)("div",{className:"col-sm-12",children:[Object(de.jsxs)("div",{className:"row",children:[Object(de.jsx)("div",{className:"col-md-2 col-cd",children:Object(de.jsx)("label",{children:g})}),Object(de.jsxs)("div",{className:"col-md-8",children:[Object(de.jsxs)("div",{children:[Object(de.jsx)("button",{className:"btn btn-primary",disabled:s===ae,onClick:function(){e.inputFileElement.click()},children:g}),Object(de.jsx)("input",{type:"file",className:"hide",ref:function(t){return e.inputFileElement=t},accept:".tsv",onChange:this.onChangeFile})]}),Object(de.jsx)("div",{className:"block-placeholder",children:a?Object(de.jsx)("p",{className:"active",children:a}):Object(de.jsx)("p",{children:_})})]})]}),Object(de.jsx)("div",{className:"row",children:Object(de.jsx)("div",{className:"col-md-2",children:Object(de.jsxs)("button",{className:"btn btn-primary",disabled:!n||s===ae,onClick:this.onCheckImportFile,children:[r?Object(de.jsx)("div",{className:"loading"}):Object(de.jsx)("span",{className:"glyphicon glyphicon-download-alt icon"}),y]})})})]})})})}}]),a}(r.a.Component);ue.contextType=se;var me=ue,je=a(26),be=a(190),he=a.n(be),pe=a(93),ve=a.n(pe),fe=a(191),xe=a.n(fe),Oe=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).handleDownload=function(){var t=e.context.records.map((function(e,t){var a,n=e.emailInfo?le(e.emailInfo.map((function(e){return e.email}))).join("\n"):"",r=e.errors?e.errors.map((function(e){return Y+": "+e})).join("\n").replace("<br/>","\n"):"",s=e.warnings?e.warnings.map((function(e){return J+": "+e})).join("\n").replace("<br/>","\n"):"";return a={},Object(je.a)(a,f,t+1),Object(je.a)(a,x,e.pk_id),Object(je.a)(a,O,e.fullname.join("\n")),Object(je.a)(a,B,n),Object(je.a)(a,C,(e.errors?r:"new"===e.status?P:"update"===e.status?R:"deleted"===e.status?G:"")+(s?"\n":"")+s),a}));t&&oe(t,"Creator_Check_"+ve()().format("YYYYDDMM"),!0)},e.summaryDataImport=function(e){return{numTotal:e.length,numNews:e.filter((function(e){return"new"===e.status&&!e.errors})).length,numUpdates:e.filter((function(e){return"update"===e.status&&!e.errors})).length,numDeleteds:e.filter((function(e){return"deleted"===e.status&&!e.errors})).length,numErrors:e.filter((function(e){return e.errors})).length}},e.renderTableItem=function(e){return e.map((function(e,t){return Object(de.jsxs)("tr",{children:[Object(de.jsx)("td",{children:t+1}),Object(de.jsx)("td",{children:e.pk_id}),Object(de.jsx)("td",{children:e.fullname.map((function(e){return Object(de.jsx)("span",{className:"newline",children:e},t)}))}),Object(de.jsx)("td",{children:e.emailInfo?e.emailInfo.map((function(e,t){return Object(de.jsx)("span",{className:"newline",children:e.email},t)})):Object(de.jsx)(de.Fragment,{})}),Object(de.jsxs)("td",{children:[e.errors?e.errors.map((function(e){return Object(de.jsx)("div",{dangerouslySetInnerHTML:{__html:Y+": "+e}})})):"new"===e.status?P:"update"===e.status?R:"deleted"===e.status?G:"",e.warnings&&e.warnings.map((function(e){return Object(de.jsx)("div",{dangerouslySetInnerHTML:{__html:J+": "+e}})}))]})]},t)}))},e.onImport=Object(o.a)(i.a.mark((function t(){var a,n,r,s,c,l,o,d,u;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.context,n=a.records,r=a.setErrorMessage,s=a.setTaskData,c="",t.prev=2,l=localStorage.getItem(re),o=n.filter((function(e){return!e.errors})),t.next=7,fetch(V.import,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({group_task_id:l,records:xe()(o.map((function(e){var t=he.a.cloneDeep(e);return delete t.fullname,delete t.warnings,t})))})});case 7:return d=t.sent,t.next=10,d.json();case 10:(u=t.sent).data?(u.data.tasks.forEach((function(e,t){e.fullname=o[t].fullname,e.type=o[t].status})),s(u.data.group_task_id,u.data.tasks)):u.is_available||(c=u.celery_not_run?q:u.continue_data?z:K),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(2),console.log(t.t0),c=H;case 18:r(c);case 19:case"end":return t.stop()}}),t,null,[[2,14]])}))),e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.context,t=e.records,a=e.importStatus,n=this.summaryDataImport(t),r=n.numTotal,s=n.numNews,c=n.numUpdates,l=n.numDeleteds,i=n.numErrors;return Object(de.jsx)("div",{className:"check-component",children:Object(de.jsxs)("div",{className:"row",children:[Object(de.jsx)("div",{className:"col-md-12 text-center",children:Object(de.jsxs)("button",{className:"btn btn-primary",onClick:this.onImport,disabled:a!==te,children:[a===ae?Object(de.jsx)("div",{className:"loading"}):Object(de.jsx)("span",{className:"glyphicon glyphicon-download-alt icon"}),h]})}),Object(de.jsx)("div",{className:"col-md-12 text-center",children:Object(de.jsxs)("div",{className:"row block-summary",children:[Object(de.jsxs)("div",{className:"col-lg-2 col-md-3 col-sm-3",children:[Object(de.jsx)("h3",{children:Object(de.jsx)("b",{children:k})}),Object(de.jsxs)("div",{className:"flex-box",children:[Object(de.jsxs)("div",{children:[N,":"]}),Object(de.jsx)("div",{children:r})]}),Object(de.jsxs)("div",{className:"flex-box",children:[Object(de.jsxs)("div",{children:[I,":"]}),Object(de.jsx)("div",{children:s})]}),Object(de.jsxs)("div",{className:"flex-box",children:[Object(de.jsxs)("div",{children:[w,":"]}),Object(de.jsx)("div",{children:c})]}),Object(de.jsxs)("div",{className:"flex-box",children:[Object(de.jsxs)("div",{children:[E,":"]}),Object(de.jsx)("div",{children:l})]}),Object(de.jsxs)("div",{className:"flex-box",children:[Object(de.jsxs)("div",{children:[S,":"]}),Object(de.jsx)("div",{children:i})]})]}),Object(de.jsx)("div",{className:"col-lg-10 col-md-9 text-align-right",children:Object(de.jsxs)("button",{className:"btn btn-primary",onClick:this.handleDownload,children:[Object(de.jsx)("span",{className:"glyphicon glyphicon-cloud-download icon"}),v]})})]})}),Object(de.jsx)("div",{className:"col-md-12 m-t-20",children:Object(de.jsxs)("table",{className:"table table-striped table-bordered",children:[Object(de.jsx)("thead",{children:Object(de.jsxs)("tr",{children:[Object(de.jsx)("th",{children:f}),Object(de.jsx)("th",{children:x}),Object(de.jsx)("th",{children:Object(de.jsx)("p",{className:"table-title-170",children:O})}),Object(de.jsx)("th",{children:Object(de.jsx)("p",{className:"table-title-170",children:B})}),Object(de.jsx)("th",{children:Object(de.jsx)("p",{className:"table-title-100",children:C})})]})}),Object(de.jsx)("tbody",{children:this.renderTableItem(t)})]})})]})})}}]),a}(r.a.Component);Oe.contextType=se;var ge=Oe,_e=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).prepareDisplayStatus=function(e,t){var a="";switch(e){case"PENDING":a=L;break;case"SUCCESS":a=ce(t);break;case"FAILURE":a=Y+": "+Q}return a},e.handleDownload=Object(o.a)(i.a.mark((function t(){var a,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=e.context.tasks,(n=a.map((function(t,a){var n;return n={},Object(je.a)(n,f,a+1),Object(je.a)(n,D,t.start_date?t.start_date:""),Object(je.a)(n,T,t.end_date?t.end_date:""),Object(je.a)(n,x,t.record_id||""),Object(je.a)(n,O,t.fullname.join("\n")),Object(je.a)(n,M,e.prepareDisplayStatus(t.status,t.type)),n})))&&oe(n,"Creator_List_Download_"+ve()().format("YYYYDDMM"),!0);case 3:case"end":return t.stop()}}),t)}))),e.renderTableItem=function(t){return t.map((function(t,a){return Object(de.jsxs)("tr",{children:[Object(de.jsx)("td",{children:a+1}),Object(de.jsx)("td",{children:t.start_date?t.start_date:""}),Object(de.jsx)("td",{children:t.end_date?t.end_date:""}),Object(de.jsx)("td",{children:t.record_id||""}),Object(de.jsx)("td",{children:t.fullname.map((function(e){return Object(de.jsx)("span",{className:"newline",children:e},a)}))}),Object(de.jsx)("td",{children:e.prepareDisplayStatus(t.status,t.type)})]},a)}))},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.context,t=e.tasks,a=e.recordNames,n=e.importStatus;return Object(de.jsxs)("div",{className:"result_container row",children:[Object(de.jsx)("div",{className:"col-md-12 text-align-right",children:Object(de.jsxs)("button",{className:"btn btn-primary",onClick:this.handleDownload,disabled:n===ae,children:[Object(de.jsx)("span",{className:"glyphicon glyphicon-cloud-download icon"}),v]})}),Object(de.jsx)("div",{className:"col-md-12 m-t-20",children:Object(de.jsxs)("table",{className:"table table-striped table-bordered",children:[Object(de.jsx)("thead",{children:Object(de.jsxs)("tr",{children:[Object(de.jsx)("th",{children:f}),Object(de.jsx)("th",{className:"start_date",children:Object(de.jsx)("p",{className:"t_head",children:D})}),Object(de.jsx)("th",{className:"end_date",children:Object(de.jsx)("p",{className:"t_head ",children:T})}),Object(de.jsx)("th",{children:x}),Object(de.jsx)("th",{children:Object(de.jsx)("p",{className:"table-title-170",children:O})}),Object(de.jsx)("th",{children:Object(de.jsx)("p",{className:"table-title-100",children:M})})]})}),Object(de.jsx)("tbody",{children:this.renderTableItem(t,a)})]})})]})}}]),a}(r.a.Component);_e.contextType=se;var ye=me,ke=ge,Ne=_e,Ie=a(404),we=function(e){var t=e.type,a=void 0===t?"danger":t,n=e.msg,r=void 0===n?"":n,s=e.onClose;return""!==r?Object(de.jsx)(Ie.a,{variant:a,onClose:s,className:"opacity1",dismissible:!0,children:Object(de.jsx)("div",{dangerouslySetInnerHTML:{__html:r}})}):""},Ee=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){n.isImportAvailable()},n.setStep=function(e){n.setState({step:e})},n.onChangeTab=function(e){n.state.step>=$.filter((function(t){return t.tab_key===e}))[0].step&&n.setState({tab:e})},n.setErrorMessage=function(e){n.setState({errorMsg:e})},n.setImportData=function(e){var t=e.filter((function(e){return!e.errors||0===e.errors.length})).length>0;e.forEach((function(e){e.fullname=ie(e.authorNameInfo)})),n.setState({tab:"import",records:e,importStatus:t?te:ee,step:X,errorMsg:""})},n.setTaskData=function(e,t){localStorage.setItem(re,e),n.setState({tasks:t,tab:"result",step:Z,importStatus:ae,task_ids:t.map((function(e){return e.task_id}))}),n.onCheckImportStatus()},n.isImportAvailable=Object(o.a)(i.a.mark((function e(){var t,a,r,s,c,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=!1,a="",e.prev=2,r=V.is_import_available,(s=localStorage.getItem(re))&&(r+="?group_task_id="+s),e.next=8,fetch(r,{method:"GET"});case 8:return c=e.sent,e.next=11,c.json();case 11:(l=e.sent).is_available?t=!0:l.celery_not_run?a=q:l.continue_data?(a=z,l.continue_data.records.forEach((function(e){e.fullname=ie(e.authorNameInfo)})),l.continue_data.tasks.forEach((function(e,t){e.fullname=l.continue_data.records[t].fullname,e.type=l.continue_data.records[t].status})),n.setState({records:l.continue_data.records}),n.setTaskData(l.continue_data.group_task_id,l.continue_data.tasks)):a=K,e.next=19;break;case 15:e.prev=15,e.t0=e.catch(2),console.log(e.t0),a=H;case 19:return n.setErrorMessage(a),e.abrupt("return",t);case 21:case"end":return e.stop()}}),e,null,[[2,15]])}))),n.onCheckImportStatus=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){var t=setInterval(Object(o.a)(i.a.mark((function a(){var r,s,c,l,o,d,u,m;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r=n.state,s=r.tasks,c=r.task_ids,l="",o=!0,a.prev=3,a.next=6,fetch(V.check_import_status,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tasks:c})});case 6:return d=a.sent,a.next=9,d.json();case 9:(u=a.sent)?(m=u.map((function(e){var t=s.filter((function(t){return t.task_id===e.task_id})),a=!!(t&&t.length>0)&&t[0];return a&&(a.status=e.status,a.start_date=e.start_date,a.end_date=e.end_date,"PENDING"===e.status&&(o=!1)),a})),n.setState({tasks:m,importStatus:o?ne:ae})):l=H,a.next=17;break;case 13:a.prev=13,a.t0=a.catch(3),console.log(a.t0),l=H;case 17:(l||o)&&(n.setErrorMessage(l),e(!o),clearInterval(t));case 18:case"end":return a.stop()}}),a,null,[[3,13]])}))),1e3)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),n.state={tab:"select",step:W,errorMsg:"",tasks:[],task_ids:[],records:[],importStatus:ee,isShowMessage:!1,setStep:n.setStep,onChangeTab:n.onChangeTab,setErrorMessage:n.setErrorMessage,isImportAvailable:n.isImportAvailable,setImportData:n.setImportData,setTaskData:n.setTaskData},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.tab,n=t.errorMsg;return Object(de.jsxs)(se.Provider,{value:this.state,children:[Object(de.jsx)(we,{type:"danger",msg:n,onClose:function(){return e.setState({errorMsg:""})}}),Object(de.jsx)("div",{className:"row",children:Object(de.jsxs)("div",{className:"col-sm-12",children:[Object(de.jsx)("ul",{className:"nav nav-tabs",children:$.map((function(t,n){return Object(de.jsx)("li",{className:"".concat(t.tab_key===a?"active":""," nav-item"),onClick:function(){return e.onChangeTab(t.tab_key)},children:Object(de.jsx)("a",{className:"".concat(t.tab_key===a?"active":""," nav-link cursor-pointer"),children:t.tab_name})},n)}))}),Object(de.jsxs)("div",{className:"tab-content",children:[Object(de.jsx)("div",{className:"".concat(a===$[0].tab_key?"":"hide"),children:Object(de.jsx)(ye,{})}),Object(de.jsx)("div",{className:"".concat(a===$[1].tab_key?"":"hide"),children:Object(de.jsx)(ke,{})}),Object(de.jsx)("div",{className:"".concat(a===$[2].tab_key?"":"hide"),children:Object(de.jsx)(Ne,{})})]})]})})]})}}]),a}(r.a.Component);c.a.render(Object(de.jsx)(r.a.StrictMode,{children:Object(de.jsx)(Ee,{})}),document.getElementById("app-author-import"))}},[[401,1,2]]]);
//# sourceMappingURL=main.0058d35c.chunk.js.map