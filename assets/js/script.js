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

/*----------------------------------------
 Admin START
 ----------------------------------------*/

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
        }
    }
    req.open('post', 'login-process.php', true);
    req.send(new FormData(document.getElementById("login-form")));

    evt.preventDefault();
}

let adminUpdateModal;

function showAdminUpdateModal(admin) {
    document.getElementById("fname").value = admin['first_name'];
    document.getElementById("lname").value = admin['last_name'];
    document.getElementById("mobile").value = admin['mobile'];
    document.getElementById("aemail").value = admin['email'];
    adminUpdateModal = new bootstrap.Modal(document.getElementById("update-admin"));
    adminUpdateModal.show();
}

function updateAdmin() {
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
                adminUpdateModal.hide();
                document.querySelector(".toast-body").innerHTML = "User profile updated successfully";
                new bootstrap.Toast(document.getElementById('confirm-toast')).show();
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            } else {
                document.getElementById("err-msg").innerHTML = txt;
            }
        }
    }
    req.open('post', 'update-admin-process.php', true);
    req.send(form);
}

function changeAdminStatus(email, switchId) {
    const adminStatusCheckbox = document.getElementById(switchId);

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

    req.open('get', 'change-admin-status-process.php?status=' + adminStatusCheckbox.checked + '&email=' + email, true);
    req.send();
}

function showAdminDeleteConfirmModal(email) {
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

function searchAdmins(page) {
    const txt = document.getElementById("admin-search");

    const req = new XMLHttpRequest();
    req.onreadystatechange = () => {
        if (req.readyState === 4 && req.status === 200) {
            document.getElementById('card-body').innerHTML = req.responseText;
        }
    }

    req.open('get', 'search-admins-process.php?txt=' + txt.value + '&page=' + page, true);
    req.send();
}

function registerAdmin(evt) {
    const req = new XMLHttpRequest();

    req.onreadystatechange = () => {
        if (req.readyState === 4 && req.status === 200) {
            document.getElementById('register-btn').classList.remove('d-none');
            document.getElementById('loading-btn').classList.add('d-none');

            let txt = req.responseText;

            if (txt == "success") {
                document.getElementById("register_form_err").innerHTML = "";
                document.getElementById('admin-register-form').reset();

                document.querySelector(".toast-body").innerHTML = "Accounted created successfully & email sent.";
                new bootstrap.Toast(document.getElementById('confirm-toast')).show();
            } else {
                document.getElementById("register_form_err").innerHTML = txt;
            }
        } else {
            document.getElementById('register-btn').classList.add('d-none');
            document.getElementById('loading-btn').classList.remove('d-none');
        }
    }

    req.open('post', 'register-admin-process.php', true);
    req.send(new FormData(document.getElementById('admin-register-form')));

    evt.preventDefault();
}

function updateAdminProfileImg() {
    const file = document.getElementById('profile-img').files[0];
    document.getElementById('admin-profile-img-tag').src = URL.createObjectURL(file);

    const form = new FormData();
    form.append('file', file);

    const req = new XMLHttpRequest();
    req.onreadystatechange = () => {
        if (req.readyState === 4 && req.status === 200) {
            const txt = req.responseText;
            if (txt == 'success') {
                document.querySelector(".toast-body").innerHTML = "Profile image updated successfully.";
                new bootstrap.Toast(document.getElementById('confirm-toast')).show();
            }
        }
    }

    req.open('post', 'update-admin-profile-img-process.php', true);
    req.send(form);
}

function resetAdminPassword(evt) {
    const req = new XMLHttpRequest();

    req.onreadystatechange = () => {
        if (req.readyState === 4 && req.status === 200) {
            let txt = req.responseText;
            if (txt === "success") {
                document.getElementById('admin-reset-pass-form').reset();
                document.querySelector(".toast-body").innerHTML = "Admin password reset successfully.";
                new bootstrap.Toast(document.getElementById('confirm-toast')).show();
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            } else {
                document.getElementById('err-msg2').innerHTML = txt;
            }
        }
    }

    req.open('post', 'reset-password-process.php', true)
    req.send(new FormData(document.getElementById('admin-reset-pass-form')));

    evt.preventDefault();
}

function sendForgotPasswordEmail(evt) {
    const req = new XMLHttpRequest();

    req.onreadystatechange = () => {
        if (req.readyState === 4 && req.status === 200) {
            let txt = req.responseText;
            console.log(txt);
        }
    }

    req.open('post', 'send-forgot-pass-process.php', true);
    req.send(new FormData(document.getElementById('fp-form')));

    evt.preventDefault();
}

function forgotAdminPassword(evt, vc) {
    let form = new FormData(document.getElementById('pass-reset-form'));
    form.append('vc', vc);

    const req = new XMLHttpRequest();
    req.onreadystatechange = () => {
        if (req.readyState === 4 && req.status === 200) {
            let txt = req.responseText;

            if (txt === 'success') {
                document.querySelector(".toast-body").innerHTML = "Admin password reset successful";
                new bootstrap.Toast(document.getElementById('confirm-toast')).show();
                setTimeout(() => {
                    window.location = 'login.php';
                }, 1000)
            } else {
                document.getElementById('pass-err').innerHTML = txt;
            }
        }
    }
    req.open('post', 'reset-password-fp-process.php', true);
    req.send(form);

    evt.preventDefault();
}

function searchTeachers(page) {
    const txt = document.getElementById("teacher-search");

    const req = new XMLHttpRequest();
    req.onreadystatechange = () => {
        if (req.readyState === 4 && req.status === 200) {
            document.getElementById('card-body').innerHTML = req.responseText;
        }
    }

    req.open('get', 'search-teachers-process.php?txt=' + txt.value + '&page=' + page, true);
    req.send();
}

function changeTeacherStatus(email, switchId) {
    const teacherStatusCheckbox = document.getElementById(switchId);

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

    req.open('get', 'change-teacher-status-process.php?status=' + teacherStatusCheckbox.checked + '&email=' + email, true);
    req.send();
}

let updateTeacherModal;

function showTeacherUpdateModal(teacher) {
    document.getElementById("fname").value = teacher['first_name'];
    document.getElementById("lname").value = teacher['last_name'];
    document.getElementById("mobile").value = teacher['mobile'];
    document.getElementById("aemail").value = teacher['email'];
    updateTeacherModal = new bootstrap.Modal(document.getElementById("update-teacher"));
    updateTeacherModal.show();

}

function showTeacherDeleteConfirmModal(email) {
    let modal = new bootstrap.Modal(document.getElementById("delete-confirm-modal"));
    modal.show();

    document.getElementById('modal-confirm-btn').addEventListener('click', () => {
        modal.hide();
        const req = new XMLHttpRequest();
        req.onreadystatechange = () => {
            if (req.readyState === 4 && req.status === 200) {
                let txt = req.responseText;
                if (txt === "success") {
                    document.querySelector(".toast-body").innerHTML = email + "'s teacher account deleted successfully";
                    new bootstrap.Toast(document.getElementById('confirm-toast')).show();

                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);

                } else {
                    alert("error");
                }
            }
        }
        req.open('get', 'delete-teacher-account-process.php?email=' + email, true);
        req.send();
    })
}

