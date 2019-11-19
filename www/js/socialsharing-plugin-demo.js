function socialsharingDemo(titulo, imagem) {
  $('#btnCompartilhar').on("tap click", function () {
     window.plugins.socialsharing.share(titulo, null, imagem, null);
  });
}


SocialShare(tituloParaCompartilhar, urlDaSuaImagem); //Chamando meu método