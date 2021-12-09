const DrawerInitiator = {
  init({
    drawer, content,
  }) {
    content.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    drawer.classList.toggle('actived');
    event.stopPropagation();
  },
};

export default DrawerInitiator;
