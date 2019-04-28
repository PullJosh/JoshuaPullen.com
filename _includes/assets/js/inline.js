if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.header__hamburger').addEventListener('click', e => {
    document.querySelector('.sidebar').classList.toggle('sidebar--open');
  });
});