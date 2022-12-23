(function ($) {
    "use strict";
    $(document).on('click', function (e) {
        var outside_space = $(".outside");
        if (!outside_space.is(e.target) && outside_space.has(e.target).length === 0) {
            $(".menu-to-be-close").removeClass("d-block");
            $('.menu-to-be-close').css('display', 'none');
        }
    })

    $('.prooduct-details-box .close').on('click', function (e) {
        var tets = $(this).parent().parent().parent().parent().addClass('d-none');
        console.log(tets);
    })

    if ($('.page-wrapper').hasClass('horizontal-wrapper')) {

        $(".sidebar-list").hover(function () {
            $(this).toggleClass("hoverd");
        });
        $(window).on('scroll', function () {
            if ($(this).scrollTop() < 600) {
                $(".sidebar-list").removeClass("hoverd");
            }
        });
    }

    /*----------------------------------------
     passw
     ard show hide
     ----------------------------------------*/
    $('.show-hide').show();
    $('.show-hide span').addClass('show');

    $('.show-hide span').click(function () {
        if ($(this).hasClass('show')) {
            $('input[name="login[password]"]').attr('type', 'text');
            $(this).removeClass('show');
        } else {
            $('input[name="login[password]"]').attr('type', 'password');
            $(this).addClass('show');
        }
    });
    $('form button[type="submit"]').on('click', function () {
        $('.show-hide span').addClass('show');
        $('.show-hide').parent().find('input[name="login[password]"]').attr('type', 'password');
    });

    /*=====================
      02. Background Image js
      ==========================*/
    $(".bg-center").parent().addClass('b-center');
    $(".bg-img-cover").parent().addClass('bg-size');
    $('.bg-img-cover').each(function () {
        var el = $(this), src = el.attr('src'), parent = el.parent();
        parent.css({
            'background-image': 'url(' + src + ')',
            'background-size': 'cover',
            'background-position': 'center',
            'display': 'block'
        });
        el.hide();
    });

    $(".mega-menu-container").css("display", "none");
    $(".header-search").click(function () {
        $(".search-full").addClass("open");
    });
    $(".close-search").click(function () {
        $(".search-full").removeClass("open");
        $("body").removeClass("offcanvas");
    });
    $(".mobile-toggle").click(function () {
        $(".nav-menus").toggleClass("open");
    });
    $(".mobile-toggle-left").click(function () {
        $(".left-header").toggleClass("open");
    });
    $(".bookmark-search").click(function () {
        $(".form-control-search").toggleClass("open");
    })
    $(".filter-toggle").click(function () {
        $(".product-sidebar").toggleClass("open");
    });
    $(".toggle-data").click(function () {
        $(".product-wrapper").toggleClass("sidebaron");
    });
    $(".form-control-search input").keyup(function (e) {
        if (e.target.value) {
            $(".page-wrapper").addClass("offcanvas-bookmark");
        } else {
            $(".page-wrapper").removeClass("offcanvas-bookmark");
        }
    });
    $(".search-full input").keyup(function (e) {
        console.log(e.target.value);
        if (e.target.value) {
            $("body").addClass("offcanvas");
        } else {
            $("body").removeClass("offcanvas");
        }
    });

    $('body').keydown(function (e) {
        if (e.keyCode == 27) {
            $('.search-full input').val('');
            $('.form-control-search input').val('');
            $('.page-wrapper').removeClass('offcanvas-bookmark');
            $('.search-full').removeClass('open');
            $('.search-form .form-control-search').removeClass('open');
            $("body").removeClass("offcanvas");
        }
    });
    $(".mode").on("click", function () {
        $('.mode i').toggleClass("fa-moon-o").toggleClass("fa-lightbulb-o");
        $('body').toggleClass("dark-only");
        var color = $(this).attr("data-attr");
        localStorage.setItem('body', 'dark-only');

        ////ck editor body dark
        $('.cke_wysiwyg_frame').contents().find('body').each(function () {
            if ($("body").hasClass("dark-only")) {
                $('.cke_wysiwyg_frame').contents().find('body').css({
                    'background-color': '#1d1e27', color: '#98a6ad',
                });
            } else {
                $('.cke_wysiwyg_frame').contents().find('body').css({
                    'background-color': '#ffffff', color: '#333333',
                });
            }
        });
    });
})(jQuery);

