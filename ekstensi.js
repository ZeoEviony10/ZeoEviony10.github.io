/* Hide scrollbar for Chrome, Safari and Opera */
.scrollbar-hidden::-webkit-scrollbar {
    display: none;
  }
  
  /* Hide scrollbar for IE, Edge add Firefox */
  .scrollbar-hidden {
    -ms-overflow-style: none;
    scrollbar-width: none; /* Firefox */
  }
  ::-webkit-scrollbar {
    display: none;
  }
  $(window).click(function(e) {

    if($(".navbar-collapse").hasClass("show")){
       $('.navbar-collapse').removeClass("show"); 
       e.preventDefault();
       }
});
 
$('.navbar-collapse').click(function(event){
      event.stopPropagation();
});

// use 'navbar-collapse' on your navbar
/* Hide scrollbar for Chrome, Safari and Opera */
.scrollbar-hidden::-webkit-scrollbar {
    display: none;
  }
  
  /* Hide scrollbar for IE, Edge add Firefox */
  .scrollbar-hidden {
    -ms-overflow-style: none;
    scrollbar-width: none; /* Firefox */
  }
  /* Hide scrollbar for Chrome, Safari and Opera */
.example::-webkit-scrollbar {
    display: none;
  }
  
  /* Hide scrollbar for IE and Edge */
  .example {
    -ms-overflow-style: none;
  }
  .class {
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
}
.class::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
}
html {
    overflow: scroll;
    overflow-x: hidden;
    }
    ::-webkit-scrollbar {
    width: 0px; /* remove scrollbar space /
    background: transparent; / optional: just make scrollbar invisible /
    }
    / optional: show position indicator in red */
    ::-webkit-scrollbar-thumb {
    background: #FF0000;
    }
    // Sass Mixing
@mixin hideScrollbar {
    &::-webkit-scrollbar {
      width: 0 !important
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }