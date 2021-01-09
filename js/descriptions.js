$("summary").on("click", () => {
  if($(this).attr("open") === false){
    $("details").attr("open", false);
    $(this).attr("open", true);
  } else {
    $(this).attr("open", false);
  }
});

function matchDescription(ideology) {
  for (var i = 0; i < descriptions.length; i++) {
    if(descriptions[i].ideologia === ideology){
      var desc = descriptions[i].opis;
      var thinker = descriptions[i].myśliciele;
      break;
    }
  }
  $("#result-description").text(desc);
  $("#result-thinkers").text(thinker);
}

descriptions = [
  {
    "ideologia": "Egoizm",
    "opis": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id turpis dignissim, facilisis nibh congue, elementum ligula. Fusce cursus sapien lectus, quis auctor leo luctus id. Donec euismod mauris non nulla ultricies egestas. Maecenas ac urna pretium, mattis mauris sed, bibendum libero. Sed vel dui maximus, pharetra ligula sed, tristique nulla. Aenean volutpat ut eros a accumsan. Maecenas quis turpis ullamcorper, vestibulum est quis, volutpat justo. Nam nec magna vestibulum lorem gravida faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam dignissim odio in neque tempor, eu tempor justo semper. Duis ac mollis turpis, et semper enim. Aliquam mollis viverra turpis sed maximus. Suspendisse elementum at elit sit amet hendrerit. Suspendisse aliquet velit eget lorem dignissim ullamcorper.",
    "myśliciele": "myśliciel jeden\ndrugi\ntrzeci"
  },
  {
    "ideologia": "Paleolibertarianizm",
    "opis": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id turpis dignissim, facilisis nibh congue, elementum ligula. Fusce cursus sapien lectus, quis auctor leo luctus id. Donec euismod mauris non nulla ultricies egestas. Maecenas ac urna pretium, mattis mauris sed, bibendum libero. Sed vel dui maximus, pharetra ligula sed, tristique nulla. Aenean volutpat ut eros a accumsan. Maecenas quis turpis ullamcorper, vestibulum est quis, volutpat justo. Nam nec magna vestibulum lorem gravida faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam dignissim odio in neque tempor, eu tempor justo semper. Duis ac mollis turpis, et semper enim. Aliquam mollis viverra turpis sed maximus. Suspendisse elementum at elit sit amet hendrerit. Suspendisse aliquet velit eget lorem dignissim ullamcorper.",
    "myśliciele": "myśliciel jeden\ndrugi\ntrzeci"
  },
  {
    "ideologia": "Agoryzm",
    "opis": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id turpis dignissim, facilisis nibh congue, elementum ligula. Fusce cursus sapien lectus, quis auctor leo luctus id. Donec euismod mauris non nulla ultricies egestas. Maecenas ac urna pretium, mattis mauris sed, bibendum libero. Sed vel dui maximus, pharetra ligula sed, tristique nulla. Aenean volutpat ut eros a accumsan. Maecenas quis turpis ullamcorper, vestibulum est quis, volutpat justo. Nam nec magna vestibulum lorem gravida faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam dignissim odio in neque tempor, eu tempor justo semper. Duis ac mollis turpis, et semper enim. Aliquam mollis viverra turpis sed maximus. Suspendisse elementum at elit sit amet hendrerit. Suspendisse aliquet velit eget lorem dignissim ullamcorper.",
    "myśliciele": "myśliciel jeden\ndrugi\ntrzeci"
  },
  {
    "ideologia": "Anarchokapitalizm",
    "opis": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id turpis dignissim, facilisis nibh congue, elementum ligula. Fusce cursus sapien lectus, quis auctor leo luctus id. Donec euismod mauris non nulla ultricies egestas. Maecenas ac urna pretium, mattis mauris sed, bibendum libero. Sed vel dui maximus, pharetra ligula sed, tristique nulla. Aenean volutpat ut eros a accumsan. Maecenas quis turpis ullamcorper, vestibulum est quis, volutpat justo. Nam nec magna vestibulum lorem gravida faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam dignissim odio in neque tempor, eu tempor justo semper. Duis ac mollis turpis, et semper enim. Aliquam mollis viverra turpis sed maximus. Suspendisse elementum at elit sit amet hendrerit. Suspendisse aliquet velit eget lorem dignissim ullamcorper.",
    "myśliciele": "myśliciel jeden\ndrugi\ntrzeci"
  },
  {
    "ideologia": "Anarchizm klasyczny",
    "opis": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id turpis dignissim, facilisis nibh congue, elementum ligula. Fusce cursus sapien lectus, quis auctor leo luctus id. Donec euismod mauris non nulla ultricies egestas. Maecenas ac urna pretium, mattis mauris sed, bibendum libero. Sed vel dui maximus, pharetra ligula sed, tristique nulla. Aenean volutpat ut eros a accumsan. Maecenas quis turpis ullamcorper, vestibulum est quis, volutpat justo. Nam nec magna vestibulum lorem gravida faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam dignissim odio in neque tempor, eu tempor justo semper. Duis ac mollis turpis, et semper enim. Aliquam mollis viverra turpis sed maximus. Suspendisse elementum at elit sit amet hendrerit. Suspendisse aliquet velit eget lorem dignissim ullamcorper.",
    "myśliciele": "myśliciel jeden\ndrugi\ntrzeci"
  },
  {
    "ideologia": "Mutualizm",
    "opis": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id turpis dignissim, facilisis nibh congue, elementum ligula. Fusce cursus sapien lectus, quis auctor leo luctus id. Donec euismod mauris non nulla ultricies egestas. Maecenas ac urna pretium, mattis mauris sed, bibendum libero. Sed vel dui maximus, pharetra ligula sed, tristique nulla. Aenean volutpat ut eros a accumsan. Maecenas quis turpis ullamcorper, vestibulum est quis, volutpat justo. Nam nec magna vestibulum lorem gravida faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam dignissim odio in neque tempor, eu tempor justo semper. Duis ac mollis turpis, et semper enim. Aliquam mollis viverra turpis sed maximus. Suspendisse elementum at elit sit amet hendrerit. Suspendisse aliquet velit eget lorem dignissim ullamcorper.",
    "myśliciele": "myśliciel jeden\ndrugi\ntrzeci"
  },
  {
    "ideologia": "Anarchokolektywizm",
    "opis": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id turpis dignissim, facilisis nibh congue, elementum ligula. Fusce cursus sapien lectus, quis auctor leo luctus id. Donec euismod mauris non nulla ultricies egestas. Maecenas ac urna pretium, mattis mauris sed, bibendum libero. Sed vel dui maximus, pharetra ligula sed, tristique nulla. Aenean volutpat ut eros a accumsan. Maecenas quis turpis ullamcorper, vestibulum est quis, volutpat justo. Nam nec magna vestibulum lorem gravida faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam dignissim odio in neque tempor, eu tempor justo semper. Duis ac mollis turpis, et semper enim. Aliquam mollis viverra turpis sed maximus. Suspendisse elementum at elit sit amet hendrerit. Suspendisse aliquet velit eget lorem dignissim ullamcorper.",
    "myśliciele": "myśliciel jeden\ndrugi\ntrzeci"
  },
  {
    "ideologia": "Anarchokomunizm",
    "opis": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id turpis dignissim, facilisis nibh congue, elementum ligula. Fusce cursus sapien lectus, quis auctor leo luctus id. Donec euismod mauris non nulla ultricies egestas. Maecenas ac urna pretium, mattis mauris sed, bibendum libero. Sed vel dui maximus, pharetra ligula sed, tristique nulla. Aenean volutpat ut eros a accumsan. Maecenas quis turpis ullamcorper, vestibulum est quis, volutpat justo. Nam nec magna vestibulum lorem gravida faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam dignissim odio in neque tempor, eu tempor justo semper. Duis ac mollis turpis, et semper enim. Aliquam mollis viverra turpis sed maximus. Suspendisse elementum at elit sit amet hendrerit. Suspendisse aliquet velit eget lorem dignissim ullamcorper.",
    "myśliciele": "myśliciel jeden\ndrugi\ntrzeci"
  },
  {
    "ideologia": "Minarchizm",
    "opis": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id turpis dignissim, facilisis nibh congue, elementum ligula. Fusce cursus sapien lectus, quis auctor leo luctus id. Donec euismod mauris non nulla ultricies egestas. Maecenas ac urna pretium, mattis mauris sed, bibendum libero. Sed vel dui maximus, pharetra ligula sed, tristique nulla. Aenean volutpat ut eros a accumsan. Maecenas quis turpis ullamcorper, vestibulum est quis, volutpat justo. Nam nec magna vestibulum lorem gravida faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam dignissim odio in neque tempor, eu tempor justo semper. Duis ac mollis turpis, et semper enim. Aliquam mollis viverra turpis sed maximus. Suspendisse elementum at elit sit amet hendrerit. Suspendisse aliquet velit eget lorem dignissim ullamcorper.",
    "myśliciele": "myśliciel jeden\ndrugi\ntrzeci"
  },
  {
    "ideologia": "Konserwatyzm wolnorynkowy",
    "opis": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id turpis dignissim, facilisis nibh congue, elementum ligula. Fusce cursus sapien lectus, quis auctor leo luctus id. Donec euismod mauris non nulla ultricies egestas. Maecenas ac urna pretium, mattis mauris sed, bibendum libero. Sed vel dui maximus, pharetra ligula sed, tristique nulla. Aenean volutpat ut eros a accumsan. Maecenas quis turpis ullamcorper, vestibulum est quis, volutpat justo. Nam nec magna vestibulum lorem gravida faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam dignissim odio in neque tempor, eu tempor justo semper. Duis ac mollis turpis, et semper enim. Aliquam mollis viverra turpis sed maximus. Suspendisse elementum at elit sit amet hendrerit. Suspendisse aliquet velit eget lorem dignissim ullamcorper.",
    "myśliciele": "myśliciel jeden\ndrugi\ntrzeci"
  },
  {
    "ideologia": "Progresywizm wolnorynkowy",
    "opis": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id turpis dignissim, facilisis nibh congue, elementum ligula. Fusce cursus sapien lectus, quis auctor leo luctus id. Donec euismod mauris non nulla ultricies egestas. Maecenas ac urna pretium, mattis mauris sed, bibendum libero. Sed vel dui maximus, pharetra ligula sed, tristique nulla. Aenean volutpat ut eros a accumsan. Maecenas quis turpis ullamcorper, vestibulum est quis, volutpat justo. Nam nec magna vestibulum lorem gravida faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam dignissim odio in neque tempor, eu tempor justo semper. Duis ac mollis turpis, et semper enim. Aliquam mollis viverra turpis sed maximus. Suspendisse elementum at elit sit amet hendrerit. Suspendisse aliquet velit eget lorem dignissim ullamcorper.",
    "myśliciele": "myśliciel jeden\ndrugi\ntrzeci"
  },
  {
    "ideologia": "Neoliberalizm",
    "opis": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id turpis dignissim, facilisis nibh congue, elementum ligula. Fusce cursus sapien lectus, quis auctor leo luctus id. Donec euismod mauris non nulla ultricies egestas. Maecenas ac urna pretium, mattis mauris sed, bibendum libero. Sed vel dui maximus, pharetra ligula sed, tristique nulla. Aenean volutpat ut eros a accumsan. Maecenas quis turpis ullamcorper, vestibulum est quis, volutpat justo. Nam nec magna vestibulum lorem gravida faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam dignissim odio in neque tempor, eu tempor justo semper. Duis ac mollis turpis, et semper enim. Aliquam mollis viverra turpis sed maximus. Suspendisse elementum at elit sit amet hendrerit. Suspendisse aliquet velit eget lorem dignissim ullamcorper.",
    "myśliciele": "myśliciel jeden\ndrugi\ntrzeci"
  },
  {
    "ideologia": "Klasyczny liberalizm",
    "opis": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id turpis dignissim, facilisis nibh congue, elementum ligula. Fusce cursus sapien lectus, quis auctor leo luctus id. Donec euismod mauris non nulla ultricies egestas. Maecenas ac urna pretium, mattis mauris sed, bibendum libero. Sed vel dui maximus, pharetra ligula sed, tristique nulla. Aenean volutpat ut eros a accumsan. Maecenas quis turpis ullamcorper, vestibulum est quis, volutpat justo. Nam nec magna vestibulum lorem gravida faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam dignissim odio in neque tempor, eu tempor justo semper. Duis ac mollis turpis, et semper enim. Aliquam mollis viverra turpis sed maximus. Suspendisse elementum at elit sit amet hendrerit. Suspendisse aliquet velit eget lorem dignissim ullamcorper.",
    "myśliciele": "myśliciel jeden\ndrugi\ntrzeci"
  },
  {
    "ideologia": "Konserwatyzm klasyczny",
    "opis": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id turpis dignissim, facilisis nibh congue, elementum ligula. Fusce cursus sapien lectus, quis auctor leo luctus id. Donec euismod mauris non nulla ultricies egestas. Maecenas ac urna pretium, mattis mauris sed, bibendum libero. Sed vel dui maximus, pharetra ligula sed, tristique nulla. Aenean volutpat ut eros a accumsan. Maecenas quis turpis ullamcorper, vestibulum est quis, volutpat justo. Nam nec magna vestibulum lorem gravida faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam dignissim odio in neque tempor, eu tempor justo semper. Duis ac mollis turpis, et semper enim. Aliquam mollis viverra turpis sed maximus. Suspendisse elementum at elit sit amet hendrerit. Suspendisse aliquet velit eget lorem dignissim ullamcorper.",
    "myśliciele": "myśliciel jeden\ndrugi\ntrzeci"
  },
  {
    "ideologia": "Chrześcijańska demokracja",
    "opis": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id turpis dignissim, facilisis nibh congue, elementum ligula. Fusce cursus sapien lectus, quis auctor leo luctus id. Donec euismod mauris non nulla ultricies egestas. Maecenas ac urna pretium, mattis mauris sed, bibendum libero. Sed vel dui maximus, pharetra ligula sed, tristique nulla. Aenean volutpat ut eros a accumsan. Maecenas quis turpis ullamcorper, vestibulum est quis, volutpat justo. Nam nec magna vestibulum lorem gravida faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam dignissim odio in neque tempor, eu tempor justo semper. Duis ac mollis turpis, et semper enim. Aliquam mollis viverra turpis sed maximus. Suspendisse elementum at elit sit amet hendrerit. Suspendisse aliquet velit eget lorem dignissim ullamcorper.",
    "myśliciele": "myśliciel jeden\ndrugi\ntrzeci"
  },
  {
    "ideologia": "Konserwatyzm ewolucyjny",
    "opis": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id turpis dignissim, facilisis nibh congue, elementum ligula. Fusce cursus sapien lectus, quis auctor leo luctus id. Donec euismod mauris non nulla ultricies egestas. Maecenas ac urna pretium, mattis mauris sed, bibendum libero. Sed vel dui maximus, pharetra ligula sed, tristique nulla. Aenean volutpat ut eros a accumsan. Maecenas quis turpis ullamcorper, vestibulum est quis, volutpat justo. Nam nec magna vestibulum lorem gravida faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam dignissim odio in neque tempor, eu tempor justo semper. Duis ac mollis turpis, et semper enim. Aliquam mollis viverra turpis sed maximus. Suspendisse elementum at elit sit amet hendrerit. Suspendisse aliquet velit eget lorem dignissim ullamcorper.",
    "myśliciele": "myśliciel jeden\ndrugi\ntrzeci"
  },
  {
    "ideologia": "Socjaldemokracja",
    "opis": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id turpis dignissim, facilisis nibh congue, elementum ligula. Fusce cursus sapien lectus, quis auctor leo luctus id. Donec euismod mauris non nulla ultricies egestas. Maecenas ac urna pretium, mattis mauris sed, bibendum libero. Sed vel dui maximus, pharetra ligula sed, tristique nulla. Aenean volutpat ut eros a accumsan. Maecenas quis turpis ullamcorper, vestibulum est quis, volutpat justo. Nam nec magna vestibulum lorem gravida faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam dignissim odio in neque tempor, eu tempor justo semper. Duis ac mollis turpis, et semper enim. Aliquam mollis viverra turpis sed maximus. Suspendisse elementum at elit sit amet hendrerit. Suspendisse aliquet velit eget lorem dignissim ullamcorper.",
    "myśliciele": "myśliciel jeden\ndrugi\ntrzeci"
  },
  {
    "ideologia": "Socjalliberalizm",
    "opis": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id turpis dignissim, facilisis nibh congue, elementum ligula. Fusce cursus sapien lectus, quis auctor leo luctus id. Donec euismod mauris non nulla ultricies egestas. Maecenas ac urna pretium, mattis mauris sed, bibendum libero. Sed vel dui maximus, pharetra ligula sed, tristique nulla. Aenean volutpat ut eros a accumsan. Maecenas quis turpis ullamcorper, vestibulum est quis, volutpat justo. Nam nec magna vestibulum lorem gravida faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam dignissim odio in neque tempor, eu tempor justo semper. Duis ac mollis turpis, et semper enim. Aliquam mollis viverra turpis sed maximus. Suspendisse elementum at elit sit amet hendrerit. Suspendisse aliquet velit eget lorem dignissim ullamcorper.",
    "myśliciele": "myśliciel jeden\ndrugi\ntrzeci"
  },
  {
    "ideologia": "Progresywizm",
    "opis": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id turpis dignissim, facilisis nibh congue, elementum ligula. Fusce cursus sapien lectus, quis auctor leo luctus id. Donec euismod mauris non nulla ultricies egestas. Maecenas ac urna pretium, mattis mauris sed, bibendum libero. Sed vel dui maximus, pharetra ligula sed, tristique nulla. Aenean volutpat ut eros a accumsan. Maecenas quis turpis ullamcorper, vestibulum est quis, volutpat justo. Nam nec magna vestibulum lorem gravida faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam dignissim odio in neque tempor, eu tempor justo semper. Duis ac mollis turpis, et semper enim. Aliquam mollis viverra turpis sed maximus. Suspendisse elementum at elit sit amet hendrerit. Suspendisse aliquet velit eget lorem dignissim ullamcorper.",
    "myśliciele": "myśliciel jeden\ndrugi\ntrzeci"
  },
  {
    "ideologia": "Socjalizm",
    "opis": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id turpis dignissim, facilisis nibh congue, elementum ligula. Fusce cursus sapien lectus, quis auctor leo luctus id. Donec euismod mauris non nulla ultricies egestas. Maecenas ac urna pretium, mattis mauris sed, bibendum libero. Sed vel dui maximus, pharetra ligula sed, tristique nulla. Aenean volutpat ut eros a accumsan. Maecenas quis turpis ullamcorper, vestibulum est quis, volutpat justo. Nam nec magna vestibulum lorem gravida faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam dignissim odio in neque tempor, eu tempor justo semper. Duis ac mollis turpis, et semper enim. Aliquam mollis viverra turpis sed maximus. Suspendisse elementum at elit sit amet hendrerit. Suspendisse aliquet velit eget lorem dignissim ullamcorper.",
    "myśliciele": "myśliciel jeden\ndrugi\ntrzeci"
  },
  {
    "ideologia": "Marksizm",
    "opis": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id turpis dignissim, facilisis nibh congue, elementum ligula. Fusce cursus sapien lectus, quis auctor leo luctus id. Donec euismod mauris non nulla ultricies egestas. Maecenas ac urna pretium, mattis mauris sed, bibendum libero. Sed vel dui maximus, pharetra ligula sed, tristique nulla. Aenean volutpat ut eros a accumsan. Maecenas quis turpis ullamcorper, vestibulum est quis, volutpat justo. Nam nec magna vestibulum lorem gravida faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam dignissim odio in neque tempor, eu tempor justo semper. Duis ac mollis turpis, et semper enim. Aliquam mollis viverra turpis sed maximus. Suspendisse elementum at elit sit amet hendrerit. Suspendisse aliquet velit eget lorem dignissim ullamcorper.",
    "myśliciele": "myśliciel jeden\ndrugi\ntrzeci"
  },
  {
    "ideologia": "Monarchia konstytucyjna",
    "opis": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id turpis dignissim, facilisis nibh congue, elementum ligula. Fusce cursus sapien lectus, quis auctor leo luctus id. Donec euismod mauris non nulla ultricies egestas. Maecenas ac urna pretium, mattis mauris sed, bibendum libero. Sed vel dui maximus, pharetra ligula sed, tristique nulla. Aenean volutpat ut eros a accumsan. Maecenas quis turpis ullamcorper, vestibulum est quis, volutpat justo. Nam nec magna vestibulum lorem gravida faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam dignissim odio in neque tempor, eu tempor justo semper. Duis ac mollis turpis, et semper enim. Aliquam mollis viverra turpis sed maximus. Suspendisse elementum at elit sit amet hendrerit. Suspendisse aliquet velit eget lorem dignissim ullamcorper.",
    "myśliciele": "myśliciel jeden\ndrugi\ntrzeci"
  },
  {
    "ideologia": "Monarchia absolutna",
    "opis": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id turpis dignissim, facilisis nibh congue, elementum ligula. Fusce cursus sapien lectus, quis auctor leo luctus id. Donec euismod mauris non nulla ultricies egestas. Maecenas ac urna pretium, mattis mauris sed, bibendum libero. Sed vel dui maximus, pharetra ligula sed, tristique nulla. Aenean volutpat ut eros a accumsan. Maecenas quis turpis ullamcorper, vestibulum est quis, volutpat justo. Nam nec magna vestibulum lorem gravida faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam dignissim odio in neque tempor, eu tempor justo semper. Duis ac mollis turpis, et semper enim. Aliquam mollis viverra turpis sed maximus. Suspendisse elementum at elit sit amet hendrerit. Suspendisse aliquet velit eget lorem dignissim ullamcorper.",
    "myśliciele": "myśliciel jeden\ndrugi\ntrzeci"
  },
  {
    "ideologia": "Nazizm",
    "opis": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id turpis dignissim, facilisis nibh congue, elementum ligula. Fusce cursus sapien lectus, quis auctor leo luctus id. Donec euismod mauris non nulla ultricies egestas. Maecenas ac urna pretium, mattis mauris sed, bibendum libero. Sed vel dui maximus, pharetra ligula sed, tristique nulla. Aenean volutpat ut eros a accumsan. Maecenas quis turpis ullamcorper, vestibulum est quis, volutpat justo. Nam nec magna vestibulum lorem gravida faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam dignissim odio in neque tempor, eu tempor justo semper. Duis ac mollis turpis, et semper enim. Aliquam mollis viverra turpis sed maximus. Suspendisse elementum at elit sit amet hendrerit. Suspendisse aliquet velit eget lorem dignissim ullamcorper.",
    "myśliciele": "myśliciel jeden\ndrugi\ntrzeci"
  },
  {
    "ideologia": "Faszyzm",
    "opis": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id turpis dignissim, facilisis nibh congue, elementum ligula. Fusce cursus sapien lectus, quis auctor leo luctus id. Donec euismod mauris non nulla ultricies egestas. Maecenas ac urna pretium, mattis mauris sed, bibendum libero. Sed vel dui maximus, pharetra ligula sed, tristique nulla. Aenean volutpat ut eros a accumsan. Maecenas quis turpis ullamcorper, vestibulum est quis, volutpat justo. Nam nec magna vestibulum lorem gravida faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam dignissim odio in neque tempor, eu tempor justo semper. Duis ac mollis turpis, et semper enim. Aliquam mollis viverra turpis sed maximus. Suspendisse elementum at elit sit amet hendrerit. Suspendisse aliquet velit eget lorem dignissim ullamcorper.",
    "myśliciele": "myśliciel jeden\ndrugi\ntrzeci"
  },
  {
    "ideologia": "Komunizm dyktatorski",
    "opis": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id turpis dignissim, facilisis nibh congue, elementum ligula. Fusce cursus sapien lectus, quis auctor leo luctus id. Donec euismod mauris non nulla ultricies egestas. Maecenas ac urna pretium, mattis mauris sed, bibendum libero. Sed vel dui maximus, pharetra ligula sed, tristique nulla. Aenean volutpat ut eros a accumsan. Maecenas quis turpis ullamcorper, vestibulum est quis, volutpat justo. Nam nec magna vestibulum lorem gravida faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam dignissim odio in neque tempor, eu tempor justo semper. Duis ac mollis turpis, et semper enim. Aliquam mollis viverra turpis sed maximus. Suspendisse elementum at elit sit amet hendrerit. Suspendisse aliquet velit eget lorem dignissim ullamcorper.",
    "myśliciele": "myśliciel jeden\ndrugi\ntrzeci"
  },
  {
    "ideologia": "Autorytaryzm wolnorynkowy",
    "opis": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id turpis dignissim, facilisis nibh congue, elementum ligula. Fusce cursus sapien lectus, quis auctor leo luctus id. Donec euismod mauris non nulla ultricies egestas. Maecenas ac urna pretium, mattis mauris sed, bibendum libero. Sed vel dui maximus, pharetra ligula sed, tristique nulla. Aenean volutpat ut eros a accumsan. Maecenas quis turpis ullamcorper, vestibulum est quis, volutpat justo. Nam nec magna vestibulum lorem gravida faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam dignissim odio in neque tempor, eu tempor justo semper. Duis ac mollis turpis, et semper enim. Aliquam mollis viverra turpis sed maximus. Suspendisse elementum at elit sit amet hendrerit. Suspendisse aliquet velit eget lorem dignissim ullamcorper.",
    "myśliciele": "myśliciel jeden\ndrugi\ntrzeci"
  },
  {
    "ideologia": "Dyktatura wolnorynkowa",
    "opis": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id turpis dignissim, facilisis nibh congue, elementum ligula. Fusce cursus sapien lectus, quis auctor leo luctus id. Donec euismod mauris non nulla ultricies egestas. Maecenas ac urna pretium, mattis mauris sed, bibendum libero. Sed vel dui maximus, pharetra ligula sed, tristique nulla. Aenean volutpat ut eros a accumsan. Maecenas quis turpis ullamcorper, vestibulum est quis, volutpat justo. Nam nec magna vestibulum lorem gravida faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam dignissim odio in neque tempor, eu tempor justo semper. Duis ac mollis turpis, et semper enim. Aliquam mollis viverra turpis sed maximus. Suspendisse elementum at elit sit amet hendrerit. Suspendisse aliquet velit eget lorem dignissim ullamcorper.",
    "myśliciele": "myśliciel jeden\ndrugi\ntrzeci"
  },
  {
    "ideologia": "Autorytaryzm",
    "opis": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id turpis dignissim, facilisis nibh congue, elementum ligula. Fusce cursus sapien lectus, quis auctor leo luctus id. Donec euismod mauris non nulla ultricies egestas. Maecenas ac urna pretium, mattis mauris sed, bibendum libero. Sed vel dui maximus, pharetra ligula sed, tristique nulla. Aenean volutpat ut eros a accumsan. Maecenas quis turpis ullamcorper, vestibulum est quis, volutpat justo. Nam nec magna vestibulum lorem gravida faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam dignissim odio in neque tempor, eu tempor justo semper. Duis ac mollis turpis, et semper enim. Aliquam mollis viverra turpis sed maximus. Suspendisse elementum at elit sit amet hendrerit. Suspendisse aliquet velit eget lorem dignissim ullamcorper.",
    "myśliciele": "myśliciel jeden\ndrugi\ntrzeci"
  },
  {
    "ideologia": "Totalitaryzm",
    "opis": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id turpis dignissim, facilisis nibh congue, elementum ligula. Fusce cursus sapien lectus, quis auctor leo luctus id. Donec euismod mauris non nulla ultricies egestas. Maecenas ac urna pretium, mattis mauris sed, bibendum libero. Sed vel dui maximus, pharetra ligula sed, tristique nulla. Aenean volutpat ut eros a accumsan. Maecenas quis turpis ullamcorper, vestibulum est quis, volutpat justo. Nam nec magna vestibulum lorem gravida faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam dignissim odio in neque tempor, eu tempor justo semper. Duis ac mollis turpis, et semper enim. Aliquam mollis viverra turpis sed maximus. Suspendisse elementum at elit sit amet hendrerit. Suspendisse aliquet velit eget lorem dignissim ullamcorper.",
    "myśliciele": "myśliciel jeden\ndrugi\ntrzeci"
  },
];
