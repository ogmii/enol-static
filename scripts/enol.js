// FUNCTIONS
function getUri() {
    var url = $(location).attr('href');
    parts = url.split("/");
    last_part = parts[parts.length - 1];

    return last_part;
}


function validateEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

function hoverArrow() {
    $('.register-arrow').animate({top: '+=20'}, 1000);
    $('.register-arrow').animate({top: '-=20'}, 1000, hoverArrow);
}

function url_slug(s, opt) {
    s = String(s);
    opt = Object(opt);

    var defaults = {
        'delimiter': '-',
        'limit': undefined,
        'lowercase': true,
        'replacements': {},
        'transliterate': (typeof (XRegExp) === 'undefined') ? true : false
    };

    // Merge options
    for (var k in defaults) {
        if (!opt.hasOwnProperty(k)) {
            opt[k] = defaults[k];
        }
    }

    var char_map = {
        // Latin
        'À': 'A', 'Á': 'A', 'Â': 'A', 'Ã': 'A', 'Ä': 'A', 'Å': 'A', 'Æ': 'AE', 'Ç': 'C',
        'È': 'E', 'É': 'E', 'Ê': 'E', 'Ë': 'E', 'Ì': 'I', 'Í': 'I', 'Î': 'I', 'Ï': 'I',
        'Ð': 'D', 'Ñ': 'N', 'Ò': 'O', 'Ó': 'O', 'Ô': 'O', 'Õ': 'O', 'Ö': 'O', 'Ő': 'O',
        'Ø': 'O', 'Ù': 'U', 'Ú': 'U', 'Û': 'U', 'Ü': 'U', 'Ű': 'U', 'Ý': 'Y', 'Þ': 'TH',
        'ß': 'ss',
        'à': 'a', 'á': 'a', 'â': 'a', 'ã': 'a', 'ä': 'a', 'å': 'a', 'æ': 'ae', 'ç': 'c',
        'è': 'e', 'é': 'e', 'ê': 'e', 'ë': 'e', 'ì': 'i', 'í': 'i', 'î': 'i', 'ï': 'i',
        'ð': 'd', 'ñ': 'n', 'ò': 'o', 'ó': 'o', 'ô': 'o', 'õ': 'o', 'ö': 'o', 'ő': 'o',
        'ø': 'o', 'ù': 'u', 'ú': 'u', 'û': 'u', 'ü': 'u', 'ű': 'u', 'ý': 'y', 'þ': 'th',
        'ÿ': 'y',

        // Latin symbols
        '©': '(c)',

        // Greek
        'Α': 'A', 'Β': 'B', 'Γ': 'G', 'Δ': 'D', 'Ε': 'E', 'Ζ': 'Z', 'Η': 'H', 'Θ': '8',
        'Ι': 'I', 'Κ': 'K', 'Λ': 'L', 'Μ': 'M', 'Ν': 'N', 'Ξ': '3', 'Ο': 'O', 'Π': 'P',
        'Ρ': 'R', 'Σ': 'S', 'Τ': 'T', 'Υ': 'Y', 'Φ': 'F', 'Χ': 'X', 'Ψ': 'PS', 'Ω': 'W',
        'Ά': 'A', 'Έ': 'E', 'Ί': 'I', 'Ό': 'O', 'Ύ': 'Y', 'Ή': 'H', 'Ώ': 'W', 'Ϊ': 'I',
        'Ϋ': 'Y',
        'α': 'a', 'β': 'b', 'γ': 'g', 'δ': 'd', 'ε': 'e', 'ζ': 'z', 'η': 'h', 'θ': '8',
        'ι': 'i', 'κ': 'k', 'λ': 'l', 'μ': 'm', 'ν': 'n', 'ξ': '3', 'ο': 'o', 'π': 'p',
        'ρ': 'r', 'σ': 's', 'τ': 't', 'υ': 'y', 'φ': 'f', 'χ': 'x', 'ψ': 'ps', 'ω': 'w',
        'ά': 'a', 'έ': 'e', 'ί': 'i', 'ό': 'o', 'ύ': 'y', 'ή': 'h', 'ώ': 'w', 'ς': 's',
        'ϊ': 'i', 'ΰ': 'y', 'ϋ': 'y', 'ΐ': 'i',

        // Turkish
        'Ş': 'S', 'İ': 'I', 'Ç': 'C', 'Ü': 'U', 'Ö': 'O', 'Ğ': 'G',
        'ş': 's', 'ı': 'i', 'ç': 'c', 'ü': 'u', 'ö': 'o', 'ğ': 'g',

        // Russian
        'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D', 'Е': 'E', 'Ё': 'Yo', 'Ж': 'Zh',
        'З': 'Z', 'И': 'I', 'Й': 'J', 'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N', 'О': 'O',
        'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T', 'У': 'U', 'Ф': 'F', 'Х': 'H', 'Ц': 'C',
        'Ч': 'Ch', 'Ш': 'Sh', 'Щ': 'Sh', 'Ъ': '', 'Ы': 'Y', 'Ь': '', 'Э': 'E', 'Ю': 'Yu',
        'Я': 'Ya',
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'yo', 'ж': 'zh',
        'з': 'z', 'и': 'i', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o',
        'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'c',
        'ч': 'ch', 'ш': 'sh', 'щ': 'sh', 'ъ': '', 'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu',
        'я': 'ya',

        // Ukrainian
        'Є': 'Ye', 'І': 'I', 'Ї': 'Yi', 'Ґ': 'G',
        'є': 'ye', 'і': 'i', 'ї': 'yi', 'ґ': 'g',

        // Czech
        'Č': 'C', 'Ď': 'D', 'Ě': 'E', 'Ň': 'N', 'Ř': 'R', 'Š': 'S', 'Ť': 'T', 'Ů': 'U',
        'Ž': 'Z',
        'č': 'c', 'ď': 'd', 'ě': 'e', 'ň': 'n', 'ř': 'r', 'š': 's', 'ť': 't', 'ů': 'u',
        'ž': 'z',

        // Polish
        'Ą': 'A', 'Ć': 'C', 'Ę': 'e', 'Ł': 'L', 'Ń': 'N', 'Ó': 'o', 'Ś': 'S', 'Ź': 'Z',
        'Ż': 'Z',
        'ą': 'a', 'ć': 'c', 'ę': 'e', 'ł': 'l', 'ń': 'n', 'ó': 'o', 'ś': 's', 'ź': 'z',
        'ż': 'z',

        // Latvian
        'Ā': 'A', 'Č': 'C', 'Ē': 'E', 'Ģ': 'G', 'Ī': 'i', 'Ķ': 'k', 'Ļ': 'L', 'Ņ': 'N',
        'Š': 'S', 'Ū': 'u', 'Ž': 'Z',
        'ā': 'a', 'č': 'c', 'ē': 'e', 'ģ': 'g', 'ī': 'i', 'ķ': 'k', 'ļ': 'l', 'ņ': 'n',
        'š': 's', 'ū': 'u', 'ž': 'z'
    };

    // Make custom replacements
    for (var k in opt.replacements) {
        s = s.replace(RegExp(k, 'g'), opt.replacements[k]);
    }

    // Transliterate characters to ASCII
    if (opt.transliterate) {
        for (var k in char_map) {
            s = s.replace(RegExp(k, 'g'), char_map[k]);
        }
    }

    // Replace non-alphanumeric characters with our delimiter
    var alnum = (typeof (XRegExp) === 'undefined') ? RegExp('[^a-z0-9]+', 'ig') : XRegExp('[^\\p{L}\\p{N}]+', 'ig');
    s = s.replace(alnum, opt.delimiter);

    // Remove duplicate delimiters
    s = s.replace(RegExp('[' + opt.delimiter + ']{2,}', 'g'), opt.delimiter);

    // Truncate slug to max. characters
    s = s.substring(0, opt.limit);

    // Remove delimiter from ends
    s = s.replace(RegExp('(^' + opt.delimiter + '|' + opt.delimiter + '$)', 'g'), '');

    return opt.lowercase ? s.toLowerCase() : s;
}

