var link=document.querySelector(".contacts-btn-js"),popup=document.querySelector(".modal-fb"),close=document.querySelector(".modal-close"),mapLink=document.querySelector(".map"),mapPopup=document.querySelector(".modal-map"),mapClose=mapPopup.querySelector(".modal-close"),form=document.querySelector(".fb-form"),username=document.querySelector("[name=user-name]"),email=document.querySelector("[name=email]"),message=document.querySelector("[name=message]"),isStorageSupport=!0,storage_u="",storage_e="";try{storage_u=localStorage.getItem("username"),storage_e=localStorage.getItem("email")}catch(e){isStorageSupport=!1}link.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal-show"),storage_u&&(username.value=storage_u,email.focus()),storage_e?(email.value=storage_e,message.focus()):email.focus()}),close.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal-show"),popup.classList.remove("modal-error")}),form.addEventListener("submit",function(e){email.value&&message.value?isStorageSupport&&(localStorage.setItem("username",username.value),localStorage.setItem("email",email.value)):(e.preventDefault(),popup.classList.remove("modal-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("modal-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),popup.classList.contains("modal-show")&&(popup.classList.remove("modal-show"),popup.classList.remove("modal-error")))}),mapLink.addEventListener("click",function(e){e.preventDefault(),mapPopup.classList.add("modal-show")}),mapClose.addEventListener("click",function(e){e.preventDefault(),mapPopup.classList.remove("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),mapPopup.classList.contains("modal-show")&&mapPopup.classList.remove("modal-show"))});