//page loader
$(window).on('load', function () {
    setTimeout(function () {
        $('.loader-wrapper').fadeOut('slow');
    }, 1000);
    $('.loader-wrapper').remove('slow');
});

$('.tap-top').click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 600);
    return false;
});

function toggleFullScreen() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
        if (document.documentElement.requestFullScreen) {
            document.documentElement.requestFullScreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
            document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }
}

(function ($, window, document, undefined) {
    "use strict";
    var $ripple = $(".js-ripple");
    $ripple.on("click.ui.ripple", function (e) {
        var $this = $(this);
        var $offset = $this.parent().offset();
        var $circle = $this.find(".c-ripple__circle");
        var x = e.pageX - $offset.left;
        var y = e.pageY - $offset.top;
        $circle.css({
            top: y + "px", left: x + "px"
        });
        $this.addClass("is-active");
    });
    $ripple.on("animationend webkitAnimationEnd oanimationend MSAnimationEnd", function (e) {
        $(this).removeClass("is-active");
    });
})(jQuery, window, document);


// active link

$(".chat-menu-icons .toogle-bar").click(function () {
    $(".chat-menu").toggleClass("show");
});

$(".mobile-title svg").click(function () {
    $(".header-mega").toggleClass("d-block");
});

$(".onhover-dropdown").on("click", function () {
    $(this).children('.onhover-show-div').toggleClass("active");
});

$("#flip-btn").click(function () {
    $(".flip-card-inner").toggleClass("flipped")
});

// image to background
$(".bg-top").parent().addClass('b-top'); // background postion top
$(".bg-bottom").parent().addClass('b-bottom'); // background postion bottom
$(".bg-center").parent().addClass('b-center'); // background postion center
$(".bg-left").parent().addClass('b-left'); // background postion left
$(".bg-right").parent().addClass('b-right'); // background postion right
$(".bg_size_content").parent().addClass('b_size_content'); // background size content
$(".bg-img").parent().addClass('bg-size');
$(".bg-img.blur-up").parent().addClass('blur-up lazyload');
$('.bg-img').each(function () {

    var el = $(this), src = el.attr('src'), parent = el.parent();


    parent.css({
        'background-image': 'url(' + src + ')',
        'background-size': 'cover',
        'background-position': 'center',
        'background-repeat': 'no-repeat',
        'display': 'block'
    });
    el.hide();
});

$("#dropdownMenuButton").click(function () {
    $(".dropdown-menu").toggleClass("show")
});

/*=====================
    Log In functions
 ==========================*/
$(function () {
    $(".input input")
        .focus(function () {
            $(this)
                .parent(".input")
                .each(function () {
                    $("label", this).css({
                        "line-height": "18px", "font-weight": "100", top: "0px",
                    });
                    $(".spin", this).css({
                        width: "100%",
                    });
                });
        })
        .blur(function () {
            $(".spin").css({
                width: "0px",
            });
            if ($(this).val() == "") {
                $(this)
                    .parent(".input")
                    .each(function () {
                        $("label", this).css({
                            "line-height": "60px", "font-weight": "300", top: "10px",
                        });
                    });
            }
        });

    $(".alt-2").click(function () {
        if (!$(this).hasClass("material-button")) {
            $(".shape").css({
                width: "100%", height: "100%", transform: "rotate(0deg)",
            });

            setTimeout(function () {
                $(".overbox").css({
                    overflow: "initial",
                });
            }, 600);

            $(this).animate({
                width: "140px", height: "140px",
            }, 500, function () {
                $(".box").removeClass("back");

                $(this).removeClass("active");
            });

            $(".overbox .title").fadeOut(300);
            $(".overbox .input").fadeOut(300);
            $(".overbox .button").fadeOut(300);

            $(".alt-2").addClass("material-buton");
        }
    });

    $(".material-button").click(function () {
        if ($(this).hasClass("material-button")) {
            setTimeout(function () {
                $(".overbox").css({
                    overflow: "hidden",
                });
                $(".box").addClass("back");
            }, 200);
            $(this).addClass("active").animate({
                width: "850px", height: "850px",
            });

            setTimeout(function () {
                $(".shape").css({
                    width: "50%", height: "50%", transform: "rotate(45deg)",
                });

                $(".overbox .title").fadeIn(300);
                $(".overbox .input").fadeIn(300);
                $(".overbox .button").fadeIn(300);
            }, 700);

            $(this).removeClass("material-button");
        }

        if ($(".alt-2").hasClass("material-buton")) {
            $(".alt-2").removeClass("material-buton");
            $(".alt-2").addClass("material-button");
        }
    });
});

