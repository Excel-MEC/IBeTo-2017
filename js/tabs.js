function tab_handler(){
  var tab_view = document.querySelector('.tab-view');
  var active_tab= document.querySelector('.active-tab');
  var img_tag_active = active_tab.children[0].children[0],img_tag_click;

  tab_view.addEventListener('click',function(e){
    // alert(e.target.tagName);
    var click_elem = e.target;
    if(click_elem.tagName=='IMG')
      click_elem = click_elem.parentNode;
    if(click_elem.tagName=='A'){
      click_elem = click_elem.parentNode;
      img_tag_click = click_elem.children[0].children[0];
      // queryId_to = click_elem.parentNode.href.split('#')[1];
    }
    if(active_tab!=click_elem){
      var mod_string;
      mod_string = img_tag_active.src;
      mod_string = mod_string.replace('.png','(1).png');
      active_tab.classList.remove('active-tab');
      img_tag_active.src = mod_string;
      active_tab = click_elem;
      // smoothScroll(queryId_to);
      img_tag_active = img_tag_click;
      active_tab.classList.add('active-tab');
      mod_string = img_tag_active.src;
      mod_string = mod_string.replace('(1).png','.png');
      img_tag_active.src = mod_string;
    }
  });
}