function updateTeacher() {
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
                updateTeacherModal.hide();
                document.querySelector(".toast-body").innerHTML = "User profile updated successfully";
                new bootstrap.Toast(document.getElementById('confirm-toast')).show();
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            } else {
                document.getElementById("err-msg").innerHTML = txt;
            }
        }
    }
    req.open('post', 'update-teacher-process.php', true);
    req.send(form);
}

let teacherEmail;
let manageSubjectsModal;

function showTeachersSubjectModal(email) {
    const req = new XMLHttpRequest();
    req.onreadystatechange = () => {
        if (req.readyState === 4 && req.status === 200) {
            document.getElementById('subjects-modal-table').innerHTML = req.responseText;
            teacherEmail = email;
            manageSubjectsModal = new bootstrap.Modal(document.getElementById('manage-subjects'));
            manageSubjectsModal.show();
        }
    }
    req.open('get', 'load-teachers-subjects-process.php?email=' + email, true);
    req.send();
}

let assignNewSubjectModal;

function showAssignNewSubjectModal() {
    document.getElementById('ans-email').value = teacherEmail;
    manageSubjectsModal.hide();
    document.getElementById('ans-err-msg').innerHTML = "";
    document.getElementById("ans-subject").value = 0;
    assignNewSubjectModal = new bootstrap.Modal(document.getElementById('assign-new-subject-modal'));
    assignNewSubjectModal.show();
}