// Login
function adminLogin(evt) {
    const req = new XMLHttpRequest();

    req.onreadystatechange = () => {
        if (req.readyState === 4 && req.status === 200) {
            const result = JSON.parse(req.responseText);

            if (result['status'] === 'success') {
                setInterval(() => {
                    window.location = 'index.php';
                }, 500)
            } else {
                document.getElementById("name-err").innerHTML = result['name-err'];
                document.getElementById("pass-err").innerHTML = result['pass-err'];
            }
            console.log(result);
        }
    }
    req.open('post', 'login-process.php', true);
    req.send(new FormData(document.getElementById("login-form")));

    evt.preventDefault();
}

function show_admin_update_modal(admin) {
    document.getElementById("fname").value = admin['first_name'];
    document.getElementById("lname").value = admin['last_name'];
    document.getElementById("mobile").value = admin['mobile'];
    document.getElementById("aemail").value = admin['email'];
    new bootstrap.Modal(document.getElementById("update-admin")).show();
}

function update_admin() {
    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const mobile = document.getElementById("mobile");
    const email = document.getElementById("aemail");

    const form = new FormData();
    form.append('fname', fname.value);
    form.append('lname', lname.value);
    form.append('mobile', mobile.value);
    form.append('email', email.value);

    const req = new XMLHttpRequest();
    req.onreadystatechange = () => {
        if (req.readyState === 4 && req.status === 200) {
            let txt = req.responseText;
            if (txt === "success") {
                setTimeout(() => {
                    window.location.reload();
                }, 500);
            } else {
                document.getElementById("err-msg").innerHTML = txt;
            }
        }
    }
    req.open('post', 'update-admin-process.php', true);
    req.send(form);
}

function change_admin_status(email, switchId) {
    const admin_status_checkbox = document.getElementById(switchId);

    const req = new XMLHttpRequest();
    req.onreadystatechange = () => {
        if (req.readyState === 4 && req.status === 200) {
            const txt = req.responseText;
            if (txt === "success") {
                setTimeout(() => {
                    document.querySelector(".toast-body").innerHTML = email + "'s status updated";
                    new bootstrap.Toast(document.getElementById('confirm-toast')).show();
                }, 100);
            } else {
                alert(txt)
            }
        }
    }

    req.open('get', 'change-admin-status-process.php?status=' + admin_status_checkbox.checked + '&email=' + email, true);
    req.send();
}

function show_admin_delete_confirm_modal(email) {
    let modal = new bootstrap.Modal(document.getElementById("delete-confirm-modal"));
    modal.show();

    document.getElementById('modal-confirm-btn').addEventListener('click', () => {
        modal.hide();
        const req = new XMLHttpRequest();
        req.onreadystatechange = () => {
            if (req.readyState === 4 && req.status === 200) {
                let txt = req.responseText;
                if (txt === "success") {
                    document.querySelector(".toast-body").innerHTML = email + "'s admin account deleted successfully";
                    new bootstrap.Toast(document.getElementById('confirm-toast')).show();

                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);

                }
            }
        }
        req.open('get', 'delete-admin-account-process.php?email=' + email, true);
        req.send();
    })
}

function abc() {

}