$(".agarioProfilePanel").removeClass('agario-side-panel');
$("#gamemode, #locationKnown, #locationUnknown, .partyToken, .joinParty, .createParty, .adsbygoogle, .agario-side-panel").remove();
$(".agarioProfilePanel").addClass('agario-side-panel');
$(".agarioProfilePanel").append('<div id="serverContent"><ul class="nav png nav-tabs" data-tabs="tabs" style="transform: scale(2);">  </ul> </div><div role="tabpanel" class="tab-pane fade active in" id="eu-server"> <ul id="EUservers"> <li class="server" type="none" onclick="connect(EUffa);"><a class="onServer">BOTS</a> <span class="label serverNumber" style="background-color: rgb(76, 175, 80);">1</span></li><li class="server" type="none" onclick="connect(EUbots2);"><a class="onServer">ULTRASPLIT</a> <span class="label serverNumber" style="background-color: rgb(239, 13, 13);">1</span></li><li class="server" type="none" onclick="connect(EUinstantbots);"><a class="onServer">SELFFEED</a> <span class="label serverNumber" style="background-color: rgb(23, 30, 210);">1</span></li><li class="server" type="none" onclick="connect(EUcrazy);"><a class="onServer">CRAZY</a> <span class="label serverNumber" style="background-color: rgb(250, 255, 2);">1</span></li><br/><li class="server" ><a class="onServer" href="https://discord.gg/faEFUm2">New Discord is on!</a> <span class="label serverNumber" style="background-color: #ff02e9;"><3</span></li></br></br></br> <li class="server" type="none" onclick="connect(beta);"><a class="onServer">BETA(For Tests)</a> <span class="label serverNumber" style="background-color: rgb(76, 175, 80);">1</span></li> </ul> </div></div></div>');
$("#helloContainer").append('<div class="side-container"> <div class="side-container left-side"> <div class="agario-panel agarioProfilePanel level agario-side-panel" style="display: block !important"> <div id="serverContent"> <ul class="nav png nav-tabs" data-tabs="tabs" style="transform: scale(2);"> </ul> </div> <h4> <font color="white"> Join a private chat </font> </h4> <input id="chatToken" type="text" placeholder="Token" class="partyToken form-control"> <button id="joinChatButton" class="btn btn-primary joinParty" onclick="joinChat($(\'#chatToken\').val())">Join</button> <button id="createChatButton" class="btn btn-success createParty" style="margin-bottom: 5px" onclick="$(\'#helloContainer\').attr(\'data-party-state\', \'3\');createPrivateChat()">Create a token</button> <div id="game_info"> <br></br> <h5 id="onlineUser">Userlist: Join a Server</h5> <h5 id="owner"> </h5><h6 id="chatUser"> </h6> </div></div> </div> </div>');

//$(".agarioProfilePanel").append('<div id="serverContent"><ul class="nav png nav-tabs" data-tabs="tabs" style="transform: scale(2);">  </ul> </div><div role="tabpanel" class="tab-pane fade active in" id="eu-server"> <ul id="EUservers"> <li class="server" type="none" onclick="connect(EUffa);"><a class="onServer">BETA</a> <span class="label serverNumber" style="background-color: rgb(76, 175, 80);">1</span></li><li class="server" type="none" onclick="connect(EUbots2);"><a class="onServer">BOTS</a> <span class="label serverNumber" style="background-color: rgb(76, 175, 80);">2</span></li> <li class="server" type="none" onclick="connect(EUcrazybots)"><a class="onServer">INSTANT</a> <span class="label serverNumber" style="background-color: rgb(57, 176, 215);">1</span></li> <li class="server" type="none" onclick="connect(EUcrazy)"><a class="onServer">ULTRASPLIT(NEW!)</a> <span class="label serverNumber" style="background-color: #FFA500;">1</span></li> <li class="server" type="none" onclick="connect(EUinstantbots)"><a class="onServer">SELFFEED</a> <span class="label serverNumber" style="background-color: rgb(255, 8, 61);">1</span></li><br/><li class="server" ><a class="onServer" href="https://discord.gg/xAbb5Vy">Our Discord! Join</a> <span class="label serverNumber" style="background-color: #ff02e9;"><3</span></li> </ul> </div></div></div>');
//$("body").append('<script type="text/javascript" src="http://www.sponsorads.de/script.php?s=267595"></script>');
//connect("ws://134.255.227.184:4433");
//NA Server's
/*var NAffa = 'ws://79.137.39.31:3001';
NAcrazybots = 'ws://79.137.39.31:3002';
NAcrazy = 'ws://79.137.39.31:3003';
NAinstantbots = 'ws://79.137.39.31:3004';*/
//EU Server's
var EUffa = 'ws://134.255.227.184:4433';
EUcrazybots = 'ws://134.255.225.123:5555';
EUcrazy = 'ws://134.255.227.184:1502';
EUbots2 = 'ws://134.255.227.184:1500';
beta = 'ws://134.255.227.184:1506';
// ULTRASPLIT
EUinstantbots = 'ws://134.255.227.184:1567';
//JQuery

