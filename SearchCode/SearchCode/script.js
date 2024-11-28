document.getElementById("searchBtn").addEventListener("click", function () {
  const searchValue = document.getElementById("search").value.trim().toLowerCase();
  
  const sections = {
    python: "python",
    javascript: "javascript",
    html: "html",
    css: "css",
    java: "java",
    kotlin: "kotlin",
    c: "c",
    cpp: "cpp",
    csharp: "csharp",
    ruby: "ruby",
    php: "php",
    swift: "swift",
    rust: "rust",
    go: "go",
    r: "r",
    typescript: "typescript",
    scala: "scala",
    perl: "perl",
    dart: "dart",
    matlab: "matlab",
    assembly: "assembly",
    haskell: "haskell",
    "objective-c": "objective-c",
    "shell script": "shell-script",
    "visual basic": "visual-basic",
    lua: "lua",
    elixir: "elixir",
    fortran: "fortran",
    bash: "bash",
    sql: "sql",
    cobol: "cobol",
    pascal: "pascal",
    ada: "ada",
    prolog: "prolog",
    lisp: "lisp",
    groovy: "groovy",
    vhdl: "vhdl",
    clojure: "clojure",
    scratch: "scratch",
    nim: "nim",
    fsharp: "fsharp",
    ocaml: "ocaml",
    erlang: "erlang",
    awk: "awk",
    apl: "apl",
    julia: "julia",
    crystal: "crystal",
    abap: "abap",
    smalltalk: "smalltalk",
    "kotlin-native": "kotlin-native",
    purescript: "purescript",
    qsharp: "qsharp",
    vala: "vala",
    factor: "factor",
    coffeescript: "coffeescript"
  };

  const normalizedSearchValue = searchValue.toLowerCase();
  
  // Remover a classe de destaque de todas as seções
  const allCards = document.querySelectorAll(".card");
  allCards.forEach(card => card.classList.remove("highlight"));
  
  if (sections[normalizedSearchValue]) {
      // Adicionar a classe de destaque à seção encontrada
      const section = document.getElementById(sections[normalizedSearchValue]);
      section.classList.add("highlight");
      section.scrollIntoView({ behavior: "smooth" });

      // Remover o destaque após 2 segundos
      setTimeout(function () {
          section.classList.remove("highlight");
      }, 2000); // Tempo em milissegundos (2000ms = 2 segundos)
  } else {
      alert("Linguagem não encontrada. Por favor, verifique a ortografia ou entre em contato.");
  }
});