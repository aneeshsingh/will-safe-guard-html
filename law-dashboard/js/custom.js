$(document).ready(function() {
    if($('#will-table').length > 0){
        $('#will-table').DataTable({
            "language": {
                "lengthMenu": '_MENU_ bản ghi trên trang',
                    "search": '<i class="fa fa-search"></i>',
                    "searchPlaceholder": "Search will number, name, created on, will status...",
                    "paginate": {
                    "previous": '<i class="fa-solid fa-arrow-left"></i>',
                        "next": '<i class="fa-solid fa-arrow-right"></i>'
                }
            }
        });
    }

    $('.input-group-pawword .btn').click(function(){
        $(this).children().toggle();
        $(this).toggleClass('active');

        if($(this).hasClass('active')){
            $(this).siblings('input').attr('type', 'text');
        }else{
            $(this).siblings('input').attr('type', 'password');
        }
    });

    $(document).on('change', "input[type='radio']", function(){
        if($(this).attr('data-active')){
            var $id = $(this).attr('data-active')
            $("#" + $id).show();

            $("#" + $id).find('.form-control').attr('required', true);            
        }

        if($(this).attr('data-inactive')){
            var $id = $(this).attr('data-inactive')
            $("#" + $id).hide();
            $("#" + $id).find('.form-control').attr('required', false);
        }

        if($(this).attr('data-active-multiple')){
            var $str = $(this).attr('data-active-multiple');
            // console.log(eval($str))
            var $arr = eval($str);            
            for(var i = 0; i < $arr.length; i++) {
                $("#" + $arr[i]).show();
                $("#" + $arr[i]).find('.form-control').attr('required', true);
            }
        }

        if($(this).attr('data-inactive-multiple')){
            var $str = $(this).attr('data-inactive-multiple');
            // console.log(eval($str))
            var $arr = eval($str);            
            for(var i = 0; i < $arr.length; i++) {
                $("#" + $arr[i]).hide();
                $("#" + $arr[i]).find('.form-control').attr('required', false);
            }
        }
    });

    $('.modal-btn').click(function(){
        if($(this).attr('data-popup')){
            $('#'+$(this).attr('data-popup')).toggleClass('active');
        }else{
            $('.sidebarModal-outer').toggleClass('active');
        }
    });

    $('.sidebarModal-overlay').click(function(){
        $('.sidebarModal-outer').removeClass('active');
    })

    $('.btn-select').click(function(){
        $(this).parents('.card-info').toggleClass('bg-blue');
        $(this).text(function(i, text){
          return text === "Select" ? "Unselect" : "Select";
        })
    });

    $('.btn-remove').click(function(){
        $(this).parents('.card-info').remove();
    });

    $('.categories .btn').click(function(){
        $(this).toggleClass('active');
    });

    setTimeout(function(){
        if(parseInt($('#total').attr('data-value')) > 100){
            $('#total').addClass('text-error')
        }else{
            $('#total').removeClass('text-error')
        }
    }, 1000);

    var assets = `<div class="row-assets mb-3">
                    <button class="btn p-0 remove-assets">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#a9a9a9" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                        </svg>
                    </button>
                    <div class="row gx-2">
                      <div class="col-4">
                        <select class="form-control form-select" required>
                          <option value="">Select Type</option>
                          <option value="">Property</option>
                          <option value="">Bank Account</option>
                          <option value="">Financial Assets</option>
                          <option value="">Superannuation Fund</option>
                          <option value="">Life Insurance Policy</option>
                          <option value="">Valueable</option>
                          <option value="">Other</option>
                        </select>
                      </div>
                      <div class="col-8">
                        <input type="text" required placeholder="e.g. 77 random St." class="form-control" />
                      </div>
                    </div>
                  </div>`;

    var liability = `<div class="row-assets mb-3">
                    <button class="btn p-0 remove-assets">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#a9a9a9" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                        </svg>
                    </button>
                    <div class="row gx-2">
                      <div class="col-4">
                        <select class="form-control form-select" required>
                          <option value="">Select Type</option>
                          <option value="">Motgage</option>
                          <option value="">Credit Card Debt</option>
                          <option value="">Personal Loan</option>
                          <option value="">Other</option>
                        </select>
                      </div>
                      <div class="col-8">
                        <input type="text" required placeholder="e.g. 77 random St." class="form-control" />
                      </div>
                    </div>
                  </div>`;

    $('.add-assets').click(function(){
        $(assets).insertBefore($('.card-noassets'));
    });

    $('.add-liability').click(function(){
        $(liability).insertBefore($('.card-noassets'));
    });

    $('body').on('click', '.remove-assets', function(){
        $(this).parent().remove();
    })
});

var swiper = new Swiper(".scrollSlider", {
    slidesPerView: "auto",
    spaceBetween: 30,
    mousewheel: {
      releaseOnEdges: true,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
    breakpoints:{
        0: {
            spaceBetween: 15,
        },
        1024: {
            spaceBetween: 30
        }
    }
});


// validation
$.validator.setDefaults({
    submitHandler: function() {
        alert("submitted!");
    }
});

$().ready(function() {
    // validate the comment form when it is submitted
    $('[type="submit"]').click(function(){
        $(this).parents(".form-validate").validate();
    })

    // validate signup form on keyup and submit
    // $("#signupForm").validate({
    //     rules: {
    //         firstname: "required",
    //         lastname: "required",
    //         username: {
    //             required: true,
    //             minlength: 2
    //         },
    //         password: {
    //             required: true,
    //             minlength: 5
    //         },
    //         confirm_password: {
    //             required: true,
    //             minlength: 5,
    //             equalTo: "#password"
    //         },
    //         email: {
    //             required: true,
    //             email: true
    //         },
    //         topic: {
    //             required: "#newsletter:checked",
    //             minlength: 2
    //         },
    //         agree: "required"
    //     },
    //     messages: {
    //         firstname: "Please enter your firstname",
    //         lastname: "Please enter your lastname",
    //         username: {
    //             required: "Please enter a username",
    //             minlength: "Your username must consist of at least 2 characters"
    //         },
    //         password: {
    //             required: "Please provide a password",
    //             minlength: "Your password must be at least 5 characters long"
    //         },
    //         confirm_password: {
    //             required: "Please provide a password",
    //             minlength: "Your password must be at least 5 characters long",
    //             equalTo: "Please enter the same password as above"
    //         },
    //         email: "Please enter a valid email address",
    //         agree: "Please accept our policy",
    //         topic: "Please select at least 2 topics"
    //     }
    // });

    // // propose username by combining first- and lastname
    // $("#username").focus(function() {
    //     var firstname = $("#firstname").val();
    //     var lastname = $("#lastname").val();
    //     if (firstname && lastname && !this.value) {
    //         this.value = firstname + "." + lastname;
    //     }
    // });

    // //code to hide topic selection, disable for demo
    // var newsletter = $("#newsletter");
    // // newsletter topics are optional, hide at first
    // var inital = newsletter.is(":checked");
    // var topics = $("#newsletter_topics")[inital ? "removeClass" : "addClass"]("gray");
    // var topicInputs = topics.find("input").attr("disabled", !inital);
    // // show when newsletter is checked
    // newsletter.click(function() {
    //     topics[this.checked ? "removeClass" : "addClass"]("gray");
    //     topicInputs.attr("disabled", !this.checked);
    // });
});