var debug = false;

// 'CONST'
var startDate = new Date('11/06/2020 09:00:00 GMT+01:00');
// var startDate = new Date('2019, 10, 8, 01:00:00');
var endDate = new Date('11/06/2020 12:00:00 GMT+01:00');

/// VOSTRY DATUMY
var finaleStart = new Date('11/11/2020 16:00:00 GMT+01:00');
var streamStart = new Date('11/13/2020 17:00:00 GMT+01:00');


//var finaleStart = new Date('11/07/2020 13:27:00 GMT+01:00');
//var streamStart = new Date('11/07/2020 13:28:00 GMT+01:00');
//
$(document).ready(function () {
    var lectures = $('#countdown-lectures');
    var documents = $('#countdown-documents');
    var finale = $('#countdown-finale');


    // if (finaleStart > new Date()) {
        lectures.countdown(finaleStart, function (event) {
            $('#countdown-lectures .hours').html(event.strftime('%I'));
            $('#countdown-lectures .minutes').html(event.strftime('%M'));
            $('#countdown-lectures .seconds').html(event.strftime('%S'));
        });

        documents.countdown(finaleStart, function (event) {
            $('#countdown-documents .hours').html(event.strftime('%I'));
            $('#countdown-documents .minutes').html(event.strftime('%M'));
            $('#countdown-documents .seconds').html(event.strftime('%S'));
        });
    // }

    // if (streamStart > new Date()) {
        finale.countdown(streamStart, function (event) {
            $('#countdown-finale .hours').html(event.strftime('%I'));
            $('#countdown-finale .minutes').html(event.strftime('%M'));
            $('#countdown-finale .seconds').html(event.strftime('%S'));
        });
    // }

    lectures.on('finish.countdown', function () {
        $("#box-lectures").addClass("active");
        $("a.lectures").attr('target','_blank');
        $("#box-lectures .stripe").text("Vstoupit");
    });
    documents.on('finish.countdown', function () {
        $("#box-documents").addClass("active");
        $("a.documents").attr('target','_blank');
        $("#box-documents .stripe").text("Vstoupit");
    });
    finale.on('finish.countdown', function () {
        $("#box-finale").addClass("active");
        $("a.final").attr('target','_blank');
        $("#box-finale .stripe").text("Vstoupit");
    });

    $("#box-lectures, #box-documents, #box-finale").on("click", function (e) {
        if (this == $("#box-finale").get(0) && !$("#box-finale").hasClass("active")) {
            toastr.error("Stream ještě nezačal");
            e.preventDefault();
        }
        if ((this == $("#box-lectures").get(0) || this == $("#box-documents").get(0)) && !$("#box-lectures, #box-documents").hasClass("active")) {
            toastr.error("Finále ještě nezačalo");
            e.preventDefault();
        }
    });
// $('.enol-countdown').countdown(startDate, function(event) {
//     console.log(event.offset.minutes);
//     $('.days').html(event.offset.totalDays);
//     $('.hours').html(event.offset.hours);
//     $('.minutes').html(event.offset.minutes);
//     $('.seconds').html(event.offset.seconds);
// });
// COUNTDOWN

// if(new Date() <= startDate) {
//     $('.enol-countdown').countdown(startDate, function(event) {
//         $('.days').html(event.strftime('%D'));
//         $('.hours').html(event.strftime('%H'));
//         $('.minutes').html(event.strftime('%M'));
//         $('.seconds').html(event.strftime('%S'));
//     });
// } else {
//     $('.enol-countdown').countdown(endDate, function(event) {
//         $('.hours').html(event.strftime('%H'));
//         $('.minutes').html(event.strftime('%M'));
//         $('.seconds').html(event.strftime('%S'));
//
//     })
// }
//
// COUNTDOWN CALLBACK
//
// $('.enol-countdown').on('finish.countdown', function() {
//     $('.enter-quiz').removeClass('disabled');
//     $('.enol-start').addClass('started');
//     $('.enol-countdown').empty().append($('<div class="hours"></div>:<div class="minutes"></div>:<div class="seconds"></div>'))
//     $('.enol-countdown').countdown(endDate, function(event) {
//         $('.hours').html(event.strftime('%H'));
//         $('.minutes').html(event.strftime('%M'));
//         $('.seconds').html(event.strftime('%S'));
//     })
// });

// QUIZ COUNT DOWN
// if(new Date() <= endDate) {
//     $('#quiz-countdown').countdown(endDate, function(event) {
//         $('#hours').html(event.strftime('%H'));
//         $('#minutes').html(event.strftime('%M'));
//         $('#seconds').html(event.strftime('%S'));
//     });
// }
// if(new Date() <= endDate || startDate <= new Date()) {
// 	$('.enol-countdown').countdown(endDate, function(event) {
// 		$('#hours').html(event.strftime('%H'));
// 		$('#minutes').html(event.strftime('%M'));
// 		$('#seconds').html(event.strftime('%S'));
// 	});
// }

// $('.enol-countdown').on('finish.countdown', function() {
//     $('.enol-start').removeClass('enol-start');
// });

    $('.enter-quiz').on('click', function (e) {
        if ($(this).hasClass('disabled') && debug == false) {
            e.preventDefault();
            toastr.error('Olympiáda ještě nezačala.');
        }
    });
// ENOL LOGO

    if (!$('.enol-logo-black').is(':visible')) {
        $(document).on('scroll click', function () {
            $('.enol-logo-black').fadeIn();
        });
    }

// BUTTON HOVERS
    $('.enol-start').on({
        mouseenter: function () {
            $('.countdown').fadeIn(300)
        },
        mouseleave: function () {
            $('.countdown').fadeOut(300)
        }
    })
    if ($('.login').is(':visible')) {
        $('.login').on({
            mouseenter: function () {
                $('.header-hover.actions').fadeIn(300)
            },
            mouseleave: function () {
                $('.header-hover.actions').fadeOut(300)
            }
        })
    }

// ARROW HOVER

    hoverArrow();

// GDPR TOOLTIP

    /*$('.gdpr').tooltip({
        html: true,
        title: '<p class="pt10">Ochrana osobních údajů</p><p>Osobní údaje zpracováváme pouze na základě a v rozsahu dovoleném obecným nařízením Evropského parlamentu a Rady č. 2016/679, o ochraně osobních údajů a předpisů souvisejících.</p><p>Správcem osobních údajů je společnost Energetická gramotnost, s.r.o., IČO 05405858, se sídlem Šlikova 1119/9, Praha 6, Břevnov.</p><p>Povinné údaje k registraci jsou jméno soutěžícího studenta nebo učitele a jeho e-mailová adresa.</p><p>Poskytované údaje slouží pouze k zajištění organizace soutěže, zasílání organizačních pokynů a neslouží k marketingovým účelům.</p><p>Zpracování osobních údajů ukončíme po vyhodnocení a ukončení Energetické olympiády, nejpozději však do 31.12.2018.</p><p>Osobní údaje jsou zpracovány prostřednictvím online systému, ke kterému mají registrovaní účastníci přístup, mohou tak vidět, měnit a mazat tyto údaje.</p>'
    });*/

// OPEN MOBILE MENU
    $('.menu-open').on('click', function () {
        if (!$('.mobile-menu').is(':visible')) {
            $('.mobile-menu').slideDown()
        } else {
            $('.mobile-menu').slideUp()
        }
    })


// FILTER DEFAULT

    var defKrajSel = $('#kraj_id');
    var defOkresSel = $('#okres_id');
    var defCitySel = $('#city');

// FILTER IDs

    var teamIds = {krajId: '', okresId: '', city: ''}
    var krajId = [];
    var okresId = [];
    var city = [];

    $('.team-row').each(function () {
        if ($.inArray($(this).attr('kraj-id'), krajId)) {
            krajId.push($(this).attr('kraj-id'));
        }
        if ($.inArray($(this).attr('okres-id'), okresId)) {
            okresId.push($(this).attr('okres-id'));
        }
        if ($.inArray($(this).attr('city'), city)) {
            city.push($(this).attr('city'));
        }
    });

    teamIds.city = city;
    teamIds.okresId = okresId;
    teamIds.krajId = krajId;

// TABLE SORTER

// TABLE SORTER

    $('.teams-table.admin-table').tablesorter({
        cssChildRow: "row-details",
        dateFormat: "ddmmyyyy",
        headers: {
            1: {sorter: 'shortDate'},
            4: {sorter: $('.points').length ? true : false},
            5: {sorter: $('.points').length ? true : false},
        }
    });

    $('.teams-table.teacher-dash').tablesorter({
        headers: {
            1: {sorter: false},
        }
    });

//  FLASH MESSAGE

    if ($('.flash').length) {
        $('.flash').slideDown(250).delay(5000).slideUp(250);
    }

// CUSTOM RADIO BUTTONS

    $('.mCheckTeam').mCheckable({
        className: 'radioTeam'
    });
    $('.mCheckTeacher').mCheckable({
        className: 'radioTeacher'
    });

    $('.radio-answer').mCheckable({
        className: 'radioAnswer'
    });

    if ($('.mCheckTeam').is(':checked')) {
        $('.mCheckTeam').prev('label').css('color', 'white')
    }
    if ($('.mCheckTeacher').is(':checked')) {
        $('.mCheckTeacher').prev('label').css('color', 'white')
    }

    $('.radioTeam, .radioTeacher, label, .mCheckTeacher, .mCheckTeam').on('click', function () {
        if ($('.mCheckTeam').is(':checked')) {
            $('.mCheckTeam').prev('label').css('color', 'white')
        } else {
            $('.mCheckTeam').prev('label').css('color', '#5d5958')
        }
        if ($('.mCheckTeacher').is(':checked')) {
            $('.mCheckTeacher').prev('label').css('color', 'white')
        } else {
            $('.mCheckTeacher').prev('label').css('color', '#5d5958')
        }
    })

// ADD MEMBER

    $('#addMember').on('click', function () {
        var count = $('.user').length;
        if (count == 1) {
            $('.removeMember').removeClass('inactive');
            $('.removeMember').addClass('active');
            $('.user[data-id=1]').clone().appendTo('.users');
            var newMember = $('.users').children().last();
            newMember.children().first().removeClass('user-img-1').addClass('user-img-2');
            newMember.attr('data-id', '2');
            newMember.find('.name').attr('id', 'userName2').val('').prev('label').attr('for', 'userName2');
            newMember.find('.surname').attr('id', 'userSurname2').val('').prev('label').attr('for', 'userSurname2').val('');
            // newMember.find('.zip').attr('id', 'schoolZip2').val('').prev('label').attr('for', 'schoolZip2').val('');
            newMember.find('.email').attr('id', 'userEmail2').val('').prev('label').attr('for', 'userEmail2').val('');
            newMember.find('.class').attr('id', 'userClass2').val('').prev('label').attr('for', 'userClass2').val('');
            // newMember.find('.school').attr('id', 'school2').val(0).parent('label').attr('for', 'school2')	;
            // newMember.find('.findSchool').attr('id', 'findSchool2');
            newMember.find('.teacher-info').attr('id', 'teacher-info2').text('');
            $('#memberCount').text('Ještě můžete přidat jednoho člena');
        } else if (count == 2) {
            $('.addMember').addClass('inactive');
            $('.addMember').removeClass('active');
            $('.user[data-id=2]').clone().appendTo('.users');
            var newMember = $('.users').children().last();
            newMember.children().first().removeClass('user-img-2').addClass('user-img-3');
            newMember.attr('data-id', '3');
            newMember.find('.name').attr('id', 'userName3').val('').prev('label').attr('for', 'userName3');
            newMember.find('.surname').attr('id', 'userSurname3').val('').prev('label').attr('for', 'userSurname3');
            // newMember.find('.zip').attr('id', 'schoolZip3').val('').prev('label').attr('for', 'schoolZip3');
            newMember.find('.email').attr('id', 'userEmail3').val('').prev('label').attr('for', 'userEmail3');
            newMember.find('.class').attr('id', 'userClass3').val('').prev('label').attr('for', 'userClass3').val('');
            // newMember.find('.school').attr('id', 'school3').val(0).parent('label').attr('for', 'school3');
            // newMember.find('.findSchool').attr('id', 'findSchool3');
            newMember.find('.teacher-info').attr('id', 'teacher-info3').text('');
            $('#memberCount').text('');
        }
    });

// REMOVE MEMBER


    $('#removeMember').on('click', function () {
        var count = $('.user').length;
        if (count == 2) {
            $('.users').children().last().remove();
            $('.addMember').removeClass('inactive');
            $('.addMember').addClass('active');
            $('.removeMember').removeClass('active');
            $('.removeMember').addClass('inactive');
            $('#memberCount').text('Ještě můžete přidat dva členy');
        } else if (count == 3) {
            $('.users').children().last().remove();
            $('.addMember').removeClass('inactive');
            $('.addMember').addClass('active');
            $('#memberCount').text('Ještě můžete přidat jednoho člena');
        }
    });

// VALIDATE FORM

    $('.js--register').on('click', function (e) {
        if ($('#student').is(':checked')) {

            var teamName = $('#teamName');
            var password = $('#password');
            var school = $('#school');
            var passwordConfirm = $('#passwordConfirm');
            var userName1 = $('#userName1');
            var userSurname1 = $('#userSurame1');
            var email1 = $('#userEmail1');
            var class1 = $('#userClass1');

            if (teamName.val() == '') {
                e.preventDefault();
                toastr.error('Zadejte název týmu.');
            } else if (password.val() == '' || password.val().length < 6) {
                e.preventDefault();
                toastr.error('Zadejte heslo s nejméně 6 znaky.');
            } else if (passwordConfirm.val() == '') {
                e.preventDefault();
                toastr.error('Zadejte ověření hesla.');
            } else if (school.val() == 0) {
                e.preventDefault();
                toastr.error('Vyberte školu pro tým.');
            } else if (passwordConfirm.val() != password.val()) {
                e.preventDefault();
                toastr.error('Zadaná hesla se neshodují.');
            } else if (userName1.val() == '') {
                e.preventDefault();
                toastr.error('Zadejte jméno prvního člena týmu.');
            } else if (userSurname1.val() == '') {
                e.preventDefault();
                toastr.error('Zadejte příjmení prvního člena týmu.');
            } else if (!validateEmail(email1.val())) {
                e.preventDefault();
                toastr.error('Zadejte e-mail prvního člena týmu ve správném tvaru.');
            } else if (class1.val() == '') {
                e.preventDefault();
                toastr.error('Zadejte třídu prvního člena týmu.');
            }

            // SECOND MEMBER

            else if ($('#userName2').length) {
                var userName2 = $('#userName2');
                var userSurname2 = $('#userSurame2');
                var school2 = $('#school2');
                var email2 = $('#userEmail2');
                var class2 = $('#userClass2');
                if (userName2.val() == '') {
                    e.preventDefault();
                    toastr.error('Zadejte jméno druhého člena týmu.');
                } else if (userSurname2.val() == '') {
                    e.preventDefault();
                    toastr.error('Zadejte příjmení druhého člena týmu.');
                } else if (class2.val() == '') {
                    e.preventDefault();
                    toastr.error('Zadejte třídu druhého člena týmu.');
                } else if (!validateEmail(email2.val())) {
                    e.preventDefault();
                    toastr.error('Zadejte e-mail druhého člena týmu ve správném tvaru.');
                } else if (email2.val() == email1.val()) {
                    e.preventDefault();
                    toastr.error('Každý člen týmu musí mít jedinečný email');
                }
            }

            // THIRD MEMBER

            else if ($('#userName3').length) {
                var userName3 = $('#userName3');
                var userSurname3 = $('#userSurame3');
                var class3 = $('#userClass3');
                var email3 = $('#userEmail3');
                if (userName3.val() == '') {
                    e.preventDefault();
                    toastr.error('Zadejte jméno třetího člena týmu.');
                } else if (userSurname3.val() == '') {
                    e.preventDefault();
                    toastr.error('Zadejte příjmení třetího člena týmu.');
                } else if (class3.val() == '') {
                    e.preventDefault();
                    toastr.error('Zadejte třídu třetího člena týmu.');
                } else if (!validateEmail(email3.val())) {
                    e.preventDefault();
                    toastr.error('Zadejte e-mail třetího člena týmu ve správném tvaru.');
                } else if (email3.val() == email2.val() || email3.val() == email1.val()) {
                    e.preventDefault();
                    toastr.error('Každý člen týmu musí mít jedinečný email');
                }

            }

            // TEACHER

        } else if ($('#teacher').is(':checked')) {
            var teacherPassword = $('#passwordConfirmTeacher').val();
            var teacherPasswordConfirm = $('#passwordConfirmTeacher').val();
            var teacherName = $('#teacherName').val();
            var teacherSurname = $('#teacherSurname').val();
            var teacherSchool = $('#teacherSchool').val();
            var teacherEmail = $('#teacherEmail').val();

            if (teacherName == '') {
                e.preventDefault()
                toastr.error('Zadejte Vaše jméno.')
            } else if (teacherSurname == '') {
                e.preventDefault()
                toastr.error('Zadejte Vaše příjmení.')
            } else if (!validateEmail(teacherEmail)) {
                e.preventDefault()
                toastr.error('Zadejte Váš e-mail ve správném tvaru.');
            } else if (teacherSchool == '') {
                e.preventDefault()
                toastr.error('Vyberte Vaší školu.');
            } else if (teacherPassword == '' || teacherPassword.length < 6) {
                e.preventDefault();
                toastr.error('Zadejte heslo s nejméně 6 znaky.');
            } else if (teacherPasswordConfirm != teacherPassword) {
                e.preventDefault();
                toastr.error('Zadaná hesla se neshodují.');
            }

        }

    });

    $('.update-btn').on('click', function (e) {
        if ($(this).parent().hasClass('update-form') || $(this).parent().hasClass('create-modal')) {
            if ($(this).parent().hasClass('update-form')) {
                var name = $('#member-name').val();
                var surname = $('#member-surname').val();
                var email = $('#member-email').val();
                var classs = $('#member-class').val();
            } else if ($(this).parent().hasClass('create-modal')) {
                var name = $('#name').val();
                var surname = $('#surname').val();
                var email = $('#email').val();
                var classs = $('#class').val();
            }

            if (name == '') {
                e.preventDefault()
                toastr.error('Jméno je povinný údaj.')
            } else if (surname == '') {
                e.preventDefault()
                toastr.error('Příjmení je povinný údaj.')
            } else if (!validateEmail(email)) {
                e.preventDefault()
                toastr.error('Zadejte e-mail ve správném tvaru.');
            } else if (classs == '') {
                e.preventDefault()
                toastr.error('Třída je povinný údaj.');
            }
        }
    })

// TEAM LOGIN

    $('#teamName').keyup(function () {
        $('#teamLogin').val(url_slug($('#teamName').val()));
    });
    $('#teacherEmail').keyup(function () {
        $('.teacher-login').text($('#teacherEmail').val());
    });

// FORM STUDENT/TEACHER

    $('.formType').on('change', function () {
        if ($('#student').is(':checked')) {
            $('.formTeacher').hide();
            $('.formStudent').show();
        } else {
            $('.formTeacher').show();
            $('.formStudent').hide();
        }
    })

// SLIDE DOWN TEAM DETAIL

    $(document).on('click', '.open-detail', function () {
        row = $(this).parent().next('tr').find('.team-info-row .team-info');
        if (row.is(':visible')) {
            row.slideUp();
        } else {
            $(this).parent().next('tr').find('.team-info-row').show();
            row.slideDown();
        }
    });

// EMPTY MODAL ON CLOSE

    $('.close').on('click', function () {
        $('.update-form').children('input').val('');
        $('.create-modal').children('input').val('');
    });

// OPEN MODAL TO LOG OUT OTHER USER FROM QUIZ

    var hash = window.location.hash;

    if (hash == '#userlogged') {
        $('#logout-modal').modal('show');
        $(".modal-backdrop").addClass("show");
        $("#logout-modal").addClass("show");
    }
    if (hash == '#handedin') {
        $('#finished-modal').modal('show');
        $(".modal-backdrop").addClass("show");
        $("#finished-modal").addClass("show");
    }
    if (hash == '#added') {
        toastr.success('Člen týmu byl úspěšně přidán.');
    }
    if (hash == '#enolFinished') {
        toastr.error('Energetická olympiáda již zkončila.');
    }
    if (hash == '#teamFinished') {
        toastr.error('Váš tým již olympiádu ukončil.');
    }
    if (hash == '#registered') {
        toastr.success('Registrace proběhla úspěšně, na zadaný email bylo zasláno potvrzení.');
    }

    $('.add-member').on('click', function () {
        $('#create-modal').modal('show');
        $('#create-modal').addClass('show');

        var count = $('.add-member').length;
        if (count == 2) {
            $('#create-modal .modal-body div').addClass('member-img-2');
        } else if (count == 1) {
            $('#create-modal .modal-body div').addClass('member-img-3');
        }
    });

    /*
    *
    *	AJAX
    *
    */

// get school select

    $(document).on('click', '.findSchool', function () {
        var zip = $(this).next('.zip').val();
        var type = $(this).parent('label').parent().parent().attr('class');
        zip = $.trim(zip.replace(/\s/g, ''));

        if (zip.length && isFinite(String(zip))) {
            $.ajax({
                type: "POST",
                url: "/school/find",
                data: {zip: zip},
                dataType: "json",
                headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                success: function (schools) {
                    if (schools.length !== 0) {
                        var name = (type == 'formStudent') ? 'school' : 'teacherSchool';
                        var schoolId = (type == 'formStudent') ? 'school' : 'teacherSchool';
                        var sel = $('<select class="wide school" name="' + name + '" id="' + schoolId + '">');
                        sel.append($('<option value="0">Vyberte školu</option>'));
                        $.each(schools, function (id, name) {
                            sel.append($('<option>').attr('value', id).text(name));
                        });
                        if (type == 'formStudent') {
                            $('#school').remove();
                            $('label[for="school"]').append(sel);
                        } else {
                            $('#teacherSchool').remove();
                            $('label[for="teacherSchool"]').append(sel);
                        }
                    } else {
                        toastr.error('Taková PSČ v databázi nemáme.');
                    }
                }
            });
        } else {
            toastr.error('Zadejte PSČ ve správném tvaru.');
        }


    });

// check if teacher exists for school

    $(document).on('change', '.school', function () {
        var schoolId = $(this).val();
        var id = $(this).parent().parent().attr('data-id');
        $('#teacher-info').children('p').remove();
        $.ajax({
            type: "POST",
            url: "/user/teacher",
            data: {schoolId: schoolId},
            dataType: "json",
            headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
            success: function (teacher) {
                if (teacher != false) {
                    var names = '';
                    var i = 1;
                    if (teacher.name.length > 1) {
                        $.each(teacher.name, function () {
                            if (teacher.name.length == i) {
                                names += this;
                            } else {
                                names += this + ', ';
                                i++;
                            }
                        })
                        $('#teacher-info').append($('<p>Příslušní pedagogové: <strong>' + names + '</strong>.</p>')).slideDown();
                        // $('#teacher-info').append('Za Vaší školu se do Olympiády jako učitelé zaregistrovali ' + names + '.');
                    } else {
                        $('#teacher-info').append($('<p>Příslušný pedagog: <strong>' + teacher.name + '</strong>.</p>')).slideDown();
                        // $('#teacher-info').append('Za Vaší školu se do Olympiády jako učitel zaregistroval ' + teacher.name + '.');
                    }
                } else {
                    $('#teacher-info').append('<p>Vaše škola zatím nemá registrován žádný učitelský účet. K dokončení registrace a k účasti v soutěži to není nezbytné, ale bylo by vhodné oslovit jakéhokoli pedagoga, který by vám zajistil prostory a PC během soutěže. Pokud vám škola neposkytne vhodné podmínky, soutěžit můžete z domova.').slideDown();
                }
            }
        });

    });

// MEMBER EDIT


    $('.update-modal, .edit-btn').on('click', function (e) {
        var id = $(this).attr('data-id');
        if ($(this).parent('p').length) {
            var index = $(this).parent('p').index();
        } else {
            var index = $(this).parent('div').parent().index();
        }
        index++;
        $('.modal-body').children('div').removeClass('member-img-1 member-img-2 member-img-3')
        $.ajax({
            type: "POST",
            url: "/user/get",
            data: {id: id},
            dataType: "json",
            headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
            success: function (member) {
                $('.modal-body').children('div').addClass('member-img-' + index);
                $('#member-name').val(member[0].name)
                $('#member-surname').val(member[0].surname)
                $('#member-email').val(member[0].email)
                $('#member-class').val(member[0].class)
                $('#member-id').val(member[0].id)
            }
        });
    });

// FILTER

    $(document).on('change', '#kraj_id, #okres_id, #city', function () {
        var type = $(this)[0].id
        var id = $('#' + type).val();
        $('.team-row').show();
        $('.team-info-row').hide();
        if (type == 'kraj_id' && id == '') {
            $('label[for=city]').next('#city').remove();
            defCitySel.insertAfter('label[for=city]');
            $('label[for=okres_id]').next('#okres_id').remove();
            defOkresSel.insertAfter('label[for=okres_id]');
        } else if (type == 'kraj_id' && id != '') {
            $('label[for=city]').next('#city').remove();
            defCitySel.insertAfter('label[for=city]');
        } else if (type == 'okres_id' && id == 0) {
            $('label[for=city]').next('#city').remove();
            defCitySel.insertAfter('label[for=city]');
        }

        // $('.team-row').each(function() {
        //         if($('#kraj_id').val() != '' && $(this).attr('kraj-id') != $('#kraj_id').val()) {
        //             $(this).hide();
        //             // $(this).next('.row-details team-info-row').hide()
        //         }
        //         if($('#okres_id').val() != 0 && $(this).attr('okres-id') != $('#okres_id').val() && type != 'kraj_id') {
        //             $(this).hide();
        //             // $(this).next('.row-details team-info-row').hide()
        //         }
        //         if($('#city').val() != 0 && $(this).attr('city') != $('#city').val() && type != 'okres_id') {
        //             $(this).hide();
        //             // $(this).next('.row-details team-info-row').hide()
        //         }
        //     })
        //
        //     $.ajax({
        //         type: "POST",
        //         url: "/team/filter",
        //         data: { type: type, id: id },
        //         dataType: "json",
        //         headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
        //         success: function(members) {
        //             if(members.select) {
        //                 if(members.type == 'kraj_id') {		// okres select
        //                     okresSel = $('<select id="okres_id" name="okres"><option value="0">Vyberte okres</option>');
        //                     $.each(members.select, function(id, name) {
        //                         okresSel.append($('<option value="' + id + '">' + name + '</option>'));
        //                     });
        //                     okresSel.append($('</select>'))
        //                     $('label[for=okres_id]').next('#okres_id').remove();
        //                     okresSel.insertAfter('label[for=okres_id]');
        //                 } else if(members.type == 'okres_id') {		// city select
        //                     citySel = $('<select id="city" name="city"><option value="0">Vyberte město</option>');
        //                     $.each(members.select, function(id, name) {
        //                         citySel.append($('<option value="' + id + '">' + name + '</option>'));
        //                     });
        //                     citySel.append($('</select>'))
        //                     $('label[for=city]').next('#city').remove();
        //                     citySel.insertAfter('label[for=city]');
        //                 }
        //             }
        //         }
        //     });
    });

    /*
    *
    *	QUIZ
    *
    */

// quiz navigation

    $(document).on('click', '.nav-btn.next, .nav-btn.prev, .questions-wrap div', function (e) {
        $("#source").addClass("d-none");
        $('.next').removeAttr('style');
        $('.prev').removeAttr('style');

        if ($('.quiz-wrap').hasClass('results')) {
            $(this).trigger("click");
        }

        var currQuestion = $('.question-wrap').attr('data-question');
        var count = $('.top .questions-wrap div').length;

        if (currQuestion == count && currQuestion == 1) {
            e.preventDefault();
            return false;
        }

        $('.questions-wrap div').removeClass('active');
        if ($(this).hasClass('next')) {
            var questionId = currQuestion;
            questionId++;
            $('.questions-wrap div:nth-child(' + questionId + ')').addClass('active');
            questionId == count ? $('.next').css({'color': 'transparent', 'pointer-events': 'none'}) : '';
        } else if ($(this).hasClass('prev')) {
            var questionId = currQuestion;
            questionId--;
            questionId == 1 ? $('.prev').css({'color': 'transparent', 'pointer-events': 'none'}) : '';
            $('.questions-wrap div:nth-child(' + questionId + ')').addClass('active');
        } else if ($(this).parent('.questions-wrap')) {
            questionId = $(this).index() + 1;
            $('.questions-wrap div:nth-child(' + questionId + ')').addClass('active');
            questionId == count ? $('.next').css({'color': 'transparent', 'pointer-events': 'none'}) : '';
            questionId == 1 ? $('.prev').css({'color': 'transparent', 'pointer-events': 'none'}) : '';
        }
        if (questionId != currQuestion && questionId <= count && questionId != 0) {
            $.ajax({
                type: "GET",
                url: "/quiz/navigation",
                dataType: "json",
                data: {questionId: questionId},
                headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                success: function (data) {
                    if (data.state == false) {
                        window.location.href = "dash#userlogged";
                    } else if (data.state == 'enol_finished') {
                        window.location.href = "dash#enolFinished";
                    } else if (data.state == 'team_finished') {
                        window.location.href = "dash#teamFinished";
                    }
                    if (data.state != false && data.questions.length) {
                        var questionCount = $('.question-navigation-wrap').children().last().text();
                        // change wrap id
                        $('.question-wrap').attr('data-question', data.questions[0].question_id)
                        // intro
                        $('.intro-wrap').remove();

                        if ($('#question15').length > 0) {
                            $('#question15').remove();
                            $('<img src="" id="question-img" style="display:none;">').insertAfter('p.question')
                        }
                        // if (data.questions[0].question_id == 21) {
                        //     $("#source").removeClass("d-none");
                        // }
                        // if(data.questions[0].intro != null) {
                        //     $('.question-wrap').prepend($('<div class="intro-wrap"></div>'))
                        //     var imgId = '';
                        //     if(data.questions[0].question_id == 1) {
                        //         imgId = 1;
                        //     } else if(data.questions[0].question_id == 10) {
                        //         imgId = 2;
                        //     } else if(data.questions[0].question_id == 20) {
                        //         imgId = 3;
                        //     }
                        //     $('.intro-wrap').prepend($('<div class="intro-line img-' + imgId + '"></div>'));
                        //     if($('.intro').length) {
                        //         $('.intro').text(data.questions[0].intro)
                        //     } else {
                        //         $('.intro-wrap').append($('<p class="intro img-' + imgId + '">' + data.questions[0].intro + '</p>'))
                        //     }
                        // }
                        // question text
                        if (data.questions[0].question_id == 15) {
                            $('#question-img').remove();
                            $('<div class="d-flex w-100" id="question15">' +
                                '<img src="/img/quiz/question15_01.png" data-action="zoom">' +
                                '<img src="/img/quiz/question15_02.png" data-action="zoom">' +
                                '</div>').insertAfter('p.question');
                        }


                        $('.question').html(data.questions[0].question);
                        // question img
                        $('question-img').attr('style', '');
                        if (data.questions[0].image != '' && data.questions[0].question_id != 15) {
                            $('#question-img').attr('src', '/img/quiz/' + data.questions[0].image);
                            ($('#question-img').is(':hidden')) ? $('#question-img').show() : '';
                        } else {
                            $('#question-img').attr('src', '');
                            $('#question-img').hide();
                        }

                        $('#question-img').attr('data-question-id', data.questions[0].question_id);
                        // var questionIds = [20,21];
                        //
                        // if ($.inArray(data.questions[0].question_id, questionIds) !== -1) {
                        //     $('#question-img').css('width', '60%');
                        // } else {
                        //     $('#question-img').attr('style', '');
                        // }

                        (data.questions[0].portrait == true) ? $('#question-img').addClass('portrait') : $('#question-img').removeClass('portrait');
                        // options
                        var radio = ($('<div class="answers" style="display:flex; flex-direction:column">'));
                        $.each(data.questions, function (index, value) {
                            var checked = (value.oid == data.answers[questionId]) ? 'checked="checked"' : '';
                            radio.append($('<div class="option-wrap"><input class="radio-answer" id="option_' + value.oid + '" name="answer" type="radio" value="' + value.oid + '" ' + checked + '><label for="option_' + value.oid + '">' + value.option + '</label></div>'));
                        });
                        radio.append($('</div>'));
                        $('.answers').replaceWith(radio);
                        $('.radio-answer').mCheckable({
                            className: 'radioAnswer'
                        });
                    }
                }
            });
        }
    });

// disable next & prev if loaded with last or first question active

    if (!$('.quiz-wrap').hasClass('results')) {
        var count = $('.top .questions-wrap div').length;

        $('.questions-wrap .active').index() == 0 ? $('.prev').css({
            'color': 'transparent',
            'pointer-events': 'none'
        }) : '';
        $('.questions-wrap .active').index() + 1 == count ? $('.next').css({
            'color': 'transparent',
            'pointer-events': 'none'
        }) : '';
    }

// save question
    $('#save-answer').on('click', function () {
        var id = $('.question-wrap').attr('data-question');
        var selectedId = $('.option-wrap').children('input:checked').val();
        if (selectedId) {
            $.ajax({
                type: "POST",
                url: "/quiz/save",
                dataType: "json",
                data: {questionId: id, optionId: selectedId},
                headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                success: function (question) {

                    if (question.state == true) {
                        $('.questions-wrap .active').addClass('done');
                        toastr.success('Odpověď byla úspěšně uložena.')
                    } else if (question.state == 'enol_finished') {
                        window.location.href = "dash#enolFinished";
                    } else if (question.state == 'team_finished') {
                        window.location.href = "dash#teamFinished";
                    } else {
                        window.location.href = "dash#userlogged";
                    }

                    if ($('.top .questions-wrap div:last-child').text() !== id) {
                        $('.nav-btn.next')[0].click();
                    }
                }
            });
        } else {
            toastr.error('Vyberte odpověď.');
        }
    });

    var schoolZip = $('#schoolZip')
    var teacherZip = $('#teacherSchoolZip')

    if (schoolZip.length) {
        if (schoolZip.val().length >= 5 || teacherZip.val().length >= 5) {
            schoolZip.prev('.findSchool').removeClass('disabled').addClass('active');
            teacherZip.prev('.findSchool').removeClass('disabled').addClass('active');
        } else {
            schoolZip.prev('.findSchool').removeClass('active').addClass('disabled');
            teacherZip.prev('.findSchool').removeClass('active').addClass('disabled');
        }
    }


    $('#schoolZip, #teacherSchoolZip').on('keyup', function () {
        if ($(this).val().length >= 5) {
            $(this).prev('.findSchool').removeClass('disabled').addClass('active');
        } else {
            $(this).prev('.findSchool').removeClass('active').addClass('disabled');
        }

    })

    if ($('.formStudent').is(':visible')) {
        $('#gdpr-team').prop('required', true);
        $('#gdpr-teacher').removeAttr('required');
    } else {
        $('#gdpr-team').removeAttr('required');
        $('#gdpr-teacher').prop('required', true);
    }


    $('#student, #teacher').on('click', function (e) {
        if ($(e.target)[0] === $('#student')[0]) {
            $('#gdpr-team').prop('required', true);
            $('#gdpr-teacher').removeAttr('required');
        } else {
            $('#gdpr-team').removeAttr('required');
            $('#gdpr-teacher').prop('required', true);
        }
    });

    $('.enter-quiz').on('click', function () {
        if (new Date() >= startDate && $(this).hasClass('disabled')) {
            $(this).css('pointer-events', 'none');
            toastr.warning('Máme tu nával, zkuste obnovit prohlížeč a vstoupit ještě jednou');
        }
    })

})
;
