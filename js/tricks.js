// Animation Reset

function aniTitle(who) {
    const status = document.getElementsByClassName('animated')

    let ele = status.item(who)

    let newone = ele.cloneNode(true);
    ele.parentNode.replaceChild(newone, ele);
    
};

function showNav() {
    document.getElementById("navbar").classList.toggle("show");
    document.getElementById("changer").classList.toggle("turn");
  }