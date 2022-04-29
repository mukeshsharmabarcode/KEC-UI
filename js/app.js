$(document).ready(function(){ 

$('#usr').blur(function(){
  
  if($('#usr').val() == '' ){
    $('#usr').css({ "border":"2px solid #e74c3c"});
    $(".usr").css({ "color":" #e74c3c"});
 }else{
  $('#usr').css({ "border":"1px solid #999"});
  $(".usr").css({ "color":" #999"});
 }
});
$('#pwd').blur(function(){
  
  if($('#pwd').val() == '' ){
    $('#pwd').css({ "border":"2px solid #e74c3c"});
    $(".psd").css({ "color":" #e74c3c"});
 }else{
  $('#pwd').css({ "border":"1px solid #999"});
  $(".psd").css({ "color":" #999"});
 }
});
$("input").keyup(function(){
  if($('#usr').val() != '' & $('#pwd').val() != '' ){
    $('.login-btn').prop('disabled', false);
  }
  else{
    $('.login-btn').prop('disabled', true);
  }


});
$('.input1,.input').blur(function(){
  
  if($(this).val() == '' ){
    $(this).css({ "border": ".14rem solid #c0392b"});
    $(this).siblings().css({"color": "#c0392b"});
    $(this).siblings().css({ "visibility": "visible","color": "#c0392b"});
  
  }
//else if($(this).val() != ''){
//   $(this).css({ "border-color":"#2c3e50;"});
//   $(this).siblings().css({"color": "#2c3e50;"});
//  }
});
$('.input1,.input').keyup(function(){
  $(this).css({ "border":".14rem solid #0652dd"});
  $(this).siblings().css({"color": "#2c3e50"});
  $(this).siblings('.has-error').css({"visibility": "hidden"});

});
$('.input1,.input').change(function(){
  $(this).css({ "border":".14rem solid #0652dd"});
  $(this).siblings().css({"color": "#2c3e50"});
  $(this).siblings('.has-error').css({"visibility": "hidden"});

});
      $("#edit").click(function(){
  
    $('input').prop('disabled', false);
     $('textarea').prop('disabled', false);
     $('select').prop('disabled', false);
  });

       $("#togglePassword").click(function(){
         const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#pwd');
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye / eye slash icon
    this.classList.toggle('bi-eye');


       });
       $('.plant_login').change(function(){
  
  if($(this).val() != "" ){   
    $(".save_plant").prop('disabled', false);  
  }
  else if($(this).val() == "" ){   
    $(".save_plant").prop('disabled', true);  
  
  }
//else if($(this).val() != ''){
//   $(this).css({ "border-color":"#2c3e50;"});
//   $(this).siblings().css({"color": "#2c3e50;"});
//  }
});
       $('.plant_close').click(function(){
           $('.modal').removeClass('show');
       })

});


// $('.input1').change(function(){
//   const togglePassword = document.querySelector('#togglePassword');
// const password = document.querySelector('#pwd');
  
//   togglePassword.addEventListener('click', function (e) {
//     // toggle the type attribute
//     const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
//     password.setAttribute('type', type);
//     // toggle the eye / eye slash icon
//     this.classList.toggle('bi-eye');
// }); 
  
 
// });
let fillup = ()=>{
  let usrv = $('#usr').val();
let pwdv = $('#pwd').val();
  
  if((usrv ==='admin') && ( pwdv ==='Bci@123')){
     $('.modal').addClass('show');
    
  }
  else{
    // alert("dnnd");
    swal("Login Failed ", "invalid username  or password", "error"); 
    
    return false;
  }
}




 

document.querySelectorAll('.sidebar-submenu').forEach(e => {
    e.querySelector('.sidebar-menu-dropdown').onclick = (event) => {
        event.preventDefault()
        
        e.querySelector('.sidebar-menu-dropdown .dropdown-icon').classList.toggle('active')


        let dropdown_content = e.querySelector('.sidebar-menu-dropdown-content')
        let dropdown_content_lis = dropdown_content.querySelectorAll('li')

        let active_height = dropdown_content_lis[0].clientHeight * dropdown_content_lis.length

        dropdown_content.classList.toggle('active')

        dropdown_content.style.height = dropdown_content.classList.contains('active') ? active_height + 'px' : '0'
    }
});

// DARK MODE TOGGLE
let darkmode_toggle = document.querySelector('#darkmode-toggle')

darkmode_toggle.onclick = (e) => {
    e.preventDefault()
    document.querySelector('body').classList.toggle('dark')
    darkmode_toggle.querySelector('.darkmode-switch').classList.toggle('active')
    setDarkChart(document.querySelector('body').classList.contains('dark'))
}

let overlay = document.querySelector('.overlay')
let sidebar = document.querySelector('.sidebar')

document.querySelector('#mobile-toggle').onclick = () => {
    sidebar.classList.toggle('active')
    overlay.classList.toggle('active')
}

document.querySelector('#sidebar-close').onclick = () => {
    sidebar.classList.toggle('active')
    overlay.classList.toggle('active')
}
// charts
var xValues = ["Drums", "Rfid Linked", "On Hold", "Qc Completed", "In Stock"];
var yValues = [200, 100, 75, 54, 50];
var barColors = ["#3498db", "#e74c3c","#d35400","#f39c12","#16a085"];

new Chart("drum", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: ""
    }
  }
});

var xValues1 = ["In Picking", "Picked", "Loaded", "Dispatch"];
var yValues1 = [100, 29, 40, 44];
var barColors1 = ["#3498db", "#3498db","#3498db","#3498db"];

new Chart("dispatch", {
  type: "bar",
  data: {
    labels: xValues1,
    datasets: [{
      backgroundColor: barColors1,
      data: yValues1
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: ""
    }
  }
});
var xValues2 = ["1st Qtr.", "2nd Qtr.", "3rd Qtr.", "4st Qtr."];
var yValues2 = [55, 49, 44, 24];
var barColors2 = [ "#6c5ce7","#d63031","#fdcb6e","#0984e3"];

new Chart("sales", {
  type: "doughnut",
  data: {
    labels: xValues2,
    datasets: [{
      backgroundColor: barColors2,
      data: yValues2
    }]
  },
  options: {
    title: {
      display: true,
      text: ""
    }
  }
});
var xValues3 = ["Italy", "France", "Spain", "USA", "Argentina"];
var yValues3 = [55, 49, 44, 24, 15];
var barColors3 = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];


var ctx = document.getElementById("yield").getContext("2d");

var data = {
  labels: xValues2,
  datasets: [{
    label: "Accept",
    backgroundColor: "#3498db",
    data: [20, 4, 15,25]
  }, {
    label: "Reject",
    backgroundColor: "#e74c3c",
    data: [2, 5, 1,3]
  }]
};

var myBarChart = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: {
    barValueSpacing: 20,
    scales: {
      yAxes: [{
        ticks: {
          min: 0,
        }
      }]
    }
  }
});

