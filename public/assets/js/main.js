/**
* Template Name: TheEvent - v2.2.0
* Template URL: https://bootstrapmade.com/theevent-conference-event-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Header fixed on scroll
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Initialize Venobox
  $(window).on('load', function() {
    $('.venobox').venobox({
      bgcolor: '',
      overlayColor: 'rgba(6, 12, 34, 0.85)',
      closeBackground: '',
      closeColor: '#fff',
      share: false
    });
  });

  // Initiate superfish on nav menu
  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });

  // Mobile Navigation
  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function(e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function(e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Smooth scroll for the navigation menu and links with .scrollto classes
  var scrolltoOffset = $('#header').outerHeight() - 21;
  if (window.matchMedia("(max-width: 991px)").matches) {
    scrolltoOffset += 20;
  }
  $(document).on('click', '.nav-menu a, #mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        e.preventDefault();

        var scrollto = target.offset().top - scrolltoOffset;

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function() {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, #mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('menu-active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('menu-active');
      }
      if (cur_pos < 300) {
        $(".nav-menu li:first").addClass('menu-active');
      }
    });
  });

  // Gallery carousel (uses the Owl Carousel library)
  $(".support-carousel").owlCarousel({
    autoplay: true,
    dots: false,
    loop: true,
    center: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      },
      1200: {
        items: 5
      }
    }
  });// Gallery carousel (uses the Owl Carousel library)
  $(".gallery-carousel").owlCarousel({
    autoplay: true,
    dots: false,
    loop: true,
    center: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      },
      1200: {
        items: 5
      }
    }
  });// Gallery carousel (uses the Owl Carousel library)
  $(".gallery-carousel1").owlCarousel({
    autoplay: true,
    dots: false,
    loop: true,
    center: true,
    rtl: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      },
      1200: {
        items: 5
      }
    }
  });


  // Buy tickets select the ticket type on click
  $('#buy-ticket-modal').on('show.bs.modal', function(event) {
    var button = $(event.relatedTarget);
    var ticketType = button.data('ticket-type');
    var modal = $(this);
    modal.find('#ticket-type').val(ticketType);
  });

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
  $(window).on('load', function() {
    aos_init();
  });

})(jQuery);

var tradewise='<p style="margin-bottom: 0.35cm"> <font face="Futura Bk BT, serif"><font size="2" style="font-size: 10pt">FOR </font></font><font face="Futura Bk BT, serif"><font size="2" style="font-size: 10pt">TRADE-WISE </font></font><font face="Futura Bk BT, serif"><font size="2" style="font-size: 10pt">AWARDS </font></font></p><ul>	<li><p style="margin-bottom: 0.35cm"><font face="Futura Bk BT, serif"><font size="2" style="font-size: 10pt">Have	a minimum of 10 years, working experience </font></font>	</p>	<li><p style="margin-bottom: 0.35cm"><font face="Futura Bk BT, serif"><font size="2" style="font-size: 10pt">Not	be older than 40 at the time of entry for the competitions</font></font></p>	<li><p style="margin-bottom: 0.35cm"><font face="Futura Bk BT, serif"><font size="2" style="font-size: 10pt">Must	be able to present a  visual portfolio of their works </font></font>	</p></ul><p style="margin-bottom: 0.35cm"><font face="Futura Bk BT, serif"><font size="2" style="font-size: 10pt">OPTIONAL REQUIREMENTS:</font></font></p><ul>	<li><p style="margin-bottom: 0.35cm"><font face="Futura Bk BT, serif"><font size="2" style="font-size: 10pt">Court	Affidavit/ Attestation letter from employers </font></font>	</p>	<li><p style="margin-bottom: 0.35cm"><font face="Futura Bk BT, serif"><font size="2" style="font-size: 10pt">Certificates	of training/ apprenticeships </font></font>	</p></ul><p style="margin-bottom: 0.35cm"><br/><br/></p>';
var apprentice='<p style="margin-bottom: 0.35cm"><font face="Futura Bk BT, serif"><font size="2" style="font-size: 10pt">FOR APPRENTICE OF THE YEAR</font></font></p><ul>	<li><p style="margin-bottom: 0.35cm"><font face="Futura Bk BT, serif"><font size="2" style="font-size: 10pt">Must	be between 15 and 25  years of age </font></font>	</p>	<li><p style="margin-bottom: 0.35cm"><font face="Futura Bk BT, serif"><font size="2" style="font-size: 10pt">Must	not have completed their apprenticeship training period for more	than 6 months at the time of entry for the awards competition.</font></font></p>	<li><p style="margin-bottom: 0.35cm"><font face="Futura Bk BT, serif"><font size="2" style="font-size: 10pt">Be	able provide proof of training and Attestation from training	provider or master artisan under whom they trained</font></font></p></ul>';
var instructor='<p style="margin-bottom: 0.35cm"><font face="Futura Bk BT, serif"><font size="2" style="font-size: 10pt">INSTRUCTOR OF THE YEAR </font></font></p><ul>	<li><p style="margin-bottom: 0.35cm"><font face="Futura Bk BT, serif"><font size="2" style="font-size: 10pt">Minimum	of level 3 NSQ certificate (link to find out more about the NSQ)</font></font></p>	<li><p style="margin-bottom: 0.35cm"><font face="Futura Bk BT, serif"><font size="2" style="font-size: 10pt">Must	have trained construction artisans in a specific trade for at least	3 years </font></font>	</p>	<li><p style="margin-bottom: 0.35cm"><font face="Futura Bk BT, serif"><font size="2" style="font-size: 10pt">Must	have trained Artisans within a credible and recognized training	program such as N-Build.</font></font></p></ul>';
var centre='<p style="margin-bottom: 0.35cm"><font face="Futura Bk BT, serif"><font size="2" style="font-size: 10pt">TRAINING CENTRE OF THE YEAR </font></font></p><ul>	<li><p style="margin-bottom: 0.35cm"><font face="Futura Bk BT, serif"><font size="2" style="font-size: 10pt">Must	be registered with relevant regulatory bodies with evidence of	registration</font></font></p>	<li><p style="margin-bottom: 0.35cm"><font face="Futura Bk BT, serif"><font size="2" style="font-size: 10pt">Must	have trained in construction skills for a minimum of 3 years.  </font></font>	</p>	<li><p style="margin-bottom: 0.35cm"><font face="Futura Bk BT, serif"><font size="2" style="font-size: 10pt">Must	employ both traditional and digital approach to instruction and	training </font></font>	</p>	<li><p style="margin-bottom: 0.35cm"><font face="Futura Bk BT, serif"><font size="2" style="font-size: 10pt">Must	have aided the development or developed training materials </font></font>	</p>	<li><p style="margin-bottom: 0.35cm"><font face="Futura Bk BT, serif"><font size="2" style="font-size: 10pt">Must	train in alignment with the National Skills qualification framework.	</font></font>	</p></ul>';

function loadcriteria(){
  
  $('#nominate-form').addClass('hidden');
  
  var text = ($('#nominate-trade').val() != "Training center of the year")? ($('#nominate-trade').val() != "Instructor of the year")? ($('#nominate-trade').val() != "Apprentice of the year")? tradewise : apprentice : instructor : centre;
  text = '<div class="text-left">' + text + "</div>";
  
  swal({
      title: "Does your Nominee meet this criteria?",
      text: text,
      html: true,
      showCancelButton: true,
      cancelButtonText: "No",
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes",
      closeOnConfirm: true
  }, function () {
    $('#nominate-form').removeClass('hidden');
      // swal("Deleted!", "Your imaginary file has been deleted.", "success");
  });
};

$('#nominate-trade').on('change', function(evt){
  loadcriteria()
});

function loadnominees(){
  $('#vote-form').removeClass('hidden');

}

$('#vote-trade').on('change', function(evt){
  loadnominees()
});


function register_step2(evt){
  $(evt).preventDefault;
  $('#register-form-overlay').removeClass('hidden');
  $('#register-instruction').text('Second, Upload Your Work');
  
  var success = function(){
      $('#register-form-overlay').addClass('hidden');
      $('#register-form1').addClass('hidden');
      $('#register-form2').removeClass('hidden');
  }
  setTimeout(success(), 3000);
  
}





function send_data(method, control, data, success, error){
    $.ajax({
      type: method,
      url: 'https://caa.cstemp.org/staging/api/' + control,
      data: data,
      success: success,
      error: error,
    });
}


function contact(evt){
    $(evt).preventDefault
    console.log('started contact process');
    
    var data = {
        name: $('#name').val(),
        email: $('#email').val(),
        subject: $('#subject').val(),
        message: $('#message').val(),
    };
    
    var success = function (){
        swal({
            type: 'success',
            title: "Thank You",
            text: "Your Message Has Been Sent",
            html: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Close",
            closeOnConfirm: true
        });
        $("#contact-form").addClass('hidden');
    };
    
    var error = function (){
        swal({
            type: 'error',
            title: "Sorry",
            text: "Your Message Could Not Be Sent",
            html: true,
            confirmButtonColor: "#a30005",
            confirmButtonText: "Close",
            closeOnConfirm: true
        });
    };
    
    send_data('POST', 'contact', data, success, error);
}


function nominate(evt){
    $(evt).preventDefault
    console.log('started nominate process');
    
    var data = {
        yname: $('#yname').val(),
        yphone: $('#yphone').val(),
        nname: $('#nname').val(),
        nphone: $('#nphone').val(),
        ntrade: $('#nominate-trade').val(),
        norganization: $('#norganization').val(),
    };
    
    var success = function (){
        swal({
            type: 'success',
            title: "Thank You",
            text: "Your Nominee Has Been Registered",
            html: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Close",
            closeOnConfirm: true
        });

        $("#nominate-form").addClass('hidden');

        $('#yname').val('');
        $('#yphone').val('');
        $('#nname').val('');
        $('#nphone').val('');
        $('#norganization').val('');
    };
    
    var error = function (){
        swal({
            type: 'error',
            title: "Sorry",
            text: "Your Nominee Could Not Be Registered, Check Your Network",
            html: true,
            confirmButtonColor: "#a30005",
            confirmButtonText: "Close",
            closeOnConfirm: true
        });
    };
    
    send_data('POST','nominate', data, success, error);
}





function newsletter(evt){
    $(evt).preventDefault
    console.log('started newsletter process');
    
    var data = {
        email: $('#nemail').val(),
    };
    
    var success = function (){
        swal({
            type: 'success',
            title: "Thank You",
            text: "Your Email Has Been Subscribed To The Newsletter",
            html: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Close",
            closeOnConfirm: true
        });

        $("#subscribe").html('');
        $("#subscribe").addClass('hidden');

    };
    
    var error = function (){
        swal({
            type: 'error',
            title: "Sorry",
            text: "Your Email Could Not Be Subscribed, Check Your Network",
            html: true,
            confirmButtonColor: "#a30005",
            confirmButtonText: "Close",
            closeOnConfirm: true
        });
    };
    
    send_data('POST','newsletter', data, success, error);
}








