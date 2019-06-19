"use strict";var portofolios=[{time:"",title:"Sistem Informasi Monitoring Kinerja",engine:"Symfony 1.2 + Dojo Toolkit",url:"",description:"Sistem untuk memantau kinerja karyawan.<br>Keberhasilan kinerja bisa dinilai dengan angka 1-100%<br>Disertai dengan grafik."},{time:"",title:"Program Akademik (Promik)",engine:"Ruby On Rails",url:"",description:"We create a web-based application, which allows teachers, students and parents collaborate with each other, to support education and student achievement."},{time:"2011",title:"Digital Library",engine:"Symfony 1.2",description:"Digital Library a digital library that is used for the management of the library, such as Rack categorizing, classifying books, managing member of the library, librarian, book, to borrow and return transactions in an online library."},{time:"2014",title:"Simpeg Web-KIOSK",engine:"MySQL, Silex (as REST API), and AngularJS",description:"KIOSK presence web based application.<br>\n    Staff use their RFID cards to make attendance.<br>\n    Take a snapshot when RFID reader reads the data in the card.<br>\n    Green snapshot for on time, red for late, and gold for home.<br>\n    Show staff's presence list."},{time:"2012 - 2014",title:"Openbravo ERP",engine:"",description:"Customize Openbravo ERP (version 2.50 and 3) modules."},{time:"2015",title:"Sistem Kependudukan dan Catatan Sipil",engine:"MySQL, Symfony2, AngularJS",description:"Aplikasi untuk kependudukan dan catatan sipil di kecamatan panyileukan, Bandung.\n    <br><br>\n    Fitur : <br>\n    - Aplikasi dukcapil<br>\n    - Sistem antrian + kiosk antrian<br><br>\n    \n    -------------------------------------------------------<br>\n    Pemenang event DevWarDay 2015 yang diselenggarakan IBM<br>\n    http://devwarday.com/blog/pemenang_devwarday_2015"},{time:"2015",title:"Sistem Informasi Monitoring Kinerja v2",engine:"MySQL, Silex microframework, AngularJS",description:"2nd version of Sistem Informasi Monitoring Kinerja"},{time:"2016",title:"Mavis Yearbook Front End",engine:"ReactJS, ExpressJS, GraphQL",url:"https://www.mavisyearbook.com",description:"Front End application for Mavis Yearbook 1st version."},{time:"2017",title:"Gravto",engine:"MySQL, Symfony 4",url:"https://www.gravto.com",description:"Platform online yang menghasilkan berbagai produk cetak kualitas terbaik & kreatif.<br>\n    Setiap detail, warna & desain, menjadi prioritas untuk menjaga kualitas & pelayanan yang didukung dengan teknologi cetak terbaik."},{time:"2019",title:"Mavis.co.id",engine:"MySQL, Symfony 4",url:"https://www.mavis.co.id"}],portoFolioTemplate=function(a){var n=Math.random().toString(36).substring(7);return'<div class="card">\n              <div class="card-header" id="heading'+n+'">\n                  <h2 class="mb-0">\n                      <button class="btn btn-full btn-link" type="button" data-toggle="collapse" data-target="#acc'+n+'" aria-controls="'+n+'">\n                          '+(""==a.time?"":"["+a.time+"] ")+a.title+'\n                      </button>\n                  </h2>\n              </div>\n          \n              <div id="acc'+n+'" class="collapse" aria-labelledby="heading'+n+'" data-parent="#accordionPortofolio">\n              <div class="card-body">\n                  '+(null!=a.description?a.description+"<br><br>":"")+"\n                  "+a.engine+"\n                  "+(null!=a.url?'<br><a href="'+a.url+'" target="_blank" >'+a.url+"</a>":"")+"\n              </div>\n              </div>\n          </div>"};$(document).ready(function(){var o=["ucay_1.jpg","ucay_2.jpg","ucay_3.jpg","ucay_4.jpg"],l="/assets/images/profile/";!function i(){var r=20,t=setInterval(function(){var a=$("#profile-photo").attr("src").replace(l,""),n=o.indexOf(a),e=(n>=o.length-1?-1:n)+1;$("#profile-photo").fadeOut("fast",function(){$(this).attr("src",l+o[e]),$(this).fadeIn("fast")}),--r<0&&(clearInterval(t),i())},4e3)}();var a={maintainAspectRatio:!0,scale:{ticks:{beginAtZero:!0,max:100}},legend:{display:!1}};new Chart($("#ucay-skill-base"),{type:"radar",data:{labels:["HTML","CSS","JS","PHP","MySQL"],datasets:[{label:!1,data:[80,70,60,60,70],fill:!0,backgroundColor:"rgba(11, 95, 30, 0.2)",borderColor:"rgb(11, 95, 30)",pointBackgroundColor:"rgb(11, 95, 30)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgb(11, 95, 30)"}]},options:a}),new Chart($("#ucay-skill-advance"),{type:"radar",data:{labels:["Symfony","Laravel","ReactJS","Angular","Ionic"],datasets:[{label:!1,data:[70,50,65,55,65],fill:!0,backgroundColor:"rgba(11, 95, 30, 0.2)",borderColor:"rgb(11, 95, 30)",pointBackgroundColor:"rgb(11, 95, 30)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgb(11, 95, 30)"}]},options:a});portofolios.reverse().forEach(function(a){$("#accordionPortofolio").append(portoFolioTemplate(a))})});