function assignNewSubject(evt) {
    const req = new XMLHttpRequest();
    req.onreadystatechange = () => {
        if (req.readyState === 4 && req.status === 200) {
            if (req.responseText == 'success') {
                assignNewSubjectModal.hide();
                showTeachersSubjectModal(teacherEmail);
            } else {
                document.getElementById('ans-err-msg').innerHTML = req.responseText;
            }
        }
    }
    req.open('post', 'assign-new-subject-process.php', true);
    req.send(new FormData(document.getElementById("assign-new-subject-form")));

    evt.preventDefault();
}

function unassignTeachersSubject(subjectId, teacherEmail) {
    const form = new FormData();
    form.append('sid', subjectId);
    form.append('email', teacherEmail);

    const req = new XMLHttpRequest();
    req.onreadystatechange = () => {
        if (req.readyState === 4 && req.status === 200) {

            if (req.responseText == 'success') {
                const req1 = new XMLHttpRequest();
                req1.onreadystatechange = () => {
                    if (req1.readyState === 4 && req1.status === 200) {
                        document.getElementById('subjects-modal-table').innerHTML = req1.responseText;
                    }
                }
                req1.open('get', 'load-teachers-subjects-process.php?email=' + teacherEmail, true);
                req1.send();
            }

        }
    }
    req.open('post', 'unassign-teachers-subject.php', true);
    req.send(form);

}

function registerTeacher(subList) {
    const email = document.getElementById('email');
    const cemail = document.getElementById('cemail');
    const fName = document.getElementById('fname');
    const lName = document.getElementById('lname');
    const mobile = document.getElementById('mobile');

    let selectedSubs = [];
    subList.forEach((subId) => {
        if (document.getElementById(subId).checked == 1) {
            selectedSubs.push(document.getElementById(subId).value);
        }
    })

    const form = new FormData();
    form.append("email", email.value);
    form.append("cemail", cemail.value);
    form.append("fname", fName.value);
    form.append("lname", lName.value);
    form.append("mobile", mobile.value);
    form.append("subList", JSON.stringify(selectedSubs));

    const req = new XMLHttpRequest();
    req.onreadystatechange = () => {
        if (req.readyState === 4 && req.status === 200) {
            if (req.responseText === 'success') {

            } else {
                console.log(req.responseText);
            }

            if (req.responseText === "success") {
                document.getElementById("register_form_err").innerHTML = "";

                document.querySelector(".toast-body").innerHTML = "Accounted created successfully & email sent.";
                new bootstrap.Toast(document.getElementById('confirm-toast')).show();
            } else {
                document.getElementById("register_form_err").innerHTML = req.responseText;
            }
        }
    }

    req.open('post', 'register-teacher-process.php', true);
    req.send(form);
}

function changeAcademicStatus(email, switchId) {
    const academicStatusCheckbox = document.getElementById(switchId);

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

    req.open('get', 'change-academic-status-process.php?status=' + academicStatusCheckbox.checked + '&email=' + email, true);
    req.send();
}

let academicUpdateModal;

function showAcademicUpdateModal(academic) {
    document.getElementById("fname").value = academic['first_name'];
    document.getElementById("lname").value = academic['last_name'];
    document.getElementById("mobile").value = academic['mobile'];
    document.getElementById("aemail").value = academic['email'];
    academicUpdateModal = new bootstrap.Modal(document.getElementById("update-academic"));
    academicUpdateModal.show();
}

function updateAcademic() {
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
                academicUpdateModal.hide();
                document.querySelector(".toast-body").innerHTML = "User profile updated successfully";
                new bootstrap.Toast(document.getElementById('confirm-toast')).show();
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            } else {
                document.getElementById("err-msg").innerHTML = txt;
            }
        }
    }
    req.open('post', 'update-academic-process.php', true);
    req.send(form);
}

function showAcademicDeleteConfirmModal(email) {
    let modal = new bootstrap.Modal(document.getElementById("delete-confirm-modal"));
    modal.show();

    document.getElementById('modal-confirm-btn').addEventListener('click', () => {
        modal.hide();
        const req = new XMLHttpRequest();
        req.onreadystatechange = () => {
            if (req.readyState === 4 && req.status === 200) {
                let txt = req.responseText;
                if (txt === "success") {
                    document.querySelector(".toast-body").innerHTML = email + "'s academic account deleted successfully";
                    new bootstrap.Toast(document.getElementById('confirm-toast')).show();

                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);

                }
            }
        }
        req.open('get', 'delete-academic-account-process.php?email=' + email, true);
        req.send();
    })
}


