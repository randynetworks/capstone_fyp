const DrawerInitiator = {
  init({
    drawer, content,
  }) {
    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('collapsed');
  },
};

export default DrawerInitiator;
