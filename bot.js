var delay = 23;

function welcome(){
    var text1 = "Hey whats up? Glad you got here, I'm very happy! For more fun, check below which button you want.";
    addTextInChat(text1);

    var element = document.createElement('div');
    element.setAttribute("id", "question");

    setTimeout(addQuestionButtonToChat, text1.length * 25, "Quack (APP more HOT😳🔥)", quackApp, element);
    setTimeout(addQuestionButtonToChat, text1.length * 25, "Telegram FREE Exclusive 💖", telegram, element);
}

function addQuestionButtonToChat(text, func, element){
    var bt = document.createElement("button");
    bt.setAttribute("id", "user-bt");
    bt.innerHTML = text;
    bt.onclick = func;

    element.appendChild(bt);
    document.getElementById("chatbox").appendChild(element);

    bt.scrollIntoView();
}

function addBotButton(text, func, element){
    var bt = document.createElement("button");
    bt.setAttribute("id", "user-bt");
    bt.innerHTML = text;
    bt.onclick = func;
    
    element.appendChild(bt);

    bt.scrollIntoView();
}

function quackApp(element){
    //addUserTextInChat("Quack (APP more HOT❤️‍🔥)");
    document.getElementById("question").remove();
    var text1 = "Now i need to know if you already have Quack installed (if you already have, just click join the group)";
    setTimeout(addTextInChat, 0, text1);
    setTimeout(createQuackButtons, text1.length * 23);
}

function telegram(element){
    //addUserTextInChat("Quack (APP more HOT❤️‍🔥)");
    document.getElementById("question").remove();
    var text1 = "Now i need to know if you already have Telegram installed (if you already have, just click join the group)";
    setTimeout(addTextInChat, 0, text1);
    setTimeout(createTelegramButtons, text1.length * 23);
}

function createQuackButtons(){
    var avatar = document.createElement('img');
    avatar.setAttribute("id", "chat-bot-avatar");
    avatar.setAttribute("src", "bot.png");

    var textElement = document.createElement('div');
    textElement.setAttribute("id", "chat-bot-text");

    textElement.appendChild(avatar);

    document.getElementById("chatbox").appendChild(textElement);

    addTimeToDiv(textElement);

    setTimeout(addBotButton, 000, "Get Quack for Iphone", getQuackOnIphone, textElement);
    setTimeout(addBotButton, 300, "Get Quack for Android", getQuackOnAndroid, textElement);
    setTimeout(addBotButton, 600, "Join Quack Group", openQuackLink, textElement);
}

function createTelegramButtons(){
    var avatar = document.createElement('img');
    avatar.setAttribute("id", "chat-bot-avatar");
    avatar.setAttribute("src", "bot.png");

    var textElement = document.createElement('div');
    textElement.setAttribute("id", "chat-bot-text");

    textElement.appendChild(avatar);

    document.getElementById("chatbox").appendChild(textElement);

    addTimeToDiv(textElement);

    setTimeout(addBotButton, 000, "Get Telegram for Iphone", getTelegramOnIphone, textElement);
    setTimeout(addBotButton, 300, "Get Telegram for Android", getTelegramAndroid, textElement);
    setTimeout(addBotButton, 600, "Join Telegram Group", openTelegramLink, textElement);
}

function getQuackOnIphone(){
    window.open("https://apps.apple.com/US/app/id1437397847?mt=8", '_blank').focus();
}

function getQuackOnAndroid(){
    window.open("https://play.google.com/store/apps/details?id=com.quack.app&referrer=af_tranid%3DS7x2sv0C0DMVhodUB_8Rng%26pid%3Dquack_star_channel%26af_channel%3DPartnerDeeplinkRedirect%26af_sub1%3Dm21CCmU3JAld%26af_c_id%3Dm21CCmU3JAld%26is_retargeting%3Dtrue%26af_click_lookback%3D12h%26af_sub2%3DC4oUQoiHiWQkdtO0ORrvL3UPE52h0Z9JWZWXLbM-t7frzPvx7ThWfz5ogJbeno2kajSiBHbrffk", '_blank').focus();
}

function openQuackLink(){
    window.open("https://quackapp.com/Glauberrsousa", '_blank').focus();
}

function getTelegramOnIphone(){
    window.open("https://apps.apple.com/br/app/telegram-messenger/id686449807", '_blank').focus();
}

function getTelegramAndroid(){
    window.open("https://play.google.com/store/apps/details?id=org.telegram.messenger", '_blank').focus();
}

function openTelegramLink(){
    window.open("https://t.me/+82r4VYs9eDFlYzVh", '_blank').focus();
}

function addTimeToDiv(content){
    var tm = document.createElement('div');
    tm.setAttribute("id", "time");
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    tm.innerHTML = time;
    content.appendChild(tm);
}


function addQuackButton(){

}

function addTextInChat(text){
    var avatar = document.createElement('img');
    avatar.setAttribute("id", "chat-bot-avatar");
    avatar.setAttribute("src", "bot.png");

    var textElement = document.createElement('div');
    textElement.setAttribute("id", "chat-bot-text");

    textElement.appendChild(avatar);

    var p = document.createElement('p');

    textElement.appendChild(p);

    document.getElementById("chatbox").appendChild(textElement);

    addTimeToDiv(textElement);

    typeWriter(text, p);
}

function addUserTextInChat(text){
    var textElement = document.createElement('div');
    textElement.setAttribute("id", "chat-user-text");

    var p = document.createElement('p');

    textElement.appendChild(p);

    document.getElementById("chatbox").appendChild(textElement);

    addTimeToDiv(textElement);

    typeWriter(text, p);
}

function addUserTextInChat(text){
    var textElement = document.createElement('div');
    textElement.setAttribute("id", "chat-user-text");
    
    var p = document.createElement('p');

    textElement.appendChild(p);

    document.getElementById("chatbox").appendChild(textElement);

    p.innerHTML = text;

    textElement.scrollIntoView();

    var tm = document.createElement('div');
    tm.setAttribute("id", "time-user");
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    tm.innerHTML = time;
    textElement.appendChild(tm);
}

function typeWriter(txt, div) {
    let i = 0;

    typeWriterHandler = () => {
        txt = txt.slice(1);
        typeWriter(txt, div);
    }
    if (i < txt.length) {
        div.innerHTML += txt.charAt(i)
        i++;
        setTimeout(typeWriterHandler, 20);
    }
}