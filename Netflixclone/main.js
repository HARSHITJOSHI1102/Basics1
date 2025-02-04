const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');
function selectItem(e){
  removeBorder();
  removeshow();
  this.classList.add('tab-border');
 const tabContentItems = document.querySelector(`#${this.id}-content`)
 tabContentItems.classList.add('show');
}
function removeBorder(){
  tabItems.forEach(item => item.classList.remove('tab-border'))
}
function removeshow(){
  tabContentItems.forEach(item => item.classList.remove('show'))
}
tabItems.forEach(item => item.addEventListener('click' ,selectItem));
