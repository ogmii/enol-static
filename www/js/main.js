function getUri(){var e=$(location).attr("href");return parts=e.split("/"),last_part=parts[parts.length-1],last_part}function validateEmail(e){return/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(e)}function hoverArrow(){$(".register-arrow").animate({top:"+=20"},1e3),$(".register-arrow").animate({top:"-=20"},1e3,hoverArrow)}function url_slug(e,t){e=String(e),t=Object(t);var a={delimiter:"-",limit:void 0,lowercase:!0,replacements:{},transliterate:"undefined"==typeof XRegExp};for(var r in a)t.hasOwnProperty(r)||(t[r]=a[r]);var o={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"o","Ô":"O","Õ":"O","Ö":"O","Ő":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ű":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ő":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ű":"u","ý":"y","þ":"th","ÿ":"y","©":"(c)","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ά":"A","Έ":"E","Ί":"I","Ό":"O","Ύ":"Y","Ή":"H","Ώ":"W","Ϊ":"I","Ϋ":"Y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ά":"a","έ":"e","ί":"i","ό":"o","ύ":"y","ή":"h","ώ":"w","ς":"s","ϊ":"i","ΰ":"y","ϋ":"y","ΐ":"i","Ş":"S","İ":"I","Ğ":"G","ş":"s","ı":"i","ğ":"g","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ё":"Yo","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ё":"yo","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","Є":"Ye","І":"I","Ї":"Yi","Ґ":"G","є":"ye","і":"i","ї":"yi","ґ":"g","Č":"C","Ď":"D","Ě":"E","Ň":"N","Ř":"R","Š":"S","Ť":"T","Ů":"U","Ž":"Z","č":"c","ď":"d","ě":"e","ň":"n","ř":"r","š":"s","ť":"t","ů":"u","ž":"z","Ą":"A","Ć":"C","Ę":"e","Ł":"L","Ń":"N","Ś":"S","Ź":"Z","Ż":"Z","ą":"a","ć":"c","ę":"e","ł":"l","ń":"n","ś":"s","ź":"z","ż":"z","Ā":"A","Ē":"E","Ģ":"G","Ī":"i","Ķ":"k","Ļ":"L","Ņ":"N","Ū":"u","ā":"a","ē":"e","ģ":"g","ī":"i","ķ":"k","ļ":"l","ņ":"n","ū":"u"};for(var r in t.replacements)e=e.replace(RegExp(r,"g"),t.replacements[r]);if(t.transliterate)for(var r in o)e=e.replace(RegExp(r,"g"),o[r]);var s="undefined"==typeof XRegExp?RegExp("[^a-z0-9]+","ig"):XRegExp("[^\\p{L}\\p{N}]+","ig");return e=(e=(e=(e=e.replace(s,t.delimiter)).replace(RegExp("["+t.delimiter+"]{2,}","g"),t.delimiter)).substring(0,t.limit)).replace(RegExp("(^"+t.delimiter+"|"+t.delimiter+"$)","g"),""),t.lowercase?e.toLowerCase():e}var debug=!1,startDate=new Date("09/08/2020 18:00:00 GMT+02:00"),endDate=new Date("09/08/2020 23:00:00 GMT+02:00");$(document).ready(function(){new Date<=startDate?$(".enol-countdown").countdown(startDate,function(e){$(".days").html(e.strftime("%D")),$(".hours").html(e.strftime("%H")),$(".minutes").html(e.strftime("%M")),$(".seconds").html(e.strftime("%S"))}):$(".enol-countdown").countdown(endDate,function(e){$(".hours").html(e.strftime("%H")),$(".minutes").html(e.strftime("%M")),$(".seconds").html(e.strftime("%S"))}),$(".enol-countdown").on("finish.countdown",function(){$(".enter-quiz").removeClass("disabled"),$(".enol-start").addClass("started"),$(".enol-countdown").empty().append($('<div class="hours"></div>:<div class="minutes"></div>:<div class="seconds"></div>')),$(".enol-countdown").countdown(endDate,function(e){$(".hours").html(e.strftime("%H")),$(".minutes").html(e.strftime("%M")),$(".seconds").html(e.strftime("%S"))})}),new Date<=endDate&&$("#quiz-countdown").countdown(endDate,function(e){$("#hours").html(e.strftime("%H")),$("#minutes").html(e.strftime("%M")),$("#seconds").html(e.strftime("%S"))}),$(".enter-quiz").on("click",function(e){$(this).hasClass("disabled")&&0==debug&&(e.preventDefault(),toastr.error("Olympiáda ještě nezačala."))}),$(".enol-logo-black").is(":visible")||$(document).on("scroll click",function(){$(".enol-logo-black").fadeIn()}),$(".enol-start").on({mouseenter:function(){$(".countdown").fadeIn(300)},mouseleave:function(){$(".countdown").fadeOut(300)}}),$(".login").is(":visible")&&$(".login").on({mouseenter:function(){$(".header-hover.actions").fadeIn(300)},mouseleave:function(){$(".header-hover.actions").fadeOut(300)}}),hoverArrow(),$(".menu-open").on("click",function(){$(".mobile-menu").is(":visible")?$(".mobile-menu").slideUp():$(".mobile-menu").slideDown()});$("#kraj_id");var a=$("#okres_id"),r=$("#city"),e={krajId:"",okresId:"",city:""},t=[],o=[],s=[];$(".team-row").each(function(){$.inArray($(this).attr("kraj-id"),t)&&t.push($(this).attr("kraj-id")),$.inArray($(this).attr("okres-id"),o)&&o.push($(this).attr("okres-id")),$.inArray($(this).attr("city"),s)&&s.push($(this).attr("city"))}),e.city=s,e.okresId=o,e.krajId=t,$(".teams-table.admin-table").tablesorter({cssChildRow:"row-details",dateFormat:"ddmmyyyy",headers:{1:{sorter:"shortDate"},4:{sorter:!!$(".points").length},5:{sorter:!!$(".points").length}}}),$(".teams-table.teacher-dash").tablesorter({headers:{1:{sorter:!1}}}),$(".flash").length&&$(".flash").slideDown(250).delay(5e3).slideUp(250),$(".mCheckTeam").mCheckable({className:"radioTeam"}),$(".mCheckTeacher").mCheckable({className:"radioTeacher"}),$(".radio-answer").mCheckable({className:"radioAnswer"}),$(".mCheckTeam").is(":checked")&&$(".mCheckTeam").prev("label").css("color","white"),$(".mCheckTeacher").is(":checked")&&$(".mCheckTeacher").prev("label").css("color","white"),$(".radioTeam, .radioTeacher, label, .mCheckTeacher, .mCheckTeam").on("click",function(){$(".mCheckTeam").is(":checked")?$(".mCheckTeam").prev("label").css("color","white"):$(".mCheckTeam").prev("label").css("color","#5d5958"),$(".mCheckTeacher").is(":checked")?$(".mCheckTeacher").prev("label").css("color","white"):$(".mCheckTeacher").prev("label").css("color","#5d5958")}),$("#addMember").on("click",function(){var e,t=$(".user").length;1==t?($(".removeMember").removeClass("inactive"),$(".removeMember").addClass("active"),$(".user[data-id=1]").clone().appendTo(".users"),(e=$(".users").children().last()).children().first().removeClass("user-img-1").addClass("user-img-2"),e.attr("data-id","2"),e.find(".name").attr("id","userName2").val("").prev("label").attr("for","userName2"),e.find(".surname").attr("id","userSurname2").val("").prev("label").attr("for","userSurname2").val(""),e.find(".email").attr("id","userEmail2").val("").prev("label").attr("for","userEmail2").val(""),e.find(".class").attr("id","userClass2").val("").prev("label").attr("for","userClass2").val(""),e.find(".teacher-info").attr("id","teacher-info2").text(""),$("#memberCount").text("Ještě můžete přidat jednoho člena")):2==t&&($(".addMember").addClass("inactive"),$(".addMember").removeClass("active"),$(".user[data-id=2]").clone().appendTo(".users"),(e=$(".users").children().last()).children().first().removeClass("user-img-2").addClass("user-img-3"),e.attr("data-id","3"),e.find(".name").attr("id","userName3").val("").prev("label").attr("for","userName3"),e.find(".surname").attr("id","userSurname3").val("").prev("label").attr("for","userSurname3"),e.find(".email").attr("id","userEmail3").val("").prev("label").attr("for","userEmail3"),e.find(".class").attr("id","userClass3").val("").prev("label").attr("for","userClass3").val(""),e.find(".teacher-info").attr("id","teacher-info3").text(""),$("#memberCount").text(""))}),$("#removeMember").on("click",function(){var e=$(".user").length;2==e?($(".users").children().last().remove(),$(".addMember").removeClass("inactive"),$(".addMember").addClass("active"),$(".removeMember").removeClass("active"),$(".removeMember").addClass("inactive"),$("#memberCount").text("Ještě můžete přidat dva členy")):3==e&&($(".users").children().last().remove(),$(".addMember").removeClass("inactive"),$(".addMember").addClass("active"),$("#memberCount").text("Ještě můžete přidat jednoho člena"))}),$(".js--register").on("click",function(e){var t,a,r,o,s,n,i,l,d,c,m,u,h,v,p,f,g,b,k,w,y,C;$("#student").is(":checked")?(t=$("#teamName"),a=$("#password"),r=$("#school"),o=$("#passwordConfirm"),s=$("#userName1"),n=$("#userSurame1"),i=$("#userEmail1"),l=$("#userClass1"),""==t.val()?(e.preventDefault(),toastr.error("Zadejte název týmu.")):""==a.val()||a.val().length<6?(e.preventDefault(),toastr.error("Zadejte heslo s nejméně 6 znaky.")):""==o.val()?(e.preventDefault(),toastr.error("Zadejte ověření hesla.")):0==r.val()?(e.preventDefault(),toastr.error("Vyberte školu pro tým.")):o.val()!=a.val()?(e.preventDefault(),toastr.error("Zadaná hesla se neshodují.")):""==s.val()?(e.preventDefault(),toastr.error("Zadejte jméno prvního člena týmu.")):""==n.val()?(e.preventDefault(),toastr.error("Zadejte příjmení prvního člena týmu.")):validateEmail(i.val())?""==l.val()?(e.preventDefault(),toastr.error("Zadejte třídu prvního člena týmu.")):$("#userName2").length?(d=$("#userName2"),c=$("#userSurame2"),$("#school2"),m=$("#userEmail2"),u=$("#userClass2"),""==d.val()?(e.preventDefault(),toastr.error("Zadejte jméno druhého člena týmu.")):""==c.val()?(e.preventDefault(),toastr.error("Zadejte příjmení druhého člena týmu.")):""==u.val()?(e.preventDefault(),toastr.error("Zadejte třídu druhého člena týmu.")):validateEmail(m.val())?m.val()==i.val()&&(e.preventDefault(),toastr.error("Každý člen týmu musí mít jedinečný email")):(e.preventDefault(),toastr.error("Zadejte e-mail druhého člena týmu ve správném tvaru."))):$("#userName3").length&&(h=$("#userName3"),v=$("#userSurame3"),p=$("#userClass3"),f=$("#userEmail3"),""==h.val()?(e.preventDefault(),toastr.error("Zadejte jméno třetího člena týmu.")):""==v.val()?(e.preventDefault(),toastr.error("Zadejte příjmení třetího člena týmu.")):""==p.val()?(e.preventDefault(),toastr.error("Zadejte třídu třetího člena týmu.")):validateEmail(f.val())?f.val()!=m.val()&&f.val()!=i.val()||(e.preventDefault(),toastr.error("Každý člen týmu musí mít jedinečný email")):(e.preventDefault(),toastr.error("Zadejte e-mail třetího člena týmu ve správném tvaru."))):(e.preventDefault(),toastr.error("Zadejte e-mail prvního člena týmu ve správném tvaru."))):$("#teacher").is(":checked")&&(g=$("#passwordConfirmTeacher").val(),b=$("#passwordConfirmTeacher").val(),k=$("#teacherName").val(),w=$("#teacherSurname").val(),y=$("#teacherSchool").val(),C=$("#teacherEmail").val(),""==k?(e.preventDefault(),toastr.error("Zadejte Vaše jméno.")):""==w?(e.preventDefault(),toastr.error("Zadejte Vaše příjmení.")):validateEmail(C)?""==y?(e.preventDefault(),toastr.error("Vyberte Vaší školu.")):""==g||g.length<6?(e.preventDefault(),toastr.error("Zadejte heslo s nejméně 6 znaky.")):b!=g&&(e.preventDefault(),toastr.error("Zadaná hesla se neshodují.")):(e.preventDefault(),toastr.error("Zadejte Váš e-mail ve správném tvaru.")))}),$(".update-btn").on("click",function(e){var t,a,r,o;($(this).parent().hasClass("update-form")||$(this).parent().hasClass("create-modal"))&&($(this).parent().hasClass("update-form")?(t=$("#member-name").val(),a=$("#member-surname").val(),r=$("#member-email").val(),o=$("#member-class").val()):$(this).parent().hasClass("create-modal")&&(t=$("#name").val(),a=$("#surname").val(),r=$("#email").val(),o=$("#class").val()),""==t?(e.preventDefault(),toastr.error("Jméno je povinný údaj.")):""==a?(e.preventDefault(),toastr.error("Příjmení je povinný údaj.")):validateEmail(r)?""==o&&(e.preventDefault(),toastr.error("Třída je povinný údaj.")):(e.preventDefault(),toastr.error("Zadejte e-mail ve správném tvaru.")))}),$("#teamName").keyup(function(){$("#teamLogin").val(url_slug($("#teamName").val()))}),$("#teacherEmail").keyup(function(){$(".teacher-login").text($("#teacherEmail").val())}),$(".formType").on("change",function(){$("#student").is(":checked")?($(".formTeacher").hide(),$(".formStudent").show()):($(".formTeacher").show(),$(".formStudent").hide())}),$(document).on("click",".open-detail",function(){row=$(this).parent().next("tr").find(".team-info-row .team-info"),row.is(":visible")?row.slideUp():($(this).parent().next("tr").find(".team-info-row").show(),row.slideDown())}),$(".close").on("click",function(){$(".update-form").children("input").val(""),$(".create-modal").children("input").val("")});var n,i=window.location.hash;"#userlogged"==i&&$("#logout-modal").modal("show"),"#handedin"==i&&$("#finished-modal").modal("show"),"#added"==i&&toastr.success("Člen týmu byl úspěšně přidán."),"#enolFinished"==i&&toastr.error("Energetická olympiáda již zkončila."),"#teamFinished"==i&&toastr.error("Váš tým již olympiádu ukončil."),"#registered"==i&&toastr.success("Registrace proběhla úspěšně, na zadaný email bylo zasláno potvrzení."),$(".add-member").on("click",function(){$("#create-modal").modal("show");var e=$(".add-member").length;2==e?$("#create-modal .modal-body div").addClass("member-img-2"):1==e&&$("#create-modal .modal-body div").addClass("member-img-3")}),$(document).on("click",".findSchool",function(){var e=$(this).next(".zip").val(),t=$(this).parent("label").parent().parent().attr("class");(e=$.trim(e.replace(/\s/g,""))).length&&isFinite(String(e))?$.ajax({type:"POST",url:"/school/find",data:{zip:e},dataType:"json",headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},success:function(e){var a;0!==e.length?((a=$('<select class="wide school" name="'+("formStudent"==t?"school":"teacherSchool")+'" id="'+("formStudent"==t?"school":"teacherSchool")+'">')).append($('<option value="0">Vyberte školu</option>')),$.each(e,function(e,t){a.append($("<option>").attr("value",e).text(t))}),"formStudent"==t?($("#school").remove(),$('label[for="school"]').append(a)):($("#teacherSchool").remove(),$('label[for="teacherSchool"]').append(a))):toastr.error("Taková PSČ v databázi nemáme.")}}):toastr.error("Zadejte PSČ ve správném tvaru.")}),$(document).on("change",".school",function(){var e=$(this).val();$(this).parent().parent().attr("data-id");$("#teacher-info").children("p").remove(),$.ajax({type:"POST",url:"/user/teacher",data:{schoolId:e},dataType:"json",headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},success:function(e){var t,a;0!=e?(t="",(a=1)<e.name.length?($.each(e.name,function(){e.name.length==a?t+=this:(t+=this+", ",a++)}),$("#teacher-info").append($("<p>Příslušní pedagogové: <strong>"+t+"</strong>.</p>")).slideDown()):$("#teacher-info").append($("<p>Příslušný pedagog: <strong>"+e.name+"</strong>.</p>")).slideDown()):$("#teacher-info").append("<p>Vaše škola zatím nemá registrován žádný učitelský účet. K dokončení registrace a k účasti v soutěži to není nezbytné, ale bylo by vhodné oslovit jakéhokoli pedagoga, který by vám zajistil prostory a PC během soutěže. Pokud vám škola neposkytne vhodné podmínky, soutěžit můžete z domova.").slideDown()}})}),$(".update-modal, .edit-btn").on("click",function(e){var t,a=$(this).attr("data-id");t=$(this).parent("p").length?$(this).parent("p").index():$(this).parent("div").parent().index(),t++,$(".modal-body").children("div").removeClass("member-img-1 member-img-2 member-img-3"),$.ajax({type:"POST",url:"/user/get",data:{id:a},dataType:"json",headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},success:function(e){$(".modal-body").children("div").addClass("member-img-"+t),$("#member-name").val(e[0].name),$("#member-surname").val(e[0].surname),$("#member-email").val(e[0].email),$("#member-class").val(e[0].class),$("#member-id").val(e[0].id)}})}),$(document).on("change","#kraj_id, #okres_id, #city",function(){var e=$(this)[0].id,t=$("#"+e).val();$(".team-row").show(),$(".team-info-row").hide(),"kraj_id"==e&&""==t?($("label[for=city]").next("#city").remove(),r.insertAfter("label[for=city]"),$("label[for=okres_id]").next("#okres_id").remove(),a.insertAfter("label[for=okres_id]")):("kraj_id"==e&&""!=t||"okres_id"==e&&0==t)&&($("label[for=city]").next("#city").remove(),r.insertAfter("label[for=city]")),$(".team-row").each(function(){""!=$("#kraj_id").val()&&$(this).attr("kraj-id")!=$("#kraj_id").val()&&$(this).hide(),0!=$("#okres_id").val()&&$(this).attr("okres-id")!=$("#okres_id").val()&&"kraj_id"!=e&&$(this).hide(),0!=$("#city").val()&&$(this).attr("city")!=$("#city").val()&&"okres_id"!=e&&$(this).hide()}),$.ajax({type:"POST",url:"/team/filter",data:{type:e,id:t},dataType:"json",headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},success:function(e){e.select&&("kraj_id"==e.type?(okresSel=$('<select id="okres_id" name="okres"><option value="0">Vyberte okres</option>'),$.each(e.select,function(e,t){okresSel.append($('<option value="'+e+'">'+t+"</option>"))}),okresSel.append($("</select>")),$("label[for=okres_id]").next("#okres_id").remove(),okresSel.insertAfter("label[for=okres_id]")):"okres_id"==e.type&&(citySel=$('<select id="city" name="city"><option value="0">Vyberte město</option>'),$.each(e.select,function(e,t){citySel.append($('<option value="'+e+'">'+t+"</option>"))}),citySel.append($("</select>")),$("label[for=city]").next("#city").remove(),citySel.insertAfter("label[for=city]")))}})}),$(document).on("click",".nav-btn.next, .nav-btn.prev, .questions-wrap div",function(e){$("#source").addClass("d-none"),$(".next").removeAttr("style"),$(".prev").removeAttr("style"),$(".quiz-wrap").hasClass("results")&&$(this).trigger("click");var s,t=$(".question-wrap").attr("data-question"),a=$(".top .questions-wrap div").length;if(t==a&&1==t)return e.preventDefault(),!1;$(".questions-wrap div").removeClass("active"),$(this).hasClass("next")?(s=t,s++,$(".questions-wrap div:nth-child("+s+")").addClass("active"),s==a&&$(".next").css({color:"transparent","pointer-events":"none"})):$(this).hasClass("prev")?(s=t,1==--s&&$(".prev").css({color:"transparent","pointer-events":"none"}),$(".questions-wrap div:nth-child("+s+")").addClass("active")):$(this).parent(".questions-wrap")&&(s=$(this).index()+1,$(".questions-wrap div:nth-child("+s+")").addClass("active"),s==a&&$(".next").css({color:"transparent","pointer-events":"none"}),1==s&&$(".prev").css({color:"transparent","pointer-events":"none"})),s!=t&&s<=a&&0!=s&&$.ajax({type:"GET",url:"/quiz/navigation",dataType:"json",data:{questionId:s},headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},success:function(r){var o;0==r.state?window.location.href="dash#userlogged":"enol_finished"==r.state?window.location.href="dash#enolFinished":"team_finished"==r.state&&(window.location.href="dash#teamFinished"),0!=r.state&&r.questions.length&&($(".question-navigation-wrap").children().last().text(),$(".question-wrap").attr("data-question",r.questions[0].question_id),$(".intro-wrap").remove(),0<$("#question15").length&&($("#question15").remove(),$('<img src="" id="question-img" style="display:none;">').insertAfter("p.question")),15==r.questions[0].question_id&&($("#question-img").remove(),$('<div class="d-flex w-100" id="question15"><img src="/img/quiz/question15_01.png" data-action="zoom"><img src="/img/quiz/question15_02.png" data-action="zoom"></div>').insertAfter("p.question")),$(".question").html(r.questions[0].question),$("question-img").attr("style",""),""!=r.questions[0].image&&15!=r.questions[0].questionId?($("#question-img").attr("src","/img/quiz/"+r.questions[0].image),$("#question-img").is(":hidden")&&$("#question-img").show()):($("#question-img").attr("src",""),$("#question-img").hide()),1==r.questions[0].portrait?$("#question-img").addClass("portrait"):$("#question-img").removeClass("portrait"),o=$('<div class="answers" style="display:flex; flex-direction:column">'),$.each(r.questions,function(e,t){var a=t.oid==r.answers[s]?'checked="checked"':"";o.append($('<div class="option-wrap"><input class="radio-answer" id="option_'+t.oid+'" name="answer" type="radio" value="'+t.oid+'" '+a+'><label for="option_'+t.oid+'">'+t.option+"</label></div>"))}),o.append($("</div>")),$(".answers").replaceWith(o),$(".radio-answer").mCheckable({className:"radioAnswer"}))}})}),$(".quiz-wrap").hasClass("results")||(n=$(".top .questions-wrap div").length,0==$(".questions-wrap .active").index()&&$(".prev").css({color:"transparent","pointer-events":"none"}),$(".questions-wrap .active").index()+1==n&&$(".next").css({color:"transparent","pointer-events":"none"})),$("#save-answer").on("click",function(){var t=$(".question-wrap").attr("data-question"),e=$(".option-wrap").children("input:checked").val();e?$.ajax({type:"POST",url:"/quiz/save",dataType:"json",data:{questionId:t,optionId:e},headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},success:function(e){1==e.state?($(".questions-wrap .active").addClass("done"),toastr.success("Odpověď byla úspěšně uložena.")):"enol_finished"==e.state?window.location.href="dash#enolFinished":"team_finished"==e.state?window.location.href="dash#teamFinished":window.location.href="dash#userlogged",$(".top .questions-wrap div:last-child").text()!==t&&$(".nav-btn.next")[0].click()}}):toastr.error("Vyberte odpověď.")});var l=$("#schoolZip"),d=$("#teacherSchoolZip");l.length&&(5<=l.val().length||5<=d.val().length?(l.prev(".findSchool").removeClass("disabled").addClass("active"),d.prev(".findSchool").removeClass("disabled").addClass("active")):(l.prev(".findSchool").removeClass("active").addClass("disabled"),d.prev(".findSchool").removeClass("active").addClass("disabled"))),$("#schoolZip, #teacherSchoolZip").on("keyup",function(){5<=$(this).val().length?$(this).prev(".findSchool").removeClass("disabled").addClass("active"):$(this).prev(".findSchool").removeClass("active").addClass("disabled")}),$(".formStudent").is(":visible")?($("#gdpr-team").prop("required",!0),$("#gdpr-teacher").removeAttr("required")):($("#gdpr-team").removeAttr("required"),$("#gdpr-teacher").prop("required",!0)),$("#student, #teacher").on("click",function(e){$(e.target)[0]===$("#student")[0]?($("#gdpr-team").prop("required",!0),$("#gdpr-teacher").removeAttr("required")):($("#gdpr-team").removeAttr("required"),$("#gdpr-teacher").prop("required",!0))}),$(".enter-quiz").on("click",function(){new Date>=startDate&&$(this).hasClass("disabled")&&($(this).css("pointer-events","none"),toastr.warning("Máme tu nával, zkuste obnovit prohlížeč a vstoupit ještě jednou"))})});
$(".history .parallax-bg").parallax({imageSrc:"/img/archive-bg.jpg",speed:.5}),$(".news .parallax-bg").parallax({imageSrc:"/img/news-bg.jpg",speed:.5}),$("#save-answer").on("click",function(){$(".radio-answer").is(":checked")&&window.scroll({top:0,left:0,behavior:"smooth"})});
!function(s){"use strict";function t(){this._activeZoom=this._initialScrollPosition=this._initialTouchPosition=this._touchMoveListener=null,this._$document=s(document),this._$window=s(window),this._$body=s(document.body)}function n(t){this._fullHeight=this._fullWidth=this._overlay=this._targetImageWrap=null,this._targetImage=t,this._$body=s(document.body)}t.prototype.listen=function(){this._$body.on("click",'[data-action="zoom"]',s.proxy(this._zoom,this))},t.prototype._zoom=function(t){var o=t.target;if(o&&"IMG"==o.tagName&&!this._$body.hasClass("zoom-overlay-open"))return t.metaKey?window.open(t.target.src,"_blank"):void(o.width>=window.innerWidth-n.OFFSET||(this._activeZoomClose(!0),this._activeZoom=new n(o),this._activeZoom.zoomImage(),this._$window.on("scroll.zoom",s.proxy(this._scrollHandler,this)),this._$document.on("click.zoom",s.proxy(this._clickHandler,this)),this._$document.on("keyup.zoom",s.proxy(this._keyHandler,this)),this._$document.on("touchstart.zoom",s.proxy(this._touchStart,this)),t.stopPropagation()))},t.prototype._activeZoomClose=function(t){this._activeZoom&&(t?this._activeZoom.dispose():this._activeZoom.close(),this._$window.off(".zoom"),this._$document.off(".zoom"),this._activeZoom=null)},t.prototype._keyHandler=function(t){27==t.keyCode&&this._activeZoomClose()},t.prototype._clickHandler=function(t){t.stopPropagation(),t.preventDefault(),this._activeZoomClose()},t.prototype._touchStart=function(t){this._initialTouchPosition=t.touches[0].pageY,s(t.target).on("touchmove.zoom",s.proxy(this._touchMove,this))},t.prototype._touchMove=function(t){10<Math.abs(t.touches[0].pageY-this._initialTouchPosition)&&(this._activeZoomClose(),s(t.target).off("touchmove.zoom"))},n.OFFSET=80,n._MAX_WIDTH=2560,n._MAX_HEIGHT=4096,n.prototype.zoomImage=function(){var t=document.createElement("img");t.onload=s.proxy(function(){this._fullHeight=Number(t.height),this._fullWidth=Number(t.width),this._zoomOriginal()},this),t.src=this._targetImage.src},n.prototype._zoomOriginal=function(){this._targetImageWrap=document.createElement("div"),this._targetImageWrap.className="zoom-img-wrap",this._targetImage.parentNode.insertBefore(this._targetImageWrap,this._targetImage),this._targetImageWrap.appendChild(this._targetImage),s(this._targetImage).addClass("zoom-img").attr("data-action","zoom-out"),this._overlay=document.createElement("div"),this._overlay.className="zoom-overlay",document.body.appendChild(this._overlay),this._calculateZoom(),this._triggerAnimation()},n.prototype._calculateZoom=function(){this._targetImage.offsetWidth;var t=this._fullWidth,o=this._fullHeight,e=(window.scrollY,t/this._targetImage.width),i=window.innerHeight-n.OFFSET,a=window.innerWidth-n.OFFSET,s=t/o,r=a/i;this._imgScaleFactor=t<a&&o<i?e:s<r?i/o*e:a/t*e},n.prototype._triggerAnimation=function(){this._targetImage.offsetWidth;var t=s(this._targetImage).offset(),o=window.scrollY+window.innerHeight/2,e=window.innerWidth/2,i=t.top+this._targetImage.height/2,a=t.left+this._targetImage.width/2;this._translateY=o-i,this._translateX=e-a,s(this._targetImage).css("transform","scale("+this._imgScaleFactor+")"),s(this._targetImageWrap).css("transform","translate("+this._translateX+"px, "+this._translateY+"px) translateZ(0)"),this._$body.addClass("zoom-overlay-open")},n.prototype.close=function(){this._$body.removeClass("zoom-overlay-open").addClass("zoom-overlay-transitioning"),s(this._targetImage).css("transform",""),s(this._targetImageWrap).css("transform",""),s(this._targetImage).one(s.support.transition.end,s.proxy(this.dispose,this)).emulateTransitionEnd(300)},n.prototype.dispose=function(){this._targetImageWrap&&this._targetImageWrap.parentNode&&(s(this._targetImage).removeClass("zoom-img").attr("data-action","zoom"),this._targetImageWrap.parentNode.replaceChild(this._targetImage,this._targetImageWrap),this._overlay.parentNode.removeChild(this._overlay),this._$body.removeClass("zoom-overlay-transitioning"))},(new t).listen()}(jQuery);