function searchAcademics(page) {
    const txt = document.getElementById("academic-search");

    const req = new XMLHttpRequest();
    req.onreadystatechange = () => {
        if (req.readyState === 4 && req.status === 200) {
            document.getElementById('card-body').innerHTML = req.responseText;
        }
    }

    req.open('get', 'search-academics-process.php?txt=' + txt.value + '&page=' + page, true);
    req.send();
}

function registerAcademic(evt) {
    const req = new XMLHttpRequest();

    req.onreadystatechange = () => {
        if (req.readyState === 4 && req.status === 200) {
            document.getElementById('register-btn').classList.remove('d-none');
            document.getElementById('loading-btn').classList.add('d-none');

            let txt = req.responseText;

            if (txt == "success") {
                document.getElementById("register_form_err").innerHTML = "";
                document.getElementById('academic-register-form').reset();

                document.querySelector(".toast-body").innerHTML = "Accounted created successfully & email sent.";
                new bootstrap.Toast(document.getElementById('confirm-toast')).show();
            } else {
                document.getElementById("register_form_err").innerHTML = txt;
            }
        } else {
            document.getElementById('register-btn').classList.add('d-none');
            document.getElementById('loading-btn').classList.remove('d-none');
        }
    }

    req.open('post', 'register-academic-process.php', true);
    req.send(new FormData(document.getElementById('academic-register-form')));

    evt.preventDefault();
}

function changeStudentStatus(email, switchId) {
    const studentStatusCheckbox = document.getElementById(switchId);

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

    req.open('get', 'change-student-status-process.php?status=' + studentStatusCheckbox.checked + '&email=' + email, true);
    req.send();
}

let studentUpdateModal;

function showStudentUpdateModal(student) {
    document.getElementById("fname").value = student['first_name'];
    document.getElementById("lname").value = student['last_name'];
    document.getElementById("mobile").value = student['mobile'];
    document.getElementById("aemail").value = student['email'];
    document.getElementById("batch").value = student['batch_id'];

    studentUpdateModal = new bootstrap.Modal(document.getElementById("update-student"));
    studentUpdateModal.show();
}

function updateStudent() {
    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const mobile = document.getElementById("mobile");
    const email = document.getElementById("aemail");
    const batch = document.getElementById("batch");

    const form = new FormData();
    form.append('fname', fname.value);
    form.append('lname', lname.value);
    form.append('mobile', mobile.value);
    form.append('email', email.value);
    form.append('batch', batch.value);

    const req = new XMLHttpRequest();
    req.onreadystatechange = () => {
        if (req.readyState === 4 && req.status === 200) {
            let txt = req.responseText;
            if (txt === "success") {
                studentUpdateModal.hide();
                document.querySelector(".toast-body").innerHTML = "Student profile updated successfully";
                new bootstrap.Toast(document.getElementById('confirm-toast')).show();
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            } else {
                document.getElementById("err-msg").innerHTML = txt;
            }
        }
    }
    req.open('post', 'update-student-process.php', true);
    req.send(form);
}

function showStudentDeleteConfirmModal(email) {
    let modal = new bootstrap.Modal(document.getElementById("delete-confirm-modal"));
    modal.show();

    document.getElementById('modal-confirm-btn').addEventListener('click', () => {
        modal.hide();
        const req = new XMLHttpRequest();
        req.onreadystatechange = () => {
            if (req.readyState === 4 && req.status === 200) {
                let txt = req.responseText;
                if (txt === "success") {
                    document.querySelector(".toast-body").innerHTML = email + "'s student account deleted successfully";
                    new bootstrap.Toast(document.getElementById('confirm-toast')).show();

                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);

                }
            }
        }
        req.open('get', 'delete-student-account-process.php?email=' + email, true);
        req.send();
    })
}

function searchStudents(page) {
    const txt = document.getElementById("student-search");

    const req = new XMLHttpRequest();
    req.onreadystatechange = () => {
        if (req.readyState === 4 && req.status === 200) {
            document.getElementById('card-body').innerHTML = req.responseText;
        }
    }

    req.open('get', 'search-students-process.php?txt=' + txt.value + '&page=' + page, true);
    req.send();
}

/*----------------------------------------
 Teacher
 ----------------------------------------*/

function teacherLogin(evt) {
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
        }
    }
    req.open('post', 'login-process.php', true);
    req.send(new FormData(document.getElementById("login-form")));

    evt.preventDefault();
}