$('#profile-main').insertBefore('#teamNameContainer');
$('#teamNameContainer').hide();
$(".btn-spectate").insertBefore('.btn-login');
$("#preview-img").attr('src', $("#skin_url").val());
//onlclick Animation
$(".btn").click(function(){
$(this).addClass('animated');
setTimeout(function(){
$('.btn').removeClass('animated');
},250);
});
//End
//$(".btn-spectate, .btn-login, .btn-play, .btn-play-guest").text('');
$(".btn-play-guest").text('Play :)');
$(".btn-play").append('');
$(".btn-play-guest").append('');
$(".btn-spectate").append('');
$(".btn-login").append('');
$(".btn-logout").append('');
$("#helloContainer").addClass('stayThere');
//Test
$('#misc').prepend('<div class="settingsRow"><div class="col-xs-6 firstSettings1"><input id="dimmerMenu" type="checkbox"><span>Dimmer Menu</span><br> <input id="hideIcons" type="checkbox"> <span>Hide Icons</span></div><div class="col-xs-6 secondSettings1"><input id="newTheme" type="checkbox"><span>Cherry Theme</span><br> <input id="christmasTheme" type="checkbox"> <span>Christmas Theme</span><br></div></div>');
$("#newTheme").on( 'change', function() { if( $(this).is(':checked') ) { $("head").append('<link rel="stylesheet" href="tools/newTheme.css">'); localStorage.setItem("S_newTheme","true"); } else { $("link[href=\"tools/newTheme.css\"]").remove(); localStorage.setItem("S_newTheme","false"); } }); setTimeout(function(){ if (localStorage.getItem("S_newTheme") == "true") { $("#newTheme").prop("checked",true); $("#newTheme").trigger("change"); } else { $("#newTheme").prop("checked",false); $("#newTheme").trigger("change"); } }, 2000);
$("#dimmerMenu").on( 'change', function() { if( $(this).is(':checked') ) { $("head").append('<link rel="stylesheet" href="tools/dimmer.css">'); localStorage.setItem("S_dimmerMenu","true"); } else { $("link[href=\"tools/dimmer.css\"]").remove(); localStorage.setItem("S_dimmerMenu","false"); } }); setTimeout(function(){ if (localStorage.getItem("S_dimmerMenu") == "true") { $("#dimmerMenu").prop("checked",true); $("#dimmerMenu").trigger("change"); } else { $("#dimmerMenu").prop("checked",false); $("#dimmerMenu").trigger("change"); } }, 2000);
//$("#hideIcons").on( 'change', function() { if( $(this).is(':checked') ) { $("body").append('<script id="hideIconsLink" src="tools/hideIcons.js" type="text/javascript"></script>'); localStorage.setItem("S_hideIcons","true"); } else { $("#hideIconsLink").remove(); localStorage.setItem("S_hideIcons","false"); } }); setTimeout(function(){ if (localStorage.getItem("S_hideIcons") == "true") { $("#hideIcons").prop("checked",true); $("#hideIcons").trigger("change"); } else { $("#hideIcons").prop("checked",false); $("#hideIcons").trigger("change"); } }, 2000);
$("#hideIcons").on( 'change', function() { if( $(this).is(':checked') ) { $("head").append('<link rel="stylesheet" href="tools/hideIcons.css">'); localStorage.setItem("S_hideIcons","true"); } else { $("link[href=\"tools/hideIcons.css\"]").remove(); localStorage.setItem("S_hideIcons","false"); } }); setTimeout(function(){ if (localStorage.getItem("S_hideIcons") == "true") { $("#hideIcons").prop("checked",true); $("#hideIcons").trigger("change"); } else { $("#hideIcons").prop("checked",false); $("#hideIcons").trigger("change"); } }, 2000);
$("#christmasTheme").on( 'change', function() { if( $(this).is(':checked') ) { $("head").append('<link rel="stylesheet" href="tools/christmasTheme.css">'); localStorage.setItem("S_christmasTheme","true"); } else { $("link[href=\"tools/christmasTheme.css\"]").remove(); localStorage.setItem("S_christmasTheme","false"); } }); setTimeout(function(){ if (localStorage.getItem("S_christmasTheme") == "true") { $("#christmasTheme").prop("checked",true); $("#christmasTheme").trigger("change"); } else { $("#christmasTheme").prop("checked",false); $("#christmasTheme").trigger("change"); } }, 2000);
